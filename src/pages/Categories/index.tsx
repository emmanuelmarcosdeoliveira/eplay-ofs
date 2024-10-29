import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fithGames, isLoading: isLoadingFigth } = useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportGames, isLoading: isLoadingSports } =
    useGetSportGamesQuery()

  return (
    <>
      <ProductsList
        games={sportGames}
        title="Esportes"
        background="black"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={actionGames}
        title="Ação"
        background="primary"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={fithGames}
        title="Luta"
        background="primary"
        id="fight"
        isLoading={isLoadingFigth}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        games={simulationGames}
        title="simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
