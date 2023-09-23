import styled, { css } from 'styled-components';
import ModelViewerElementBase from '@google/model-viewer/lib/model-viewer-base';
import { mediaQuery } from '../../core';
import { ModelViewerElement } from '@google/model-viewer';
import { Model } from '@google/model-viewer/lib/features/scene-graph/api';
import { darken } from 'polished';
import { Panel } from '../../components';

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  justify-content: center;
  box-sizing: content-box;
  overflow-y: hidden;
`;

export const CurrencyModel = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 50%;
    background: ${darken(0.15, theme.colors.backgroundContent)};
    border-radius: 1rem;
  `}
`;

export const ModelsWrapper = styled(Panel)`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 50%;
    /* flex-direction: row;
    
    background: ${theme.colors.backgroundContent};
    overflow-y: scroll; */
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    width: 100%;

    ${mediaQuery.greaterThan('mobile')`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      font-size: 5rem;
      animation: appearAnimationContentTablet 0.15s linear;
    `}

    model-viewer {
      --progress-bar-color: linear-gradient(
        90deg,
        ${theme.colors.secondaryDark} 0%,
        ${theme.colors.primaryDark} 100%
      );

      margin: 0.5rem;
      height: 100%;
      width: 100%;
      background-color: ${theme.colors.secondary};
      border-radius: 1rem;
    }
  `}
`;
