import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Head from '../../Head'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isloadingSales } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Head
        title="Eplay | OFS "
        description="Eplay | OFS é a melhor plaltaforma de Venda de Games, encontre o seu Jogo Favorito aqui.Desenvolvida por Emmanuel Oliveira"
      />
      <Banner />
      <ProductsList
        id="on-sale"
        games={onSaleGames}
        title="Promoçoes"
        background="primary"
        isLoading={isloadingSales}
      />

      <ProductsList
        games={soonGames}
        title="Em Breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}
export default Home
