/**
 * Root_Drawer.tsx
 * Root Drawer Area
 */


/** navigation components */
import { createDrawerNavigator } from "@react-navigation/drawer";

/** Stack */
import RootStack from "./RootStack";

/** types */
import { DrawerParamList, ScreenName } from "../types";


const Drawer = createDrawerNavigator<DrawerParamList>()

export default function RootDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: 'right',
                headerShown: false,
            }}
        >
            <Drawer.Screen
                name={ScreenName.RootStack}
                component={RootStack}
            />
        </Drawer.Navigator>
    )
}