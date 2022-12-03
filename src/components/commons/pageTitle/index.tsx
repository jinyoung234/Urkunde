import BackButton from "../button/BackButton";
import { PageTitleWrapper, TitleWrapper } from "./style";
import { SubTitleWrapper } from "./style";

interface PageTitleProps {
  title: string;
  subtitle: string;
  url: string;
}

export default function PageTitle({ title, subtitle, url }: PageTitleProps) {
  return (
    <PageTitleWrapper>
      {url === "" ? (
        <>
          <TitleWrapper>{title}</TitleWrapper>
          <SubTitleWrapper>{subtitle}</SubTitleWrapper>
        </>
      ) : (
        <>
          <TitleWrapper>
            <BackButton url={url} />
            <span>{title}</span>
          </TitleWrapper>
          <SubTitleWrapper>{subtitle}</SubTitleWrapper>
        </>
      )}
    </PageTitleWrapper>
  );
}
