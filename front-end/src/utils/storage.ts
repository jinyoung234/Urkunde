import { atom } from "recoil";

export const modalState = atom({
    key : "modalState",
    default: false,
})

export const lightMode = atom ({
    key: "lightMode",
    default : true,
})