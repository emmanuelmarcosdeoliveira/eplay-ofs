import styled from 'styled-components'
import { breakPoints, colors } from '../../../styles/styles'
import { CardProduct } from '../Product/styles'
import { Props } from './index'

export const Wrapper = styled.section<
  Omit<Props, 'title' | 'games' | 'isLoading'>
>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.primary};
  ${CardProduct} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.primary : colors.black};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 32px;
  li {
    box-shadow: 2px 4px 4px ${colors.black};
  }
  @media (max-width: ${breakPoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
`
