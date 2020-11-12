import React, { useState, useContext } from 'react';
import { Card, CardContent, Button, Grid, Divider } from '@material-ui/core';
import { Page, Header, SearchInput, withPagination } from 'components';
import checkpointApi from 'service/checkpoint';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CheckpointTable from './components/CheckpointTable';
import { API } from 'constants/global';
import CheckDialog from './components/CheckDialog'
import { AuthContext } from 'context/auth';

const Checkpoint = (props) => {

    const [mapUrl, setMapUrl] = useState("");
    const [selected, setSelected] = useState("");
    const [modal, setModal] = useState(false);
    const { user } = useContext(AuthContext);

    const {
        loading,
        count,
        paginated,
        rowsPerPage,
        page,
        handleChangeRowsPerPage,
        handleChangePage,
        handleSearchChange,
        classes } = props;

    const handleCreateMap = () => {
        const { token } = user;
        let mapUrl = "";
        if (!modal) {
            mapUrl = `${API}/api/create-checkpoint/${token}`;
            setSelected('Crear Checkpoint');
        }
        setMapUrl(mapUrl);
        setModal(!modal);
    }

    const handleShowMap = (name = "") => {
        const { token } = user;
        let mapUrl = "";
        if (!modal) {
            mapUrl = `${API}/api/get-checkpoint/${name}/${token}`;
            setSelected(name);
        }
        setMapUrl(mapUrl);
        setModal(!modal);
    }

    const New = (
        <Button disabled={!user.is_staff} variant="contained" onClick={handleCreateMap} color="primary" startIcon={<AddCircleIcon />}>Crear Checkpoint</Button>
    )

    return (
        <Page>
            <Header subtitle="Checkpoints" title="Listado general" RightButton={New} />
            <Card>
                <CardContent>
                    <Grid container spacing={3} className={classes.card}>
                        <Grid item sm={12} md={4}>
                            <SearchInput onChange={handleSearchChange} />
                        </Grid>
                    </Grid>
                    <Divider />
                    <CheckpointTable
                        loading={loading}
                        count={count}
                        paginated={paginated}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        handleChangePage={handleChangePage}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}
                        onShowMap={handleShowMap} />
                </CardContent>
            </Card>
            <CheckDialog url={mapUrl} open={modal} onClose={handleShowMap} title={selected} />
        </Page>
    )
}

export default withPagination(Checkpoint, checkpointApi.fetchData, ["name", "username"]);