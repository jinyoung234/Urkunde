import useDelete from "src/hooks/useDelete";
import { DangerButtonWrapper } from "./style";

interface DangerButtonProps {
  id: number;
}

export default function DangerButton({ id }: DangerButtonProps) {
  const { handleDeleteQuestion } = useDelete();
  return (
    <DangerButtonWrapper size={"sm"} onClick={() => handleDeleteQuestion(id)}>
      삭제하기
    </DangerButtonWrapper>
  );
}
