import styled, { css } from 'styled-components';
import { Panel } from '../../general';

export const Card = styled(Panel)`
  ${({ theme }) => css`
    model-viewer {
      --progress-bar-color: linear-gradient(
        90deg,
        ${theme.colors.secondaryDark} 0%,
        ${theme.colors.primaryDark} 100%
      );

      border: 1px solid red;
      height: 100%;
      width: 100%;
      background-color: ${theme.colors.secondary};
      border-radius: 1rem;
    }
  `}
`;
