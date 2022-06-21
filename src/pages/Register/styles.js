import styled from "styled-components";

export const Container = styled.div`
  /* height: 100vh; */
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 30px;

  img {
    width: 144.06px;
    height: 19.97px;
  }

  section {
    width: 370px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .btn {
    background: #212529;
    color: var(--Grey-0);
    border-radius: 4px;
    width: 67.49px;
    height: 40.11px;
    font-size: 12px;
  }

  form {
    width: 370px;
    height: 891px;
    text-align: center;
    display: flex;
    flex-direction: column;
    background: var(--Grey-3);

    h1 {
      margin-top: 20px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
    }

    h3 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      color: var(--Grey-1);
    }

    button {
      background: var(--Color-primary-Negative);
      color: #f8f9fa;
      height: 45px;
      width: 300px;
      margin-left: 30px;
      border-radius: 4px;
      border: 2px, solid black;
      font-family: "Inter", sans-serif;
      margin-top: 16px;

      :hover {
        background: var(--Color-primary-Focus);
      }
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
  }

  @media (min-width: 480px) {
    form {
      width: 370px;
      height: 791px;
      text-align: center;
      display: flex;
      gap: 10px;
      flex-direction: column;
      background: var(--Grey-3);
    }
  }
`;
