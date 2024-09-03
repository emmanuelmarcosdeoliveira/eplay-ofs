import styled from "styled-components";
import { colors } from "../../../styles/styles";
import { TagContainer } from "../Tag/styles";

export const CardProduct = styled.div`
  background-color: ${colors.primary};
  border-radius: 8px;
  padding: 8px;
  ${TagContainer} {
    margin-right: 8px;
  }
`;

export const TitleProduct = styled.h3`
  font-weight: 700;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const DescProduct = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`;
