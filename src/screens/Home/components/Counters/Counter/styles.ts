import styled, { css } from "styled-components/native";
import { CounterTypes } from ".";

interface VariantsProps {
  type: CounterTypes;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const Title = styled.Text<VariantsProps>`
  ${({ type, theme }) => css`
    color: ${type === "created" ? theme.COLORS.BLUE : theme.COLORS.PURPLE};
  `}
  font-weight: bold;
`;

export const Badge = styled.Text`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  padding: 0 8px;
  border-radius: 10px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: bold;
`;
