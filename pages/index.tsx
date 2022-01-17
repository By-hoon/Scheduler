import styled from "styled-components";
import Auth from "hooks/useAuth";
import Loding from "components/Loding";
import Seo from "components/SEO";
import Router from "next/router";

export default function Home() {
  const userObj = Auth();

  const moveLogin = () => {
    Router.push("/login");
  };
  return (
    <>
      {userObj === undefined ? (
        <Loding />
      ) : userObj === null ? (
        moveLogin()
      ) : (
        <>
          <Seo title="홈 | Scheduler" />
        </>
      )}
    </>
  );
}
