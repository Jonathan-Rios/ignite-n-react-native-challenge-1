import styled, { css } from "styled-components/native";

export const Container = styled.View`
  border: 1px solid transparent;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_400};

  align-items: center;
  justify-content: space-between;
  padding: 48px 0 16px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Strong = styled.Text`
  margin-top: 16px;

  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
