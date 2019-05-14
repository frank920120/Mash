const styles = theme => ({
    card: {
      display: 'flex',
      position:'relative'
    },
    image:{
        position:'absolute',
        width:'50%',
        height:'100%',
        right:0,
        top:0,
        objectFit: 'contain'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      padding:10
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
      flexDirection: 'row',
      paddingLeft: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  });
export default styles;  