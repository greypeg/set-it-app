import { CustomIconType } from "../analytics/analytics";
import { Icon } from "../icon"

export const MenuIcon: React.FC<CustomIconType> = ({ size = "24" }) => (
    <Icon size={size}>
        <path d="M3.75 7.5H20.25" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
        <path d="M3.75 12H20.25" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
        <path d="M3.75 16.5H20.25" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
    </Icon >
);