const MenuData = [
    {
        id: 1,
        rname: "Chicken PopCorn",
        imgdata: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
        address: "Flat 10% off on 6pc signature Hot & crispy chicken",
        price: 350
    },
    {
        id: 2,
        rname: "Chicken Nuggets",
        imgdata: "https://th.bing.com/th/id/R.b622308283e45ca740fde84716cd762d?rik=IWr6%2b%2f%2bad3knRg&riu=http%3a%2f%2f4pack.files.wordpress.com%2f2010%2f01%2fburger-king.jpg&ehk=YTisvRkszj7zw2dKhpKZWf6gZQtnKR%2b2JVbxGU%2fX53U%3d&risl=&pid=ImgRaw&r=0",
        address: "Save Rs. 182 & get 8pc signature Hot & crispy chicken",
        price: 350
    },
    {
        id: 3,
        rname: "Chicken Buckets",
        imgdata: "https://th.bing.com/th/id/R.b622308283e45ca740fde84716cd762d?rik=IWr6%2b%2f%2bad3knRg&riu=http%3a%2f%2f4pack.files.wordpress.com%2f2010%2f01%2fburger-king.jpg&ehk=YTisvRkszj7zw2dKhpKZWf6gZQtnKR%2b2JVbxGU%2fX53U%3d&risl=&pid=ImgRaw&r=0",
        address: "Try Allus fav-1 Hot & Crispy Chicken,1 Smoky Red, Reg Popcorn, Spicy Fries & 1 Dip 20gm",
        price: 350
    },
    {
        id: 4,
        rname: "Box Meals",
        imgdata: "https://th.bing.com/th/id/R.b622308283e45ca740fde84716cd762d?rik=IWr6%2b%2f%2bad3knRg&riu=http%3a%2f%2f4pack.files.wordpress.com%2f2010%2f01%2fburger-king.jpg&ehk=YTisvRkszj7zw2dKhpKZWf6gZQtnKR%2b2JVbxGU%2fX53U%3d&risl=&pid=ImgRaw&r=0",
        address: "Large Biryani & Chicken Popcorn, 2 Spicy Gravies, 4 Wings & 1 Pepsi 475ml",
        price: 350
    },
    {
        id: 5,
        rname: "Peri Peri Chicken",
        imgdata: "https://th.bing.com/th/id/R.b622308283e45ca740fde84716cd762d?rik=IWr6%2b%2f%2bad3knRg&riu=http%3a%2f%2f4pack.files.wordpress.com%2f2010%2f01%2fburger-king.jpg&ehk=YTisvRkszj7zw2dKhpKZWf6gZQtnKR%2b2JVbxGU%2fX53U%3d&risl=&pid=ImgRaw&r=0",
        address: "Save 16% on 6 Spicy Peri Peri chicken boneless strips",
        price: 350
    },
    {
        id: 6,
        rname: "Smoky Red Chicken",
        imgdata: "https://th.bing.com/th/id/R.b622308283e45ca740fde84716cd762d?rik=IWr6%2b%2f%2bad3knRg&riu=http%3a%2f%2f4pack.files.wordpress.com%2f2010%2f01%2fburger-king.jpg&ehk=YTisvRkszj7zw2dKhpKZWf6gZQtnKR%2b2JVbxGU%2fX53U%3d&risl=&pid=ImgRaw&r=0",
        address: "Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)",
        price: 350
    },
    {
        id: 7,
        rname: "Smoky Grilled Biryani Combo",
        imgdata: "https://th.bing.com/th/id/R.b622308283e45ca740fde84716cd762d?rik=IWr6%2b%2f%2bad3knRg&riu=http%3a%2f%2f4pack.files.wordpress.com%2f2010%2f01%2fburger-king.jpg&ehk=YTisvRkszj7zw2dKhpKZWf6gZQtnKR%2b2JVbxGU%2fX53U%3d&risl=&pid=ImgRaw&r=0",
        address: "Large portions of Biryani rice served with Chicken Popcorn & 2 Gravies",
        price: 350
    },
    {
        id: 8,
        rname: "Zinger Tandoori Box",
        imgdata: "https://th.bing.com/th/id/R.b622308283e45ca740fde84716cd762d?rik=IWr6%2b%2f%2bad3knRg&riu=http%3a%2f%2f4pack.files.wordpress.com%2f2010%2f01%2fburger-king.jpg&ehk=YTisvRkszj7zw2dKhpKZWf6gZQtnKR%2b2JVbxGU%2fX53U%3d&risl=&pid=ImgRaw&r=0",
        address: "Hyderabadi style Biryani rice served with 1 pc Hot & Crispy & Spicy Gravy",
        price: 350
    },
    {
        id: 9,
        rname: "Chicken 65",
        imgdata: "https://th.bing.com/th/id/R.b622308283e45ca740fde84716cd762d?rik=IWr6%2b%2f%2bad3knRg&riu=http%3a%2f%2f4pack.files.wordpress.com%2f2010%2f01%2fburger-king.jpg&ehk=YTisvRkszj7zw2dKhpKZWf6gZQtnKR%2b2JVbxGU%2fX53U%3d&risl=&pid=ImgRaw&r=0",
        address: "A deal for Tandoori lovers : Get 1 Tandoori Zinger, 2 Hot Wings, 1 Veg Patty & 1 Pepsi 475ml",
        price: 350
    },
    {
        id: 10,
        rname: "2 Chicken Krisper Burgers",
        imgdata: "https://th.bing.com/th/id/R.b622308283e45ca740fde84716cd762d?rik=IWr6%2b%2f%2bad3knRg&riu=http%3a%2f%2f4pack.files.wordpress.com%2f2010%2f01%2fburger-king.jpg&ehk=YTisvRkszj7zw2dKhpKZWf6gZQtnKR%2b2JVbxGU%2fX53U%3d&risl=&pid=ImgRaw&r=0",
        address: "2 delicious chicken value burgers - at a deal price",
        price: 350
    }
];

export default MenuData;
