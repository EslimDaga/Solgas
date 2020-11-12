import React from "react"
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Button, Table, LinearProgress } from "@material-ui/core";
import { VisibilityRounded } from "@material-ui/icons";
import { yourdate } from "common/decorator";
import PropTypes from "prop-types";
import { Empty } from "components";
const StoriesTable = ({ events, loading, onDetailClick }) => {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th">Proveedor</TableCell>
            <TableCell component="th">Operador Logístico</TableCell>
            <TableCell component="th">Placa</TableCell>
            <TableCell component="th">Tipo de Servicio</TableCell>
            <TableCell component="th">Checkpoint</TableCell>
            <TableCell component="th">Nombre del Conductor</TableCell>
            <TableCell component="th">Fecha de Creación</TableCell>
            <TableCell component="th">Ver Detalle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading && <TableRow >
            <TableCell colSpan="8"> <LinearProgress /></TableCell>
          </TableRow>}
          {events.map(event => (
            <TableRow key={event.id}>
              <TableCell component="th">{event.provider}</TableCell>
              <TableCell component="th">{event.logistic_operator}</TableCell>
              <TableCell component="th">{event.unitid}</TableCell>
              <TableCell component="th">{event.type_of_service}</TableCell>
              <TableCell component="th">{event.checkpoint}</TableCell>
              <TableCell component="th">{event.driver_fullname}</TableCell>
              <TableCell component="th">{yourdate(event.created)}</TableCell>
              <TableCell>
                <Button
                  color="secondary"
                  size="small"
                  onClick={() => onDetailClick(event)}
                >
                  <VisibilityRounded />
                </Button>
              </TableCell>
            </TableRow>
          ))}
          {!events.length && <TableRow >
            <TableCell colSpan="7"> <Empty title="Sin registros. Ingrese la placa y la fecha de creación para obtener eventos" /></TableCell>
          </TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

StoriesTable.propTypes = {
  events: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  onDetailClick: PropTypes.func.isRequired,
}

export default StoriesTable;