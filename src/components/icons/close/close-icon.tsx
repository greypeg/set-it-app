import { CustomIconType } from "../analytics/analytics";
import { Icon } from "../icon"

export const CloseIcon: React.FC<CustomIconType> = ({ size = "24" }) => (
    <Icon size={size}>
        <path d="M17.25 17.25L6.75 6.75" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.25 6.75L6.75 17.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Icon >
);