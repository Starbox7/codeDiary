import React from "react";
import { Platform, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";


import { ScreenName, StackNavProp, NavBtnProps, NavContainerProps } from "../types";
import styled from "styled-components/native";


/** 
 * 참고 : react native는 기본으로 display flex를 제공한다. 
 * NavContainer : navigation container
*/
const NavContainer = styled(Pressable) <NavContainerProps>`
    flex-wrap: wrap;
    opacity: ${props => (
        props.press ? 0.7 : 1
    )};
    /* transition: opacity 3s linear; rn에 적용 안되는 css 속성*/
`
/** NavBtn : navigation pressable */
export default function NavBtn(props: NavBtnProps) {
    const navigation = useNavigation<StackNavProp>()

    const [isPress, setIsPress] = React.useState<boolean>(false);

    /** NavHandler : navigation handler */
    function NavHandler (nav: ScreenName) {
        if (
            ScreenName.Reminder === nav ||
            ScreenName.DiaryList === nav ||
            ScreenName.Diary === nav
        ) {
            navigation.push(nav, {
                id: props.data?.id || "",
            })
        } else if (
            ScreenName.DiaryWrite === nav ||
            ScreenName.ReminderWrite === nav ||
            ScreenName.BEtest === nav
        ) {
            navigation.push(nav)
        }
        else if(
            ScreenName.goBack === nav
        ){
            navigation.pop()
        }
    }

    return (
        <NavContainer
            onPress={() => NavHandler(props.nav)}
            onPressIn={() => setIsPress(true)}
            onPressOut={() => setIsPress(false)}
            disabled={props.disabled}
            platform={Platform.OS}
            press={isPress}
        >
            {props.children}
        </NavContainer>
    )
}