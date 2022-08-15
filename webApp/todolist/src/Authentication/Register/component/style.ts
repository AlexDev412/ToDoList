const styles = {
    Background: {
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      height: '100vh',
      backgroundColor: 'rgb(249, 250, 252)',
    },
    BackgroundLogin: {
      backgroundColor:'rgb(255, 255, 255)',
      width: '500px',
      height:'420px',
      flexDirection: 'row',
      border: '1px',
      borderRadius: '5px',
      boxShadow: 'rgb(0 0 0 / 10%) 0 0 10px',
    },
    Title: {
        textAlign: 'center',
    },
    PositionInput: {
        padding : '40px',
  },
  AssetOne: {
        left: '0px',
        bottom: '0px',
        position: "absolute",
        width: "350px",
  },
  AssetTwo: {
    right: '0px',
    bottom: '0px',
    position: "absolute",
    width: "350px",
},
  } as const;

  export default styles;