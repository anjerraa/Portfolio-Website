// Allow us to link different pages or sections in our own website.
import Link from 'next/link';
import React from 'react';
// Allow us to use icon presets.
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineCode } from 'react-icons/ai';
// Premade header styles.
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white"}}>
          <AiOutlineCode size="3rem"/> <span>[Mai] Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          
        </Link>
      </li>
    </Div2>
  </Container>
);

export default Header;
