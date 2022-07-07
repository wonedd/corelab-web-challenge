import { Container } from './styles';

interface ButtonProps {
  isSave?: boolean;
  onClick: () => void;
}

export function Button({ onClick, isSave = false }: ButtonProps) {
  return (
    <Container onClick={onClick} isSave={isSave}>
      {isSave ? 'SALVAR' : 'ADICIONAR'}
    </Container>
  );
}
