import { ComponentPropsWithoutRef } from "react";
// @ts-ignore
import styles from "./Button.module.css";

export type Props = ComponentPropsWithoutRef<"button">;

export const Button = ({ children, ...rest }: Props) => (
  <button className={styles.button} {...rest}>
    {children}
  </button>
);
Button.displayName = "Button";
