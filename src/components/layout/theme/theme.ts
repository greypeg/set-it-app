import { createTheme } from 'baseui';
import {
    createThemedUseStyletron
} from 'baseui';
import type { Theme } from 'baseui';


const primitives = {
    accent: '#F127E4',
    accent50: '#FDEDFC',
    accent100: '#FCD3F9',
    accent200: '#F89FF3',
    accent300: '#F45AEA',
    accent400: '#F127E4',
    accent500: '#B71DAD',
    accent600: '#901788',
    accent700: '#600F5B',
    purple:"#5856BB",
};

const overrides = {
    colors: {
        buttonSecondaryFill: primitives.accent100,
        buttonSecondaryText: primitives.accent,
        buttonSecondaryHover: primitives.accent200,
        buttonSecondaryActive: primitives.accent300,
        buttonSecondarySelectedFill: primitives.accent200,
        buttonSecondarySelectedText: primitives.accent,
        buttonSecondarySpinnerForeground: primitives.accent700,
        buttonSecondarySpinnerBackground: primitives.accent300,
    },
    typography: {

    }
};

export const useTheme = createThemedUseStyletron<Theme>();