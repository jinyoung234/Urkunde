import { ContainerTitleWrapper } from "./style";

interface ContainerTitleProps {
  title: string;
}

export default function ContainerTitle({ title }: ContainerTitleProps) {
  return <ContainerTitleWrapper>{title}</ContainerTitleWrapper>;
}
