import styled, { css } from 'styled-components';
import { darken } from 'polished';

type ButtonWrapperProps = {
  isFull?: boolean;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  ${({ theme, isFull, variant, isLoading }) => css`
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.875rem;
      font-weight: 500;
      padding: 0.375rem 1.25rem;
      border-radius: 6px;
      height: 2.5rem;
      width: ${isFull ? '100%' : 'inherit'};
      background-color: ${variant === 'secondary'
        ? theme.colors.secondary
        : theme.colors.primary};

      color: ${theme.colors.background};
      border: 2px solid transparent !important;

      &.btn-sm {
        padding: 0.25rem 0.75rem;
        font-size: 0.75rem;
      }

      &.btn-lg {
        padding: 0.5rem 1.75rem;
        font-size: 1rem;
      }

      .spinner-border {
        vertical-align: sub !important;
      }

      &:active,
      &:focus,
      &:active:focus {
        outline: 0;
        box-shadow: none;
        background-color: ${variant === 'secondary'
          ? darken(0.075, theme.colors.secondary)
          : darken(0.075, theme.colors.primary)};
      }

      &:hover {
        cursor: pointer;
        background-color: ${variant === 'secondary'
          ? darken(0.075, theme.colors.secondary)
          : darken(0.075, theme.colors.primary)};
      }

      &:disabled {
        cursor: not-allowed;
        pointer-events: all !important;
        background-color: ${variant === 'secondary'
          ? darken(0.075, theme.colors.secondary)
          : darken(0.075, theme.colors.primary)};
      }

      & * + * {
        margin-left: 0.5rem;
      }
    }
  `}
`;
