import { useParams } from 'react-router-dom'
import Gallery from '../../components/Gallery'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import { useGetGameQuery } from '../../services/api'
import Loader from '../../components/Loader'

type GameParams = {
  id: string
}

const Product = () => {
  const { id } = useParams() as GameParams
  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <Loader />
  }
  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o Jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <strong>Plataforma: </strong>
          {game.details.system}
          <br />
          <strong>Desenvolvedor: </strong> {game.details.developer}
          <br />
          <strong>Editora: </strong> {game.details.publisher}
          <br />
          <strong>Idiomas: </strong> O jogo oferece suporte a diversos idiomas,
          incluindo {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
