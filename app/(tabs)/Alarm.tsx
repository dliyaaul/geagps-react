import React, { useEffect, useMemo, useRef, useState } from 'react';
import { BackHandler, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { DataGPS, ItemTypeGPSData } from '../../data/GPSData';
import { darkenHexColor } from '../CustomLibrary/ColorDarker';
import RandyIcon, { RandyBatteryIcon } from '../CustomLibrary/CustomIcon';
import CustomFlatList from '../CustomLibrary/CustomList';
import RandySpeedometer from '../CustomLibrary/RandySpeedometer';

export default function Alarm() {

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

  const getColorFromSubstate = (substate: string, state: string) => {
    switch (state) {
      case 'On':
        switch (substate) {
          case 'Move':
            return '#6ac66dff';
          case 'Park':
            return '#f4b536ff';
          default:
            return '#F44336';
        }
      case 'Off':
        return '#F44336';
    }
  };

  const getSpeedometerData = (kecepatan: number) => [
    { name: 'All', value: 150 - kecepatan, color: '#A0D9E7' },
    { name: 'Speed', value: kecepatan, color: '#4A9BB4' },
  ];

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
    <View style={{ marginVertical: moderateScale(0) }}>
      <View style={{}}>
        <View style={{ marginHorizontal: moderateScale(12), marginBottom: (index === dataGPSState.length - 1) ? moderateScale(20) : 0 }}>
          <FlatList
            data={item.userGPS}
            keyExtractor={(_, idx) => idx.toString()}
            renderItem={({ item: gps, index: idx }) => (
              <View
                key={idx}
                style={{
                  backgroundColor: '#f6fafd',
                  borderRadius: moderateScale(8),
                  padding: moderateScale(10),
                  marginBottom: moderateScale(8),
                  flexDirection: 'row',
                  alignItems: 'center',
                  elevation: 1,
                }}
              >
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                      <View
                        style={[
                          styles.vehicleStatus,
                          {
                            backgroundColor: getColorFromSubstate(gps.substate, gps.state),
                            borderLeftColor: darkenHexColor(getColorFromSubstate(gps.substate, gps.state) ?? '#F44336', 0.8, 0.93),
                          },
                        ]}
                      >
                        <View
                          style={[
                            styles.colorIndicator,
                            { backgroundColor: darkenHexColor(getColorFromSubstate(gps.substate, gps.state) ?? '#F44336', 0.8, 0.93) },
                          ]}
                        />
                        <Text
                          style={{
                            fontFamily: 'Poppins-SemiBold',
                            fontSize: 12,
                            top: moderateScale(2),
                            color: '#ffffffff',
                          }}
                        >
                          {gps.state === 'On' ? gps.substate : gps.state}
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.vehiclePlate,
                          {
                            borderLeftColor: darkenHexColor(getColorFromSubstate(gps.substate, gps.state) ?? '#F44336', 0.8, 0.93),
                          },
                        ]}
                      >
                        <Text
                          style={{
                            fontFamily: 'Poppins-SemiBold',
                            fontSize: 12,
                            top: moderateScale(2),
                            color: '#4A4B4D',
                          }}
                        >
                          {gps.nopol}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginBottom: moderateScale(12), alignSelf: 'center' }}>
                          <RandyBatteryIcon color="#4A4B4D" size={moderateScale(24)} percentage={gps.batteryLevel} />
                        </View>
                        <TouchableOpacity style={{ marginBottom: moderateScale(12) }}>
                          <RandyIcon name="Close" color="#4A4B4D" size={moderateScale(28)} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 12,
                      color: '#4A4B4D',
                      paddingLeft: moderateScale(8),
                    }}
                  >
                    {gps.datetime}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, paddingLeft: moderateScale(8) }}>
                      <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#4A4B4D' }}>
                        <Text style={{ fontFamily: 'Poppins-SemiBold' }}>Location:</Text>
                        {'\n'}
                        <Text style={{ fontFamily: 'Poppins-Regular' }}>{gps.lokasi}</Text>
                      </Text>
                      {gps.substate === 'Park' && gps.state === 'On' && (
                        <Text style={{ fontSize: 12, color: '#4A4B4D' }}>
                          <Text style={{ fontFamily: 'Poppins-SemiBold' }}>Parking Duration: </Text>
                          <Text style={{ fontFamily: 'Poppins-Regular', color: '#F44336' }}>
                            {gps.parkingDuration || 'N/A'}
                          </Text>
                        </Text>
                      )}
                    </View>
                    <View style={{ paddingLeft: moderateScale(12), alignSelf: 'flex-start' }}>
                      {gps.substate === 'Move' && gps.state === 'On' && (
                        <View>
                          <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 12, textAlign: 'center' }}>{`Speed:`}</Text>
                          <View style={styles.sectionWrapper}>
                            <RandySpeedometer
                              data={getSpeedometerData(gps.kecepatan)}
                              strokeWidth={6}
                              radius={moderateScale(25)}
                              containerWidth={moderateScale(70)}
                              containerHeight={moderateScale(70)}
                              type="round"
                              startAngle={270}
                              endAngle={90}
                              animationType="slide"
                              shouldAnimate={isSelected}
                            />
                          </View>
                        </View>
                      )}
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: moderateScale(8),
                      justifyContent: 'space-between',
                    }}
                  >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ fontSize: 12, color: '#4A4B4D', paddingRight: moderateScale(6) }}>
                        <Text style={{ fontFamily: 'Poppins-SemiBold' }}>Mileage: </Text>
                        <Text style={{ fontFamily: 'Poppins-Regular' }}>{gps.mileage} km</Text>
                      </Text>
                      <Text style={{ fontSize: 12, color: '#4A4B4D' }}>
                        <Text style={{ fontFamily: 'Poppins-SemiBold' }}>Odo: </Text>
                        <Text style={{ fontFamily: 'Poppins-Regular' }}>{gps.odometer} km</Text>
                      </Text>
                    </View>
                    {gps.rented && (
                      <View>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#F44336' }}>Is Rented</Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            )}
            scrollEnabled={false}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            windowSize={5}
          />
        </View>
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
            <Text className='font-poppins-semibold' style={styles.headerText}>Alarm</Text>
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
              <TouchableOpacity style={{ alignItems: 'center', paddingBottom: moderateScale(12) }}>
                <RandyIcon
                  name="ProfileInCircle"
                  color="#4A4B4D"
                  size={moderateScale(32)}
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
          dynamicTouchable={false}
          selectedIndex={selectedIndex === null ? undefined : selectedIndex}
          onSelectItem={handleSelectItem}
          listStyle={{ minWidth: '100%', paddingBottom: moderateScale(12) }}
          listViewStyle={styles.itemInfo}
        />
      </View>
    </View>
  );
  {/********** RENDER UTAMA **********/ }
}

const styles = ScaledSheet.create({
  itemInfo: {

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
    paddingHorizontal: '20@ms',
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