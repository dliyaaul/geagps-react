
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type DonutLegendProps = {
  data: { name: string; value: number; color: string }[];
  onUpdateDisplayValue: (item: { name: string; value: number; color: string }, index: number) => void;
  Choosen: number;
  setChoosen: (index: number) => void;
  DeactivatedFilter: boolean;
};

function darkenHexColor(hex: string, factor: number = 0.8, alpha: number = 0.95) {
  hex = hex.replace('#', '');
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  r = Math.floor(r * factor);
  g = Math.floor(g * factor);
  b = Math.floor(b * factor);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const RandyStateData = ({ data, onUpdateDisplayValue, Choosen, setChoosen, DeactivatedFilter = true }: DonutLegendProps) => {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
      {data.map((item, index) => (
        <View
          key={index}
          style={[styles.itemInfo,
          { borderLeftColor: index === Choosen ? darkenHexColor(item.color, 0.8, 0.93) : item.color },
          index === Choosen && styles.ChoosenItemInfo,
          { backgroundColor: DeactivatedFilter ? (index === Choosen ? item.color : "rgba(255, 255, 255, 0.95)") : (index === Choosen ? item.color : "rgba(255, 255, 255, 0.5)") }]}
        >
          {DeactivatedFilter ? (
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => { setChoosen(index); onUpdateDisplayValue(item, index); }}>
              <View style={[index === Choosen ? styles.ChoosenItemColor : styles.colorIndicator, { backgroundColor: index === Choosen ? darkenHexColor(item.color, 0.8, 0.93) : item.color }]} />
              <Text style={[index === Choosen ? styles.ChoosenItemName : styles.itemName]}>{item.name}</Text>
              <Text style={[index === Choosen ? styles.ChoosenItemValue : styles.itemValue]}>({item.value})</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={[index === Choosen ? styles.ChoosenItemColor : styles.colorIndicator, { backgroundColor: index === Choosen ? darkenHexColor(item.color, 0.8, 0.93) : item.color }]} />
              <Text style={[index === Choosen ? styles.ChoosenItemName : styles.itemName]}>{item.name}</Text>
              <Text style={[index === Choosen ? styles.ChoosenItemValue : styles.itemValue]}>({item.value})</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
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
  ChoosenItemInfo: {
    borderLeftWidth: 4,
    elevation: 4,
    shadowOpacity: 0.2,
  },
  ChoosenItemColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  ChoosenItemName: {
    paddingTop: 3,
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#ffffffff",
    marginRight: 6,
  },
  ChoosenItemValue: {
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "Poppins-Bold",
    color: "#ffffffff",
  },
});

export default RandyStateData;
