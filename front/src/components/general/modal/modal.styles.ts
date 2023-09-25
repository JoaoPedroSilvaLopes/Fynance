import { rgba } from 'polished'
import { Modal } from 'react-bootstrap'
import styled, { css } from 'styled-components'

export const ModalWrapper = styled(Modal)`
  ${({ theme }) => css`
    .modal-content {
      border: 0 none;
    }

    .modal-header {
      background-color: ${theme.colors.background};
      padding: 1.5rem 1.5rem 1rem 1.5rem;
      border: none;
      border-top-right-radius: 6px;
      border-top-left-radius: 6px;

      .modal-title {
        display: flex;
        align-items: center;
        color: ${theme.colors.secondary};
        font-weight: ${theme.font.bold};
        font-size: ${theme.font.sizes.xlarge};

        svg {
          color: ${theme.colors.secondary};
          margin-right: 0.625rem;
          font-size: ${theme.font.sizes.xlarge};
        }
      }

      .btn-close {
        background-size: 0.65rem;

        &:hover {
          background-color: ${rgba(theme.colors.textPrimary, 0.25)};
          border-radius: 50%;
        }

        &:focus {
          box-shadow: none;
        }
      }
    }

    .modal-body {
      color: ${theme.colors.textPrimary};
      background-color: ${theme.colors.background};
      padding: 1.5rem;
      max-height: 75vh;
      overflow-y: auto;
    }

    .modal-footer {
      text-align: right;
      background-color: ${theme.colors.background};
      padding: 1rem 1.5rem 1.5rem 1.5rem;
      border-top: none;
      border-bottom-right-radius: 6px;
      border-bottom-left-radius: 6px;

      & > * {
        margin: 0 0 0 0.85rem;
      }
    }
  `}
`
