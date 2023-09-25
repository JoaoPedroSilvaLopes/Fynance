import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.textPrimary};
    height: 12rem;
    width: auto;
    min-width: 10rem;
    border-radius: 0.5rem;

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
      background: ${theme.colors.secondaryLight};
      border-radius: 0.5rem;
    }
  `}
`;
