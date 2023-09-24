import styled, { css } from 'styled-components'

export const MessageWrapper = styled.div`
  ${({ theme }) => css`
    .alert {
      border: none;

      .btn-close {
        padding: 0.5rem 0.5rem;
        top: 0.5rem;
        right: 0.75rem;
        background-size: 0.65rem;

        &:focus {
          box-shadow: none;
        }
      }
    }
  `}
`
