import React, { ReactNode, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { BottomNavigation, TopNavigation } from "@components/domain";
import { useNavigationContext } from "@contexts/hooks";
import Container from "./Container";

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  const { navigationProps } = useNavigationContext();
  const { isBottomNavigation, isTopNavigation } = navigationProps;

  const [isTransparent, setIsTransparent] = useState(true);

  const topNavigationRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () =>
    topNavigationRef.current &&
    setIsTransparent(topNavigationRef.current.offsetTop < 56);

  useEffect(() => {
    containerRef.current?.addEventListener("scroll", handleScroll);
    return () =>
      containerRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container ref={containerRef}>
      {isTopNavigation && (
        <TopNavigation ref={topNavigationRef} isTransparent={isTransparent} />
      )}
      <StyledMain>{children}</StyledMain>
      {isBottomNavigation && <BottomNavigation />}
    </Container>
  );
};

export default DefaultLayout;

const StyledMain = styled.main`
  flex: 1;
`;
