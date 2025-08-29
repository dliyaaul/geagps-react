import React, { useState } from "react";
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { CountStatus, DataGPS, ItemTypeGPSData } from '../../data/GPSData';
import RandyIcon from '../CustomLibrary/CustomIcon';
import { DonutChart } from "../CustomLibrary/DonutChart";

const { height, width } = Dimensions.get('window');



export default function Index() {
  const [dataGPSState, setDataGPSState] = useState<ItemTypeGPSData[]>(DataGPS);

  const VehicleStatusHomeData = [
    { name: 'Move', value: CountStatus(dataGPSState, 'Move'), color: '#A0D9E7' },
    { name: 'Idle', value: CountStatus(dataGPSState, 'Idle'), color: '#78C7DC' },
    { name: 'Park', value: CountStatus(dataGPSState, 'Park'), color: '#4A9BB4' },
  ];

  const OnlineData = [
    { name: 'Online', value: CountStatus(dataGPSState, 'On'), color: '#78C7DC' },
    { name: 'Offline', value: CountStatus(dataGPSState, 'Off'), color: '#4A9BB4' },
  ];
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1 items-center" style={{ backgroundColor: '#ffffffff', justifyContent: 'flex-start' }}>
      <View style={[styles.headerStyle, { height: moderateScale(100), paddingTop: Math.max(insets.top, moderateScale(16)) }]}>
        <Text className='font-poppins-semibold' style={styles.headerText}>Beranda</Text>
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
      <ScrollView contentContainerStyle={{ paddingBottom: moderateScale(42) + insets.bottom }}>
        <View style={styles.sectionWrapper}>
          <DonutChart
            data={VehicleStatusHomeData}
            strokeWidth={25}
            radius={moderateScale(87)}
            containerWidth={width}
            containerHeight={moderateScale(100 * 2)}
            type="round"
            startAngle={220}
            endAngle={500}
            animationType="slide"
          />
        </View>
        <View style={styles.sectionWrapper}>
          <DonutChart
            data={OnlineData}
            strokeWidth={25}
            radius={moderateScale(87)}
            containerWidth={width}
            containerHeight={moderateScale(100 * 2)}
            type="round"
            startAngle={220}
            endAngle={500}
            animationType="slide"
          />
        </View>
      </ScrollView>
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
  }
});
