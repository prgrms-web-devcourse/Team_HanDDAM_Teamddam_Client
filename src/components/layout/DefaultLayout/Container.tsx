import styled from "@emotion/styled";
import { forwardRef, ReactNode, useEffect, useState } from "react";

const Container = forwardRef<HTMLDivElement, { children: ReactNode }>(
  ({ children }, ref) => {
    const [height, setHeight] = useState<number>(0);

    const handleResize = () => setHeight(window.innerHeight);

    useEffect(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <StyledContainer ref={ref} height={height}>
        {children}
      </StyledContainer>
    );
  }
);

export default Container;

const StyledContainer = styled.div<{ height: number }>`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  max-width: 640px;
  margin: auto;
  background-color: #fafafa;
  height: ${({ height }) => `${height}`}px;
`;
