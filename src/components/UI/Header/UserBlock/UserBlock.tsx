import { FC } from "react";
import { Styled } from "./styled";
import { IconsSelector } from "components/IconsSelector/IconsSelector";

export const UserBlock: FC = () => (
  <Styled.Wrapper>
    <Styled.Icon><IconsSelector icon="search"/></Styled.Icon>
    <Styled.Icon><IconsSelector icon="shoppingCart"/></Styled.Icon>
    <Styled.Icon><IconsSelector icon="user"/></Styled.Icon>
  </Styled.Wrapper>
) 