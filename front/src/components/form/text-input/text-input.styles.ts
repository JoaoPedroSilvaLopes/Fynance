import { darken, rgba } from 'polished';
import styled, { css } from 'styled-components';

type InputWrapperProps = {
  isInvalid: boolean;
  isDisabled: boolean;
  variant?: 'primary' | 'secondary';
};

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, isInvalid, isDisabled, variant }) => css`
    padding: 0rem 0.5rem !important;
    border: 2px solid ${theme.colors.backgroundContent};
    background-color: ${theme.colors.backgroundContent};
    border-radius: 0.3rem;

    transition: color 0.3s ease 0s, border-color 0.3s ease 0s,
      background-color 0.3s ease 0s;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    justify-content: space-around;

    ${isDisabled &&
    css`
      border: 2px solid ${rgba(theme.colors.backgroundContent, 0.25)};
    `}

    ${isInvalid &&
    css`
      border: 2px solid ${rgba(theme.colors.danger, 0.25)};
    `}

    input, textarea {
      width: 100%;
      height: 2.333rem;
      padding-left: 0rem;
      padding-right: 0rem;
      color: ${theme.colors.textPrimary} !important;
      background-color: ${isDisabled
        ? darken(0.1, theme.colors.backgroundContent)
        : theme.colors.backgroundContent} !important;
      border: none;
      cursor: text;

      ${isDisabled &&
      css`
        cursor: not-allowed;
      `}

      &.form-control.is-invalid {
        background: none;
        background-color: ${theme.colors.background};
        border-color: ${theme.colors.danger};
        padding-right: 0rem;
      }

      &::placeholder {
        color: ${rgba(theme.colors.textPrimary, 0.75)};
      }
    }

    svg {
      color: ${isInvalid
        ? rgba(theme.colors.danger, 0.75)
        : rgba(theme.colors.textPrimary, 0.5)};
      font-size: 1rem;
    }

    &:focus-within {
      box-shadow: none;
      border: 2px solid
        ${isInvalid
          ? theme.colors.danger
          : variant === 'secondary'
          ? theme.colors.secondary
          : theme.colors.primary};
      border-radius: 0.3rem;

      input,
      textarea {
        &:focus {
          box-shadow: none;
          border: none;
          background-color: ${theme.colors.background};
        }
      }

      svg {
        color: ${isInvalid
          ? theme.colors.danger
          : variant === 'secondary'
          ? theme.colors.secondary
          : theme.colors.primary};
      }
    }
  `}
`;

export const LabelGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  gap: 5px;
`;

export const Label = styled.p<Pick<InputWrapperProps, 'variant'>>`
  ${({ variant, theme }) => css`
    font-size: 1rem;
    color: ${variant === 'secondary'
      ? theme.colors.secondaryDark
      : theme.colors.primaryDark};
  `}
`;

export const IsRequired = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.danger};
`;
