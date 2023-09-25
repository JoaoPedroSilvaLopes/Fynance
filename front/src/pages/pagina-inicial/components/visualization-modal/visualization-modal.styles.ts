import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Card = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-width: 10rem;

    model-viewer {
      --progress-bar-color: ${theme.colors.secondaryDark};

      width: 100%;
      height: 50rem;
      background: ${lighten(0.15, theme.colors.secondaryLight)};
      border-radius: 0rem 0rem 0.5rem 0.5rem;
    }
  `}
`;
