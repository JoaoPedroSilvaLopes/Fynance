import styled from 'styled-components'

export const List = styled.ul`
  font-size: 0.9rem;
  text-align: left;
  padding: 0;
  opacity: 0.85;
  margin: 0.5rem 0 0;
  list-style: disc;

  &:last-child {
    margin-top: 0;
  }

  &:first-child {
    margin-bottom: 0;
  }
`

export const Item = styled.li`
  position: relative;
  margin: 0 0 0.3rem 1rem;
  padding: 0;

  &:last-child {
    margin-bottom: 0;
  }
`
