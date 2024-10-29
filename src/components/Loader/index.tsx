import { PacmanLoader } from 'react-spinners'
import { colors } from '../../../styles/styles'
import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <PacmanLoader color={colors.secondary} />
    </Container>
  )
}
export default Loader
