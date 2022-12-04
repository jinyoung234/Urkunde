import { InputWrapper } from "./style";

interface InputProps {
  changeFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ changeFn }: InputProps) {
  return (
    <InputWrapper onChange={changeFn} placeholder="문제를 생성해 보세요 :)" />
  );
}
