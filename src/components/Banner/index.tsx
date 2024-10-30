import { useGeatFeatureGameQuery } from '../../services/api'
import { parseToBrl } from '../../utils'
import Button from '../Button'
import Loader from '../Loader'
import Tag from '../Tag'
import * as S from './styles'

const Banner = () => {
  const { data: game } = useGeatFeatureGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="wrapper">
        <Tag size="big">Destaque do dia</Tag>
        <div className="animeLeft">
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <span>{parseToBrl(game.prices.old)}</span>
            <br /> por apenas {parseToBrl(game.prices.current)}
          </S.Prices>
        </div>
        <div className="animeRigth">
          <Button
            title="Clique aqui e Aproveite a oferta"
            type="link"
            to={`/produto/${game.id}`}
          >
            Aproveitar
          </Button>
        </div>
      </div>
    </S.Image>
  )
}

export default Banner
