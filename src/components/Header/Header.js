// Allow us to link different pages or sections in our own website.
import Link from 'next/link';
import React from 'react';
// Allow us to use icon presets.
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { AiOutlineCode } from 'react-icons/ai';
// Premade header styles.
import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>

    {/* Header: icon and name. */}
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: '20px'}}>
          <AiOutlineCode size="3rem"/> <Span>[Mai] Portfolio</Span>
        </a>
      </Link>
    </Div1>

    {/* Scrolls to the corresponding section of the page. */}
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technologies">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    {/* Social links via React icons. */}
    <Div3>
      <SocialIcons href="https://github.com/anjerraa">
        <FaGithubSquare size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/mai-ngoc-pham/">
        <FaLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://instagram.com/anjerraa">
        <FaInstagramSquare size="3rem"/>
      </SocialIcons>
    </Div3>

  </Container>
);

export default Header;
