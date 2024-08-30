import { ButtonContainer, ButtonLink } from "./styles"

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string 
  onClick?: () => void 
  children: string
}


export const  Button = ({type, title, to, onClick, children}: Props) => {

  if(type === 'button' ) {
    return (
<ButtonContainer type="button" title={title} onClick={onClick}  > {children}</ButtonContainer>
    )
  }
return (
  <ButtonLink title="title" to={to as string}>
    {children}
  </ButtonLink>
)

}



export default Button