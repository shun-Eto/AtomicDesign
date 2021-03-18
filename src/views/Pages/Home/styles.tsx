import { Button, ButtonProps, Select, SelectProps } from "@material-ui/core";
import { createStyles, withStyles } from "@material-ui/styles";
import React from "react";
import styled from "styled-components";

interface StyledSelectProps extends SelectProps {}
export const StyledSelect = withStyles(theme =>
  createStyles({
    root: {}
  })
)((props: StyledSelectProps) => <Select {...props} />);

interface WrapperProps {
  color: string;
  fontSize: number;
}
export const Wrapper = styled.div<WrapperProps>(
  ({ color, fontSize, theme }) => {
    const fontReSize = fontSize * 1.5;
    return {
      color,
      fontSize: fontReSize
    };
  }
);

export const StyledButton = styled(Button)(({ theme }) => {
  return {};
});

export const StyledMuiButton = withStyles(theme =>
  createStyles({
    root: {},
    label: {}
  })
)((props: ButtonProps) => <Button {...props} />);

interface MuiButtonProps extends ButtonProps {}
export const MuiButton = withStyles(theme =>
  createStyles({
    root: {}
  })
)((props: MuiButtonProps) => <Button {...props} />);

interface ShortButtonProps extends ButtonProps {}
export const ShortButton = withStyles(theme =>
  createStyles({
    root: {}
  })
)((props: ShortButtonProps) => <Button {...props} />);

interface LongButtonProps extends ButtonProps {}
export const LongButton = withStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(2)
    }
  })
)((props: LongButtonProps) => <Button {...props} />);
