import styled from "styled-components";
import Auth from "hooks/useAuth";
import LogInRequest from "components/LogInRequest";
import Loding from "components/Loding";

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
        <LoggedInContainer>
          <LoggedInSpan>Welcome {userObj.uName}</LoggedInSpan>
        </LoggedInContainer>
      )}
    </>
  );
}
