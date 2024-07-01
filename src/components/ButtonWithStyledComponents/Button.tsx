import { ComponentPropsWithoutRef } from "react";
import * as Styled from "./Button.styles";

export type Props = ComponentPropsWithoutRef<"button">;

export const Button = ({ children, ...rest }: Props) => (
  <Styled.Button {...rest}>{children}</Styled.Button>
);
Button.displayName = "Button";
