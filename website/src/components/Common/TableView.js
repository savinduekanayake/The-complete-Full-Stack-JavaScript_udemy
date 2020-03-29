import React,{Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';

class TableView extends Component {
    render(){
        const  {rows, colums} = this.props
        return(
            <Paper>
                <Table>

                    <TableHead>
                        <TableRow>
                            {colums ?
                                colums.map((col,i)=>{
                                    return(
                                    <TableCell key={i}>{col.label}</TableCell>
                                    )
                                })
                            : null
                            }
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows ?
                            rows.map((row,i)=>{
                                return (
                                    <TableRow>
                                    {
                                        colums.map((col,colIndex)=>{
                                            return(
                                                <TableCell>
                                                    {row[col.name]}
                                                </TableCell>
                                            )
                                        })
                                    }
                                </TableRow>
                                )
                                
                            })  
                        : null}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default TableView;