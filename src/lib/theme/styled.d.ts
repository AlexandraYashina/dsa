import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			text: {
				main: string,
				primary: string,
				secondary: string,
				accent: string,
				orange: string,
				grey: string,
				blue: string,
				white: string,
			},
	
			background: {
				main: string,
				primary: string,
				orange: string,
				grey: string,
				blue: string,
			},

			border: {
				main: string,
				accent: {
					enabled: string,
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

		animation: {
			base: string,
		},
	}
};
