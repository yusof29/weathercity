import styled from "styled-components";

export const StyledCard = styled.div`
  width: 650px;
  height: 500px;
  background-color: rgba(250, 250, 250, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  & > div:first-child {
    padding: 40px;
    text-align: center;
  }
`;

export const StyledForm = styled.form`
  text-align: center;
  margin-bottom: 60px;
  height: 110px;

  h1 {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }

  input {
    border: none;
    border-radius: 9px;
    outline: none;
    color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0px 4px 9px rgba(129, 129, 129, 0.3);
    padding: 10px 20px;
    width: 300px;
    font-size: 20px;
  }

  button {
    margin-left: 10px;
    padding: 10px 20px;
    display: none;
  }

  p {
    margin-top: 10px;
    color: red;
  }
`;

export const StyledCity = styled.div`
  margin-bottom: 20px;
  text-align: left;

  p {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.secondary};
  }

  div {
    display: flex;

    h2 {
      color: ${({ theme }) => theme.colors.primary};
    }

    p {
      margin-left: 5px;
      font-size: 13px;
    }
  }
`;

export const StyledDegrees = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 0 55px;

  h1 {
    font-size: 100px;
    color: ${({ theme }) => theme.colors.primary};
  }

  div {
    text-align: center;

    h3 {
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 10px;
    }

    p {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
