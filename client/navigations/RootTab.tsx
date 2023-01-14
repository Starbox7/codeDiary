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


const Tab = createBottomTabNavigator<TabParamList>();

export default function RootTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name={ScreenName.ReminderList} component={ReminderList} options={{headerShown : false}} />
            <Tab.Screen name={ScreenName.DiaryCtgy} component={DiaryCtgy} options={{headerShown : false}} />
            <Tab.Screen name={ScreenName.Calendar} component={Calendar} options={{headerShown : false}} />
    </Tab.Navigator>)
}