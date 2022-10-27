import { FC } from "react";
import { IconButton } from "@components";
import { Styled } from "./styled";
import { theme } from "@constants";

export const MobileMenu: FC = () => {
  return (
  <Styled.Wrapper>
   <IconButton icon="mobile-home" color={theme.colors.grey} onClick={()=>{}} size={28}/>
   <IconButton icon="mobile-categories" color={theme.colors.grey} onClick={()=>{}} size={28}/>
   <IconButton icon="mobile-cart" color={theme.colors.grey} onClick={()=>{}} size={28}/>
   <IconButton icon="mobile-user" color={theme.colors.grey} onClick={()=>{}} size={28}/>
  </Styled.Wrapper>
  )
}
