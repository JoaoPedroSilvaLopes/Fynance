import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  padding: 0.3125rem;
  background-color: ${props => props.theme.colors.fixedGrayInput};
  border-radius: 50%;

  svg {
    font-size: 1.3rem;
  }

  &:hover {
    filter: brightness(0.8);
  }
`
