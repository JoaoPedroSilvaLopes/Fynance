import styled, { css } from 'styled-components'

export const Container = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 calc(1.25rem - 0.75rem);

    background-color: ${theme.colors.secondaryDark};
  `}
`

export const StartWrapper = styled.div`
  svg {
    color: ${props => props.theme.colors.background};
    font-size: 1.6rem;
    margin: 0 0.75rem;
    cursor: pointer;
  }
`

export const MiddleWrapper = styled.span`
  color: ${props => props.theme.colors.background} !important;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const EndWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

