const MediaRow = ({ item, setSelectedItem }) => {
    return (
        <tr>
            <td>
                <img src={item.thumbnail} alt={item.title} width="120" />
            </td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
            <td>{item.filesize}</td>
            <td>{item.media_type}</td>
            <td>
                <button onClick={() => setSelectedItem(item)}>View</button>
            </td>
        </tr>
    );
};

export default MediaRow;