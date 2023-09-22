import styled, { css } from 'styled-components';
import { Form } from 'react-bootstrap';

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const FooterMessage = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryDark};
    font-size: 1rem;
    vertical-align: middle;
  `}
`;

export const FormCheck = styled(Form.Check)`
  ${({ theme }) => css`
    input[type='checkbox']:checked {
      background-color: ${theme.colors.secondary} !important;
      border-color: ${theme.colors.secondary} !important;
    }

    .form-check-label {
      color: ${theme.colors.textPrimary};
      font-size: 1rem;
    }
  `}
`;
