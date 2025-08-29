import React, { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';
import type { ICurvedBottomBarRef } from 'react-native-curved-bottom-bar';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScaledSheet } from 'react-native-size-matters';
import RandyIcon from '../CustomLibrary/CustomIcon';
import AlarmScreen from './Alarm';
import GPSScreen from './GPS';
import HomeScreen from './index';
import LaporanScreen from './Laporan';
import ReminderScreen from './Reminder';
const { height, width } = Dimensions.get('window');

export default function App() {
  

  const inputRef = useRef<ICurvedBottomBarRef>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const insets = useSafeAreaInsets();

  type IconName = 'square' | 'circle' | 'DocumentOutlineRound' | 'homeOutlineRound' | 'homeInlineRound' | 'profileInlineRound' | 'profileOutlineRound' | 'DocumentInlineRound'
    | 'AlertInlineRound' | 'AlertOutlineRound' | 'LocationInlineRound' | 'LocationOutlineRound' | 'CalendarInlineRound' | 'CalendarOutlineRound';

  const iconMap: Record<string, { active: IconName, inactive: IconName }> = {
    'Alarm': {
      active: 'AlertInlineRound',
      inactive: 'AlertOutlineRound'
    },
    'GPS': {
      active: 'LocationInlineRound',
      inactive: 'LocationOutlineRound'
    },
    'Home': {
      active: 'homeInlineRound',
      inactive: 'homeInlineRound'
    },
    'Laporan': {
      active: 'DocumentInlineRound',
      inactive: 'DocumentOutlineRound'
    },
    'Reminder': {
      active: 'CalendarInlineRound',
      inactive: 'CalendarOutlineRound'
    },
  };

  const _renderIcon = (routeName: string, selectedTab: string) => {
    const icons = iconMap[routeName] || { active: 'circle', inactive: 'circle' };
    const isSelected = routeName === selectedTab;
    const iconName = isSelected ? icons.active : icons.inactive;
    const iconSize = iconName === 'CalendarInlineRound' ? 30 : 27;

    return (
      <RandyIcon
        name={iconName}
        size={iconSize}
        color={isSelected ? '#34A6AE' : 'white'}
      />
    );
  };

  type TabBarProps = {
    routeName: string;
    selectedTab: string;
    navigate: (routeName: string) => void;
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }: TabBarProps) => {
    return (
      <TouchableOpacity

        onPress={() => { navigate(routeName); }}
        style={styles.tabbarItem}
      >
          {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (

    <View style={{ flex: 1 }} id='main-container'>
      <CurvedBottomBarExpo.Navigator
        ref={inputRef}
        id="main-bottom-bar"
        type="DOWN"
        style={[styles.bottomBar, { marginBottom: insets.bottom }]}
        shadowStyle={styles.shawdow}
        height={55}
        width={width}
        borderColor="#060505ff"
        borderWidth={0}
        circleWidth={55}
        circlePosition="CENTER"
        bgColor="#78C7DC"
        initialRouteName="Home"
        borderTopLeftRight
        backBehavior="initialRoute"
        renderCircle={({
          routeName,
          selectedTab,
          navigate,
        }: {
          routeName: string;
          selectedTab: string;
          navigate: (routeName: string) => void;
        }) => (
          <Animated.View style={[
            styles.btnCircleUp,
            { backgroundColor: selectedTab === 'Home' ? '#78C7DC' : '#78C7DC', bottom: 30 }
          ]}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigate('Home')}
            >
              <RandyIcon
                name={'homeInlineRound'}
                color={selectedTab === 'Home' ? '#34A6AE' : 'white'}
                size={35}
              />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
        screenListeners={{}}
        screenOptions={{}}
        defaultScreenOptions={{}}
      >
        <CurvedBottomBarExpo.Screen
          name="Home"
          options={{ headerShown: false }}
          position="CIRCLE"
          component={HomeScreen}
        />
        <CurvedBottomBarExpo.Screen
          name="Alarm"
          options={{ headerShown: false }}
          position="LEFT"
          component={AlarmScreen}
        />
        <CurvedBottomBarExpo.Screen
          name="GPS"
          options={{ headerShown: false }}
          component={GPSScreen}
          position="RIGHT"
        />
        <CurvedBottomBarExpo.Screen
          name="Laporan"
          options={{ headerShown: false }}
          component={LaporanScreen}
          position="RIGHT"
        />
        <CurvedBottomBarExpo.Screen
          name="Reminder"
          options={{ headerShown: false }}
          component={ReminderScreen}
          position="LEFT"
        />
      </CurvedBottomBarExpo.Navigator>

      {/* Safe area bottom dengan background putih */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: insets.bottom,
          backgroundColor: '#78C7DC',
        }}
      />
    </View>
  );
}

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: '55@ms',
    height: '55@ms',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
  },
  shawdow: {
    elevation: 15,
    shadowColor: '#000000ff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },

});
