import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import IAButton from './IAButton';

export default function IAGrid(props) {

    const { datasource, title, cols } = props;
    return (
        <>
            <div>
                <Typography variant="h4" style={{fontWeight: "bold"}} >{title}</Typography>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 480 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {cols && Array.isArray(cols) && cols.length > 0
                                ? cols.map((x, i) =>
                                    <TableCell align="center" key={i}>{x.displayName}</TableCell>)
                                : null}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datasource.map((row, ind) => (
                            <TableRow
                                key={ind}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >


                                {cols.map((e, ind) => (

                                    <TableCell align="center">{row[e.key]}</TableCell>
                                ))}
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}