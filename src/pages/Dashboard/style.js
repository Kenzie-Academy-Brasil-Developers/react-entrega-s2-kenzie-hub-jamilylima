import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  img {
    width: 144.06px;
    height: 19.97px;
    
  }

  section {
    width: 420px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .Logado {
    width: 420px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin-left:50px;
    border-top: 1px solid var(--Grey-2)
  }

  .Tec {
    width: 420px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid var(--Grey-2);
    margin-top:20px ;
    margin-bottom: 20px;

  }

  .btn {
    background: #212529;
    color: var(--Grey-0);
    border-radius: 4px;
    width: 67.49px;
    height: 40.11px;
    font-size: 12px;
    
  }

  h1 {
    margin-top: 20px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    margin-bottom:15px ;
  }

  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--Grey-1);
  }

  h2{
    font-size: 16px;
  }

  .botao {
    background: #212529;
    color: var(--Grey-0);
    border-radius: 4px;
    width: 30px;
    height: 30px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
  }



  @media (min-width: 480px) {
     
    section {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  
  .Logado {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-left:50px;
    border-top: 1px solid var(--Grey-2)
  }

  .renderizaTec {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid var(--Grey-2);
    margin-top:20px ;
  }

  .Tec {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid var(--Grey-5);
    margin-top:20px ;
  }



  }

 `;







