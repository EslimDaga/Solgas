import React from "react"
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
import { Create as CreateIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import { yourdate } from "common/decorator";
import { Pagination } from "components";
import DeleteIcon from '@material-ui/icons/Delete';

const DriverTable = (props) => {
    const { paginated, count, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage, loading } = props;
    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, count - page * rowsPerPage);
    return (
        <TableContainer>
            <Table aria-label="my table">
                <TableHead>
                    <TableRow>
                        <TableCell>DNI</TableCell>
                        <TableCell component="th">Nombre</TableCell>
                        <TableCell component="th">Apellidos</TableCell>
                        <TableCell component="th">Licencia</TableCell>
                        <TableCell component="th">Usuario</TableCell>
                        <TableCell component="th">Fecha de Creación</TableCell>
                        <TableCell component="th">Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loading && <TableRow >
                        <TableCell colSpan="7"> <LinearProgress /></TableCell>
                    </TableRow>}
                    {paginated.map((row) => (
                        <TableRow key={row.dni}>
                            <TableCell component="th" scope="row">
                                {row.dni}
                            </TableCell>
                            <TableCell>{row.firstname}</TableCell>
                            <TableCell>{row.lastname}</TableCell>
                            <TableCell>{row.license_number}</TableCell>
                            <TableCell>{row.username}</TableCell>
                            <TableCell>{yourdate(row.created)}</TableCell>
                            <TableCell>
                                <Button
                                    size="small"
                                    disabled
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
                            labelRowsPerPage="conductores por pag. :"
                            rowsPerPageOptions={[10, 20, 50, { label: 'Todo', value: -1 }]}
                            colSpan={7}
                            count={count}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'Filas por pag.' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={Pagination}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}

DriverTable.propTypes = {
    loading: PropTypes.bool,
    paginated: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    handleChangePage: PropTypes.func.isRequired,
    handleChangeRowsPerPage: PropTypes.func.isRequired,
}

export default DriverTable;