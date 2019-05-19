const styles = theme => ({
    card: {
      display: 'flex',
      position:'relative',
      transition: 'all .5s ease-in-out', 
      "&:hover":{
        transform: 'scale(1.1)'
      },
      margin:20,
      width:"auto"
    },
    SongName:{
      width:'50%',
      height:80
    },
    image:{
        position:'absolute',
        width:'50%',
        height:'100%',
        right:0,
        top:0,
        objectFit: 'cover'
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