import styled from 'styled-components'
import { breakPoints, colors } from '../../../styles/styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
  @media (max-width: ${breakPoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  background-color: ${colors.primary};
  padding: 24px;
  color: ${colors.white};
  border-radius: 16px;
  margin-bottom: 80px;
  a,
  span {
    color: ${colors.tertiary};
    text-decoration: none;
    font-weight: 700;
    transition: all.2s;
    &:hover {
      color: ${colors.white};
    }
  }
  h1 {
    line-height: 0;
  }
`
export const NavMobile = styled.nav`
  display: none;
  &.is-open {
    display: block;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;
  position: relative;
  a.active {
    color: ${colors.white};
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -2px;
      left: -8px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: ${colors.secondary};
    }
  }

  @media (max-width: ${breakPoints.tablet}) {
    margin-right: 0;
    a {
      padding: 16px 0;
      display: block;
      text-align: center;
    }
    a.active {
      color: ${colors.white};
      &::before {
        content: '';
        display: none;
      }
    }
  }
`

export const CartButton = styled.span`
  display: flex;
  cursor: pointer;
  img {
    margin-left: 16px;
  }
  @media (max-width: ${breakPoints.tablet}) {
    span {
      display: none;
    }
  }
`
export const Hamburger = styled.div`
  width: 32px;
  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${colors.white};
    margin-bottom: 4px;
    @media (min-width: ${breakPoints.tablet}) {
      display: none;
    }
  }
`
export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    @media (max-width: ${breakPoints.tablet}) {
      flex: 1;
      justify-content: space-between;
      ${Links} {
        display: none;
      }
    }
  }
`
