const FoodData = [
    {
        id: 1,
        rname: "KFC",
        imgdata: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
        address: "Spicy,Cruchy,Yummy",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        price: "₹350 for one",
        rating: "4.8 ★",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
    },
    {
        id: 2,
        rname: "Burger_King",
        imgdata: "https://th.bing.com/th/id/R.b622308283e45ca740fde84716cd762d?rik=IWr6%2b%2f%2bad3knRg&riu=http%3a%2f%2f4pack.files.wordpress.com%2f2010%2f01%2fburger-king.jpg&ehk=YTisvRkszj7zw2dKhpKZWf6gZQtnKR%2b2JVbxGU%2fX53U%3d&risl=&pid=ImgRaw&r=0",
        address: "Veg Burger,Non-Veg Burger",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        price: "₹25 for one",
        rating: "3.9 ★",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
    },
    {
        id: 3,
        rname: "Baskin_Robbins",
        imgdata: "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/09/9-Best-Restaurant-Logos-and-How-to-Make-Your-Own-image26.png",
        address: "Ice-creams,Pastry,cakes",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        price: "₹70 for one",
        rating: "4.2 ★",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
    },
    {
        id: 4,
        rname: "Chuyax",
        imgdata: "https://penji.co/wp-content/uploads/2020/10/Dave-CHUYAX.jpg",
        address: "Spicy Veg and Non-Veg Food",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        price: "₹70 for one",
        rating: "4.5 ★",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
    },
    {
        id: 5,
        rname: "The_Grill",
        imgdata: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/aad4d0110142211.5fe4b63868daa.jpg",
        address: "Kababs",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        price: "₹210 for one",
        rating: "4.0 ★",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
    },
    {
        id: 6,
        rname: "McDonald's",
        imgdata: "https://tse4.mm.bing.net/th/id/OIP.bfQ8IMdONkx-h1r8HDK2OQHaHa?pid=ImgDet&rs=1",
        address: "Fries,Burgers,Pizza's",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        price: "₹100 for one",
        rating: "3.9 ★",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
    },
    {
        id: 7,
        rname: "Domino's",
        imgdata: "https://th.bing.com/th/id/R.17bcfe280beaed23cce2060176f70b49?rik=aRd5MyUw%2bzAEew&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f08%2fDomino%e2%80%99s-symbol.jpg&ehk=oDHUsSULfku66vBi3DXLfCCkAC30fxbVNJilTGNT0uc%3d&risl=&pid=ImgRaw&r=0",
        address: "Veg and Non-Veg Pizza's",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        price: "₹300 for one",
        rating: "4.3 ★",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
    },
    {
        id: 8,
        rname: "StarBuks",
        imgdata: "https://tse2.mm.bing.net/th/id/OIP.OK_3_nWSU-EH3H73BMAmsAHaEK?pid=ImgDet&rs=1",
        address: "Tea, Coffee, Shake, Beverages",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        price: "₹100 for one",
        rating: "3.2 ★",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
    },
    {
        id: 9,
        rname: "Cafe_Armando",
        imgdata: "https://i.pinimg.com/736x/6c/0a/cb/6c0acb6d6ef9ff5a7fe92681f88dbc21--designs-logo.jpg",
        address: "Burger, Sandwich, Fast Food",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        price: "₹100 for one",
        rating: "3.8 ★",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
    },
    {
        id: 10,
        rname: "Godavari_Vantakam",
        imgdata: "https://tse4.mm.bing.net/th/id/OIP.v2roQckUw-0VHNcwW0hLbAHaE8?pid=ImgDet&rs=1",
        address: "Only Veg Tiffins and Meals",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        price: "₹100 for one",
        rating: "4.8 ★",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
    }
];

export default FoodData;
