import styled, { css } from 'styled-components';
import { mediaQuery } from '../../../core';

export const Card = styled.div`
  ${({ theme }) => css`
    width: auto;
    min-width: 10rem;

    &:hover {
      border-radius: 0.5rem;
      model-viewer {
        background: linear-gradient(
          90deg,
          ${theme.colors.secondaryDark} 0%,
          ${theme.colors.primaryDark} 100%
        );
      }
    }

    model-viewer {
      --progress-bar-color: ${theme.colors.secondaryDark};

      width: 100%;
      height: 12rem;
      background: ${theme.colors.background};
      border-radius: 0rem 0rem 0.5rem 0.5rem;
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    font-size: 0.8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    color: ${theme.colors.background};

    ${mediaQuery.greaterThan('mobile')`
      font-size: 1rem;
    `}

    ${mediaQuery.greaterThan('tablet')`
      font-size: 1.2rem;
    `}

    height: 3rem;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    background: linear-gradient(
      90deg,
      ${theme.colors.secondaryDark} 0%,
      ${theme.colors.primaryDark} 100%
    );
  `}
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: 5px;
  `}
`;
