import styled from 'styled-components'

type ButtonWrapperProps = {
  isFull?: boolean
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  button {
    font-size: 1rem;
    padding: 0.375rem 0.75rem;
    border: 2px solid transparent;

    &.btn-sm {
      font-size: 0.875rem;
      padding: 0.25rem 0.5rem;
    }

    &.btn-lg {
      font-size: 1.25rem;
      padding: 0.5rem 1rem;
    }
  }
`
