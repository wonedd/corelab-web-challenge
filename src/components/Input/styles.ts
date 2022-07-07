import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.063rem;

  color: #000000;

  padding-left: 16px;
`;

export const InputBase = styled.input`
  height: 38px;

  max-width: 240px;
  width: 240px;

  background: #ffff;

  border: 1px solid rgba(2, 2, 2, 0.8);
  border-radius: 100px;

  border-radius: 20px;

  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;

  display: flex;
  align-items: center;

  padding-left: 16px;

  &::placeholder {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.5rem;

    color: rgba(2, 2, 2, 0.6);
  }

  &:focus {
    background-color: rgba(2, 2, 2, 0.1);
  }
`;
