import { FOOTERMENU_CATALOG, theme } from "@constants";
import { FC } from "react";
import { Accordion, Spacer } from "@components";
import { Menu } from "./Menu";
import { Promo } from "./Promo";
import { Styled } from "./styled";

export const Footer: FC = () => (
  <Styled.Wrapper>
    <Styled.DesktopMenu>
      <Menu header={FOOTERMENU_CATALOG.header} menuItems={FOOTERMENU_CATALOG.menuItems} />
      <Menu header={FOOTERMENU_CATALOG.header} menuItems={FOOTERMENU_CATALOG.menuItems} />
      <Menu header={FOOTERMENU_CATALOG.header} menuItems={FOOTERMENU_CATALOG.menuItems} />
      <Promo />
    </Styled.DesktopMenu>
    <Styled.TabletMenu>
    <Accordion title={FOOTERMENU_CATALOG.header}>
      {FOOTERMENU_CATALOG.menuItems.map(menuItem => <p
        key={menuItem.text}>{menuItem.text}</p>
      )}
    </Accordion>
    <Accordion title={FOOTERMENU_CATALOG.header}>
      {FOOTERMENU_CATALOG.menuItems.map(menuItem => <p
        key={menuItem.text}>{menuItem.text}</p>
      )}
    </Accordion>
    <Accordion title={FOOTERMENU_CATALOG.header}>
      {FOOTERMENU_CATALOG.menuItems.map(menuItem => <p
        key={menuItem.text}>{menuItem.text}</p>
      )}
    </Accordion>
    <Spacer size={theme.space.xl} samespace/>
    <Promo />
    </Styled.TabletMenu>
  </Styled.Wrapper>
)