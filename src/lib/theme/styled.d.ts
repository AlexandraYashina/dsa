import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			transparent: string,
			text: {
				main: string,
				primary: {
					enabled: string,
					disabled: string,
				},
				secondary: string,
				accent: {
					enabled: string,
					hover: string,
					active: string,
					disabled: string,
				},
				orange: string,
				grey: string,
				blue: string,
				white: string,
			},
	
			background: {
				main: string,
				primary: {
					enabled: string,
					hover: string,
					active: string,
					disabled: string,
				},
				accent: string,
				orange: string,
				grey: string,
				blue: string,
			},

			border: {
				main: string,
				accent: {
					enabled: string,
					hover: string,
					active: string,
					disabled: string,
				},
			},
		},

		typography: {
			fontFamily: {
				heading: string,
				text: string,
			},
			fontSize: {
				heading: {
					h1: string,
					h2: string,
					h3: string,
					h4: string,
					h5: string,
					h6: string,
				},
				text: {
					base: string,
					small: string,
					accent: string,
				},
			},
			lineHeight: {
				heading: {
					h1: string,
					h2: string,
					h3: string,
					h4: string,
					h5: string,
					h6: string,
				},
				text: {
					base: string,
					small: string,
					accent: string, 
				},
			},
			fontWeight: {
				medium: number,
				bold: number,
			},
		},
	
		borderRadius: string,

		spacing: {
			inner: {
				connected: string,
				close: string,
				related: string,
				grouped: string,
			},
			outer: {
				related: string,
				grouped: string,
				separate: string,
			},
			padding: {
				default: string,
				extraSmall: string,
				small: string,
				medium: string,
				large: string,
			},
		},

		animation: {
			base: string,
		},
	}
};
