import { Icon } from "../icon"

export type CustomIconType = {
    size?: string
};


export const CubeIcon: React.FC<CustomIconType> = ({ size = "24" }) => (
    <Icon size={size}>
        <path d="M21 16.0017V7.99734C20.9997 7.73536 20.9308 7.47803 20.8001 7.25096C20.6694 7.0239 20.4815 6.83502 20.2552 6.70312L13.1302 2.55656C12.7869 2.35671 12.3968 2.25142 11.9995 2.25142C11.6023 2.25142 11.2122 2.35671 10.8689 2.55656L3.74484 6.70312C3.51848 6.83502 3.33061 7.0239 3.19993 7.25096C3.06925 7.47803 3.00032 7.73536 3 7.99734V16.0017C3.00016 16.2639 3.06901 16.5214 3.1997 16.7486C3.33038 16.9759 3.51834 17.1649 3.74484 17.2969L10.8698 21.4434C11.2132 21.643 11.6033 21.7481 12.0005 21.7481C12.3976 21.7481 12.7877 21.643 13.1311 21.4434L20.2561 17.2969C20.4824 17.1648 20.6702 16.9757 20.8007 16.7485C20.9312 16.5212 20.9999 16.2638 21 16.0017Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.23438 7.21828L12 12.3745L20.7656 7.21828" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 21.7495V12.3745" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Icon >
);