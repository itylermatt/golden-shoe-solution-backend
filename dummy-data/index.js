const titleData = [];
const categories = [];
const categoryItems = [];
for (let c = 0; c < 5; c++) {
    titleData.push({
        img: 'https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face:center,q_auto,w_auto:100:1200/v1/i/2ee124b0_4e5f.jpg',
        title: 'Image',
        author: 'author',
        featured: true,
        special: true,
        discount: 50,
        name: 'ABC Shoe',
        inStock: 'In Stock',
        type: 'sale'
    });
}

categories.push('Sales');
categories.push('Discounted Items');
categories.push('Clearance Sale');

categoryItems.push({type: 'Sales', name: 'Sandals (Sales)'})
categoryItems.push({type: 'Sales', name: 'Boots (Sales)'})
categoryItems.push({type: 'Sales', name: 'Sneakers (Sales)'})
categoryItems.push({type: 'Discounted Items', name: 'Sandals (Discounted Items)'})
categoryItems.push({type: 'Discounted Items', name: 'Boots (Discounted Items)'})
categoryItems.push({type: 'Discounted Items', name: 'Sneakers (Discounted Items)'})
categoryItems.push({type: 'Clearance Sale', name: 'Sandals (Clearance Sale)'})
categoryItems.push({type: 'Clearance Sale', name: 'Boots (Clearance Sale)'})
categoryItems.push({type: 'Clearance Sale', name: 'Sneakers (Clearance Sale)'})

module.exports = {titleData, categoryItems, categories};
