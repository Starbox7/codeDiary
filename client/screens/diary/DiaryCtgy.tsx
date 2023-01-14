import { Text } from "react-native"

import { ScreenName } from "../../types"

import styled from "styled-components/native"

import NavBtn from "../../components/NavBtn"

import Container from "../../components/Container"

/** styled component*/
const TextBtn = styled(Text)`
    border: 1px solid black;
    background-color: #ddd;
    padding : 5px;
`


export default function DiaryCtgy() {
    return (
        <Container>
            <Text>here is selected Diary list</Text>
            <NavBtn
                nav={ScreenName.DiaryList}
                data={null}
                disabled={false}>
                <TextBtn>go to Diary list screen</TextBtn>
            </NavBtn>
        </Container>
    )
}