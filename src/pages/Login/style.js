import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 50px;

  img {
    width: 144.06px;
    height: 19.97px;
    left: 647px;
    top: 77.33px;
  }

  form {
    margin: 80px 0;
    width: 369px;
    height: 502px;
    text-align: center;
    display: flex;
    flex-direction: column;
    background: var(--Grey-3);
    gap: 20px;

    h1 {
      margin-top: 38px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
    }

    p {
      margin-top: 8px;
    }
  }
`;
