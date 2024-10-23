import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fithGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && fithGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductsList games={sportGames} title="Esportes" background="black" />
        <ProductsList games={actionGames} title="Ação" background="primary" />
        <ProductsList games={fithGames} title="Luta" background="primary" />
        <ProductsList games={rpgGames} title="RPG" background="black" />
        <ProductsList
          games={simulationGames}
          title="simulação"
          background="black"
        />
      </>
    )
    return <h4>Carregando . . . </h4>
  }
}

export default Categories
