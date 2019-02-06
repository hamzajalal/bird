export const styles = theme => ({
    card: {
      width: 500,
      margin: 10,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 30,
    },
    pos: {
      marginBottom: 12,
    },
    vAlign: {
      display: 'inline-flex',
      verticalAlign: 'middle'
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
    chipGreen: {
      margin: theme.spacing.unit,
      backgroundColor: '#81C784',
      marginTop: 15,
      fontSize: 12
    },
    chipGray: {
      margin: theme.spacing.unit,
      marginTop: 15,
      backgroundColor: '#BDBDBD',
      fontSize: 12
    },
    cardHeader: {
      textAlign: 'left'
    },
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
    },
    actions: {
      display: 'inline-flex'
    },
    actionArea:{
      textAlign: 'center'
    },
    link: {
      textDecoration: 'none',
      color: 'unset'
    }
  });