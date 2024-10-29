import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

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
  const { data: onSaleGames, isLoading: isloadingSales } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
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
