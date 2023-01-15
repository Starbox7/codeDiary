import { View, Text } from "react-native";
import styled from "styled-components";
import { ColorProps, ColorViewProps } from "../../types";

const ColorContainer = styled(View)`
    border-width: 1px;
    border-color: #AAA;
    padding-bottom: 2px;
    padding-left: 2px;
    margin-bottom: 2px;
`
const ColorTitle = styled(Text)`
    margin: 0px 5px;
`
const ColorBody = styled(View)`
    justify-content: space-between;
    flex-direction: row;
`
const ColorMemo = styled(Text)`
    font-size: 10px;
    color: #626262;
`
const Color = styled(Text)<ColorProps>`
    text-align: center;
    font-weight: bold;
    background-color:${props => (props.code)};
    color: ${props => (props.text)};
    border-width: 1px;
    border-color: #ddd;
    margin: 3px 5px;
    width: 200px;
`

/** props : title, color name, color code */
export default function ColorView(props: ColorViewProps) {
    return (
        <ColorContainer>
            <ColorTitle>{props.title}</ColorTitle>
            <ColorBody>
                <View>
                    <ColorMemo>{props.name}</ColorMemo>
                    <ColorMemo>{props.code}{props.text}</ColorMemo>
                </View>
                <Color code={props.code} text={props.text}>{props.text}</Color>
            </ColorBody>
        </ColorContainer>
    )
}



/** array from json
 * 
 * const data = [];
    for (let item in req.body) {
      if (req.body.hasOwnProperty(item)) {
        data.push(req.body[item]);
      }
    }
 */