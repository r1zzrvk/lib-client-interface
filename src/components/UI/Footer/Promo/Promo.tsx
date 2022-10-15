import { FC } from "react";
import { Text } from "@components";
import { theme } from "@constants";

export const Promo: FC = () => (
  <section>
    <Text
      marginBottom={theme.space.xl}
      fontSize={theme.fonts.size.regular.md}
      fontHeight={theme.fonts.height.regular.md}
      fontWeight={theme.fonts.weight.medium}>Become a member</Text>
    <Text
      marginBottom={theme.space.xl}
      fontSize={theme.fonts.size.regular.sm}
      fontHeight={theme.fonts.height.regular.sm}>Join our loyalty program now and get 10% off your<br/> next online purchase!</Text>
       <Text
      marginBottom={theme.space.sm}
      fontSize={theme.fonts.size.regular.md}
      fontHeight={theme.fonts.height.regular.md}
      fontWeight={theme.fonts.weight.medium}>Read more →</Text>
  </section>
)