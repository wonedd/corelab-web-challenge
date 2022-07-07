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
`;

export const InputBase = styled.input`
  height: 38px;

  max-width: 240px;
  width: 240px;

  background: #FFFFFF;

  border: 1px solid rgba(2, 2, 2, 0.8);
  border-radius: 100px;

  color: rgba(2, 2, 2, 0.6);

  border: none;
  border-radius: 20px;

  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;

  &::placeholder {
   font-weight: 400;
   font-size: 1.25rem;
   line-height: 1.5rem;

   color: rgba(2, 2, 2, 0.6);
  }

 
`;

