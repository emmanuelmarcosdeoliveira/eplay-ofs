import styled from 'styled-components'
import { Props } from './index'
import { colors } from '../../../styles/styles'
import { CardProduct } from '../Product/styles'

export const Wrapper = styled.section<Omit<Props, 'title' | 'games'>>`
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
  column-gap: 24px;
  margin-top: 32px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
`
