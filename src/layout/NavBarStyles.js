//adds styles to NavBar component



export const styles = theme => ({
	root: {
		width: '100%',
	},
	grow: {
		flexGrow: 1,
	},
	title: {
		display: 'block',
		
	},
	
	inputRoot: {
		color: '#7CFC00',
		width: '100%',
    },
    primary:        { main:       "#00FF00",
                    light:      "#5DBCD2" },
	
	customButton: {
		textTransform: 'none',
		padding: '6px 20px',
		'font-weight': 300,
		fontSize: 18,
		'&:hover': {
			color: '#337AA5',       //  '#337AA5'  // '#000000'
		},
	},
	margin: {
		'margin-left': 560,
	},
	accentStyle: {
		 height: '40px',
		 width: '40px',
		 marginRight: '15px',
		 backgroundColor: '#000000',
	},
});