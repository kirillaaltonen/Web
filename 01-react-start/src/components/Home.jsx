import MediaRow from './MediaRow';

const Home = () => {
    const mediaArray = [
        {
            media_id: 8,
            user_id: 5,
            filename: 'https://placehold.co/1200x800?text=Pic1',
            thumbnail: 'https://media.geeksforgeeks.org/wp-content/uploads/20260109124745578888/balanced_scorecard.webp',
            filesize: 170469,
            media_type: 'image/jpeg',
            title: 'Picture 1',
            description: 'React pic 3',
            created_at: '2024-01-07T20:49:34.000Z',
        },
        {
            media_id: 9,
            user_id: 7,
            filename: 'https://placehold.co/800x600?text=Pic2',
            thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s',
            filesize: 1002912,
            media_type: 'image/jpeg',
            title: 'Picture 2',
            description: 'React pic 2',
            created_at: '2024-01-07T21:32:27.000Z',
        },
        {
            media_id: 17,
            user_id: 2,
            filename:
                'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4',
            thumbnail: 'https://miro.medium.com/v2/resize:fit:1400/0*hZK1xVsaAFVjlEyB.jpeg',
            filesize: 1236616,
            media_type: 'video/mp4',
            title: 'Picture 3',
            description: 'React pic 1',
            created_at: '2024-01-07T20:48:13.000Z',
        },
    ];

    return (
        <>
            <h2>My Media</h2>
            <table>
                <thead>
                <tr>
                    <th>Thumbnail</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Created</th>
                    <th>Size</th>
                    <th>Type</th>
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