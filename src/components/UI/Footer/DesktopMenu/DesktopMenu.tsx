import { FOOTERMENU_CATALOG, FOOTERMENU_INFORMATION, FOOTERMENU_SERVICE } from "@constants";
import { FC } from "react";
import { Menu } from "../Menu";
import { Promo } from "../Promo";
import { Styled } from "./styled";

export const DesktopMenu: FC = () => {
  return (
    <Styled.DesktopMenu>
      <Menu header={FOOTERMENU_CATALOG.header} menuItems={FOOTERMENU_CATALOG.menuItems} />
      <Menu header={FOOTERMENU_INFORMATION.header} menuItems={FOOTERMENU_INFORMATION.menuItems} />
      <Menu header={FOOTERMENU_SERVICE.header} menuItems={FOOTERMENU_SERVICE.menuItems} />
      <Promo />
    </Styled.DesktopMenu>
  )
}
