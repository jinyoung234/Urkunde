import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist({
    key: 'questions',
    storage : localStorage,
})



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
    effects_UNSTABLE: [persistAtom],
})

// 문제-답 세트 상태 관리
export const questionSet = atom<ISetInfo[]>({
    key: "qustionSet",
    default : [],
    effects_UNSTABLE: [persistAtom],
})