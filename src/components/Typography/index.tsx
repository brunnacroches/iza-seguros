import React from "react";
import "./style.css";

interface TypographyProps {
  // type: string;
  variant?:
    | "h1__title"
    | "h2__subtitle"
    | "h3__textCard"
    | "h4__subtitle"
    | "h5__subletitle__number"
    | "h6__subletitle__text2";
  color?: "primary" | "secondary" | "third" | "fourth" | "fifth";
  number?: "1" | "29";
}

const defaultProps: Partial<TypographyProps> = {
  variant: "h1__title",
  color: "primary",
};

const Typography: React.FC<TypographyProps> = ({
  children,
  variant,
  color,
  number,
}) => {
  let className = "type";
  className += ` ${variant} ${color} ${number}`;

  return <h1 className={className}>{children} </h1>;
};

Typography.defaultProps = defaultProps;

export default Typography;
