import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  height: 342px;
  position: fixed;
  
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 369px;
  height: 342px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  gap: 20px;
  margin-left: 20px;
  margin-top: 50px;

  .cadastro {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    background: #343b41;
  }

  h1 {
    color: var(--Grey-0);
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  }

  .btnX {
    width: 11px;
    height: 26px;
    color: #868e96;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    background: #343b41;
    border: none;
  }

  .escolherTec {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 30px;
    }

    select {
      background: var(--Grey-2);
      border-radius: 4px;
      border: 1px solid var(--Grey-0);
      color: var(--Grey-0);
      padding: 1rem;
      width: 100%;
      transition: 0.4s;
      width: 300px;
    }

    option{
      background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--Grey-0);
    }

  @media (min-width: 480px) {
      form {
    width: 370px;
    height:342px;
    text-align: center;
    display: flex;
    gap: 10px;
    flex-direction: column;
    background: var(--Grey-3);
      
    }}
`;
