import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../../styles/styles'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) =>
      props.variant === 'primary' ? colors.secondary : colors.white};
  color: ${colors.white};
  font-size: 16px;
  font-weight: 700;
  padding: 8px 16px;
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.secondary : 'transparent'};
  border-radius: 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.white};
  color: ${colors.white};
  font-size: 16px;
  font-weight: 700;
  padding: 8px 16px;
  background-color: transparent;
  text-decoration: none;
  border-radius: 8px;
`
