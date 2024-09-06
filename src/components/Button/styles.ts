import styled from "styled-components"
import { colors } from "../../../styles/styles"
import {Link} from "react-router-dom"


export const ButtonContainer = styled.button`
border: 2px solid ${colors.white};
color: ${colors.white};
font-size: 16px;
font-weight: 700;
padding: 8px 16px;
background-color: transparent;
border-radius: 8px;
`

export const ButtonLink = styled(Link)`
border: 2px solid ${colors.white};
color: ${colors.white};
font-size: 16px;
font-weight: 700;
padding: 8px 16px;
background-color: transparent;
text-decoration: none;
border-radius: 8px;
`