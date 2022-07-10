import styled from '@emotion/styled';

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

export const Content = styled.section`
  background-color: #ececec;

  padding: 23px 16px;

  width: 414px;

  display: flex;
  flex-direction: column;
  gap: 66px;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  line-height: 0.938rem;
  font-weight: normal;

  color: #020202;
  align-self: flex-start;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
