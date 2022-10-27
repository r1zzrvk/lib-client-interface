import { FOOTERMENU_CATALOG, FOOTERMENU_INFORMATION, FOOTERMENU_SERVICE, theme } from "@constants";
import { FC } from "react";
import { Accordion, Spacer, Text } from "@components";
import { Menu } from "./Menu";
import { Promo } from "./Promo";
import { Styled } from "./styled";

export const Footer: FC = () => (
  <Styled.Wrapper>
    <Styled.DesktopMenu>
      <Menu header={FOOTERMENU_CATALOG.header} menuItems={FOOTERMENU_CATALOG.menuItems} />
      <Menu header={FOOTERMENU_INFORMATION.header} menuItems={FOOTERMENU_INFORMATION.menuItems} />
      <Menu header={FOOTERMENU_SERVICE.header} menuItems={FOOTERMENU_SERVICE.menuItems} />
      <Promo />
    </Styled.DesktopMenu>
    <Styled.TabletMenu>
      <Accordion title={FOOTERMENU_CATALOG.header}>
        {FOOTERMENU_CATALOG.menuItems.map(({ text, href }) =>
          <Text
            key={text}
            href={href}
            fontSize={theme.fonts.size.regular.sm}
            fontHeight={theme.fonts.height.regular.sm}
            asLink>{text}</Text>
        )}
      </Accordion>
      <Accordion title={FOOTERMENU_INFORMATION.header}>
        {FOOTERMENU_INFORMATION.menuItems.map(({ text, href }) =>
          <Text
            key={text}
            href={href}
            fontSize={theme.fonts.size.regular.sm}
            fontHeight={theme.fonts.height.regular.sm}
            asLink>{text}</Text>
        )}
      </Accordion>
      <Accordion title={FOOTERMENU_SERVICE.header}>
        {FOOTERMENU_SERVICE.menuItems.map(({ text, href }) =>
          <Text
            key={text}
            href={href}
            fontSize={theme.fonts.size.regular.sm}
            fontHeight={theme.fonts.height.regular.sm}
            asLink>{text}</Text>
        )}
      </Accordion>
      <Spacer size={theme.space.xl} samespace />
      <Promo />
    </Styled.TabletMenu>
  </Styled.Wrapper>
)
