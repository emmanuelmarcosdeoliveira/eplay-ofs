import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import { colors } from '../../../styles/styles'

export const Wrapper = styled.footer`
  background-color: ${colors.primary};
  padding-block: 32px;
  padding-inline: 0px;
  font-size: 14px;
  margin-top: 40px;
`

export const SecionTitlte = styled.h4`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 700;
`

export const MyLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
`

export const MyLink = styled(HashLink)`
  color: ${colors.tertiary};
  text-decoration: none;
  margin-right: 8px;
`

export const Footersection = styled.div`
  margin-bottom: 64px;
`
