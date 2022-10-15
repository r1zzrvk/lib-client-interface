import { FOOTERMENU_CATALOG } from "@constants";
import { FC } from "react";
import { Menu } from "./Menu";
import { Promo } from "./Promo";
import { Styled } from "./styled";

export const Footer: FC = () => (
  <Styled.Wrapper>
    <Menu header={FOOTERMENU_CATALOG.header} menuItems={FOOTERMENU_CATALOG.menuItems}/>
    <Menu header={FOOTERMENU_CATALOG.header} menuItems={FOOTERMENU_CATALOG.menuItems}/>
    <Menu header={FOOTERMENU_CATALOG.header} menuItems={FOOTERMENU_CATALOG.menuItems}/>
    <Promo />
  </Styled.Wrapper>
)