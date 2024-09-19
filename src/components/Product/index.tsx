import Tag from '../Tag'
import { CardProduct, DescProduct, Infos, TitleProduct } from './styles'

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
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }
    return description
  }
  return (
    <CardProduct to={`/produto/${id}`}>
      <img src={image} alt="{title}" />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <TitleProduct>{title}</TitleProduct>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <DescProduct>{getDescription(description)}</DescProduct>
    </CardProduct>
  )
}

export default Product
