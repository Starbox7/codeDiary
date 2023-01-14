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

export default function DiaryWrite() {
    return (
        <Container>
            <Text>Here is Diary_write Screen</Text>
            <NavBtn
                nav={ScreenName.goBack}
                data={null}
                disabled={false}>
                <TextBtn>go to Diary list screen</TextBtn>
            </NavBtn>
        </Container>
    )
}