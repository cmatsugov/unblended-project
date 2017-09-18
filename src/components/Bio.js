import React from 'react'
import styled from 'styled-components'
import H3 from './H3'
import H4 from './H4'
import Paragraph from './Paragraph'
import Anchor from './Anchor'
import media from '../media'

const BioContainer = styled.div`
${media.mobile`
& > * {
  text-align: center;
}`}
`

const BioContent = styled.div`
display: flex;
${media.mobile`
flex-flow: row wrap;
& > img {
  display: inline-block;
  margin: 0 auto;
}
& > p {
  flex-basis: 100%;
}
`}
`

export default ({ name, title, twitter, image, children }) => (
  <BioContainer>
    <H3>{name}</H3>
    <H4>{title}</H4>
    <H4><Anchor to={`https://twitter.com/${twitter}`}>{twitter}</Anchor></H4>    
    <BioContent>
      <img src={image} height="300" />
      <div style={{ padding: '0 20px' }}>
        {children}
      </div>
    </BioContent>
  </BioContainer>
)