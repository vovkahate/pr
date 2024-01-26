import { useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
    Theme,
} from '../lib/ThemeContext';

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
