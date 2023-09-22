import styled, { css } from 'styled-components';
import { mediaQuery } from '../../core';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.background};
    overflow: hidden;

    ${mediaQuery.greaterThan('mobile')`
    justify-content: start;
  `}
  `}
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 80%;
  padding: 10%;
  gap: 2rem;

  ${mediaQuery.greaterThan('mobile')`
    width: 40%;
    padding: 4%;
    animation: appearAuthContainerTablet 0.15s linear;
  `}

  ${mediaQuery.greaterThan('tablet')`
    width: 35%;
    padding: 3%;
    animation: appearAuthContainerDesktop 0.15s linear;
  `}

  @keyframes appearAuthContainerTablet {
    0% {
      width: 0%;
    }
    100% {
      width: 40%;
    }
  }

  @keyframes appearAuthContainerDesktop {
    0% {
      width: 0%;
    }
    100% {
      width: 35%;
    }
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 0%;
    background: linear-gradient(
      90deg,
      ${theme.colors.secondary} 0%,
      ${theme.colors.primary} 100%
    );
    color: ${(props) => props.theme.colors.background};
    font-weight: bolder;

    ${mediaQuery.greaterThan('mobile')`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60%;
      font-size: 5rem;
      animation: appearAnimationContentTablet 0.15s linear;
    `}

    ${mediaQuery.greaterThan('tablet')`
      width: 65%;
      font-size: 7rem;
      animation: appearAnimationContentDesktop 0.15s linear;
    `}
  `}

  @keyframes appearAnimationContentTablet {
    0% {
      width: 100%;
    }
    100% {
      width: 60%;
    }
  }

  @keyframes appearAnimationContentDesktop {
    0% {
      width: 100%;
    }
    100% {
      width: 65%;
    }
  }
`;

export const Title = styled.div`
  ${({ theme }) => css`
    text-align: left;
    color: ${theme.colors.primaryDark};
    font-weight: 700;
    font-size: 1.875rem;
    margin-bottom: 1.25rem;
    width: 100%;
    animation: appearAnimationTitle 0.15s linear;
  `}

  @keyframes appearAnimationTitle {
    0% {
      display: none;
    }
    100% {
      display: none;
    }
  }
`;

export const Children = styled.div`
  width: 100%;
  animation: appearAnimationChildren 0.15s linear;

  @keyframes appearAnimationChildren {
    0% {
      display: none;
    }
    100% {
      display: none;
    }
  }
`;
