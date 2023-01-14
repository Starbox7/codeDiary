/**
 * Navigation.tsx
 * Navigation Container Area
 */


/** navigation components*/
/** https://github.com/knsnyo/Emotion-Diary.git for knsnyo */
import { NavigationContainer } from "@react-navigation/native";

/** Drawer */
import RootDrawer from "./RootDrawer";


export default function Navigation () {
    return (
        <NavigationContainer>
            <RootDrawer />
        </NavigationContainer>
    )
}