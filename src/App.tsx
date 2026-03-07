import React from "react";
import { ThemeProvider } from "styled-components";
import { Placeholder, GlobalStyle, lightTheme, darkTheme } from "./lib";

function App() {
	const switcher = true;
	return (
		<ThemeProvider theme={switcher ? darkTheme : lightTheme}>
			<GlobalStyle />
			<main>
				<Placeholder text="Привет, мир!" />
			</main>
		</ThemeProvider>
	);
}

export default App;
