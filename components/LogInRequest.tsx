import Link from "next/link";
import styled from "styled-components";

const RequestContainer = styled.div``;

const InfoContainer = styled.div``;

const InfoSpan = styled.span``;

const LogInButton = styled.a``;

const LogInRequest = () => {
  return (
    <RequestContainer>
      <InfoContainer>
        <InfoSpan>로그인이 필요한 서비스입니다.</InfoSpan>
      </InfoContainer>
      <Link href="/login">
        <LogInButton>로그인</LogInButton>
      </Link>
    </RequestContainer>
  );
};

export default LogInRequest;
