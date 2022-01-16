import Seo from "components/SEO";
import { useRouter } from "next/router";
import styled from "styled-components";

const WelcomeSpan = styled.span``;

export default function Welcome() {
  const router = useRouter();
  return (
    <>
      <Seo title="환영합니다 | Scheduler" />
      <WelcomeSpan>Welcome {router.query.name}</WelcomeSpan>
    </>
  );
}
