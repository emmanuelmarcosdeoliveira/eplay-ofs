import styled from 'styled-components'
import { breakPoints, colors } from '../../../styles/styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 480px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 16px;

  &::after {
    position: absolute;
    background-color: ${colors.black};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
  .wrapper {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
  @media (max-width: ${breakPoints.tablet}) {
    background-size: cover;
  }
`
export const Infos = styled.div`
  padding: 16px;
  background-color: ${colors.black};
  opacity: 0.8;
  max-width: 290px;
  font-weight: 700;
  margin-bottom: 16px;
  border-radius: 16px;
  h2 {
    font-size: 32px;
  }
  p {
    font-size: 18px;
    padding-block: 16px;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
