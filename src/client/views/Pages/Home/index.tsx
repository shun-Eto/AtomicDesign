import * as React from "react";

import ContainerWithHF from "@src/client/views/Components/Templates/ContainerWithHF";
import { useDispatch } from "react-redux";
import { addTask } from "./modules";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/reducer";

import { StyledSelect } from "./styles";

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state: RootState) => state.tasks);

  const handleOnClick = () => {
    dispatch(addTask("test"));
  };

  return (
    <ContainerWithHF>
      {tasks.map(val => (
        <div key={val.id}>{val.id}</div>
      ))}
      <button onClick={handleOnClick}>test</button>
      <div>
        <StyledSelect fullWidth />
      </div>
    </ContainerWithHF>
  );
};

export default Component;
