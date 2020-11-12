import React, { useState } from 'react';
import { Card, CardContent, Button, Grid, Divider } from '@material-ui/core';
import { Page, Header, SearchInput, withPagination } from 'components';
import unitApi from 'service/unit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import UnitTable from './components/UnitsTable';
import CreateDialog from './components/CreateDialog';

const Unit = (props) => {

  const {
    loading,
    count,
    is_staff,
    paginated,
    rowsPerPage,
    page,
    handleChangeRowsPerPage,
    handleChangePage,
    handleSearchChange,
    classes } = props;

  const [open, setOpen] = useState(false);

  const Export = (
    <Button disabled={!is_staff} variant="contained" onClick={() => setOpen(true)} color="primary" startIcon={<AddCircleIcon />}>Crear unidad</Button>
  )

  return (
    <Page>
      <Header subtitle="Unidades" title="Listado general" RightButton={Export} />
      <Card>
        <CardContent>
          <Grid container spacing={3} className={classes.card}>
            <Grid item sm={12} md={4}>
              <SearchInput placeholder="Buscar por placa o operador logístico" onChange={handleSearchChange} />
            </Grid>
          </Grid>
          <Divider />
          <UnitTable
            loading={loading}
            count={count}
            paginated={paginated}
            rowsPerPage={rowsPerPage}
            page={page}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage} />
        </CardContent>
      </Card>
      <CreateDialog open={open} onClose={() => setOpen(false)} handleConfirm={() => setOpen(false)} />
    </Page>
  )
}

export default withPagination(Unit, unitApi.fetchData, ["license_plate", "logistic_operator"]);