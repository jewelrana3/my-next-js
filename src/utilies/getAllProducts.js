

const getAllProducts = async(categoriesId) => {
    let url = 'http://localhost:5000/products';

    if(categoriesId){
        url += '? categoriesId=' + categoriesId
    }
    const res = await fetch(url,{
        cache:'no-cache'
    })
    return res.json();
};

export default getAllProducts;