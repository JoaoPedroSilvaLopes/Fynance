import { WaveIcon as WaveComponent } from '../../assets'
import { mediaQuery } from '../../core'
import styled from 'styled-components'

export const Container = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.75rem;

  button {
    font-size: 1.1rem;
  }
`

export const Code = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.75rem;
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.secondaryDark};
  margin-bottom: 0.75rem;
`

export const Description = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.secondaryLight};
  margin-bottom: 3rem;
`

export const WaveIcon = styled(WaveComponent)`
  display: none;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 30vh;
  width: 100%;

  fill: ${props => props.theme.colors.primary};

  ${mediaQuery.greaterThan('mobile')`
    display: block;
  `}
`
