import { Container, Content } from '../../shared/home.styles';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal } from '../components/Modal';

interface IVehicles {
  data: [
    {
      name: string;
      color: string;
      brand: string;
      year: string;
      price: number;
      id: string;
    },
  ];
}
export default function Home() {
  const { register } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [vehicles, setVehicles] = useState<IVehicles>();

  useEffect(() => {
    const handleVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:3333/');

        await response;

        setVehicles(response);
      } catch (err) {
        console.log(err);
      }
    };
    handleVehicles();
  }, []);

  return (
    <>
      <Container>
        <Content>
          <Button onClick={() => setIsOpen(true)} />

          {vehicles.data.map(vehicle => {
            return <div>{vehicle.name}</div>;
          })}
        </Content>
      </Container>
      <Modal isOpen={isOpen} onCloseRequest={() => setIsOpen(false)} />
    </>
  );
}
