import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

// const promocoes: Game[] = [
//   {
//     id: 1,
//     category: 'Ação',
//     description: 'REsident Evil 4 ',
//     title: 'Resident Evil',
//     system: 'Windows',
//     infos: ['10%', 'R$ 250.00'],
//     image: resident
//   },
//   {
//     id: 2,
//     category: 'Ação',
//     description: 'REsident Evil 4 ',
//     title: 'Resident Evil',
//     system: 'PS5',
//     infos: ['5%', 'R$ 290.00'],
//     image: resident
//   },
//   {
//     id: 3,
//     category: 'Ação',
//     description: 'REsident Evil 4 ',
//     title: 'Resident Evil',
//     system: 'Windows',
//     infos: ['10%', 'R$ 250.00'],
//     image: resident
//   },
//   {
//     id: 4,
//     category: 'Ação',
//     description: 'REsident Evil 4 ',
//     title: 'Resident Evil',
//     system: 'Windows',
//     infos: ['10%', 'R$ 250.00'],
//     image: resident
//   }
// ]

// const emBreve: Game[] = [
//   {
//     id: 5,
//     category: 'RPG',
//     description: 'El diablo',
//     title: 'Diablo 4',
//     system: 'windows',
//     infos: ['17/05'],
//     image: diablo
//   },
//   {
//     id: 6,
//     category: 'RPG',
//     description: 'Zelda',
//     title: 'Diablo 4',
//     system: 'nintendo Switch',
//     infos: ['17/05'],
//     image: zelda
//   },
//   {
//     id: 7,
//     category: 'RPG',
//     description: 'Strar Wars',
//     title: 'StarWars',
//     system: 'PS5',
//     infos: ['17/05'],
//     image: starWars
//   },
//   {
//     id: 8,
//     category: 'RPG',
//     description: 'El diablo',
//     title: 'Diablo 4',
//     system: 'Windows',
//     infos: ['17/05'],
//     image: diablo
//   }
// ]

export interface GaleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GaleryItem[]
  }
}

const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoçoes" background="primary" />
      <ProductsList games={emBreve} title="Em Breve" background="black" />
    </>
  )
}

export default Home
