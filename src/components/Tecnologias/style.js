import styled from "styled-components";

export const ContainerTec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #212529;
  width: 70%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  width: 90%;
  height: 50px;
  border-radius: 6px;
  background: var(--Grey-4);
  gap: 30px;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
 
  :hover {
    background: var(--Grey-2);
  }

  img {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    cursor: pointer;
  }

  p {
    margin-left: 10px;
  }

  .status {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }



@media(min-width: 480px) { 



}
`;

