import { FC } from 'react';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, LightTheme } from "baseui";
import { styletron } from './styletron';

export const ThemeProvider: FC<any> = ({ children }) => {
    return (
        <StyletronProvider value={styletron}>
            <BaseProvider theme={LightTheme}>
                {children}
            </BaseProvider>
        </StyletronProvider>
    );
}