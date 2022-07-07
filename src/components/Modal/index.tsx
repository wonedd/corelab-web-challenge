import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import * as Yup from 'Yup';
import { Container, Content } from './styles';
import { IoArrowBackOutline } from 'react-icons/io5';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button } from '../Button';

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
  const { register, handleSubmit } = useForm();

  const handleCreateVehicle = async (data: IData) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome do veículo é obrigatório'),
        brand: Yup.string().required('Email do usuário obrigatório'),
        color: Yup.string(),
        plate: Yup.string().required('Placa obrigatória'),
        year: Yup.string().required('Ano obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await axios.post('http://localhost:3333/vehicles', data);

      console.log(response);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        return;
      }

      toast.error('Erro ao cadastrar unidade');
      toast.error(
        'Vish, acho que alguém puxou um cabo aqui. tente novamente em uns minutinhos beleza?',
      );
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
        <button type="submit">cu</button>
      </Content>
    </Container>
  );
}
