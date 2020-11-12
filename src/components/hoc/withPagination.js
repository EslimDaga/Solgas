import React, { useContext, useEffect, useState } from "react";

import { ToastContext, AuthContext } from "context/consumer";
import { INITIAL_ROWS_PER_PAGE } from "constants/global";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(2)
    }
}))
/**
 * @Author @eliaschampi04
<<<<<<< HEAD
 * @param {Component} WrapedComponent 
 * @param {Function} fetchService 
 * @param {Array} finds 
=======
 * @param {Component} WrapedComponent
 * @param {Function} fetchService
 * @param {Array} finds
>>>>>>> first changes
 */
export default function withPagination(WrapedComponent, fetchService, finds) {

    return (props) => {

        const [finder, setFinder] = useState('');
        const [data, setData] = useState([]);
        const [rowsPerPage, setRowsPerPage] = useState(INITIAL_ROWS_PER_PAGE);
        const [page, setPage] = useState(0);
        const [loading, setLoading] = useState(false);

        const classes = useStyles();

        const { show } = useContext(ToastContext);
        const { user } = useContext(AuthContext);

        useEffect(() => {
            let mounted = true;
            const fetchData = () => {
                setLoading(true);
                fetchService().then(data => {
                    if (mounted) {
                        setLoading(false)
                        //console.log(loading)
                        setData(data);
                    }
                })
            }
            fetchData();
            return () => {
                mounted = false
            }
        },[])

        /**
         * 
         * @param {SyntheticEvent} event 
         */
        const handleSearchChange = (event) => {
            setFinder(event.target.value)
        }
        /**
         * 
         * @param {SyntheticEvent} event 
         * @param {Number} newPage 
         */
        const handleChangePage = (event, newPage) => {
            setPage(newPage);
        };

        /**
         * 
         * @param {SyntheticEvent} event 
         */
        const handleChangeRowsPerPage = (event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
        };

        /**
         * 
         * @param {String} message 
         */
        const showToast = (message = "Hola,,, yo soy toasstt") => {
            show(message);
        }

        const filtered = data.filter(item => new RegExp(finder, "i").test([item[finds[0]], item[finds[1]]].join()));

        const paginated = rowsPerPage > 0
            ? filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : filtered

        return <WrapedComponent
            {...props}
            is_staff={user.is_staff}
            count={data.length}
            loading={loading}
            page={page}
            finder={finder}
            handleSearchChange={handleSearchChange}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            paginated={paginated}
            showToast={showToast}
            classes={classes}
        />;
    };
}