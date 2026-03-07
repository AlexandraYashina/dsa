import { DefaultTheme } from "styled-components";
// import { colors, typography, spacers, zIndices } from "./tokens";

export const lightTheme: DefaultTheme = {
	colors: {
		text: {
			main: '#363F43',
			primary: '#057EAD',
			secondary: '#546369',
			accent: '#C85209',
			orange: '#F9E6DB',
			grey: '#E7E9EA',
			blue: '#DBEDF4',
			white: '#FFFFFF',
		},

		background: {
			main: '#FFFFFF',
			primary: '#057EAD',
			orange: '#C85209',
			grey: '#546369',
			blue: '#057EAD',
		},

		border: {
			main: '#C1C7C9',
			accent: {
				enabled: '#C85209',
				active: '#803406',
				disabled: '#F9E6DB',
			},
		},
	},

	typography: {
		fontFamily: {
			heading: `Nunito, 'Inter', sans-serif;`,
			text: `Nunito, 'Inter', sans-serif;`,
		},
		fontSize: {
			heading: {
				h1: '56px',
				h2: '44px',
				h3: '32px',
				h4: '24px',
				h5: '18px',
				h6: '16px',
			},
			text: {
				base: '16px',
				small: '14px',
				accent: '20px',
			},
		},
		lineHeight: {
			heading: {
				h1: '64px',
				h2: '52px',
				h3: '40px',
				h4: '32px',
				h5: '24px',
				h6: '22px',
			},
			text: {
				base: '24px',
				small: '20px',
				accent: '28px', 
			},
		},
		fontWeight: {
			medium: 500,
			bold: 700,
		},
	},

	borderRadius: '50px',

	animation: {
		base: `0.2s ease-in-out`,
	},
};

export const darkTheme: DefaultTheme = {
	...lightTheme,
	colors: {
		text: {
			main: '#363F43',
			primary: '#66B3D1',
			secondary: '#546369',
			accent: '#C85209',
			orange: '#F9E6DB',
			grey: '#E7E9EA',
			blue: '#DBEDF4',
			white: '#FFFFFF',
		},

		background: {
			main: '#012330',
			primary: '#023F57',
			orange: '#C85209',
			grey: '#546369',
			blue: '#057EAD',
		},

		border: {
			main: '#C1C7C9',
			accent: {
				enabled: '#C85209',
				active: '#803406',
				disabled: '#F9E6DB',
			},
		},
	},
};