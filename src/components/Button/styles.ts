import styled from "styled-components"
import { colors } from "../../styles"
import {Link} from "react-router-dom"


export const ButtonContainer = styled.button`
border: 2px solid ${colors.color1};
color: ${colors.color1};
font-size: 16px;
font-weight: 700;
padding: 8px 16px;
background-color: transparent;
border-radius: 8px;
`

export const ButtonLink = styled(Link)`
border: 2px solid ${colors.color1};
color: ${colors.color1};
font-size: 16px;
font-weight: 700;
padding: 8px 16px;
background-color: transparent;
text-decoration: none;
border-radius: 8px;
`