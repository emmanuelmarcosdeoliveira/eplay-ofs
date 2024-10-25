import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../../styles/styles'
import { TagContainer } from '../Tag/styles'

export const CardProduct = styled(Link)`
  background-color: ${colors.primary};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const TitleProduct = styled.h3`
  font-weight: 700;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const DescProduct = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
