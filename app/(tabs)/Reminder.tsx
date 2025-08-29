import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import RandyIcon from '../CustomLibrary/CustomIcon';

export default function Reminder() {
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1 items-center" style={{ backgroundColor: '#ffffffff', justifyContent: 'flex-start' }}>
      <View style={[styles.headerStyle, { height: moderateScale(100), paddingTop: Math.max(insets.top, moderateScale(16)) }]}>
        <Text className='font-poppins-semibold' style={styles.headerText}>Pengingat</Text>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={{ alignItems: 'center',  paddingBottom: moderateScale(12)  }}>
            <RandyIcon
              name="ProfileInCircle"
              color="#4A4B4D"
              size={moderateScale(32)}
            />
          </TouchableOpacity>
        </View>
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
  }
});