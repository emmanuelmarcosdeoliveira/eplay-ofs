import styled from 'styled-components'
import { colors } from '../../../styles/styles'
import closeIcon from '../../assets/svg/close.svg'
import { ButtonContainer } from '../Button/styles'
import { TagContainer } from '../Tag/styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.7;
`
export const Sidebar = styled.aside`
  background-color: ${colors.primary};
  z-index: 1;
  padding-top: 40px;
  padding-inline: 16px;
  max-width: 360px;
  width: 100%;
  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
  ul {
    margin-top: 16px;
  }
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-bottom: 24px;

  span {
    display: block;
    color: ${colors.tertiary};
    font-size: 12px;
  }
`
export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
  padding-top: 32px;
  padding-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  padding-block: 8px;
  border-bottom: 1px solid ${colors.tertiary};
  position: relative;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
    box-shadow: 1px 1px 2px ${colors.black};
    border-radius: 4px;
  }
  div {
    h3 {
      font-weight: bold;
      font-size: 16px;
    }
    span {
      display: block;
      font-size: 14px;
      font-weight: bold;
    }
    ${TagContainer} {
      margin-right: 8px;
      margin-top: 8px;
      margin-bottom: 16px;
    }
  }
  button {
    background-image: url(${closeIcon});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 8px;
    right: 0;
    cursor: pointer;
  }
`
export const BtnMy = styled.button`
  background-image: url(${closeIcon});
  background-position: center center;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
  border: 1px solid ${colors.tertiary};
  padding: 16px;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 310px;
  cursor: pointer;
  margin-top: 8px;
`
