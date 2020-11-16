import React, { Component } from "react"
import {
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Table,
    TableFooter,
    TablePagination,
    LinearProgress
} from "@material-ui/core";
import { Map as MapIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import { yourdate } from "common/decorator";
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import cache from "../../../helpers/cache";


class CheckpointTable extends Component {

    constructor(props){
        super();
        this.state = {
          paginated : null
        }
      }

      deleteCheckpoint = async (name) => {
       await axios.delete(`http://checkpoint.segursat.com:8080/control/web/api/delete-checkpoint/${name}/`,{
        headers: {
          'Authorization': `JWT ${cache.getItem("user").token}`
        }});
        window.location.reload();
      }

    render(){
        return (
            <TableContainer>
                <Table aria-label="my table">
                    <TableHead>
                        <TableRow>
                            <TableCell component="th">Nombre</TableCell>
                            <TableCell component="th">Usuario</TableCell>
                            <TableCell component="th">Fecha de Creación</TableCell>
                            <TableCell component="th">Fecha de Modificación</TableCell>
                            <TableCell component="th">Mapa</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.loading && <TableRow >
                            <TableCell colSpan="6"> <LinearProgress /></TableCell>
                        </TableRow>}
                        {this.props.paginated.map((row) => (
                            <TableRow key={row.created}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.username}</TableCell>
                                <TableCell>{yourdate(row.created)}</TableCell>
                                <TableCell>{yourdate(row.modified)}</TableCell>
                                <TableCell>
                                    <Button
                                        size="small"
                                        onClick={() => this.props.onShowMap(row.name)}
                                    >
                                        <MapIcon />
                                    </Button>
                                    <Button
                                    size="small"
                                    disabled={!this.props.is_staff}
                                    onClick={() => this.deleteCheckpoint(row.name)}
                                    >
                                        <DeleteIcon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                        {/*   {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )} */}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                labelRowsPerPage="checkpoints por pag. :"
                                rowsPerPageOptions={[10, 20, 50, { label: 'Todo', value: -1 }]}
                                colSpan={7}
                                count={this.props.count}
                                rowsPerPage={this.props.rowsPerPage}
                                page={this.props.page}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'Filas por pag.' },
                                    native: true,
                                }}
                                onChangePage={this.props.handleChangePage}
                                onChangeRowsPerPage={this.props.handleChangeRowsPerPage}
                                ActionsComponent={this.props.Pagination}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        )
    }
}

CheckpointTable.propTypes = {
    loading: PropTypes.bool,
    paginated: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    handleChangePage: PropTypes.func.isRequired,
    handleChangeRowsPerPage: PropTypes.func.isRequired,
    onShowMap: PropTypes.func.isRequired,
}

export default CheckpointTable;