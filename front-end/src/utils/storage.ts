import { atom } from "recoil";

export interface ISetInfo {
    id : number,
    question : string,
    answer : string
}

// 모달의 상태 관리
export const modalState = atom({
    key : "modalState",
    default: false,
})

// 모드 변경 상태 관리
export const lightMode = atom ({
    key: "lightMode",
    default : true,
})

// 전체 문제 갯수 상태 관리
export const questionNum = atom({
    key: "questionNum",
    default : 0,
})

// 문제-답 세트 상태 관리
export const questionSet = atom<ISetInfo[]>({
    key: "qustionSet",
    default : [],
})