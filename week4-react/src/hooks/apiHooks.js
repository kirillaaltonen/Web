import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';

const useMedia = () => {
    const [mediaArray, setMediaArray] = useState([]);

    const getMedia = async () => {
        try {
            const json = await fetchData('test.json');
            setMediaArray(json);
        } catch (error) {
            console.error(error);
        }
    };

    const postMedia = async (file, inputs, token) => {
        const mediaData = {
            title: inputs.title,
            description: inputs.description,
            filename: file.filename,
            filesize: file.filesize,
            media_type: file.media_type,
        };

        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(mediaData),
        };

        return await fetchData(import.meta.env.VITE_MEDIA_API + '/media', fetchOptions);
    };

    useEffect(() => {
        getMedia();
    }, []);

    return { mediaArray, postMedia };
};

const useFile = () => {
    const postFile = async (file, token) => {
        const formData = new FormData();
        formData.append('file', file);

        const fetchOptions = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        };

        return await fetchData(
            import.meta.env.VITE_UPLOAD_SERVER + '/upload',
            fetchOptions,
        );
    };

    return { postFile };
};

export { useMedia, useFile };