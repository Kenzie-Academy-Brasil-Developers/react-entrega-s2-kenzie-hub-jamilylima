import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.whiteSchema ? "#FF577F" : "#868E96")};
  color: #f8f9fa;
  height: 45px;
  width: 300px;
  margin-left: 30px;
  border-radius: 4px;
  border: 2px, solid black;
  font-family: "Inter", sans-serif;
  margin-top: 16px;
`;
