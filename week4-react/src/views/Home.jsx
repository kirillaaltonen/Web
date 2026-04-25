import MediaRow from '../components/MediaRow.jsx';
import { useMedia } from '../hooks/apiHooks';

const Home = () => {
    const { mediaArray } = useMedia();

    return (
        <>
            <h2 className="mb-4 text-3xl font-bold">My Media</h2>

            <table className="w-full border-collapse border border-black">
                <thead>
                <tr>
                    <th className="border border-black p-2 align-top">Thumbnail</th>
                    <th className="border border-black p-2 align-top">Title</th>
                    <th className="border border-black p-2 align-top">Description</th>
                    <th className="border border-black p-2 align-top">Created</th>
                    <th className="border border-black p-2 align-top">Size</th>
                    <th className="border border-black p-2 align-top">Type</th>
                    <th className="border border-black p-2 align-top">Action</th>
                </tr>
                </thead>

                <tbody>
                {mediaArray.map((item) => (
                    <MediaRow key={item.media_id} item={item} />
                ))}
                </tbody>
            </table>
        </>
    );
};

export default Home;