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
export const colorMode = atom ({
    key: "colorMode",
    default : true,
})

// 전체 문제 갯수 상태 관리
export const questionNum = atom({
    key: "questionNum",
    default : 0,
    effects_UNSTABLE: [persistAtom],
})

// Question 상태 관리 (Input - CreateQuestion component 상태 공유)
export const questionState = atom({
    key : 'question',
    default : ''
})

// Answer 상태 관리 (TextArea - CreateQuestion component 상태 공유)
export const answerState = atom({
    key : 'answer',
    default : ''
})

// 문제-답 세트 상태 관리
export const questionSet = atom<ISetInfo[]>({
    key: "qustionSet",
    default : [],
    effects_UNSTABLE: [persistAtom],
})

// 정답과 오답 상태 관리
export const correctNum = atom({
    key: 'correctNum',
    default : 0,
    effects_UNSTABLE: [persistAtom],
})

export const incorrectNum = atom({
    key: 'incorrectNum',
    default : 0,
    effects_UNSTABLE: [persistAtom],
})

// Weekly Check 일주일 마다 초기화
export const weeklyCheck = atom({
    key: 'weeklyCheck',
    default : [
        {id: 0, date: '일', state: false},
        {id: 1, date: '월', state: false},
        {id: 2, date: '화', state: false}, 
        {id: 3, date: '수', state: false}, 
        {id: 4, date: '목', state: false}, 
        {id: 5, date: '금', state: false}, 
        {id: 6, date: '토', state: false}, 
    ],
    effects_UNSTABLE: [persistAtom],
})

export const currentIndex = atom({
    key: 'currentIndex',
    default : 0
})

export const sliderMotionChange = atom({
    key: 'sliderMotionChange',
    default : false
})


export const isAnswer = atom({
    key: 'isAnswer',
    default : false
})

export const answerButtonState = atom({
    key: 'answerButtonState',
    default : false
})

export const isCorrect = atom({
    key: 'isCorrect',
    default : false
})