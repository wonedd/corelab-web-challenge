import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { api } from '../../services/api';
import { Container, Content, InputBox, ButtonBox } from './styles';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Button } from '../Button';
import { Input } from '../Input';
import { useVehicles } from '../../services/hooks/useVehicles';
import { Select } from '../Select';
import { useEffect, useState } from 'react';

interface UpdateModalProps {
  isOpen: boolean;
  onCloseRequest: () => void;
  vehicle?;
}

type IData = {
  brand: string;
  color: string;
  year: string;
  min: number;
  max: number;
};

export function FilterModal({ isOpen, onCloseRequest }: UpdateModalProps) {
  const { register, handleSubmit } = useForm();
  const { data, refetch } = useVehicles();
  const [search, setSearch] = useState([]);

  const handleFilter = async (formData: IData) => {
    try {
      const schema = Yup.object().shape({
        brand: Yup.string(),
        color: Yup.string(),
        year: Yup.string(),
        min: Yup.number(),
        max: Yup.number(),
      });

      await schema.validate(formData, {
        abortEarly: false,
      });

      await api.post('/filter', formData);

      onCloseRequest();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <Container isOpen={isOpen}>
      <Content onSubmit={handleSubmit(handleFilter)}>
        <IoArrowBackOutline size={19.5} onClick={onCloseRequest} />
        <Select name="brand" label="Marca:" register={register}>
          {data?.vehicles.map(vehicle => {
            return <option value={vehicle.brand}>{vehicle.brand}</option>;
          })}
        </Select>
        <Select name="color" label="Cor:" register={register}>
          {data?.vehicles.map(vehicle => {
            return <option value={vehicle.color}>{vehicle.color}</option>;
          })}
        </Select>
        <Select name="year" label="Ano:" register={register}>
          {data?.vehicles.map(vehicle => {
            return <option value={vehicle.year}>{vehicle.year}</option>;
          })}
        </Select>
        <InputBox>
          <Input
            variant="minmax"
            name="min"
            label="Preço min."
            register={register}
          />
          <Input
            variant="minmax"
            name="max"
            label="Preço max."
            register={register}
          />
        </InputBox>
        <ButtonBox>
          <Button isSave type="submit" />
        </ButtonBox>
      </Content>
    </Container>
  );
}
