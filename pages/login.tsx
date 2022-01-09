import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { authService, dbService, firebaseInstance } from "../firebase/fBase";

const LoginButton = styled.button``;

export default function Login() {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    if (data.additionalUserInfo.isNewUser) {
      await dbService.collection(`userInfo`).doc(`${data.user.uid}`).set({
        userName: data.user.displayName,
      });
    }
  };
  return (
    <>
      <LoginButton onClick={onSocialClick} name="google">
        Google로 시작하기 <FontAwesomeIcon icon={faGoogle} />
      </LoginButton>
      <LoginButton onClick={onSocialClick} name="github">
        Github로 시작하기 <FontAwesomeIcon icon={faGithub} />
      </LoginButton>
    </>
  );
}
