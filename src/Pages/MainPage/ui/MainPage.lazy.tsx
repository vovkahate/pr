// import { lazy } from 'react';

// export const MainPageLazy = lazy(
//     async () => new Promise((res) => {
//     // @ts-ignore
//         setTimeout(() => {
//             res(import('./MainPage'));
//         }, 1500);
//     }),
// );

import { lazy } from 'react';

export const MainPageLazy = lazy(
  async () =>
    new Promise<{ default: React.ComponentType<any> }>((res) => {
      setTimeout(() => {
        res(import('./MainPage'));
      }, 1500);
    })
);
