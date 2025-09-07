import { FlashList } from "@shopify/flash-list";
import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Animated, { FadeInLeft } from "react-native-reanimated";
import { ScaledSheet } from 'react-native-size-matters';

type CustomFlatListProps<T> = {
  data: T[];
  renderItem: (item: T, isSelected: boolean, index: number) => React.ReactNode;  // Menambahkan index dan isSelected
  Touchable?: boolean;
  dynamicTouchable?: boolean;
  onPressMore?: (index: number) => void;
  selectedIndex?: number;
  onSelectItem?: (index: number) => void;
  listStyle?: object;
  listViewStyle?: object;
  extraData?: any;
};

function CustomFlashList<T>({
  data,
  renderItem,
  Touchable = false,
  dynamicTouchable = false,
  onPressMore,
  selectedIndex,
  onSelectItem,
  listStyle = {},
  listViewStyle = {},
  extraData,
}: CustomFlatListProps<T>) {
  return (
    <View style={{ ...listStyle }}>
      <FlashList
        data={data}
        renderItem={({ item, index }) => (
          <Animated.View entering={FadeInLeft} style={{ ...listViewStyle }}>
            {Touchable ? (
              <TouchableOpacity onPress={() => {
                onSelectItem && onSelectItem(index + 1);
                onPressMore && onPressMore(index + 1);
              }}>
                {renderItem(item, selectedIndex === index + 1, index + 1)}
              </TouchableOpacity>
            ) : dynamicTouchable ? (
              selectedIndex !== index + 1 ? (
                <TouchableOpacity onPress={() => {
                  onSelectItem && onSelectItem(index + 1);
                  onPressMore && onPressMore(index + 1);
                }}>
                  {renderItem(item, selectedIndex === index + 1, index + 1)}
                </TouchableOpacity>
              ) : (
                <View>
                  {renderItem(item, selectedIndex === index + 1, index + 1)}
                </View>
              )
            ) : (
              <TouchableWithoutFeedback>{renderItem(item, selectedIndex === index + 1, index + 1)}</TouchableWithoutFeedback>
            )}
          </Animated.View>
        )}
        keyExtractor={(item, index) => (index + 1).toString()}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={80}
        extraData={extraData}  // Menambahkan data.length sebagai extraData
      />
    </View>
  );
}

const styles = ScaledSheet.create({
  itemInfo: {
    marginHorizontal: 8,
    marginBottom: '12@ms',
    borderRadius: 6,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
});

export default CustomFlashList;
