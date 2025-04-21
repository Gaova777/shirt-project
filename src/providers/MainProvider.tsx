import { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { generateTheme } from '../theme';
import { NavBarSection } from '../components';

type MainProviderProps = {
    children: React.ReactNode;
};

const MainProvider: FC<MainProviderProps> = ({ children }) => {
    return (
        <ThemeProvider theme={generateTheme("dark")}>
            <CssBaseline />
            <NavBarSection />
            {children}
        </ThemeProvider>
    );
};

export default MainProvider;