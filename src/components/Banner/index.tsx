import { useGeatFeatureGameQuery } from '../../services/api'
import Button from '../Button'
import { formatPrice } from '../ProductsList'
import Tag from '../Tag'
import { Imagem, Precos, Title } from './styles'

const Banner = () => {
  const { data: game, isLoading } = useGeatFeatureGameQuery()

  if (!game) {
    return <h3>'carregando...'</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="wrapper">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Precos>
            De <span>{formatPrice(game.prices.old)}</span>
            <br /> por apenas {formatPrice(game.prices.current)}
          </Precos>
        </div>
        <div>
          <Button
            type="link"
            to={`/produto/${game.id}`}
            title="Clique aqui e Aproveite a oferta"
          >
            Aproveitar
          </Button>
        </div>
      </div>
    </Imagem>
  )
}

export default Banner
