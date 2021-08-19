import { ButtonHTMLAttributes } from 'react';
import Button from '../../Button';
import { ComponentInfoModule } from './styles';

export interface IInfoModule extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  totalLessons: number;
  currentLesson: number;
}

function InfoModule({
  isOpen,
  totalLessons,
  currentLesson,
}: IInfoModule): JSX.Element {
  return (
    <ComponentInfoModule isOpen={isOpen}>
      <p>
        Lissão {currentLesson}/{totalLessons}
      </p>
      <Button color="">Começar</Button>
    </ComponentInfoModule>
  );
}

export default InfoModule;
