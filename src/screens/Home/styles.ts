import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonIcon } from "@components/ButtonIcon";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  align-items: center;
  justify-content: center;
  height: 160px;
  padding: 24px;
`;

export const FormContainer = styled.View`
  margin-top: -52px;
  flex-direction: row;
  align-items: center;
`;

export const AddButton = styled(ButtonIcon)`
  width: 52px;
  height: 52px;

  border-radius: 6px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.BLUE_DARK};
  `}
`;

export const ToDoContainer = styled.View`
  margin-top: 24px;
`;

export const ToDoList = styled.View`
  gap: 16px;
`;
