import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { api } from '../../services/api';
import { Container, Content } from './styles';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Button } from '../Button';
import { Input } from '../Input';
import { useVehicles } from '../../services/hooks/useVehicles';
import { Select } from '../Select';

interface UpdateModalProps {
  isOpen: boolean;
  onCloseRequest: () => void;
  vehicle?;
}

type IData = {
  name: string;
  brand: string;
  color: string;
  plate: string;
  year: string;
};

export function FilterModal({ isOpen, onCloseRequest }: UpdateModalProps) {
  const { register } = useForm();
  const { refetch } = useVehicles();

  return (
    <Container isOpen={isOpen}>
      <Content>
        <IoArrowBackOutline size={19.5} onClick={onCloseRequest} />
        <Select name="name" label="Nome:" register={register} />
        <Select name="brand" label="Marca:" register={register} />
        <Select name="color" label="Cor:" register={register} />
        <Input variant="minmax" name="year" label="Ano:" register={register} />
        <Input
          variant="minmax"
          name="plate"
          label="Placa:"
          register={register}
        />
        <Button isSave type="submit" />
      </Content>
    </Container>
  );
}
