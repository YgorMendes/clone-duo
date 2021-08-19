import { ButtonElement } from './styles';

interface IButton {
  color: string;
  children: React.ReactNode;
}

function Button({ color, children }: IButton): JSX.Element {
  return (
    <ButtonElement color={color} type="button">
      {children}
    </ButtonElement>
  );
}

export default Button;
