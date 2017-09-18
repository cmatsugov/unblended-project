import React from 'react'
import styled from 'styled-components'
import dialog from './DialogIcon'
import photography from './PhotographyIcon'
import actionPlan from './ActionPlanIcon'
import website from './WebsiteIcon'
import zine from './ZineIcon'

const Icons = {
  dialog,
  photography,
  actionPlan,
  website,
  zine,
}

const Strong = styled.strong`
display: block;
text-align: center;
padding-bottom: 10px;
`

export default ({ type, label }) => (
  <span>
    {React.createElement(Icons[type])}
    {label && <Strong>{label}</Strong>}
  </span>
)