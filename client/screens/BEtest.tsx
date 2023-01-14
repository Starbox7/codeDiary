import { View, Text } from "react-native";
import Container from "../components/Container";
import NavBtn from "../components/NavBtn";
import { ScreenName } from "../types";

import axios from "axios";
import React from "react";

/** backend api server and database test screen */
export default function BEtest() {
    return (
        <Container>
            <Cssbox />
            <View style={{ flex: 7 }}>
                
            </View>
        </Container>
    )
}






function Cssbox() {
    return (
        <View style={{ flex: 1, backgroundColor: '#ddd', alignItems: 'center', borderWidth: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 30, backgroundColor: 'lightgreen', borderWidth: 1, padding: 3 }}>Here is navigation Area</Text>
            <View>
                <NavBtn
                    nav={ScreenName.goBack}
                    data={null}
                    disabled={false}>
                    <Text style={{ fontSize: 30, borderWidth: 1, padding: 3, backgroundColor: 'lightblue' }}>go Back to Client Area</Text>
                </NavBtn>
            </View>
        </View>
    )
}

{/* <Text>Here is Calendar Screen</Text>
            <Pressable onPress={handleTest} style={{backgroundColor: 'lightblue'}}>
                <Text>test api db post</Text>
            </Pressable>
            <Button title="Ping" onPress={Pong}></Button> */}

    // /** server test */
    // const handleTest = async() => {
    //     // e.preventDefault()
    //     // dispatch
    //     try{
    //         const res = await axios.post('http://192.168.0.19:5001/', {
    //             title : 'testTitle',
    //             memo : 'testMemo'
    //         })
    //     }catch(err: unknown){
    //         console.log(err)
    //     }finally{
    //         console.log('finally')
    //     }
    // }

    // const Pong =async () => {
    //     try{
    //         const res = await axios.post('http://192.168.0.19:5001/ping')
    //     }catch(err: unknown){
    //         console.log(err)
    //     }finally{
    //         console.log('I want pong')
    //     }
    // }