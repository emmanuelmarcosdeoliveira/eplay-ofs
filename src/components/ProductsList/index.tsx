import Product from '../Product'
import { Wrapper, List, Title } from './styles'
import Game from '../../models/Game'
export type Props = {
  title: string
  background: 'primary' | 'black'
  games: Game[]
}

const ProductsList = ({ title, background, games }: Props) => (
  <Wrapper background={background}>
    <div className="wrapper">
      <Title>{title}</Title>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Wrapper>
)

export default ProductsList
