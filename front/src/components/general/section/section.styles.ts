import { rgba } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-bottom: 2px solid ${rgba(theme.colors.textPrimary, 0.25)};
    margin-bottom: 1rem;

    div {
      display: flex;
      align-items: center;
      margin-left: 0.25rem;

      :last-child {
        margin-left: auto;
      }
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primaryDark};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: 500;
    margin: 0.6rem 0;

    &.required::after {
      content: ' *';
      color: ${theme.colors.danger};
      font-size: 1rem;
    }
  `}
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
