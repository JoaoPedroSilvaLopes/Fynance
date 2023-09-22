// import styled, { css } from 'styled-components';
// import { math } from 'polished';

// import { mediaQuery } from '@sysra/styles';

// type DashboardProps = {
//   isCollapsible: boolean;
// };

// export const Container = styled.div<DashboardProps>`
//   ${({ theme, isCollapsible }) => css`
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     height: 100vh;
//     float: right;

//     transition: {

//       default: 'all cubic-bezier(0.685, 0.0473, 0.346, 1) 330ms',
//       color: 'color 500ms cubic-bezier(0.25, 1, 0.5, 1)',
//       transform: 'transform 250ms cubic-bezier(0.25, 1, 0.5, 1)'
//     },

//     ${mediaQuery.greaterThan('mobile')`
//       width: ${
//         isCollapsible
//           ? `calc(100% - ${theme.shared.sidebar.width})`
//           : `calc(100% - ${theme.shared.sidebar.collapseWidth})`
//       }
//     `}
//   `}
// `;

// export const MainWrapper = styled.div`
//   ${({ theme }) => css`
//     margin: ${math(
//         `${theme.shared.navbar.height} + ${theme.shared.dashboard.spacing}`
//       )}
//       ${theme.shared.dashboard.spacing} ${theme.shared.dashboard.spacing}
//       ${theme.shared.dashboard.spacing};
//   `}
// `;
