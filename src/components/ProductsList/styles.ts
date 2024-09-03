import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 32px 0;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  margin-top: 32px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;
