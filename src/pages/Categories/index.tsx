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
        <ProductsList
          games={sportGames}
          title="Esportes"
          background="black"
          id="sports"
        />
        <ProductsList
          games={actionGames}
          title="Ação"
          background="primary"
          id="action"
        />
        <ProductsList
          games={fithGames}
          title="Luta"
          background="primary"
          id="fight"
        />
        <ProductsList
          games={rpgGames}
          title="RPG"
          background="black"
          id="rpg"
        />
        <ProductsList
          games={simulationGames}
          title="simulação"
          background="black"
          id="simulation"
        />
      </>
    )
  }
  return <h4>Carregando . . . </h4>
}

export default Categories
