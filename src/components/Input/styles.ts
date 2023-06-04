import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;

  max-height: 56px;
  min-height: 56px;

  border-radius: 6px;
  padding: 16px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    background-color: ${theme.COLORS.GRAY_500};
    border: 2px solid ${theme.COLORS.GRAY_700};

    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
