import { Title, Wrapper } from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => {
  return (
    <Wrapper background={background}>
      <div className="wrapper">
        <Title>{title}</Title>
        {children}
      </div>
    </Wrapper>
  )
}

export default Section
