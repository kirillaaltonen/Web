const SingleView = ({ item, setSelectedItem }) => {
    if (!item) {
        return null;
    }

    const isImage = item.media_type.startsWith('image');
    const isVideo = item.media_type.startsWith('video');

    return (
        <dialog open>
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            {isImage && (
                <img
                    src={item.filename}
                    alt={item.title}
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            )}

            {isVideo && (
                <video controls width="640">
                    <source src={item.filename} type={item.media_type} />
                    Your browser does not support the video tag.
                </video>
            )}

            <br />
            <button onClick={() => setSelectedItem(null)}>Close</button>
        </dialog>
    );
};

export default SingleView;