import { useState, useEffect } from "react";
import axios from "axios";

function Trends() {
    const [trends, setTrends] = useState('Loading...')

    useEffect(async () => {

        const response = await axios.post('https://web3.bluer.workers.dev/api/trends', {
            account: "temp",
            signature: "temp"
        })

        setTrends(response.data.content)

    }, [])

    return (
        <>
            <h1 className="title pt-6">Trends</h1>
            <div>{trends}</div>
        </>
    );
}

export default Trends;