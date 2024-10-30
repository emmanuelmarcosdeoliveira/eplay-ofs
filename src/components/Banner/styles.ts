import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { colors } from '../../../styles/styles'

export const Image = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  font-weight: 700;
  position: relative;
  a {
    transition: 0.4s;
    &:hover {
      background-color: ${colors.secondary};
    }
  }

  .wrapper {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }
  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    content: '';
  }
`
export const Title = styled.h2`
  font-size: 36px;
  max-width: 456px;
  width: 100%;
  display: block;
`

export const Prices = styled.p`
  font-size: 24px;
  margin-top: 24px;
  span {
    text-decoration: line-through;
  }
`
