//adds styles to NavBar component

export const styles = theme => ({

	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	
	customButton: {
		textTransform: 'none',
		padding: '6px 20px',
		'font-weight': 300,
		fontSize: 18,
		'&:hover': {
			color: theme.palette.customButton.hoverText,       //  '#337AA5'  // '#000000'
		},
	},
	margin: {
		'margin-left': 560,
	},
	accentStyle: {
		height: '40px',
		width: '40px',
		marginRight: '15px',
		backgroundColor: theme.palette.accent.main,
   },
});