import React from 'react';
import { FlatList, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
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
};

function CustomFlatList<T>({
  data,
  renderItem,
  Touchable = false,
  dynamicTouchable = false,
  onPressMore,
  selectedIndex,
  onSelectItem,
  listStyle = {},
  listViewStyle = {},
}: CustomFlatListProps<T>) {
  return (
    <FlatList
      style={{ ...listStyle }}
      data={data}
      renderItem={({ item, index }) => (
        <View style={{...listViewStyle }}>
          {Touchable ? (
            <TouchableOpacity onPress={() => {
              onSelectItem && onSelectItem(index);
              onPressMore && onPressMore(index);
            }}>
              {renderItem(item, selectedIndex === index, index)}
            </TouchableOpacity>
          ) : dynamicTouchable ? (
            selectedIndex !== index ? (
              <TouchableOpacity onPress={() => {
                onSelectItem && onSelectItem(index);
                onPressMore && onPressMore(index);
              }}>
                {renderItem(item, selectedIndex === index, index)}
              </TouchableOpacity>
            ) : (
              <View>
                {renderItem(item, selectedIndex === index, index)}
              </View>
            )
          ) : (
            <TouchableWithoutFeedback>{renderItem(item, selectedIndex === index, index)}</TouchableWithoutFeedback>
          )}
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={5}
      showsVerticalScrollIndicator={false} 
    />
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

export default CustomFlatList;
