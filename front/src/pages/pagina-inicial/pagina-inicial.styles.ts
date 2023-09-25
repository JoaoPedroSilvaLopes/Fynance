import styled, { css } from 'styled-components';
import { mediaQuery } from '../../core';
import { lighten } from 'polished';
import { Panel } from '../../components';

export const PageLayout = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: row;
    gap: 0.5rem;
    background-color: ${theme.colors.background};
    padding: 0.75rem;
  `}
`;

export const PanelModels = styled(Panel)`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    overflow-y: auto;

    border-radius: 0.5rem;
    background-color: ${theme.colors.backgroundContent};

    box-shadow: 0px 0px 0.4rem 0.1rem ${lighten(0.80, theme.colors.textDark)};

    h2 {
      font-size: 1rem;
    }

    ${mediaQuery.greaterThan('mobile')`
      h2 { 
        font-size: 1.5rem;
      }
    `}

    ${mediaQuery.greaterThan('tablet')`
      h2 { 
        font-size: 2rem;
      }
    `}
  `}
`;

export const Models = styled.div`
  height: 10rem;
  overflow-y: visible;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${mediaQuery.greaterThan('mobile')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 1rem;
  `}

  ${mediaQuery.greaterThan('tablet')`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 0.4fr;
    column-gap: 1rem;
  `}
`;

export const CurrencyModel = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 50%;
    background: ${lighten(0.15, theme.colors.secondaryLight)};
    box-shadow: 0px 0px 0.4rem 0.1rem ${lighten(0.80, theme.colors.textDark)};
    border-radius: 1rem;
  `}
`;
