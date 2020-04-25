export default {
	initialColorMode: 'light',
	breakpoints: ['40em', '64em', '80em'],
	colors: {
		backdrop: 'rgba(0, 0, 0, 0.8)',
		background: '#fafafa',
		description: '#777777',
		muted: '#efefef',
		primary: '#0b5fff',
		text: '#333333',
		modes: {
			dark: {
				text: '#ffffff',
				background: '#111111',
				foreground: '#333333',
				primary: '#1da1f2',
			},
		},
	},
	fonts: {
		body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
	},
	fontSizes: {
		xs: 12,
		s: 14,
		m: 16,
		l: 20,
		xl: 32,
	},
	fontWeights: {
		body: 400,
		bold: 700,
	},
	lineHeights: {
		body: 1.5,
	},
	radii: {
		s: '2px',
		m: '4px',
		l: '8px',
	},
	shadows: {
		card: '0 0 8px rgba(0, 0, 0, 0.125)',
	},
	sizes: {
		container: 768,
	},
	space: [0, 4, 8, 16, 32, 48],
	// Variants
	buttons: {
		primary: {
			color: 'background',
			bg: 'primary',
			'&:hover:enabled': {
				opacity: 0.9,
			},
		},
		secondary: {
			color: 'text',
			bg: 'background',
			'&:hover:enabled': {
				bg: 'muted',
			},
		},
	},
	cards: {
		primary: {
			background: 'white',
			borderRadius: 'm',
			boxShadow: 'card',
			padding: 3,
		},
	},
	forms: {
		label: {
			fontSize: 's',
			fontWeight: 'bold',
			textTransform: 'uppercase',
		},
	},
	text: {
		description: {
			color: 'description',
			fontSize: 's',
		},
		small: {
			fontSize: 's',
		},
	},
	// global styles
	styles: {
		root: {
			fontFamily: 'body',
			fontWeight: 'body',
			button: {
				cursor: 'pointer',
				'&:disabled': {
					cursor: 'default',
					opacity: 0.3,
				},
			},
		},
	},
};
