import Paragraph from './Paragraph'
import media from '../media'

export default Paragraph.extend`
padding: 20px;
margin: 10px;
border-radius: 3px;
max-width: 320px;
color: ${({ theme }) => theme.primary};
border: ${({ border, theme }) => border ? `2px solid ${theme.primary}` : 'none'};
& svg {
  display: block;
  margin: 0 auto;
  width: 64px;
  padding-bottom: 20px;
  fill: ${({ theme }) => theme.primary};
}
${media.mobile`
  flex-basis: 100%;
`}
`