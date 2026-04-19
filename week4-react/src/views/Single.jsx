import { useLocation, useNavigate } from 'react-router';

const Single = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const item = state?.item;

    if (!item) {
        return <p>No item selected.</p>;
    }

    const isImage = item.media_type.startsWith('image');
    const isVideo = item.media_type.startsWith('video');

    return (
        <>
            <h2>{item.title}</h2>
            <p>{item.description}</p>

            {isImage && (
                <img
                    src={item.filename}
                    alt={item.title}
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            )}

            {isVideo && (
                <video controls width="700">
                    <source src={item.filename} type={item.media_type} />
                    Your browser does not support the video tag.
                </video>
            )}

            <br />
            <button onClick={() => navigate(-1)}>Go back</button>
        </>
    );
};

export default Single;