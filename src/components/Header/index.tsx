import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import cartIcon from '../../assets/svg/carrinho.svg'
import logo from '../../assets/svg/logo.svg'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import * as S from './styles'
const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      <S.HeaderBar>
        <S.HeaderRow>
          <div>
            <S.Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span />
              <span />
              <span />
            </S.Hamburger>
            <Link to="/">
              <img src={logo} alt="Eplay" />
            </Link>
            <nav>
              <S.Links>
                <S.LinkItem>
                  <NavLink
                    title="Clique aqui para acessar a página de categorias"
                    to="/categorias"
                  >
                    Categorias
                  </NavLink>
                </S.LinkItem>
                <S.LinkItem>
                  <HashLink
                    title="Clique aqui para acessar a seção de EmBreve"
                    to="/#coming-soon"
                  >
                    EmBreve
                  </HashLink>
                </S.LinkItem>
                <S.LinkItem>
                  <HashLink
                    title="Clique aqui para acessar a seçao de  e promoções"
                    to="/#on-sale"
                  >
                    Promoçoes
                  </HashLink>
                </S.LinkItem>
              </S.Links>
            </nav>
          </div>
          <S.CartButton onClick={openCart}>
            {items.length} <span> - produto(s)</span>
            <img src={cartIcon} alt="Carrinho de compras" />
          </S.CartButton>
        </S.HeaderRow>
        <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
          <S.Links>
            <S.LinkItem>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                title="Clique aqui para acessar a página de categorias"
                to="/categorias"
              >
                Categorias
              </NavLink>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink
                onClick={() => setIsMenuOpen(false)}
                title="Clique aqui para acessar a seção de EmBreve"
                to="/#coming-soon"
              >
                EmBreve
              </HashLink>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink
                onClick={() => setIsMenuOpen(false)}
                title="Clique aqui para acessar a seçao de  e promoções"
                to="/#on-sale"
              >
                Promoçoes
              </HashLink>
            </S.LinkItem>
          </S.Links>
        </S.NavMobile>
      </S.HeaderBar>
    </>
  )
}

export default Header
