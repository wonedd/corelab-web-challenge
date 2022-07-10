import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import * as Yup from 'Yup';
import { Container, Content } from './styles';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Button } from '../Button';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { useRouter } from 'next/router';

interface ModalProps {
  isOpen: boolean;
  onCloseRequest: () => void;
}

type IData = {
  name: string;
  brand: string;
  color: string;
  plate: string;
  year: string;
};
export function Modal({ isOpen, onCloseRequest }: ModalProps) {
  const { register, handleSubmit, setValue } = useForm();
  const { reload } = useRouter();

  const handleCreateVehicle = async (data: IData) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome do veículo é obrigatório'),
        brand: Yup.string().required('Email do usuário obrigatório'),
        color: Yup.string().required('Cor obrigatória'),
        plate: Yup.string().required('Placa obrigatória').min(7),
        year: Yup.string().required('Ano obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/vehicles', data);

      toast.success('Veículo criado com sucesso!');

      onCloseRequest();

      reload();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        toast.error(err.message);
      }
    }
  };

  return (
    <Container isOpen={isOpen}>
      <Content onSubmit={handleSubmit(handleCreateVehicle)}>
        <IoArrowBackOutline size={19.5} onClick={onCloseRequest} />
        <Input name="name" label="Nome:" register={register} />
        <Input name="brand" label="Marca:" register={register} />
        <Input name="color" label="Cor:" register={register} />
        <Input name="year" label="Ano:" register={register} />
        <Input name="plate" label="Placa:" register={register} />
        <Button isSave type="submit">
          cu
        </Button>
      </Content>
    </Container>
  );
}
