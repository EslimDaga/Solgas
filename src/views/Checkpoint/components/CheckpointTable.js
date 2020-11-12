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
import { Map as MapIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import { yourdate } from "common/decorator";
import { Pagination } from "components";
const CheckpointTable = (props) => {

    const {
        paginated,
        count,
        rowsPerPage,
        page,
        handleChangePage,
        handleChangeRowsPerPage,
        onShowMap,
        loading } = props;

    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, count - page * rowsPerPage);
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
                    {loading && <TableRow >
                        <TableCell colSpan="6"> <LinearProgress /></TableCell>
                    </TableRow>}
                    {paginated.map((row) => (
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
                                    onClick={() => onShowMap(row.name)}
                                >
                                    <MapIcon />
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