import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import styled from "styled-components";
import ColorView from "./ColorView";
import { ctgyTheme, textColor, iconColor, backgroundTheme } from "../../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";

const DrawerContainer = styled(SafeAreaView)`
    flex: 1;
    padding : 5px;
`

export default function DrawerMenu() {
    return (
        <DrawerContainer>
            <Header />
            <ScrollView>
                <ColorView title="카테고리 색상1" name="빨강색" code={ctgyTheme.ctRed} />
                <ColorView title="카테고리 색상2" name="주황색" code={ctgyTheme.ctOrange} />
                <ColorView title="카테고리 색상3" name="노랑색" code={ctgyTheme.ctYellow} />
                <ColorView title="카테고리 색상4" name="초록색" code={ctgyTheme.ctGreen} />
                <ColorView title="카테고리 색상5" name="민트색" code={ctgyTheme.ctBluegreen} />
                <ColorView title="카테고리 색상6" name="파랑색" code={ctgyTheme.ctBlue} />
                <ColorView title="카테고리 색상8" name="보라색" code={ctgyTheme.ctPurple} />
                <ColorView title="카테고리 색상7" name="남색" code={ctgyTheme.ctIndigo} />

                <ColorView title="텍스트 색상1" name="주황색" text={textColor.tOrange} />
                <ColorView title="텍스트 색상2" name="검정색" text={textColor.tBlack} />
                <ColorView title="텍스트 색상3" name="밝은회색" text={textColor.tLightgray} />
                <ColorView title="텍스트 색상4" name="회색" text={textColor.tGray} />
                <ColorView title="텍스트 색상5" name="빨강색" text={textColor.tRed} />

                <ColorView title="리마인더 아이콘 배경색상1" name="청색" code={iconColor.iBlue} />
                <ColorView title="리마인더 아이콘 배경색상2" name="하늘색" code={iconColor.iLightblue} />
                <ColorView title="리마인더 아이콘 배경색상3" name="연두색" code={iconColor.iLightgreen} />
                <ColorView title="리마인더 아이콘 배경색상4" name="회색" code={iconColor.iGray} />
                <ColorView title="리마인더 아이콘 배경색상5" name="회색" code={iconColor.iRed} />
                <ColorView title="리마인더 아이콘 배경색상6" name="갈색" code={iconColor.iBrown} />

                <ColorView title="리마인더 배경색상1" name="횐색" code={backgroundTheme.bWhite} />
                <ColorView title="리마인더 배경색상2" name="연한회색" code={backgroundTheme.bLightGray} />
            </ScrollView>
        </DrawerContainer>
    )
}