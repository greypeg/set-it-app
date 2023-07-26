import { Icon } from "../icon"

export type CustomIconType = {
    size?: string
};


export const RocketIcon: React.FC<CustomIconType> = ({ size = "24" }) => (
    <Icon size={size}>
        <path d="M21.6473 2.52235C21.6394 2.48388 21.6206 2.44849 21.5932 2.42033C21.5658 2.39218 21.5309 2.37245 21.4927 2.36344C18.9436 1.74 13.0552 3.96141 9.86157 7.15266C9.2924 7.71716 8.77341 8.33009 8.31047 8.98454C7.3261 8.89547 6.34172 8.97047 5.5036 9.3361C3.13688 10.3767 2.44829 13.0945 2.2561 14.2613C2.24568 14.3252 2.25013 14.3907 2.2691 14.4526C2.28806 14.5145 2.32103 14.5713 2.36545 14.6184C2.40987 14.6655 2.46455 14.7018 2.52525 14.7244C2.58595 14.747 2.65104 14.7554 2.71547 14.7488L6.51563 14.3316C6.51826 14.6182 6.53547 14.9045 6.56719 15.1894C6.58702 15.3863 6.67488 15.5701 6.81563 15.7092L8.28703 17.1806C8.42627 17.3215 8.61028 17.4093 8.80735 17.4291C9.09051 17.4606 9.3751 17.4779 9.66 17.4806L9.24329 21.2775C9.23678 21.3419 9.24516 21.4068 9.26777 21.4674C9.29039 21.528 9.32663 21.5826 9.37371 21.627C9.42078 21.6713 9.47743 21.7043 9.53926 21.7233C9.60109 21.7422 9.66646 21.7467 9.73032 21.7364C10.8975 21.5489 13.6209 20.8603 14.6555 18.4941C15.0211 17.655 15.0961 16.6758 15.0117 15.6961C15.6681 15.2336 16.2828 14.7146 16.8488 14.145C20.0541 10.9575 22.2614 5.19844 21.6473 2.52235ZM13.9997 10.0158C13.7197 9.73588 13.529 9.37924 13.4518 8.99096C13.3745 8.60268 13.4141 8.20021 13.5656 7.83445C13.7171 7.46868 13.9736 7.15605 14.3028 6.9361C14.632 6.71614 15.019 6.59874 15.4148 6.59874C15.8107 6.59874 16.1977 6.71614 16.5269 6.9361C16.8561 7.15605 17.1126 7.46868 17.2641 7.83445C17.4156 8.20021 17.4552 8.60268 17.3779 8.99096C17.3006 9.37924 17.11 9.73588 16.83 10.0158C16.6443 10.2019 16.4237 10.3495 16.1809 10.4503C15.9381 10.551 15.6777 10.6028 15.4148 10.6028C15.152 10.6028 14.8916 10.551 14.6488 10.4503C14.406 10.3495 14.1854 10.2019 13.9997 10.0158Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.13937 16.5C4.67208 16.5574 4.23735 16.7692 3.90422 17.1019C3.07828 17.9306 3 21 3 21C3 21 6.07125 20.9217 6.89766 20.0948C7.23168 19.7622 7.44387 19.3268 7.5 18.8588" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Icon >
);