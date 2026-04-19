import { useState } from 'react';
import MediaRow from './MediaRow';
import SingleView from './SingleView';

const Home = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const mediaArray = [
        {
            media_id: 8,
            user_id: 5,
            filename: 'https://placehold.co/1200x800?text=Pic1',
            thumbnail: 'https://i.redd.it/9odfz0kwy2i21.jpg',
            filesize: 170469,
            media_type: 'image/jpeg',
            title: 'React 1 pic',
            description: 'react meme! ',
            created_at: '2024-01-07T20:49:34.000Z',
        },
        {
            media_id: 9,
            user_id: 7,
            filename: 'https://placehold.co/800x600?text=Pic2',
            thumbnail: 'https://i.ytimg.com/vi/rtQKP1we-Dk/maxresdefault.jpg',
            filesize: 1002912,
            media_type: 'image/jpeg',
            title: 'React 1 pic',
            description: 'another react meme lessgo',
            created_at: '2024-01-07T21:32:27.000Z',
        },
        {
            media_id: 17,
            user_id: 2,
            filename:
                'https://www.w3schools.com/html/mov_bbb.mp4',
            thumbnail: 'https://pet-health-content-media.chewy.com/wp-content/uploads/2025/04/25190642/202504Hub-Small-Pet-Rabbit-SM-scaled-1.jpg',
            filesize: 1236616,
            media_type: 'video/mp4',
            title: 'Bunny',
            description: 'Butterflies fly around the bunny.',
            created_at: '2024-01-07T20:48:13.000Z',
        },
    ];

    return (
        <>
            <h2>My Media</h2>

            {selectedItem && (
                <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
            )}

            <table>
                <thead>
                <tr>
                    <th>Thumbnail</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Created</th>
                    <th>Size</th>
                    <th>Type</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {mediaArray.map((item) => (
                    <MediaRow
                        key={item.media_id}
                        item={item}
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                    />
                ))}
                </tbody>
            </table>
        </>
    );
};

export default Home;