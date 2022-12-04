import { TextAreaWrapper } from "./style";

interface TextAreaProps {
  changeFn: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({ changeFn }: TextAreaProps) {
  return (
    <TextAreaWrapper
      onChange={changeFn}
      placeholder="문제에 맞는 답을 적어 주세요 :)"
    />
  );
}
