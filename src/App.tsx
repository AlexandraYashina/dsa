import React from "react";
import { ThemeProvider } from "styled-components";
import {
	Placeholder,
	GlobalStyle,
	lightTheme,
	darkTheme,
	Button,
	Badge,
 } from "./lib";

function App() {
	const switcher = true;
	return (
		<ThemeProvider theme={switcher ? darkTheme : lightTheme}>
			<GlobalStyle />
			<main>
				<Button view="primary" disabled={false} />
				{/* <Badge color="blue" iconAfter="chevronUp" /> */}
			</main>
		</ThemeProvider>
	);
}

export default App;
