import { SliderRightButton } from "src/components/commons/Commons";
import useSlider from "src/hooks/useSlider"

export default function RightSlider() {
    const {handleRightSlider} = useSlider();
    return (
        <SliderRightButton
            onClick = {handleRightSlider}
        > 
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtMjc3LjAyIDYwMC45NWMtNi42Mjg5IDAtMTMuNzM0LTIuMzY3Mi0xOC45NDEtNy41NzgxLTEwLjQxOC0xMC40MTgtMTAuNDE4LTI2Ljk5MiAwLTM3LjQxNGwxNzkuNDgtMTc5Ljk2LTE3OS40OS0xNzkuNDhjLTEwLjQxOC0xMC40MTgtMTAuNDE4LTI2Ljk5MiAwLTM3LjQxNCAxMC40MjItMTAuNDE4IDI2Ljk5Ni0xMC40MTggMzcuNDE0LTAuNDcyNjZsMTk4LjQzIDE5OC40M2M1LjIxMDkgNS4yMTA5IDcuNTc4MSAxMS44NCA3LjU3ODEgMTguOTQxIDAgNy4xMDU1LTIuODM5OCAxMy43MzQtNy41NzgxIDE4Ljk0MWwtMTk4LjQzIDE5OC40M2MtNS4yMDcgNS4yMTA5LTExLjg0IDcuNTc4MS0xOC40NjkgNy41NzgxeiIvPgo8L3N2Zz4K"/>
        </SliderRightButton>
    )
}