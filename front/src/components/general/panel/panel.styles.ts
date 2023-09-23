import styled, { css } from 'styled-components';

type PanelWrapperProps = {
  isTitle: boolean;
};

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.backgroundContent};

    border: 0;
    margin-bottom: 1.25rem;
    border-radius: 0;

    border:1px solid red;
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.4rem;
    padding: 1rem 1rem 0 1rem;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.normal};
    font-weight: ${theme.font.bold};
  `}
`;

export const Actions = styled.div`
  display: inline-flex;
  float: right;

  & * + * {
    margin-left: 0.5rem;
  }
`;

export const Content = styled.div<PanelWrapperProps>`
  ${({ isTitle }) => css`
    padding: 1rem;
    width: 100%;
    height: ${isTitle ? 'calc(100% - 3.4rem)' : '100%'};
  `}
`;
