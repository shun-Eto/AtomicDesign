import styled from "styled-components";

import { AppBar } from "@material-ui/core";

export const Header = styled(AppBar)(({ theme }) => {
	return {
		height: 55,
		width: "100%",
		padding: theme.spacing(1),
		position: "absolute",
		top: 0,
		left: 0,
	};
});
