import * as S from './styles'

const currentYear = new Date().getFullYear()
const Footer = () => {
  return (
    <S.Wrapper>
      <div className="wrapper">
        <S.Footersection>
          <S.SecionTitlte>Categorias</S.SecionTitlte>
          <S.MyLinks>
            <li>
              <S.MyLink
                title="Clique aqui para acessar jogos de RPG"
                to="/categorias#rpg"
              >
                RPG
              </S.MyLink>
            </li>
            <li>
              <S.MyLink
                title="Clique aqui para acessar jogos de ação"
                to="/categorias#action"
              >
                Ação
              </S.MyLink>
            </li>
            <li>
              <S.MyLink
                title="Clique aqui para acessar jogos de esportes"
                to="/categorias#sports"
              >
                Esportes{' '}
              </S.MyLink>
            </li>
            <li>
              <S.MyLink
                title="Clique aqui para acessar jogos de simulaçao"
                to="/categorias#simulation"
              >
                Simulação
              </S.MyLink>
            </li>
            <li>
              <S.MyLink
                title="Clique aqui para acessar jogos de luta"
                to="/categorias#fight"
              >
                Luta
              </S.MyLink>
            </li>
          </S.MyLinks>
        </S.Footersection>
        <S.Footersection>
          <S.SecionTitlte>Acesso Rapido</S.SecionTitlte>
          <S.MyLinks>
            <li>
              <S.MyLink
                title="Clique aqui para acessar a seção de promoções"
                to="/#on-sale"
              >
                Promoçoes
              </S.MyLink>
            </li>
            <li>
              <S.MyLink
                title="Clique aqui para acessar a seção emBreve"
                to="/#coming-soon"
              >
                EmBreve
              </S.MyLink>
            </li>
          </S.MyLinks>
        </S.Footersection>
        <p>{currentYear} - &copy;Eplay Todos os Direiots Reservados </p>
      </div>
    </S.Wrapper>
  )
}
export default Footer
