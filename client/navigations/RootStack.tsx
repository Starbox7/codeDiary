/**
 * Root_Stack.tsx
 * Root Stack Area
 */


/** library */
import React from "react";

/** navigation components */
import { createNativeStackNavigator } from "@react-navigation/native-stack"

/** screens */
import RootTab from "./RootTab";
import DiaryList from "../screens/diary/DiaryList";
import Diary from "../screens/diary/Diary";
import BEtest from "../screens/BEtest";

/** types */
import { StackParamList, ScreenName } from "../types";
import DiaryWrite from "../screens/diary/DiaryWrite";
import Reminder from "../screens/reminder/Reminder";
import ReminderWrite from "../screens/reminder/ReminderWrite";


const Stack = createNativeStackNavigator<StackParamList>();

export default function RootStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name={ScreenName.RootTab}
                component={RootTab}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
            <Stack.Screen
                name={ScreenName.DiaryList}
                component={DiaryList}
            />
            <Stack.Screen
                name={ScreenName.Diary}
                component={Diary}
            />
            <Stack.Screen
                name={ScreenName.DiaryWrite}
                component={DiaryWrite}
            />
            <Stack.Screen
                name={ScreenName.ReminderWrite}
                component={ReminderWrite}
            />
            <Stack.Screen
                name={ScreenName.Reminder}
                component={Reminder}
            />
            <Stack.Screen
                name={ScreenName.BEtest}
                component={BEtest}
            />
        </Stack.Navigator>
    )
}