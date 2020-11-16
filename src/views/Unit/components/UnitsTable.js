import React, { Component } from "react"
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
import PropTypes from "prop-types";
import { yourdate } from "common/decorator";
import { Pagination } from "components";
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import cache from "../../../helpers/cache";

console.log(cache.getItem("user"));
class UnitTable extends Component {
  constructor(props){
    super();
    this.state = {
      is_staff : cache.getItem("user").is_staff
    }
  }

  deleteUnit = async (license_plate) => {
    await axios.delete(`http://checkpoint.segursat.com:8080/control/web/api/delete-unit/${license_plate}/`,{
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
            {this.props.loading && <TableRow >
              <TableCell colSpan="7"> <LinearProgress /></TableCell>
            </TableRow>}
            {this.props.paginated.map((row) => (
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
                    disabled={!this.state.is_staff}
                    onClick={() => this.deleteUnit(row.license_plate)}
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
                count={this.props.count}
                rowsPerPage={this.props.rowsPerPage}
                page={this.props.page}
                SelectProps={{
                  inputProps: { 'aria-label': 'Filas por pag.' },
                  native: true,
                }}
                onChangePage={this.props.handleChangePage}
                onChangeRowsPerPage={this.props.handleChangeRowsPerPage}
                ActionsComponent={Pagination}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    )
  }
}

UnitTable.propTypes = {
  loading: PropTypes.bool,
  paginated: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired
}

export default UnitTable;