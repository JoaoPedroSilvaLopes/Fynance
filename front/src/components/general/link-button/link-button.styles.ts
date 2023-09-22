import styled, { css } from 'styled-components';

type LinkButtonWrapperProps = {
  disabled: boolean;
  variant?: 'primary' | 'secondary';
};

export const LinkButtonWrapper = styled.div<LinkButtonWrapperProps>`
  ${({ theme, disabled, variant }) => css`
    a {
      position: relative;
      color: ${variant === 'secondary'
        ? theme.colors.secondaryDark
        : theme.colors.primaryDark} !important;

      font-size: 16px;
      font-weight: ${theme.font.bold};
      text-decoration: none;

      ${disabled &&
      css`
        pointer-events: none;
        cursor: not-allowed;
        opacity: 0.75;
      `}

      &::before {
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        width: 0;
        height: 2px;
        background-color: ${variant === 'secondary'
          ? theme.colors.secondaryDark
          : theme.colors.primaryDark} !important;
        transition: width 0.25s ease 0s;
      }

      &:hover {
        &::before {
          width: 100%;
        }
      }
    }
  `}
`;
