import { CustomIconType } from "../analytics/analytics";
import { Icon } from "../icon"

export const SettingsIcon: React.FC<CustomIconType> = ({ size = "24" }) => (
    <Icon size={size}>
        <path d="M12.2948 9.01453C11.6793 8.95374 11.06 9.08469 10.5218 9.38945C9.98359 9.69421 9.55272 10.1579 9.28819 10.717C9.02367 11.2761 8.93842 11.9033 9.04412 12.5127C9.14982 13.1221 9.44131 13.684 9.87867 14.1213C10.316 14.5587 10.8779 14.8502 11.4873 14.9559C12.0967 15.0616 12.7239 14.9763 13.283 14.7118C13.8421 14.4473 14.3058 14.0164 14.6105 13.4782C14.9153 12.94 15.0463 12.3207 14.9855 11.7052C14.9162 11.0151 14.6104 10.3703 14.12 9.87995C13.6297 9.38958 12.9849 9.08384 12.2948 9.01453ZM19.5183 12C19.5164 12.3261 19.4924 12.6517 19.4466 12.9745L21.5658 14.6367C21.6581 14.7132 21.7202 14.8199 21.7413 14.9379C21.7623 15.056 21.7408 15.1776 21.6806 15.2812L19.6758 18.75C19.6149 18.8527 19.5197 18.9305 19.407 18.9699C19.2944 19.0093 19.1714 19.0076 19.0598 18.9652L16.9552 18.1177C16.8391 18.0714 16.7134 18.0547 16.5893 18.0691C16.4652 18.0834 16.3466 18.1283 16.2441 18.1997C15.9228 18.4209 15.5853 18.6174 15.2344 18.7875C15.124 18.8411 15.0286 18.9211 14.9565 19.0203C14.8844 19.1196 14.8378 19.2351 14.8209 19.3566L14.5055 21.6014C14.4847 21.72 14.4235 21.8276 14.3322 21.906C14.2409 21.9844 14.1252 22.0287 14.0048 22.0312H9.99515C9.87681 22.0292 9.7627 21.9869 9.67161 21.9113C9.58053 21.8357 9.5179 21.7314 9.49406 21.6155L9.17906 19.3739C9.16137 19.2511 9.1136 19.1345 9.04 19.0346C8.9664 18.9346 8.86925 18.8544 8.75718 18.8011C8.40666 18.6319 8.07027 18.4349 7.75125 18.2119C7.6491 18.1408 7.53088 18.0963 7.40724 18.0823C7.28359 18.0683 7.15841 18.0853 7.04296 18.1317L4.93875 18.9788C4.82723 19.0212 4.70431 19.023 4.59164 18.9837C4.47896 18.9444 4.38376 18.8666 4.32281 18.7641L2.31796 15.2953C2.25769 15.1917 2.23615 15.07 2.25718 14.952C2.27821 14.834 2.34045 14.7272 2.43281 14.6508L4.2239 13.2445C4.32203 13.1666 4.39915 13.0655 4.44826 12.9502C4.49738 12.835 4.51693 12.7093 4.50515 12.5845C4.48828 12.3891 4.47796 12.1941 4.47796 11.9986C4.47796 11.8031 4.48781 11.6109 4.50515 11.4197C4.51564 11.2957 4.49513 11.1711 4.44546 11.057C4.39579 10.9429 4.31852 10.843 4.22062 10.7662L2.43046 9.36C2.3396 9.28317 2.27868 9.17681 2.25836 9.05957C2.23805 8.94232 2.25965 8.82167 2.31937 8.71875L4.32421 5.25C4.3851 5.14734 4.48027 5.06946 4.59295 5.0301C4.70563 4.99074 4.82859 4.99242 4.94015 5.03484L7.04484 5.88234C7.1609 5.92856 7.28662 5.94525 7.41072 5.93094C7.53483 5.91662 7.65344 5.87174 7.75593 5.80031C8.07714 5.57912 8.41468 5.38262 8.76562 5.2125C8.87595 5.15887 8.97138 5.07891 9.04349 4.97966C9.11559 4.88042 9.16215 4.76494 9.17906 4.64344L9.49453 2.39859C9.51525 2.28004 9.5765 2.17236 9.66781 2.09396C9.75912 2.01555 9.87483 1.9713 9.99515 1.96875H14.0048C14.1232 1.9708 14.2373 2.01309 14.3284 2.08867C14.4195 2.16425 14.4821 2.2686 14.5059 2.38453L14.8209 4.62609C14.8386 4.74894 14.8864 4.86551 14.96 4.96544C15.0336 5.06537 15.1307 5.14557 15.2428 5.19891C15.5933 5.3681 15.9297 5.56514 16.2487 5.78813C16.3509 5.85919 16.4691 5.90373 16.5928 5.91772C16.7164 5.93172 16.8416 5.91473 16.957 5.86828L19.0612 5.02125C19.1728 4.97879 19.2957 4.97704 19.4084 5.01631C19.521 5.05558 19.6162 5.13336 19.6772 5.23594L21.682 8.70469C21.7423 8.80832 21.7638 8.92999 21.7428 9.04802C21.7218 9.16604 21.6595 9.27278 21.5672 9.34922L19.7761 10.7555C19.6775 10.8331 19.6 10.9342 19.5504 11.0494C19.5009 11.1647 19.481 11.2905 19.4925 11.4155C19.508 11.6095 19.5183 11.8045 19.5183 12Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Icon >
);