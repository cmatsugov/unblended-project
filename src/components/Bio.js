import React from 'react'
import H3 from './H3'
import H4 from './H4'
import Paragraph from './Paragraph'
import Anchor from './Anchor'

export default ({ name, title, twitter, image, children }) => (
  <div>
    <H3>{name}</H3>
    <H4>{title}</H4>
    <H4><Anchor to={`https://twitter.com/${twitter}`}>{twitter}</Anchor></H4>    
    <div style={{ display: 'flex' }}>
      <img src={image} height="300" />
      <div style={{ padding: '0 20px' }}>
        {children}
      </div>
    </div>
  </div>
)