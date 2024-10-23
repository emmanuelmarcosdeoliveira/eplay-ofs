import { Footersection, MyLink, MyLinks, SecionTitlte, Wrapper } from './styles'

const currentYear = new Date().getFullYear()
const Footer = () => {
  return (
    <Wrapper>
      <div className="wrapper">
        <Footersection>
          <SecionTitlte>Categorias</SecionTitlte>
          <MyLinks>
            <li>
              <MyLink to="/categorias#rpg">RPG</MyLink>
            </li>
            <li>
              <MyLink to="/categorias#action">Ação</MyLink>
            </li>
            <li>
              <MyLink to="/categorias#sports">Esportes </MyLink>
            </li>
            <li>
              <MyLink to="/categorias#simulation">Simulação</MyLink>
            </li>
            <li>
              <MyLink to="/categorias#fight">Luta</MyLink>
            </li>
          </MyLinks>
        </Footersection>
        <Footersection>
          <SecionTitlte>Acesso Rapido</SecionTitlte>
          <MyLinks>
            <li>
              <MyLink to="/#on-sale">Promoçoes</MyLink>
            </li>
            <li>
              <MyLink to="/#coming-soon">EmBreve</MyLink>
            </li>
          </MyLinks>
        </Footersection>
        <p>{currentYear} - &copy;Eplay Todos os Direiots Reservados </p>
      </div>
    </Wrapper>
  )
}
export default Footer
