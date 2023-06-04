import { TouchableOpacityProps } from "react-native";
import { Container, ButtonIconTypeStyleProps, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonIconProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap | null;
  type?: ButtonIconTypeStyleProps;
  iconSize?: number;
};

export function ButtonIcon({
  icon,
  iconSize = 20,
  type = "PRIMARY",
  ...rest
}: ButtonIconProps) {
  return (
    <Container {...rest}>
      {icon && <Icon name={icon} type={type} size={iconSize} />}
    </Container>
  );
}
