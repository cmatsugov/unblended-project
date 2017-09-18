import { css } from 'styled-components'

export default {
  mobile: (...args) => css`
    @media (max-width: 480px) {
    ${css(...args)}
    }
  `
}