import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import carrinho from '../../assets/svg/carrinho.svg'
import logo from '../../assets/svg/logo.svg'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import {
  CartButton,
  Hamburger,
  HeaderBar,
  HeaderRow,
  LinkItem,
  Links,
  NavMobile
} from './styles'
const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      <HeaderBar>
        <HeaderRow>
          <div>
            <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span />
              <span />
              <span />
            </Hamburger>
            <Link to="/">
              <img src={logo} alt="Eplay" />
            </Link>
            <nav>
              <Links>
                <LinkItem>
                  <NavLink to="/categorias">Categorias</NavLink>
                </LinkItem>
                <LinkItem>
                  <NavLink to="/utilidades">Utilidades</NavLink>
                </LinkItem>
                <LinkItem>
                  <NavLink to="/promocoes">Promoçoes</NavLink>
                </LinkItem>
              </Links>
            </nav>
          </div>
          <CartButton onClick={openCart}>
            {items.length} <span> - produto(s)</span>
            <img src={carrinho} alt="Carrinho de compras" />
          </CartButton>
        </HeaderRow>
        <NavMobile className={isMenuOpen ? 'is-open' : ''}>
          <Links>
            <LinkItem>
              <NavLink to="/categorias">Categorias</NavLink>
            </LinkItem>
            <LinkItem>
              <NavLink to="/utilidades">Utilidades</NavLink>
            </LinkItem>
            <LinkItem>
              <NavLink to="/promocoes">Promoçoes</NavLink>
            </LinkItem>
          </Links>
        </NavMobile>
      </HeaderBar>
    </>
  )
}

export default Header
