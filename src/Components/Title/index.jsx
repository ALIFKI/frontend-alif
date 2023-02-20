import styled from 'styled-components'

const Title = styled.h3`
font-size: 2rem;
color : ${props => props.color?? '#FFF'};
margin-bottom: 2rem;
`

export default Title;