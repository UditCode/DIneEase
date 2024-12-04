export const sample_foods = [

{
    id:'1',
    name:'Capsicum Pizza',
    price:10,
    cookTime:'10-20',
    favorite:false,
    origins: ['Italy'],
    stars:4.5,
    imageUrl:'food_1.jpg',
    tags:['FastFood','Pizza','Lunch'],
},
{
    id:'2',
    name:'Potatoball',
    price:20,
    cookTime:'20-30',
    favorite:false,
    origins: ['persia','middleEast','china'],
    stars:4.5,
    imageUrl:'food_2.jpg',
    tags:['SlowFood','Lunch'],
},
{
    id:'3',
    name:'HamBurger',
    price:5,
    cookTime:'10-15',
    favorite: true,
    origins: ['germany','US'],
    stars:3.5,
    imageUrl:'food_3.jpg',
    tags:['FastFood','HamBurger']
},
{
    id:'4',
    name:'Fried Potatoes',
    price:2,
    cookTime:'15-20',
    favorite:true,
    origins: ['Belgium','France'],
    stars:3,
    imageUrl:'food_4.jpg',
    tags:['Fastfood','Fry'],
},
{
    id:'5',
    name:' Tomato Soup',
    price:5,
    cookTime:'40-50',
    favorite:false,
    origins: ['India','Asia'],
    stars:3.5,
    imageUrl:'food_5.jpg',
    tags:['SlowFood','Soup'],
},
{
    id:'6',
    name:'Vegetable Pizza',
    price:9,
    cookTime:'40-50',
    favorite:false,
    origins: ['italy'],
    stars:4.0,
    imageUrl:'food_6.jpg',
    tags:['FastFood','Lunch'],
},

];
export const sample_tags =[
   
    { name:'All', count:6},
    { name:'FastFood', count:4},
    { name:'Pizza', count:2},
    { name:'Lunch', count:3},
    { name:'SlowFood', count:2},
    { name:'HamBurger', count:1},
    { name:'Fry', count:1},
    { name:'Soup', count:1}, 
]

export const sample_users =[
    {
        id:1,
        name:'John Doe',
        email: 'john@gmail.com',
        password: '12345',
        address: 'Toronto On',
        isAdmin: false,
    },
    {
        id:2,
        name:'Jane Doe',
        email: 'jane@gmail.com',
        password: '12345',
        address: 'Shanghai',
        isAdmin: true,
    }
]