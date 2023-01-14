import { Text } from "react-native"

import Container from "../../components/Container"
import styled from "styled-components"
import NavBtn from "../../components/NavBtn"
import { ScreenName } from "../../types"


/** styled component*/
const TextBtn = styled(Text)`
    border: 1px solid black;
    background-color: #ddd;
    padding : 5px;
`

export default function DiaryList() {
    return (
        <Container>
            <Text>Here is Diary_list_Scree Screen</Text>
            <NavBtn
                nav={ScreenName.Diary}
                data={null}
                disabled={false}>
                <TextBtn>go to Diary screen</TextBtn>
            </NavBtn>
            <NavBtn
                nav={ScreenName.DiaryWrite}
                data={null}
                disabled={false}>
                <TextBtn>go to Diary write screen</TextBtn>
            </NavBtn>
            <NavBtn
                nav={ScreenName.goBack}
                data={null}
                disabled={false}>
                <TextBtn>go to selected Diary list screen</TextBtn>
            </NavBtn>
        </Container>
    )
}