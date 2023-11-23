import { useState, ReactNode } from "react";
import styled from "styled-components";
import Link from "next/link";

import { NavConfig, INavItem } from "@/constants/config";

interface IItem {
  children: ReactNode;
}

interface IStyled {
  isVisible: boolean;
}

type Sub = boolean;

export default function SideNav() {
  const [isOpenSub, setIsOpenSub] = useState<boolean>(false);

  const handleSub = () => {
    setIsOpenSub((prev) => !prev);
  };

  const Item: React.FC<IItem> = ({ children }) => (
    <ListItem>{children}</ListItem>
  );

  const renderNavItems = (navItems: INavItem["sub"], sub: Sub) => {
    return (
      <Nav sub={sub}>
        <List>
          {navItems?.map((nav) => (
            <Item key={nav.id}>
              {nav.path ? (
                <Link href={nav.path}>{nav.name}</Link>
              ) : (
                <div onClick={handleSub}>{nav.name}</div>
              )}
              {nav.sub && isOpenSub && renderNavItems(nav.sub, true)}
            </Item>
          ))}
        </List>
      </Nav>
    );
  };

  return <>{renderNavItems(NavConfig, false)}</>;
}

const Nav = styled.div<{ sub: Sub }>`
  position: absolute;
  top: ${({ sub }) => (sub ? "440px" : "20px")};
  left: 80px;
  padding: ${({ sub }) => (sub ? "20px" : "100px 60px")};
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 22px;
  padding: 20px 0;
  cursor: pointer;
  width: 180px;

  a {
    text-decoration: none !important;
    color: white;
  }
`;
