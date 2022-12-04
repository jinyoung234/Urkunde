import { AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";
import AnswerButton from "src/components/self-check/quizForm/answerButton";
import LeftSlider from "src/components/self-check/quizForm/slider/LeftSlider";
import RightSlider from "src/components/self-check/quizForm/slider/RightSlider";
import { currentIndex, questionSet, sliderMotionChange } from "src/atoms";
import ContainerTitle from "src/components/commons/containerTitle";
import Question from "../question";
import AnswerForm from "./answerForm";
import {
  ButtonContainer,
  FormContainer,
  questionVariants,
  QuizFormContainer,
  QuizFormSubContainer,
} from "./style";

export default function QuizForm() {
  const motionChange = useRecoilValue(sliderMotionChange);

  const questions = useRecoilValue(questionSet);

  const curr = useRecoilValue(currentIndex);

  return (
    <QuizFormContainer>
      <AnimatePresence custom={motionChange}>
        {questions.map(
          (question) =>
            questions.findIndex(
              (prevQuestion) => prevQuestion.id === question.id
            ) === curr && (
              <QuizFormSubContainer
                custom={motionChange}
                variants={questionVariants}
                initial={"start"}
                animate={"end"}
                exit={"exit"}
                key={question.id}
              >
                <ContainerTitle title="문제" />
                <Question question={question.question} />
                <FormContainer>
                  <LeftSlider />
                  <AnswerForm />
                  <RightSlider />
                </FormContainer>
                <ButtonContainer>
                  <AnswerButton answer={question.answer} />
                </ButtonContainer>
              </QuizFormSubContainer>
            )
        )}
      </AnimatePresence>
    </QuizFormContainer>
  );
}
