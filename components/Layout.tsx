import styled from "styled-components";
import Navigation from "./Navigation";

const LayoutStyle = styled.div``;

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Navigation />
      <LayoutStyle>{children}</LayoutStyle>
    </>
  );
}
