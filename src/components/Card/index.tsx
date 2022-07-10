import { Container, Header, Content, Topic } from './styles';
import {
  IoClose,
  IoPencilOutline,
  IoHeartOutline,
  IoHeart,
} from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { UpdateModal } from '../UpdateModal';
import { useVehicles } from '../../services/hooks/useVehicles';

interface CardProps {
  vehicle: {
    name: string;
    price: number;
    year: string;
    description: string;
    color: string;
    favorite: boolean;
    id: string;
  };
}

export function Card({ vehicle }: CardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { refetch } = useVehicles();
  useEffect(() => {});

  const handleFavorite = async () => {
    try {
      const response = await api.patch(`/vehicles/${vehicle.id}`);

      console.log(response);

      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnfavorite = async () => {
    try {
      const response = await api.delete(`/favorites/${vehicle.id}`);

      console.log(response);

      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <Header>
          <IoClose size={25.5} />
          <IoPencilOutline size={19.5} onClick={() => setIsOpen(true)} />
          {vehicle?.favorite ? (
            <IoHeart
              onClick={() => {
                handleUnfavorite();
              }}
              size={20.5}
            />
          ) : (
            <IoHeartOutline
              onClick={() => {
                handleFavorite();
              }}
              size={20.5}
            />
          )}
        </Header>
        <Content>
          <Topic>{vehicle?.name}</Topic>
          <Topic>Preço:{vehicle?.price}</Topic>
          <Topic>Descrição:{vehicle?.description}</Topic>
          <Topic>Ano:{vehicle?.year}</Topic>
          <Topic> Cor:{vehicle?.color}</Topic>
        </Content>
      </Container>
      <UpdateModal
        vehicle={vehicle}
        isOpen={isOpen}
        onCloseRequest={() => setIsOpen(false)}
      />
    </>
  );
}
