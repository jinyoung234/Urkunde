import { Title } from "./style";
import { SubTitle } from "./style";

interface PageTitleProps {
  title: string;
  subtitle: string;
}

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </>
  );
}
