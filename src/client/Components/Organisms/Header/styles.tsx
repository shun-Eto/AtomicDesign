import styled from "styled-components";

import { AppBar } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

export const Header = styled(AppBar)<{ style?: CSSProperties }>(
	({ style, theme }) => {
		return {
			height: 55,
			width: "100%",
			padding: theme.spacing(1),
			position: "absolute",
			top: 0,
			left: 0,
		};
	}
);
