/** 
 * Root_Tab.tsx
 * Root Tab Area
 */

/** navigation components */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/** screens */
import Calendar from "../screens/Calendar";
import ReminderList from "../screens/reminder/ReminderList";
import DiaryCtgy from "../screens/diary/DiaryCtgy";

/** types */
import { TabParamList, ScreenName } from "../types";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"
import FoundationIcon from "react-native-vector-icons/Foundation"

import { iconColor } from "../constants/Colors";


const Tab = createBottomTabNavigator<TabParamList>();

export default function RootTab() {
    const screenOptions = {
        tabBarStyle:{
          height:60,
        },
        tabBarItemStyle:{
        }
      };
    return (
        <Tab.Navigator {...{ screenOptions }}>
            <Tab.Screen name={ScreenName.ReminderList} component={ReminderList}
                options={{ headerShown: false, title: '리마인더',
                tabBarIcon : () => (<Ionicons name="notifications-circle-outline" size={30} color={iconColor.iLightblue}/>)}} />
            <Tab.Screen name={ScreenName.DiaryCtgy} component={DiaryCtgy}
                options={{ headerShown: false, title: '다이어리',
                tabBarIcon : () => (<FontAwesome5Icon name="book" size={23} color={iconColor.iBrown}/>)}} />
            <Tab.Screen name={ScreenName.Calendar} component={Calendar}
                options={{ headerShown: false, title : '캘린더',
                tabBarIcon : () => (<FoundationIcon name="calendar" size={32} color={iconColor.iLightgreen}/>) }} />
        </Tab.Navigator>)
}



/** custom bottom tab */
// const screenOptions = {
//     tabBarStyle:{
//       backgroundColor:'#0000ff',
//       height:100,
//     },
//     tabBarItemStyle:{
//       backgroundColor:'#00ff00',
//       margin:5,
//       borderRadius:10,
//     }
//   };