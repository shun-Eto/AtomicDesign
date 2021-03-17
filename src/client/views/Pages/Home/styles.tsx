import { Select, SelectProps } from "@material-ui/core";
import { createStyles, withStyles } from "@material-ui/styles";
import React from "react";

interface StyledSelectProps extends SelectProps {}
export const StyledSelect = withStyles(theme =>
  createStyles({
    root: {}
  })
)((props: StyledSelectProps) => <Select {...props} />);
