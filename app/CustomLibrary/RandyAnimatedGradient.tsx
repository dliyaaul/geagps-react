import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";

interface GradientHelperProps {
  style?: object;
  color1: string;
  color2: string;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

export class GradientHelper extends Component<GradientHelperProps> {
  render() {
    const {
      style,
      color1,
      color2,
      start = { x: 0, y: 0 },
      end = { x: 0, y: 1 }
    } = this.props;
    return (
      <LinearGradient
        colors={[color1, color2]}
        start={start}
        end={end}
        style={style}
      />
    );
  }
}

export default function AnimatedGradient(props: any) {
  return <GradientHelper {...props} />;
}