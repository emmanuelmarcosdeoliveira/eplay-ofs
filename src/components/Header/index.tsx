import { HeaderBar, Links, LinkItem, LinkCart } from './styles';
import logo from '../../assets/svg/logo.svg';
import carrinho from "../../assets/svg/carrinho.svg"


const Header = () => (
  <>
  <HeaderBar>
      <div>
        <a href="#">
      <img src={logo} alt="Eplay" />
        </a>
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categorias</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Utilidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoçoes</a>
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
);

export default Header;
