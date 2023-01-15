import { View, Text } from "react-native"
import styled from "styled-components"

const DrawerHeader = styled(View)`
    border-width : 1px;
    height: 70px;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    margin-bottom: 5px;
`
const HeaderText = styled(Text)`
    font-size: 20px;
`
const HeaderMemo = styled(Text)`
    
`

export default function Header() {
    return (
        <DrawerHeader>
            <HeaderText>codeDiary</HeaderText>
            <HeaderMemo>{`< Color Palette >`}</HeaderMemo>
        </DrawerHeader>
    )
}