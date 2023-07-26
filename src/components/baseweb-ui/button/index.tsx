"use client";
import { Button as Btn, ButtonProps as Props, SharedStyleProps } from "baseui/button";

export type ButtonProps = Props & SharedStyleProps;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (<Btn shape="pill" {...props}>{children}</Btn>);
};