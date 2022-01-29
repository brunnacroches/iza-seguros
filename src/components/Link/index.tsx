import React from "react";
import "./style.css";

interface LinkProps {
  link: string;
}

const Link: React.FC<LinkProps> = ({ link }) => {
  return <link className="link">{link}</link>;
};

export default Link;
