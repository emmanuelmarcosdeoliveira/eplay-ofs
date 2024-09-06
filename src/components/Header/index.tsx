import { Link, NavLink } from 'react-router-dom'
import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/svg/logo.svg'
import carrinho from '../../assets/svg/carrinho.svg'

const Header = () => (
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
      <LinkCart href="#">
        0 - produto(s)
        <img src={carrinho} alt="Carrinho de compras" />
      </LinkCart>
    </HeaderBar>
  </>
)

export default Header
