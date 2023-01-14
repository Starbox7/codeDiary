import { Button, Pressable, Text } from "react-native"
import Container from "../components/Container"
import axios from "axios"
import React from "react"
import NavBtn from "../components/NavBtn"
import { ScreenName } from "../types"
import styled from "styled-components"


/** styled component*/
const TextBtn = styled(Text)`
    border: 1px solid black;
    background-color: #ddd;
    padding : 5px;
`

export default function Calendar_Screen() {

    return (
        <Container>
            <Text>Here is Calendar Screen</Text>
            <NavBtn
                nav={ScreenName.BEtest}
                data={null}
                disabled={false}>
                <TextBtn>go to Backend api and database test Area</TextBtn>
            </NavBtn>
        </Container>
    )
}