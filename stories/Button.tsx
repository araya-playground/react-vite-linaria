import React from "react";
import { css } from "@linaria/core";

const primaryClassName = css`
  color: white;
  background-color: #1ea7fd;
  width: 500px;
`;

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  backgroundColor,
  size = "medium",
  label,
  ...props
}) => {
  const mode = primary ? primaryClassName : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </button>
  );
};
