import { useLocation } from "react-router-dom";
import BackButton from "../button/BackButton";
import { PageTitleWrapper, TitleWrapper } from "./style";
import { SubTitleWrapper } from "./style";
import SubCheckIndex from "src/components/self-check/selfCheckIndex";

interface PageTitleProps {
  title: string;
  subtitle?: string;
  url: string;
  isSelfCheck?: boolean;
}

export default function PageTitle({
  title,
  subtitle,
  url,
  isSelfCheck,
}: PageTitleProps) {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <PageTitleWrapper>
      {url === "" ? (
        <>
          <TitleWrapper>{title}</TitleWrapper>
          <SubTitleWrapper>{subtitle}</SubTitleWrapper>
        </>
      ) : pathname === "/self-check" ? (
        <>
          <TitleWrapper>
            <BackButton url={url} isSelfCheck={isSelfCheck} />
            <span>{title}</span>
          </TitleWrapper>
          <SubCheckIndex />
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
