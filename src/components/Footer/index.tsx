import { Wrapper, MyLinks, MyLink, SecionTitlte, Footersection } from './styles'

const currentYear = new Date().getFullYear()
const Footer = () => {
  return (
    <Wrapper>
      <div className="wrapper">
        <Footersection>
          <SecionTitlte>Categorias</SecionTitlte>
          <MyLinks>
            <li>
              <MyLink>RPG</MyLink>
            </li>
            <li>
              <MyLink>Ação</MyLink>
            </li>
            <li>
              <MyLink>Aventura</MyLink>
            </li>
            <li>
              <MyLink>Esportes </MyLink>
            </li>
            <li>
              <MyLink>Estratégia</MyLink>
            </li>
            <li>
              <MyLink>FPS</MyLink>
            </li>
          </MyLinks>
        </Footersection>
        <Footersection>
          <SecionTitlte>Acesso Rapido</SecionTitlte>
          <MyLinks>
            <li>
              <MyLink>Novidades</MyLink>
            </li>
            <li>
              <MyLink>Promoçoes</MyLink>
            </li>
            <li>
              <MyLink>EmBreve</MyLink>
            </li>
          </MyLinks>
        </Footersection>
        <p>{currentYear} - &copy;Eplay Todos os Direiots Reservados </p>
      </div>
    </Wrapper>
  )
}
export default Footer
