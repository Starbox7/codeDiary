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

export default function ReminderList() {
    return (
        <Container>
            <Text>Here is Reminder_list_Screen Screen</Text>
            <NavBtn
                nav={ScreenName.Reminder}
                data={null}
                disabled={false}>
                <TextBtn>go to Reminder screen</TextBtn>
            </NavBtn>
            <NavBtn
                nav={ScreenName.ReminderWrite}
                data={null}
                disabled={false}>
                <TextBtn>go to Reminder write screen</TextBtn>
            </NavBtn>
        </Container>
    )
}