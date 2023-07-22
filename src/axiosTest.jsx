import { useEffect, useState } from "react";
import { getApi } from "./handleApi/api";

// const symbols = `https://api.api-ninjas.com/v1/cryptosymbols`;
// const price = `https://api.api-ninjas.com/v1/cryptoprice?symbol=1INCHUSD`;

function AxiosTest() {
    const [getData, setData] = useState([]);
    async function fetchApi() {
        const apiLink = `https://api.api-ninjas.com/v1/cryptoprice?symbol=eth`;
        await getApi(apiLink)
        .then((res) => {
            return setData(res);
        }).catch((e) => {
            console.log(e);
        })
    }
    useEffect(() => {
        fetchApi();
    }, []);
    console.log(getData);
    // getData.map((data, index) => console.log(`${data} ${index}`));

    return (
        <>
        <h1>Hello Big Brother</h1>
        </>
    )
    
}
export default AxiosTest;