import React from "react";
import "./style.css";
import { Container } from "./styles";

interface LinkProps {
  link: string;
}

const Link: React.FC<LinkProps> = ({ link }) => {
  return (
    <Container>
      <link className="link">{link}</link>
    </Container>
  );
};

export default Link;
