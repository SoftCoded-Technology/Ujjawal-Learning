import React, { useState } from 'react'
import { Button, ButtonGroup, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import makeStyles from '@mui/styles/makeStyles';

// const useStyles = makeStyles({
//   field : {
//     marginTop : 20,
//     marginBottom : 20,
//     display : 'block'
//   }
// })


const MaterialUI = () => {
  const [value,setValue] = useState("todos")
  // const classes = useStyles(); 
  
  return (


    <Container
    maxWidth="ms"
    fixed
    >
    <Typography
    // variant='h1'
    // variant='h2'
    // variant='h3'
    // variant='h4'
    variant='h5'
    // variant='h6'
    // variant='body1'
    // variant='body2'
    // variant='subtitle'
    // variant='caption'
    // variant='button'
    // variant='overline'
    // align='center'
    // align='left'
    // align='right'
    // align='justify'
    // align='inherit'
    color='secondary'
    // noWrap
    >
        You have to fill the form. 
    </Typography>

    <form>
    <br />
      <TextField 
        label={"Name"}
        // className={classes.field}
        variant='outlined'
        color='secondary'
        fullWidth
        required
      />
        <br /> <br />
      <TextField
        label="Details"
        // className={classes.field}
        fullWidth
        required
        color='secondary'
        variant='outlined'
        multiline
        rows={4}
      />
      
    </form>
    <br />
    <FormControl>
      <FormLabel>Note Category</FormLabel>
      <RadioGroup value={value} onChange={(e)=> setValue(e.target.value)}>
        <FormControlLabel value="money" label="Money" control={<Radio/>} />
        <FormControlLabel value="todos" label="Todo" control={<Radio/>} />
        <FormControlLabel value="remainders" label="Remainder" control={<Radio/>} />
        <FormControlLabel value="work" label="Work" control={<Radio/>} />
      </RadioGroup>
    </FormControl>
    <br />
    <Button
    color='primary'
    variant='contained'
    // variant='outlined'
    // variant='text'
    // disabled
    // fullWidth
    // loading
    // loadingPosition='start'
    // disabled
    type='submit'
    onClick={()=> {console.log("Button is clicked")}}
    >
    Click me 
    </Button>
    {/* <ButtonGroup
    variant='outlined'
    color='primary'
    size='small'
    >
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
    </ButtonGroup> */}
    {/* <br /> */}
    {/* <AcUnitIcon/>
    <AcUnitIcon color='disabled' fontSize='small'/>
    <AcUnitIcon color='error' fontSize='small'/>
    <AcUnitIcon color='action' fontSize='small'/>
    <AcUnitIcon color='primary' fontSize='small'/> */}
    {/* <AcUnitIcon color='secondary' fontSize='small'/> */}
    </Container>

  )
}

export default MaterialUI