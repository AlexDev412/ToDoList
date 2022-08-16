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
    BoardDirection: {
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingTop: '10px',
    },
    BoardTodo: {
        backgroundColor:'rgb(235, 236, 240)',
        flexDirection: 'column',
        border: '1px',
        borderRadius: '3px',
        width: '500px',
        height: '90vh',
        margin: '50px 0px 0px 0px',
    },
    BoardProgress: {
        backgroundColor:'rgb(235, 236, 240)',
        flexDirection: 'column',
        border: '1px',
        borderRadius: '3px',
        width: '500px',
        height: '90vh',
        margin: '50px 0px 0px 0px',
    },
    BoardDone: {
        backgroundColor:'rgb(235, 236, 240)',
        flexDirection: 'column',
        border: '1px',
        borderRadius: '3px',
        width: '500px',
        height: '90vh',
        margin: '50px 0px 0px 0px',
    },
  } as const;

  export default styles;