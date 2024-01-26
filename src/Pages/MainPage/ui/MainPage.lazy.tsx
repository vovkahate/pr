import { lazy } from 'react';

export const MainPageLazy = lazy(
    async () => new Promise((res) => {
    // @ts-expect-error
        setTimeout(() => {
            res(import('./MainPage'));
        }, 1500);
    }),
);
