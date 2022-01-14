import styled from "styled-components";
import Auth from "hooks/useAuth";
import LogInRequest from "components/LogInRequest";
import Loding from "components/Loding";
import Seo from "components/SEO";

const LoggedInContainer = styled.div``;
const LoggedInSpan = styled.span``;

export default function Home() {
  const userObj = Auth();
  return (
    <>
      {userObj === undefined ? (
        <Loding />
      ) : userObj === null ? (
        <LogInRequest />
      ) : (
        <>
          <Seo title="홈 | Scheduler" />
          <LoggedInContainer>
            <LoggedInSpan>Welcome {userObj.uName}</LoggedInSpan>
          </LoggedInContainer>
        </>
      )}
    </>
  );
}
