import React from 'react'
import styled from 'styled-components'
import dialog from './DialogIcon'
import photography from './PhotographyIcon'
import actionPlan from './ActionPlanIcon'

const Icons = {
  dialog,
  photography,
  actionPlan
}

const Strong = styled.strong`
display: block;
text-align: center;
`

export default ({ type, label }) => (
  <span>
    {React.createElement(Icons[type])}
    {label && <Strong>{label}</Strong>}
  </span>
)