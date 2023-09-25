import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const CurrencyModel = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 50%;
    background: ${lighten(0.15, theme.colors.secondaryLight)};
    box-shadow: 0px 0px 0.4rem 0.1rem ${lighten(0.8, theme.colors.textDark)};
    border-radius: 0.5rem;
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    min-width: 10rem;

    model-viewer {
      --progress-bar-color: ${theme.colors.secondaryDark};

      width: 100%;
      height: 100%;
      background: ${lighten(0.15, theme.colors.secondaryLight)};
      border-radius: 0.5rem;
    }
  `}
`;
