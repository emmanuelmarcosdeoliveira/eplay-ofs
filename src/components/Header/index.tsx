import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import carrinho from '../../assets/svg/carrinho.svg'
import logo from '../../assets/svg/logo.svg'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import { CartButton, HeaderBar, LinkItem, Links } from './styles'
const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      <HeaderBar>
        <div>
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
          {items.length} - produto(s)
          <img src={carrinho} alt="Carrinho de compras" />
        </CartButton>
      </HeaderBar>
    </>
  )
}

export default Header
