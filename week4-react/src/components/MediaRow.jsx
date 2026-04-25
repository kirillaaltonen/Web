import { Link } from 'react-router';

const MediaRow = ({ item }) => {
    return (
        <tr>
            <td className="border border-black p-2 align-top">
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-[120px] object-cover"
                />
            </td>

            <td className="border border-black p-2 align-top">
                {item.title}
            </td>

            <td className="border border-black p-2 align-top">
                {item.description}
            </td>

            <td className="border border-black p-2 align-top">
                {new Date(item.created_at).toLocaleString('fi-FI')}
            </td>

            <td className="border border-black p-2 align-top">
                {item.filesize}
            </td>

            <td className="border border-black p-2 align-top">
                {item.media_type}
            </td>

            <td className="border border-black p-2 align-top">
                <Link
                    to="/single"
                    state={{ item }}
                    className="text-blue-600 underline"
                >
                    Show
                </Link>
            </td>
        </tr>
    );
};

export default MediaRow;