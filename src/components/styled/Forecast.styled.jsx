import styled from "styled-components";

export const StyledForecastContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 20px;
  width: 700px;
  margin-top: -45px;
`;

export const StyledForecast = styled.div`
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 10px 20px;
  height: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ theme }) => theme.colors.secondary};
  }

  h4 {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondary};
  }

  div {
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }
`;
