import { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { generateTheme } from '../theme';

type MainProviderProps = {
    children: React.ReactNode;
};

const MainProvider: FC<MainProviderProps> = ({ children }) => {
    return (
        <ThemeProvider theme={generateTheme("dark")}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default MainProvider;