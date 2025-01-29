import express from 'express';
const recipelist = express.Router();

recipelist.get('/recipe', (req, res) => {
    res.json(
        [
            {
                "name": "Havana Special",
                "size": "small",
                "price": 3,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?cuban,sandwich"
            },
            {
                "name": "Cuban Delight",
                "size": "medium",
                "price": 5,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?cuba,food"
            },
            {
                "name": "Tropical Fiesta",
                "size": "large",
                "price": 7,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?tropical,fruits"
            },
            {
                "name": "Caribbean Bliss",
                "size": "small",
                "price": 4,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?caribbean,dish"
            },
            {
                "name": "Island Magic",
                "size": "medium",
                "price": 6,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?island,food"
            },
            {
                "name": "Sunset Breeze",
                "size": "large",
                "price": 8,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?sunset,drink"
            },
            {
                "name": "Mojito Splash",
                "size": "small",
                "price": 3,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?mojito,cocktail"
            },
            {
                "name": "Coconut Dream",
                "size": "medium",
                "price": 5,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?coconut,drink"
            },
            {
                "name": "Pineapple Paradise",
                "size": "large",
                "price": 7,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?pineapple,juice"
            },
            {
                "name": "Banana Breeze",
                "size": "small",
                "price": 4,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?banana,smoothie"
            },
            {
                "name": "Mango Tango",
                "size": "medium",
                "price": 6,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?mango,drink"
            },
            {
                "name": "Papaya Punch",
                "size": "large",
                "price": 8,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?papaya,juice"
            },
            {
                "name": "Guava Bliss",
                "size": "small",
                "price": 3,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?guava,fruit"
            },
            {
                "name": "Tropical Sunrise",
                "size": "medium",
                "price": 5,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?tropical,drink"
            },
            {
                "name": "Lime Zest",
                "size": "large",
                "price": 7,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?lime,juice"
            },
            {
                "name": "Berry Splash",
                "size": "small",
                "price": 4,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?berries,drink"
            },
            {
                "name": "Citrus Glow",
                "size": "medium",
                "price": 6,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?citrus,drink"
            },
            {
                "name": "Passion Fruit Twist",
                "size": "large",
                "price": 8,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?passionfruit,drink"
            },
            {
                "name": "Zesty Lemon",
                "size": "small",
                "price": 3,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?lemon,drink"
            },
            {
                "name": "Peach Paradise",
                "size": "medium",
                "price": 5,
                "action": "ADD",
                "img": "https://source.unsplash.com/200x200/?peach,juice"
            }
        ]
        
      );
});


export default recipelist;
