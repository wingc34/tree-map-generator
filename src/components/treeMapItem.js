import React from "react";
import styled from "styled-components/macro";

const STreeMapItem = styled.div`
  width: ${(props) => props.calWeight}%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => (props.isGreen > 0 ? "green" : "red")};
  display: flex;
`;

const STreeMapItemContent = styled.div`
  word-break: break-all;
`;

function TreeMapItem({ calWeight, percent, itemName }) {
  return (
    <STreeMapItem
      data-testid="tree-map-item"
      calWeight={calWeight}
      isGreen={percent > 0}
    >
      <STreeMapItemContent>
        {itemName}
        <br />
        {Math.round(percent * 100) / 100}%
      </STreeMapItemContent>
    </STreeMapItem>
  );
}

export default TreeMapItem;
