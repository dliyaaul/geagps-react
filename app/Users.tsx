import { useRouter } from 'expo-router';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { BackHandler, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { DataGPS, ItemTypeGPSData } from '../data/GPSData';
import { darkenHexColor } from './CustomLibrary/ColorDarker';
import RandyIcon from './CustomLibrary/CustomIcon';
import CustomFlatList from './CustomLibrary/CustomList';
const router = useRouter();

export default function Users() {

  {/********** HOOKS **********/ }
  const insets = useSafeAreaInsets();
  const [searchActive, setSearchActive] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [dataGPSState, setDataGPSState] = useState<ItemTypeGPSData[]>(DataGPS);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (!searchActive) return;
    const onBackPress = () => {
      setSearchActive(false);
      setSearchText('');
      return true;
    };
    const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => subscription.remove();
  }, [searchActive]);

  useEffect(() => {
    if (searchActive && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 10);
    }
  }, [searchActive]);


  const renderItemMemo = useMemo(() => {
    return (item: ItemTypeGPSData, isSelected: boolean, index: number) => renderGPSKendaraan(item, isSelected, index);
  }, [dataGPSState, selectedIndex]);

  const filteredData = useMemo(
    () => filterGPSData(dataGPSState, searchText),
    [dataGPSState, searchText]
  );

  {/********** HOOKS **********/ }

  {/********** FUNGSI LAIN - LAIN **********/ }

  const handleSelectItem = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  const handleDebugPress = () => {
    const updatedData = dataGPSState.map((user) => {
      if (user.id === 1) {
        return {
          ...user,
          userGPS: user.userGPS?.map(gps => ({
            ...gps,
            state: gps.state === 'On' ? 'Off' : 'On',
            substate: gps.substate === 'Move' ? 'Park' : 'Move',
            kecepatan: gps.kecepatan + 10,
            mileage: gps.mileage ? gps.mileage + 10 : 10,
            odometer: gps.odometer + 100,
            batteryLevel: gps.batteryLevel ? Math.max(0, gps.batteryLevel - 5) : 100,
            parkingDuration: gps.substate === 'Park' ? '2h 30m' : gps.parkingDuration,
          })),
        };
      }
      return user;
    });
    setDataGPSState(updatedData);
  };

  function filterGPSData(data: ItemTypeGPSData[], search: string) {
    let filtered = data;

    if (search && search.trim() !== '') {
      const searchLower = search.toLowerCase();
      filtered = filtered
        .map(user => ({
          ...user,
          userGPS: user.userGPS?.filter(gps =>
            user.user.toLowerCase().includes(searchLower) ||
            gps.nopol.toLowerCase().includes(searchLower)
          )
        }))
        .filter(user => user.userGPS && user.userGPS.length > 0);
    }
    return filtered;
  }
  {/********** FUNGSI LAIN - LAIN **********/ }

  {/********** RENDER ITEM FLATLIST **********/ }
  const renderGPSKendaraan = (item: ItemTypeGPSData, isSelected: boolean, index: number) => (
    <View style={{ marginVertical: moderateScale(20) }}>
      <View style={{}}>
        <TouchableOpacity onPress={() => {
          router.back();
          router.setParams({ searchUser: item.user });
        }}
          style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: moderateScale(16), alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{
                backgroundColor: '#78C7DC',
                borderRadius: '100%', width: moderateScale(32),
                height: moderateScale(32), alignItems: 'center',
                justifyContent: 'center', marginRight: moderateScale(8),
                borderLeftWidth: 3,
                borderLeftColor: (darkenHexColor('#78C7DC', 0.8, 0.93)),
                shadowColor: "#000",
                borderRightWidth: 3,
                borderRightColor: '#78C7DC',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 2,
              }}>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, top: moderateScale(2), color: '#fff' }}>{item.userGPS ? item.userGPS.length : 0}</Text>
              </View>
              <View style={{ backgroundColor: '#ffffffff', borderRadius: '100%', alignItems: 'center', justifyContent: 'center', marginRight: moderateScale(8) }}>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, top: moderateScale(2) }}>{item.user}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <RandyIcon name="Edit" color="#4A4B4D" size={moderateScale(32)} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
  {/********** RENDER ITEM FLATLIST **********/ }

  {/********** RENDER UTAMA **********/ }
  return (
    <View className="flex-1 items-center" style={{ backgroundColor: '#ffffffff', justifyContent: 'flex-start' }}>
      <View style={[styles.headerStyle, { height: moderateScale(100), paddingTop: Math.max(insets.top, moderateScale(16)) }]}>
        {searchActive ? (
          <View style={styles.searchView}>
            <TouchableOpacity style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', paddingRight: moderateScale(8) }} onPress={() => {
              setSearchActive(false);
              setSearchText('');
            }}>
              <RandyIcon
                name="ArrowLeftRound"
                color="#4A4B4D"
                size={moderateScale(28)}
              />
            </TouchableOpacity>
            <TextInput
              ref={inputRef}
              style={styles.searchInput}
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Nama/nopol ..."
              placeholderTextColor="#888"
              textAlignVertical="center"
            />
          </View>
        ) : (
          <>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', paddingRight: moderateScale(8), bottom: moderateScale(2) }} onPress={() => {
                router.back();
              }}>
                <RandyIcon
                  name="ArrowLeftRound"
                  color="#4A4B4D"
                  size={moderateScale(32)}
                />
              </TouchableOpacity>
              <Text className='font-poppins-semibold' style={styles.headerText}>Users</Text>
            </View>
            <View style={{ alignItems: 'center', flexDirection: 'row', gap: moderateScale(10) }}>
              {/********** MATENI DEBUG NDEK KENE **********/}
              <TouchableOpacity style={{ alignItems: 'center', paddingBottom: moderateScale(12) }} onPress={handleDebugPress}>
                <RandyIcon
                  name="Debug"
                  color="#4A4B4D"
                  size={moderateScale(32)}
                />
              </TouchableOpacity>
              {/********** MATENI DEBUG NDEK KENE **********/}
              <TouchableOpacity
                style={{ alignItems: 'center', paddingBottom: moderateScale(12) }}
                onPress={() => { setSearchActive(true); }}
              >
                <RandyIcon
                  name="SearchRound"
                  color="#4A4B4D"
                  size={moderateScale(28)}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
      <View style={{ flex: 1, paddingBottom: insets.bottom }}>
        <CustomFlatList
          data={filteredData}
          renderItem={renderItemMemo}
          dynamicTouchable={true}
          selectedIndex={selectedIndex === null ? undefined : selectedIndex}
          onSelectItem={handleSelectItem}
          listStyle={{ minWidth: '100%', marginVertical: moderateScale(16) }}
          listViewStyle={styles.ListItemInfo}
        />
      </View>
    </View>
  );
  {/********** RENDER UTAMA **********/ }
}

const styles = ScaledSheet.create({
  ListItemInfo: {
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
  sectionWrapper: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 6,
  },
  headerStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: "20@ms",
    paddingRight: "20@ms",
    paddingLeft: "15@ms",
  },
  headerText: {
    fontSize: "20@ms",
    fontFamily: 'Poppins-SemiBold',
    color: '#4A4B4D',
    textAlign: 'center',
  },
  searchView: {
    flex: 1,
    flexDirection: 'row',
    height: moderateScale(40),
    borderRadius: moderateScale(10),
    backgroundColor: '#f2f2f2',
    paddingHorizontal: moderateScale(16),
    fontSize: moderateScale(14),
    fontFamily: 'Poppins-Regular',
    color: '#333',
    textAlignVertical: 'center',
  },
  searchInput: {
    height: moderateScale(60),
    top: moderateScale(-8),
    width: '90%',
    fontSize: moderateScale(14),
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
  vehiclePlate: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: moderateScale(12),
    paddingVertical: moderateScale(6),
    paddingHorizontal: moderateScale(10),
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
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
  vehicleStatus: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: moderateScale(12),
    paddingVertical: moderateScale(6),
    paddingHorizontal: moderateScale(10),
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
    borderLeftWidth: 3,
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
  labelValueStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: moderateScale(14),
    color: '#4A4B4D',
  },
  labelTitleStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: moderateScale(12),
    color: '#4A4B4D',
  },
  labelWrapperStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: moderateScale(10),
    padding: moderateScale(8),
  },
});