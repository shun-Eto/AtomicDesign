import * as React from "react";

import ContainerWithHF from "~src/views/Components/Templates/ContainerWithHF";
import { useDispatch } from "react-redux";
import { addTask } from "./modules";
import { useSelector } from "react-redux";
import { RootState } from "~redux/store/reducer";

import { StyledSelect, Wrapper, MuiButton, LongButton } from "./styles";
import { Typography, TypographyClassKey } from "@material-ui/core";
import { StyledMuiButton, StyledButton } from "~views/Components/Atoms/Button";

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state: RootState) => state.tasks);

  const handleOnClick = () => {
    dispatch(addTask("test"));
  };

  const test: TypographyClassKey = "h1";

  return (
    <ContainerWithHF>
      {tasks.map(val => (
        <div key={val.id}>{val.id}</div>
      ))}
      <button onClick={handleOnClick}>test</button>
      <div>
        <StyledSelect fullWidth />
      </div>

      <div style={{ margin: 10, width: 300 }}></div>
      <Wrapper color="white" fontSize={10}>
        Test
      </Wrapper>
      <StyledButton>Test</StyledButton>
      <StyledMuiButton>Test2</StyledMuiButton>
      <MuiButton variant="outlined">Test3</MuiButton>
      <Typography color="primary" variant={test}>
        Test
      </Typography>
      <StyledMuiButton>Test</StyledMuiButton>
      <StyledButton>Test</StyledButton>
      <LongButton variant="contained">Test</LongButton>
    </ContainerWithHF>
  );
};

export default Component;
