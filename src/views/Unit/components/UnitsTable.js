import React from "react"
import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Table,
  LinearProgress,
  TableFooter,
  TablePagination
} from "@material-ui/core";
import { Create as CreateIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import { yourdate } from "common/decorator";
import { Pagination } from "components";
import DeleteIcon from '@material-ui/icons/Delete';

const UnitTable = (props) => {

  const { paginated, count, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage, loading } = props;
  return (
    <TableContainer>
      <Table aria-label="my table">
        <TableHead>
          <TableRow>
            <TableCell>Placa</TableCell>
            <TableCell component="th">Operador logístico</TableCell>
            <TableCell component="th">Proveedor</TableCell>
            <TableCell component="th">Tipo de Servicio</TableCell>
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
            <TableRow key={row.license_plate}>
              <TableCell component="th" scope="row">
                {row.license_plate}
              </TableCell>
              <TableCell>{row.logistic_operator}</TableCell>
              <TableCell>{row.provider}</TableCell>
              <TableCell>{row.service_type}</TableCell>
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
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              labelRowsPerPage="unidades por pag. :"
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

UnitTable.propTypes = {
  loading: PropTypes.bool,
  paginated: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
}

export default UnitTable;