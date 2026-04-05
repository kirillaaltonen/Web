const catItems = [
    {
        cat_id: 1,
        cat_name: 'Whiskers',
        weight: 4.2,
        owner: 3609,
        filename: 'cat.jpg',
        birthdate: '2020-05-10',
    },
    {
        cat_id: 2,
        cat_name: 'Mittens',
        weight: 3.8,
        owner: 3610,
        filename: 'cat2.jpg',
        birthdate: '2021-02-15',
    },
];

const listAllCats = () => {
    return catItems;
};

const findCatById = (id) => {
    return catItems.find((item) => item.cat_id == id);
};

const addCat = (cat) => {
    const { cat_name, weight, owner, filename, birthdate } = cat;
    const newId = catItems.length > 0 ? catItems[0].cat_id + 1 : 1;

    catItems.unshift({
        cat_id: newId,
        cat_name,
        weight,
        owner,
        filename,
        birthdate,
    });

    return { cat_id: newId };
};

export { listAllCats, findCatById, addCat };