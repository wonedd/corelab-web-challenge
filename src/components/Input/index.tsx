import { InputHTMLAttributes, useEffect } from 'react';
import { FieldValues, UseFormRegister, useForm } from 'react-hook-form';
import { Container, Label, InputBase } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  initialValue?: InitialValue;
}

type InitialValue = {
  fieldName: string;
  fieldValue: string;
};
export function Input({
  name,
  label,
  register,
  required,
  initialValue,
  ...rest
}: InputProps) {
  const { setValue } = useForm();

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue.fieldName, initialValue.fieldValue);
    }
  }, [initialValue, setValue]);
  return (
    <Container>
      <Label>{label}</Label>
      <InputBase {...register(name, { required })} {...rest} />
    </Container>
  );
}
