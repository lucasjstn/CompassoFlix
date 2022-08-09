import React, { useState, useEffect } from 'react';
import { api } from '../../service/api';

export default function apiGets(url) {

    const [data, setData] = useState()
   
    const get = async () => {
        await api
            .get(url)
            .then((res) => {
                setData(res?.data)
            })
            .catch(err => console.log('deu erro aqui ô ' + err));
    }

    useEffect(() => {
        get();
    }, [])

    return {data}
}