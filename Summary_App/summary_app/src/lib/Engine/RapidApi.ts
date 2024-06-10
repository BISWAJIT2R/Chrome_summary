import { useHelper } from "@/context/ContextHelper";
import axios from "axios";
import { useEffect, useMemo } from "react";

const FetchApi = (searchUrl:string) => {
    const { setData } = useHelper();

    const options = useMemo(() => ({
        method: 'GET',
        url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
        params: {
            url: searchUrl,
            length: '3',
            lang: 'en'
        },
        headers: {
            'x-rapidapi-key': 'c75dcc7829mshe70bcb51f47ff67p1e65a5jsn6fb8eb7c3a2b',
            'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
        }
    }), [searchUrl]);

    useEffect(() => {
        const controller = new AbortController();
        // options.signal = controller.signal;

        async function callApi() {
            try {
              const response = await axios.request({
                ...options,
                signal: controller.signal
            });
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        if (searchUrl) {
            // callApi();
        }

        return () => {
            controller.abort();
        };
    }, [searchUrl, options, setData]);

    // console.log(searchUrl)
};

export default FetchApi;
