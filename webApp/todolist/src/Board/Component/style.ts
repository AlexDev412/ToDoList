const styles = {
    Background: {
      backgroundColor: 'rgb(249, 250, 252)',
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      height: '100vh',
    },
    BoardBackground: {
        backgroundColor:'rgb(255, 255, 255)',
        width: '1700px',
        height:'98vh',
        flexDirection: 'row',
        border: '1px',
        borderRadius: '5px',
        boxShadow: 'rgb(0 0 0 / 10%) 0 0 10px',
      },
  } as const;

  export default styles;