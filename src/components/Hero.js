import styled from 'styled-components'

export default styled.div`
width: 100vw;
height: 50vh;
min-height: 300px;
background-image: url('${({ image }) => image}');
background-position: center center;
background-size: cover;
`
