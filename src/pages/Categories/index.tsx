import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gameSimulacao, setGameSimulacao] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))
    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res))
    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))
    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulacao(res))
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  }, [])

  return (
    <>
      <ProductsList games={gamesEsportes} title="Esportes" background="black" />
      <ProductsList games={gamesAcao} title="Ação" background="primary" />
      <ProductsList
        games={gameSimulacao}
        title="simulação"
        background="black"
      />
      <ProductsList games={gamesLuta} title="Luta" background="primary" />
      <ProductsList games={gamesRPG} title="RPG" background="black" />
    </>
  )
}

export default Categories
