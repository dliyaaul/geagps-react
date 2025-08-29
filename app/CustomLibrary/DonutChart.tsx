import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  Easing,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";

import { sum } from "react-native-circular-chart/src/packages/array";
import { LinearInterpolation } from "react-native-circular-chart/src/packages/math";
import { Square } from "react-native-circular-chart/src/packages/shape";
import { Arc, ArcParams, ViewBox } from "react-native-circular-chart/src/packages/svg";
import { moderateScale, ScaledSheet } from "react-native-size-matters";
import { Path, Svg } from "react-native-svg";

export type DonutItem = {
  name: string;
  value: number;
  color: string;
};

export type DonutAnimationType = "fade" | "slide";

export type IDonutProps = {
  data: DonutItem[];
  containerWidth: number;
  containerHeight: number;
  radius: number;
  startAngle?: number;
  endAngle?: number;
  strokeWidth?: number;
  type?: "butt" | "round";
  labelValueStyle?: StyleProp<TextStyle>;
  labelTitleStyle?: StyleProp<TextStyle>;
  labelWrapperStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;

  animationType?: DonutAnimationType;
};

const AnimatedPath = Animated.createAnimatedComponent(Path);

export const DonutChart = ({
  data,
  containerWidth,
  containerHeight,
  radius,
  startAngle = -125,
  endAngle = startAngle * -1,
  strokeWidth = 10,
  type = "round",
  animationType = "slide",

  labelWrapperStyle,
  labelValueStyle,
  labelTitleStyle,
  containerStyle,
}: IDonutProps) => {
  let donutItemListeners: any = [];
  const viewBox = new ViewBox({
    width: containerWidth,
    height: containerHeight,
  });
  const squareInCircle = new Square({ diameter: radius * 2 });

  const animateOpacity = useRef(new Animated.Value(0)).current;
  const animateContainerOpacity = useRef(new Animated.Value(0)).current;
  const animatedStrokeWidths = useRef(
    data.map(() => new Animated.Value(strokeWidth))
  ).current;
  const pathRefs = useRef<typeof AnimatedPath[]>([]);
  const animatedPaths = useRef<Array<Animated.Value>>([]).current;

  const [displayValue, setDisplayValue] = useState<DonutItem>(data[0]);

  // TODO:
  // remove WTF is this variable ?
  const [rotationPaths, setRotationPath] = useState<
    Array<{ from: number; to: number }>
  >([]);

  const defaultInterpolateConfig = (): {
    inputRange: [number, number];
    outputRange: [number, number];
  } => ({ inputRange: [0, 100], outputRange: [startAngle, endAngle] });

  const sumOfDonutItemValue = useMemo(
    (): number =>
      data
        .map((d) => d.value)
        .reduce((total: number, prev: number) => total + prev),
    [data]
  );

  const donutItemValueToPercentage = useMemo(
    () => data.map((d) => (d.value / sumOfDonutItemValue) * 100),
    [sumOfDonutItemValue, data]
  );

  useMemo(() => {
    const rotationRange: Array<{ from: number; to: number }> = [];

    data.forEach((_, idx) => {
      const fromValues = sum(donutItemValueToPercentage.slice(0, idx));
      const toValues = sum(donutItemValueToPercentage.slice(0, idx + 1));

      animatedPaths.push(
        new Animated.Value(
          LinearInterpolation({
            value: fromValues,
            ...defaultInterpolateConfig(),
          })
        )
      );

      rotationRange[idx] = {
        from: LinearInterpolation({
          value: fromValues,
          ...defaultInterpolateConfig(),
        }),
        to: LinearInterpolation({
          value: toValues,
          ...defaultInterpolateConfig(),
        }),
      };
    });

    setRotationPath(rotationRange);
  }, [data]);

  useEffect(() => {
    switch (animationType) {
      case "slide":
        animateContainerOpacity.setValue(1);
        slideAnimation();
        break;

      default:
        fadeAnimation();
        break;
    }
  }, []);

  const slideAnimation = () => {
    const animations: Animated.CompositeAnimation[] = data.map((_, i) => {
      const ani = Animated.timing(animatedPaths[i], {
        toValue: rotationPaths[i].to,
        duration: 1500,
        easing: Easing.bezier(0.075, 0.82, 0.165, 1),
        useNativeDriver: true,
      });

      return ani;
    });
    Animated.parallel(animations).start();
  };

  const fadeAnimation = () => {
    Animated.timing(animateContainerOpacity, {
      toValue: 1,
      duration: 5000,
      easing: Easing.bezier(0.075, 0.82, 0.165, 1),
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    data.forEach((_, i) => {
      const element = pathRefs.current[i];
      donutItemListeners[i] = addListener({
        element,
        animatedValue: animatedPaths[i],
        startValue: rotationPaths[i].from,
      });
    });
  }, []);

  useEffect(() => {
    return () => {
      if (animationType === "slide") {
        data.forEach((_, i) => {
          if (
            donutItemListeners?.[i] &&
            donutItemListeners?.[i].removeAllListeners
          ) {
            donutItemListeners?.[i].removeAllListeners?.();
          }
        });
      }
    };
  }, []);

  const addListener = ({
    element,
    animatedValue,
    startValue,
  }: {
    element: any;
    animatedValue: Animated.Value;
    startValue: number;
  }) => {
    animatedValue.addListener((angle) => {
      const arcParams: ArcParams = {
        coordX: viewBox.getCenterCoord().x,
        coordY: viewBox.getCenterCoord().y,
        radius: radius,
        startAngle: startValue,
        endAngle: angle.value,
      };
      const drawPath = new Arc(arcParams).getDrawPath();

      if (element) {
        element.setNativeProps({ d: drawPath });
      }
    });
  };

  useEffect(() => {
    animateOpacity.setValue(1);
    Animated.timing(animateOpacity, {
      toValue: 1,
      duration: 500,
      easing: Easing.bezier(0.075, 0.82, 0.165, 1),
      useNativeDriver: true,
    }).start();
  }, []);

    useEffect(() => {
  setDisplayValue(data[0]);
}, [data]);

  const onUpdateDisplayValue = (value: DonutItem, index: number) => {
    setDisplayValue(value);
    animateOpacity.setValue(0);

    Animated.parallel([
      Animated.timing(animateOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const onPressIn = (value: DonutItem, index: number) => {
    Animated.timing(animatedStrokeWidths[index], {
      toValue: strokeWidth + 2,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.bezier(0.075, 0.82, 0.165, 1),
    }).start();
  };

  const onPressOut = (index: number) => {
    Animated.timing(animatedStrokeWidths[index], {
      toValue: strokeWidth,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.bezier(0.075, 0.82, 0.165, 1),
    }).start();
  };

  const _getContainerStyle = (): StyleProp<ViewStyle> => [
    styles.defaultContainer,
    containerStyle,
    { width: containerWidth, height: containerHeight },
  ];

  const _getLabelValueStyle = (color: string): StyleProp<TextStyle> => [
    styles.defaultLabelValue,
    { color },
    labelValueStyle,
  ];

  const _getLabelTitleStyle = (color: string): StyleProp<TextStyle> => [
    styles.defaultLabelTitle,
    { color },
    labelTitleStyle,
  ];

  const _getLabelWrapperStyle = (): Animated.WithAnimatedArray<any> => [
    styles.defaultLabelWrapper,
    {
      width: squareInCircle.getCorner() - strokeWidth,
      height: squareInCircle.getCorner() - strokeWidth,
      opacity: animateOpacity,
    },
    labelWrapperStyle,
  ];

  return (
    <Fragment>
      <View style={_getContainerStyle()}>
        <Svg width={viewBox.width} height={viewBox.height}>
          {rotationPaths.map((d, i) => {
            const arcParams: ArcParams = {
              coordX: viewBox.getCenterCoord().x,
              coordY: viewBox.getCenterCoord().y,
              radius: radius,
              startAngle: d.from,
              endAngle: d.to,
            };
            const drawPath = new Arc(arcParams).getDrawPath();

            return (
              <AnimatedPath
                key={`item-${i}`}
                ref={(el: any) => (pathRefs.current[i] = el)}
                onPress={() => onUpdateDisplayValue(data[i], i)}
                onPressIn={() => onPressIn(data[i], i)}
                onPressOut={() => onPressOut(i)}
                strokeLinecap={type}
                d={drawPath}
                opacity={animateContainerOpacity}
                fill="none"
                stroke={data[i].color}
                strokeWidth={animatedStrokeWidths[i]}
              />
            );
          })}
        </Svg>
        <Animated.View style={_getLabelWrapperStyle()}>
          <Text style={_getLabelValueStyle(displayValue?.color)}>
            <Text style={{ fontSize: moderateScale(26), color: displayValue?.color, fontFamily: "Poppins-Bold" }}>
              {((displayValue?.value / sumOfDonutItemValue) * 100).toFixed(1)} %
            </Text>
          </Text>
          <Text style={_getLabelTitleStyle(displayValue?.color)}>
            {displayValue?.name}
          </Text>
        </Animated.View>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginTop: 10 }}>
        {data.map((item, index) => (
          <View key={index} style={[styles.itemInfo, { borderLeftColor: item.color }]}>
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => onUpdateDisplayValue(item, index)}>
              <View style={[styles.colorIndicator, { backgroundColor: item.color }]} />
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemValue}>{item.value} </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </Fragment>
  );
};

const styles = ScaledSheet.create({
  defaultContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  defaultLabelWrapper: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },

  defaultLabelValue: {
    fontSize: 32,
    top: '10@ms',
    fontFamily: "Poppins-Bold",
  },

  defaultLabelTitle: {
    fontSize: 16,
    top: '8@ms',
    fontFamily: "Poppins-Regular",
  },
  colorIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  itemName: {
    paddingTop: 3,
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#333",
    marginRight: 6,
  },
  itemValue: {
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "Poppins-Bold",
    color: "#666",
  },
  itemInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 8,
    marginVertical: 4,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderLeftWidth: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default DonutChart;
