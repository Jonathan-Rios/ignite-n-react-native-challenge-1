import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styled, { css } from "styled-components/native";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;

  margin: 0 4px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  color: type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_300,
}))``;
