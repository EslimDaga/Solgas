import React, { useEffect, useState } from 'react';
import { Card, CardContent, Button, Grid, Divider } from '@material-ui/core';
import { Page, Header, SearchInput } from 'components';
import eventApi from 'service/event';
import { makeStyles } from '@material-ui/styles';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import EventsTable from './components/EventsTable';
import EventDialog from './components/EventDialog';
import { API } from 'constants/global';

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(2)
    }
}))

const Event = () => {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [finder, setFinder] = useState("");
    const [modal, setModal] = useState(false);
    const [selected, setSelected] = useState({});
    const classes = useStyles();

    useEffect(() => {
        let mounted = true;

        const fetchData = () => {
            setLoading(true);
            eventApi.fetchData().then(r => {
                if (mounted) {
                    setEvents(r);
                    setLoading(false);
                }
            })
        }

        fetchData();

        return () => {
            mounted = false;
        }
    }, [])

    const Export = (<Button disabled startIcon={<CloudDownloadIcon />}>Imprimir</Button>)

    const handleSearchChange = (event) => {
        setFinder(event.target.value);
    }

    const handleModal = (item) => {
        let sel = {};
        if (!modal) {
            const maped = JSON.parse(item.images)
            const images = [];
            for (const i in maped) {
                images.push({ source: API + "/" + maped[i] })
            }
            sel = { ...item, images }
        }
        setSelected(sel)
        setModal(!modal);
    }

    const filtered = events.filter(item => new RegExp(finder, "i").test([item.driver_fullname, item.unitid].join()))

    return (
        <Page>
            <Header subtitle="Ultimos eventos" title="" RightButton={Export} />
            <Card>
                <CardContent>
                    <Grid container spacing={3} className={classes.card} >
                        <Grid item sm={12} md={4}>
                            <SearchInput placeholder="Buscar por placa o conductor" onChange={handleSearchChange} />
                        </Grid>
                    </Grid>
                    <Divider />
                    <EventsTable data={filtered} loading={loading} onDetailClick={handleModal} />
                </CardContent>
            </Card>
            <EventDialog open={modal} onClose={handleModal} item={selected} />
        </Page>
    )
}


export default Event;