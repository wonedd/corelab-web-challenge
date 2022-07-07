import styled from '@emotion/styled';

interface ContainerProps {
  isSave: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${props => (props.isSave ? '123px' : '377px')};
  height: ${props => (props.isSave ? '44px' : '60px')};

  background: rgba(101, 220, 199, 0.8);
  border-radius: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  font-size: ${props => (props.isSave ? '1.125rem' : '1.25rem')};
  line-height: ${props => (props.isSave ? '1.375rem' : '1.5rem')};

  color: rgba(2, 2, 2, 0.7);

  transition: 0.2s;

  cursor: pointer;

  &:hover {
    backdrop-filter: brightness(50%);
  }
`;
