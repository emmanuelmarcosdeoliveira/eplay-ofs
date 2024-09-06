import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'REsident Evil 4 ',
    title: 'Resident Evil',
    system: 'Windows',
    infos: ['10%', 'R$ 250.00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description: 'REsident Evil 4 ',
    title: 'Resident Evil',
    system: 'PS5',
    infos: ['5%', 'R$ 290.00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description: 'REsident Evil 4 ',
    title: 'Resident Evil',
    system: 'Windows',
    infos: ['10%', 'R$ 250.00'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description: 'REsident Evil 4 ',
    title: 'Resident Evil',
    system: 'Windows',
    infos: ['10%', 'R$ 250.00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description: 'El diablo',
    title: 'Diablo 4',
    system: 'windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description: 'Zelda',
    title: 'Diablo 4',
    system: 'nintendo Switch',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description: 'Strar Wars',
    title: 'StarWars',
    system: 'PS5',
    infos: ['17/05'],
    image: starWars
  },
  {
    id: 8,
    category: 'RPG',
    description: 'El diablo',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  }
]

const Categories = () => {
  return (
    <>
      <ProductsList games={promocoes} title="RPG" background="primary" />
      <ProductsList games={emBreve} title="Ação" background="black" />
      <ProductsList games={emBreve} title="Aventura" background="primary" />
      <ProductsList games={emBreve} title="FPS" background="black" />
    </>
  )
}

export default Categories
