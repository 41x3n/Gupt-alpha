import styled from "styled-components";

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return "#eeeeee";
};

export const DropContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  // padding: 20px;
  border: 3.5px solid black;
  border-radius: 10px;
  // border-color: ${(props) => getColor(props)};
  shadow-color: red;
  shadow-offset: {width: 0, height: 2}
  background-color: #FFFFFF;
  color: #000;
  outline: none;
  transition: border .24s ease-in-out;
`;
