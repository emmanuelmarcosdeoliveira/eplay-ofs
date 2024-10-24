import styled from 'styled-components'
import { colors } from '../../../styles/styles'

export const Container = styled.div`
  border-radius: 8px;
  background-color: ${colors.primary};
  padding: 24px;
  margin-block: 40px;
  h2,
  h3 {
    font-size: 18px;
    font-weight: 18px;
    color: ${colors.white};
    margin-bottom: 24px;
  }
  .marginTop {
    margin-top: 24px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
  }
`
