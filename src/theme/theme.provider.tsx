import { FC, ReactNode } from 'react';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, LightTheme } from "baseui";
import { styletron } from './styletron';


interface ProviderInterface {
    children: ReactNode;
};

export const ThemeProvider: FC<ProviderInterface> = ({ children }) => {
    return (
        <StyletronProvider value={styletron}>
            <BaseProvider theme={LightTheme}>
                {children}
            </BaseProvider>
        </StyletronProvider>
    );
}