const styles = theme => ({
    card: {
      display: 'flex',
      position:'relative'
    },
    image:{
        position:'absolute',
        width:'100%',
        height:'100%',
        left:0,
        top:0,
        opacity: '0.5'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
    zIndex:9999,
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  });
export default styles;  