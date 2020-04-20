import React,{Fragment,useEffect,useState} from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Form from 'react-bootstrap/Form'


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const Statewise = () => {
    const classes = useStyles();
    const [districts,setdistrict] = useState([]);
    const [searchState,setsearchState] = useState("");
    useEffect(() => {
        fetch(`https://api.covid19india.org/data.json`)
          .then(res => res.json())
          .then(data => {
            setdistrict(data.statewise);
          })
          .catch(err => console.log(err));
    });

    const result = [...districts.filter(item => item.statecode!=='TT')];

    const filtercountry = result.filter((data)=>{
      if(searchState === "")
          return data
      else if(data.state.toLowerCase().includes(searchState.toLowerCase())){
          return data
      }
    })
    const res = filtercountry.map(item => {
        console.log(item.state);
        return (
            <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item.state}
                  </TableCell>
                  <TableCell align="right">{item.active}</TableCell>
                  <TableCell align="right">{item.confirmed}</TableCell>
                  <TableCell align="right">{item.deaths}</TableCell>
                  <TableCell align="right">{item.recovered}</TableCell>
                </TableRow>
            </TableBody>
        )
    })
   
    return (
      <Fragment>
      <Form>
        <Form.Group controlId="formGroupSearch">
          <Form.Control type="text" placeholder="Search a State" onChange={e => setsearchState(e.target.value)}/>
        </Form.Group>
      </Form>  
      <h1 className="text-center">State Wise Data</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Country</StyledTableCell>
              <StyledTableCell align="right">Active Cases</StyledTableCell>
              <StyledTableCell align="right">Confirmed Cases</StyledTableCell>
              <StyledTableCell align="right">Deaths</StyledTableCell>
              <StyledTableCell align="right">Recovered</StyledTableCell>
            </TableRow>
          </TableHead>
           {res}
        </Table>
      </TableContainer>
      </Fragment>
    );
  }


  export default Statewise;