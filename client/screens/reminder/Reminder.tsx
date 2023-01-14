import { Text } from "react-native"
import styled from "styled-components"
import Container from "../../components/Container"
import NavBtn from "../../components/NavBtn"

import { ScreenName } from "../../types"


/** styled component*/
const TextBtn = styled(Text)`
    border: 1px solid black;
    background-color: #ddd;
    padding : 5px;
`

export default function Reminder() {
    return (
        <Container>
            <Text>Here is Reminder_Screen Screen</Text>
            <NavBtn
                nav={ScreenName.goBack}
                data={null}
                disabled={false}>
                <TextBtn>go to Reminder list screen</TextBtn>
            </NavBtn>
        </Container>
    )
}