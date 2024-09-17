import hogwarts from '../../assets/images/hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => {
  return (
    <Banner style={{ backgroundImage: `url(${hogwarts})` }}>
      <div className="wrapper">
        <div>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </div>
        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span> De R$ 250,00 </span>
            Por R$ 190,00
          </p>
          <Button
            type="button"
            variant="primary"
            title="Adicone esse jogo ao carrinho"
          >
            Adicionar ao carrinho
          </Button>
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
