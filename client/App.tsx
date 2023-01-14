/**
 * 프로젝트 생성일 : 2023년 01월 07일
 * 프로젝트 생성자 : starbox7
 * 채택 표준 : 스네이크식 작명법
 * 프로젝트 정보 : 타입스크립트 / 스타일드 컴포넌트 
 * 도움을 주신 분들 : knsnyo
 * 
 * 함수명 : 카멜타입 대문자 시작
 * 변수명 : 카멜타입 소문자 시작
 * 컴포넌트명 : 카멜타입 대문자 시작
 * 네비게이션 생성 : 카멜타입 대문자 시작
 * 인터페이스 선언 : 카멜타입 대문자 시작
 * 타입 선언 : 카멜타입 대문자 시작
 */

/** 
 * App.tsx
 * 앱 시작 파일
 */


/** components */
import { StatusBar } from "react-native";

/** navigation */
import Navigation from "./navigations/Navigation";


export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar backgroundColor={'transparent'} translucent={true}/>
    </>
  );
}