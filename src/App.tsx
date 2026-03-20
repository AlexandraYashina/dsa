import React from "react";
import { ThemeProvider } from "styled-components";
import { Placeholder, GlobalStyle, lightTheme, darkTheme, Button } from "./lib";

function App() {
	const switcher = false;
	return (
		<ThemeProvider theme={switcher ? darkTheme : lightTheme}>
			<GlobalStyle />
			<main>
				<Button view="primary" disabled={false} />
			</main>
		</ThemeProvider>
	);
}

export default App;
