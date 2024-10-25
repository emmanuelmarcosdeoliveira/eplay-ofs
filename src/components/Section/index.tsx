import * as S from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => {
  return (
    <S.Wrapper background={background}>
      <div className="wrapper">
        <S.Title>{title}</S.Title>
        {children}
      </div>
    </S.Wrapper>
  )
}

export default Section
