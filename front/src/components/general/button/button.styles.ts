import styled from 'styled-components';
import { darken } from 'polished';

type ButtonWrapperProps = {
  isFull?: boolean;
  variant?: 'primary' | 'secondary' | 'warning' | 'danger';
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.375rem 1.25rem;
    border-radius: 6px;
    height: 2.5rem;
    width: ${(props) => (props.isFull ? '100%' : 'inherit')};
    color: ${(props) => {
      switch (props.variant) {
        case 'danger':
          return (props) => props.theme.colors.danger;
        case 'warning':
          return (props) => props.theme.colors.warning;
        case 'secondary':
          return (props) => props.theme.colors.secondary;
        default:
          return (props) => props.theme.colors.primary;
      }
    }};

    background-color: ${(props) => {
      switch (props.variant) {
        case 'danger':
          return (props) => props.theme.colors.danger;
        case 'warning':
          return (props) => props.theme.colors.warning;
        case 'secondary':
          return (props) => props.theme.colors.secondary;
        default:
          return (props) => props.theme.colors.primary;
      }
    }};

    color: ${(props) => props.theme.colors.background};
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
    &:active:focus {
      outline: 0;
      box-shadow: none;
      background-color: ${(props) => {
        switch (props.variant) {
          case 'danger':
            return (props) => darken(0.075, props.theme.colors.danger);
          case 'warning':
            return (props) => darken(0.075, props.theme.colors.warning);
          case 'secondary':
            return (props) => darken(0.075, props.theme.colors.secondary);
          default:
            return (props) => darken(0.075, props.theme.colors.primary);
        }
      }};
    }

    &:hover {
      cursor: pointer;
      background-color: ${(props) => {
        switch (props.variant) {
          case 'danger':
            return (props) => darken(0.075, props.theme.colors.danger);
          case 'warning':
            return (props) => darken(0.075, props.theme.colors.warning);
          case 'secondary':
            return (props) => darken(0.075, props.theme.colors.secondary);
          default:
            return (props) => darken(0.075, props.theme.colors.primary);
        }
      }};
    }

    &:disabled {
      cursor: not-allowed;
      pointer-events: all !important;
      background-color: ${(props) => {
        switch (props.variant) {
          case 'danger':
            return (props) => darken(0.075, props.theme.colors.danger);
          case 'warning':
            return (props) => darken(0.075, props.theme.colors.warning);
          case 'secondary':
            return (props) => darken(0.075, props.theme.colors.secondary);
          default:
            return (props) => darken(0.075, props.theme.colors.primary);
        }
      }};
    }

    & * + * {
      margin-left: 0.5rem;
    }
  }
`;
