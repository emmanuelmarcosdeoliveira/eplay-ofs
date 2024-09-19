import styled from 'styled-components'
import { colors } from '../../../styles/styles'
import { CardProduct } from '../Product/styles'
import { Props } from './index'

export const Wrapper = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.primary};
  ${CardProduct} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.primary : colors.black};
  }
  p {
    font-size: 400;
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 40px;
`
