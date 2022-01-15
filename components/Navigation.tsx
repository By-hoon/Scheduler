import Link from "next/link";
import styled from "styled-components";

const NavigationBar = styled.nav`
  height: 100px;
  border: black 2px solid;
`;

const NavigationButton = styled.a``;

export default function Navigation() {
  return (
    <NavigationBar>
      <Link href="/">
        <NavigationButton>홈</NavigationButton>
      </Link>
    </NavigationBar>
  );
}
