import { ButtonIcon } from "@components/ButtonIcon";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  gap: 8px;

  padding: 16px 12px;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background: ${({ theme }) => theme.COLORS.GRAY_500};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
`;

interface TextProps {
  completed?: boolean;
}

export const Text = styled.Text<TextProps>`
  flex: 1;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

  ${({ theme, completed }) => {
    if (completed) {
      return css`
        color: ${theme.COLORS.GRAY_300};
        text-decoration: line-through;
      `;
    } else {
      return css`
        color: ${theme.COLORS.GRAY_100};
      `;
    }
  }};
`;

interface CheckButtonProps {
  checked: boolean;
}

export const CheckButton = styled(ButtonIcon)<CheckButtonProps>`
  border-radius: 999px;
  height: 20px;
  width: 20px;

  ${({ checked }) => {
    if (checked) {
      return css`
        background-color: ${({ theme }) => theme.COLORS.PURPLE};
        border: 2px solid ${({ theme }) => theme.COLORS.PURPLE};
      `;
    } else {
      return css`
        border: 2px solid ${({ theme }) => theme.COLORS.BLUE_DARK};
      `;
    }
  }}
`;

export const DeleteButton = styled(ButtonIcon)`
  border-radius: 999px;
`;
