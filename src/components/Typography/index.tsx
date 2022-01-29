import React from "react";
import "./style.css";

interface TypographyProps {
  // type: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "subtitle3"
    | "subtitle4"
    | "subtitle5"
    | "subtitle6"
    | "body1"
    | "body2"
    | "body3"
    | "body4"
    | "body5"
    | "body6";

  color?:
    | "color001"
    | "color002"
    | "color003"
    | "color004"
    | "color005"
    | "color006"
    | "color007"
    | "color008"
    | "color009"
    | "color010";

  number?: "00" | "000";
}

const defaultProps: Partial<TypographyProps> = {
  variant: "h1",
  color: "color001",
};

const Typography: React.FC<TypographyProps> = ({
  children,
  variant,
  color,
  number,
}) => {
  let className = "typography";
  className += ` ${variant} ${color} ${number}`;

  return <h1 className={className}>{children} </h1>;
};

Typography.defaultProps = defaultProps;

export default Typography;
