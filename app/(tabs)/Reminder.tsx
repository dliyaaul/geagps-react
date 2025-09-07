import { FlashList } from '@shopify/flash-list';
import React, { useCallback, useRef, useState } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInUp, FadeOutUp, LinearTransition } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import RandyIcon from '../CustomLibrary/CustomIcon';

type Item = { id: string; title: string };

export default function Reminder() {
  const insets = useSafeAreaInsets();

  const listRef = useRef<FlashList<Item>>(null);
  const [data, setData] = useState<Item[]>(
    Array.from({ length: 20 }, (_, i) => ({
      id: `row-${i + 1}`,
      title: `Item #${i + 1}`,
    }))
  );

  const removeItem = useCallback((id: string) => {
    // Wajib dipanggil sebelum insert/remove agar animasi layout Reanimated berjalan mulus di FlashList
    listRef.current?.prepareForLayoutAnimationRender();
    setData(prev => prev.filter(it => it.id !== id));
  }, []);

  const renderItem = ({ item }: { item: Item }) => (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutUp}
      layout={LinearTransition.springify().damping(16)}
      style={styles.row}
    >
      <Pressable onLongPress={() => removeItem(item.id)} style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.hint}>Long press to remove</Text>
      </Pressable>
    </Animated.View>
  );

  return (
    <View className="flex-1" style={{ backgroundColor: '#ffffffff' }}>
      <View style={[styles.headerStyle, { height: moderateScale(100), paddingTop: Math.max(insets.top, moderateScale(16)) }]}>
        <Text className='font-poppins-semibold' style={styles.headerText}>Pengingat</Text>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={{ alignItems: 'center', paddingBottom: moderateScale(12) }}>
            <RandyIcon
              name="ProfileInCircle"
              color="#4A4B4D"
              size={moderateScale(32)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        {/* Menampilkan FlashList utama */}
        <FlashList
          ref={listRef}
          data={data}
          keyExtractor={it => it.id}
          renderItem={renderItem}
          estimatedItemSize={64}
        />
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  sectionWrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ffffff",
    backgroundColor: "#ffffff",
    marginBottom: '45@ms',
  },
  headerStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: "20@ms",
    paddingHorizontal: '20@ms',
  },
  headerText: {
    fontSize: "20@ms",
    fontFamily: 'Poppins-SemiBold',
    color: '#4A4B4D',
    textAlign: 'center',
  },
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  row: { paddingHorizontal: 12, paddingVertical: 6 },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  title: { fontSize: 16, fontWeight: '700', color: '#0f172a' },
  hint: { fontSize: 12, color: '#64748b', marginTop: 6 },
});