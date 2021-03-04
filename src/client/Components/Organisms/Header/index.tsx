import * as React from "react";

import { Header } from "./styles";

interface ComponentProps {
	componentRef?: React.RefObject<HTMLDivElement>;
}
const Component: React.FC<ComponentProps> = (props) => {
	return <Header ref={props.componentRef}>Header</Header>;
};

export default Component;
