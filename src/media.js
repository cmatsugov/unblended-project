import { css } from 'styled-components'

export default {
  mobile: (...args) => css`
    @media (max-width: 640px) {
    ${css(...args)}
    }
  `
}