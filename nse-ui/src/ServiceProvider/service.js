

const fetchData = async (key, additionalParams) => {
    const result = await fetch(`${serviceUrl}${key}`, {withCredetials: true, ...additionalParams});
    if(result.status === 200){
        const res = await result.json();
        return res;
    }
    const res = await result.text();
    throw new Error(res);
};

export default fetchData;