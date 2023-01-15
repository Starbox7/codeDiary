/** library */
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ReactNode } from "react";

/** screen name */
/** https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/ */
export const enum ScreenName {
    RootStack = "RootStack",
    RootTab = "RootTab",
    Calendar = "Calendar",
    Diary = "Diary",
    DiaryList = "DiaryList",
    DiaryWrite = "DiaryWrite",
    DiaryCtgy = "DiaryCtgy",
    Reminder = "Reminder",
    ReminderList = "ReminderList",
    ReminderWrite = "ReminderWrite",

    goBack = "goBack",

    BEtest = "BEtest"
}

/** between Screen Props */
export type DrawerParamList = {
    RootStack : undefined,
}

export type StackParamList = {
    RootTab : undefined,
    DiaryList : DiaryList,
    Diary : Diary,
    DiaryWrite : Diary,
    Reminder : Reminder,
    ReminderWrite : undefined,

    BEtest : undefined
}

export type TabParamList = {
    Calendar : undefined,
    DiaryCtgy : undefined,
    ReminderList : undefined,
}

/** useNavigation */
export type StackNavProp = NativeStackNavigationProp<StackParamList>
// export type DrawerNavigation_Prop = NativeStackNavigationProp<Drawer_ParamList> //연구하기
// export type TabNavigation_Prop = NativeStackNavigationProp<Tab_ParamList>

/** data type */
export type Diary = {
    id : string,
}

export type DiaryList = {
    id : string,
}

export type Reminder = {
    id : string,
}

/** navigation props */
export type NavBtnProps = {
    nav : ScreenName,
    children : ReactNode,
    disabled: boolean,
    data? : any,
}

/** pressable props */
 export type NavContainerProps = {
     press : boolean,
     platform : string,
 }

 export type ColorViewProps = {
    title : string,
    name : string,
    code? : string,
    text? : string
 }

 export type ColorProps = {
    code? : string,
    text? : string
 }

 export type IconProps = {
    name : string,
    size? : number,
    color? : string
 }