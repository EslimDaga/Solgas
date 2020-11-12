import React, { useState } from 'react';
import { Card, CardContent, Button, Grid, Divider } from '@material-ui/core';
import { Page, Header, SearchInput, withPagination } from 'components';
import driverApi from 'service/driver';
/* import CloudDownloadIcon from '@material-ui/icons/CloudDownload';*/
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DriverTable from './components/DriverTable';
import CreateDialog from './components/CreateDialog';



const Driver = (props) => {

    const { loading, count, is_staff, paginated, rowsPerPage, page, handleChangeRowsPerPage, handleChangePage, handleSearchChange, classes } = props;

    const [open, setOpen] = useState(false);

    const Export = (
        <React.Fragment>
            {/* <Button startIcon={<CloudDownloadIcon />} disabled>Imprimir</Button> */}
            <Button disabled={!is_staff} variant="contained" onClick={() => setOpen(true)} color="primary" startIcon={<AddCircleIcon />}>Crear Conductor</Button>
        </React.Fragment>
    )



    return (
        <Page>
            <Header subtitle="Conductores" title="Listado general" RightButton={Export} />
            <Card>
                <CardContent>
                    <Grid container spacing={3} className={classes.card}>
                        <Grid item sm={12} md={4}>
                            <SearchInput placeholder="Buscar por nombre o apellidos" onChange={handleSearchChange} />
                        </Grid>
                    </Grid>
                    <Divider />
                    <DriverTable
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

export default withPagination(Driver, driverApi.fetchData, ["firstname", "lastname"]);