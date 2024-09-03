import styled from "styled-components"
import { colors } from "../../../styles/styles"
import {Props} from "./index"


export const TagContainer = styled.div<Props>`
background-color: ${colors.secondary};
font-size: ${props => props.size === 'big' ? '16px' : '10px' };
font-weight: 700;
padding: ${props => props.size === 'big' ? ' 8px 16px' : '4px 6px' };
border-radius: 8px;
display: inline-block;
`

