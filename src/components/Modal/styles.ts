import styled from '@emotion/styled';

interface ContainerProps {
  isOpen: boolean;
}
export const Container = styled.section<ContainerProps>`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};

  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  justify-content: center;
  align-items: center;

  backdrop-filter: blur(8px);
`;

export const Content = styled.form`
  width: 306px;
  height: 622px;

  background: rgba(255, 255, 255, 0.7);

  border: 1px solid rgba(2, 2, 2, 0.8);

  display: flex;
  flex-direction: column;
  gap: 21px;

  padding: 69px 35px;

  transition: 0.2s;

  svg {
    &:hover {
      color: #515151;
      cursor: pointer;
    }
  }
`;
