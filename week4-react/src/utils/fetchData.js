const fetchData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();

    if (!response.ok) {
        if (json.message) {
            throw new Error(json.message);
        }
        throw new Error(`Error ${response.status} occurred`);
    }

    return json;
};

export { fetchData };