import { ThemeProvider } from "styled-components";
import {
	GlobalStyle,
	lightTheme,
	darkTheme,
	Button,
	Badge,
 } from "./lib";
 import './AppStyles.css';

function App() {
	const switcher = true;
	return (
		<ThemeProvider theme={switcher ? darkTheme : lightTheme}>
			<GlobalStyle />
			<main>
				<div>
					<div className="flex-row">
						<div className="flex-column">
							<Button view="primary" disabled={false} iconBefore="user" />
							<Button view="primary" disabled={true} />
						</div>
						<div className="flex-column">
							<Button view="secondary" disabled={false} iconBefore="user" />
							<Button view="secondary" disabled={true} />
						</div>
					</div>
					<div className="flex-row">
						<div className="flex-column">
							<Badge color="blue" iconAfter="chevronUp" />
							<Badge color="orange" iconAfter="chevronUp" />
							<Badge color="grey" iconAfter="chevronUp" />
						</div>
					</div>
				</div>
			</main>
		</ThemeProvider>
	);
}

export default App;
