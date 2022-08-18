import React from "react";
import styled from "styled-components/macro";

const SDataInputContainer = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const SJsonInputContainer = styled.div`
  margin-bottom: 10px;
`;

const SJsonInputTitle = styled.div`
  font-size: 20px;
`;

const SJsonInput = styled.textarea`
  resize: none;
  overflow: auto;
`;

const SRowInputContainer = styled.div``;

const SRowInputTitle = styled.div``;

const SRowInput = styled.input``;

const SGenarateBtn = styled.button`
  margin-top: 15px;
  font-size: 18px;
`;

const SPrettifyBtn = styled.button`
  margin: 15px 0 0 15px;
  font-size: 18px;
`;

const SErrorMsg = styled.div`
  margin-top: 15px;
  color: red;
`;

const DataInput = ({
  json,
  rowNum,
  errMsg,
  onJsonChange,
  onRowNumChange,
  onButtonClick,
  onPrettifyJsonClick,
}) => {
  return (
    <SDataInputContainer>
      <SJsonInputContainer>
        <SJsonInputTitle>Please enter your Data Json: </SJsonInputTitle>
        <SJsonInput data-testid="json-input" rows="30" cols="40" value={json} onChange={onJsonChange} />
      </SJsonInputContainer>
      <SRowInputContainer>
        <SRowInputTitle>Please enter row number: </SRowInputTitle>
        <SRowInput data-testid="row-input" value={rowNum} onChange={onRowNumChange} type="number" min="1" />
      </SRowInputContainer>
      <SGenarateBtn onClick={onButtonClick}>Generate Tree Map</SGenarateBtn>
      <SPrettifyBtn onClick={onPrettifyJsonClick}>Prettify Json</SPrettifyBtn>
      <SErrorMsg title="error-msg">{errMsg}</SErrorMsg>
    </SDataInputContainer>
  );
};

export default DataInput;
