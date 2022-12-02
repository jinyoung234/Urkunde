import { AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";
import { ForSelfCheckComponent, ForSelfCheckSubComponent, HeadTitle } from "src/components/commons/Commons";
import AnswerButton from "src/components/self-check/atoms/AnswerButton";
import AnswerForm from "src/components/self-check/atoms/AnswerForm";
import LeftSlider from "src/components/self-check/atoms/LeftSlider";
import QuizQuestion from "src/components/self-check/atoms/QuizQuestion";
import RightSlider from "src/components/self-check/atoms/RightSlider";
import { currentIndex, questionSet, sliderMotionChange } from "src/utils/storage";

export const questionVariants = {
    start:((isSliderMotionChange : boolean) => {
        return ({
            opacity:0,
            scale:0,
            x: isSliderMotionChange ? -window.innerWidth : window.innerWidth,
            y: -100,
        })
    }),
    end: {
        opacity:1,
        scale:1,
        x:0,
        y:-0,
        transition:{
            type:'tween',
            duration:0.8
        }
    },
    exit:((isSliderMotionChange : boolean) => {
        return ({
            opacity:0,
            scale:0,
            x: isSliderMotionChange ? window.innerWidth : -window.innerWidth,
            y: -100,
            transition:{
                type:'tween',
                duration:0.8
            }
        })
    })
}

export default function QuizForm() {
    const motionChange = useRecoilValue(sliderMotionChange);

    const questions = useRecoilValue(questionSet);

    const curr = useRecoilValue(currentIndex);


    return(
        <ForSelfCheckComponent 
            style={{display: 'flex', flexDirection:'row', position:'relative', padding: '0px 0px'}}
        >
            <AnimatePresence
                custom = {motionChange}    
            >
                {questions.map(question => questions.findIndex(prevQuestion => prevQuestion.id === question.id) ===  curr && 
                    <ForSelfCheckSubComponent
                        custom={motionChange}
                        variants={questionVariants}
                        initial = {"start"}
                        animate = {"end"}
                        exit={"exit"}
                        key={question.id}
                    >
                        <HeadTitle>문제</HeadTitle>
                        <QuizQuestion question={question.question}/>
                        <LeftSlider/>
                        <AnswerForm/>
                        <RightSlider/>
                        <AnswerButton answer = {question.answer}/>
                    </ForSelfCheckSubComponent>
                )}
            </AnimatePresence>
        </ForSelfCheckComponent>
    )
}