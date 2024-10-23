import { useDispatch } from 'react-redux'
import { Game } from '../../pages/Home'
import { add, open } from '../../store/reducers/cart'
import Button from '../Button'
import { formatPrice } from '../ProductsList'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }
  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="wrapper">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span> De {formatPrice(game.prices.old)} </span>
            )}
            {game.prices.current && <>Por {formatPrice(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              onClick={addToCart}
              type="button"
              variant="primary"
              title="Adicone esse jogo ao carrinho"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
