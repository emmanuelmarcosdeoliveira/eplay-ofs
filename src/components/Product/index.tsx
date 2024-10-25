import Tag from '../Tag'
import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    }
    return text
  }
  return (
    <S.CardProduct
      title={`Clique aqui para ver mais detalhes do jogo: ${title}`}
      to={`/produto/${id}`}
    >
      <img src={image} alt="{title}" />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.TitleProduct>{title}</S.TitleProduct>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.DescProduct>{getDescription(description)}</S.DescProduct>
    </S.CardProduct>
  )
}

export default Product
