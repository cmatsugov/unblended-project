import styled from 'styled-components'
import media from '../media'

export default styled.nav`
background: #fff;
height: 40px;
margin: 0;
padding: 0;
display: flex;
align-items: center;
justify-content: flex-end;
flex-flow: row wrap;
${media.mobile`
  justify-content: center;
  height: 80px;
`}
`