const list = [
    {
        name: 'גבינה צהובה',
        category: 'milk',
        count: 1
    },
    {
        name: 'פטריות',
        category: 'fruit',
        count: 1
    },
    {
        name: 'טונה',
        category: 'cook',
        count: 4
    },
    {
        name: 'שמפו ילדים',
        category: 'shower',
        count: 1
    },
    {
        name: 'מים מינרלים',
        category: 'drink',
        count: 3
    },
    {
        name: 'לחם ללא גלוטן',
        category: 'gf',
        count: 1
    },
    {
        name: 'שוקולד טעים',
        category: 'candy',
        count: 1
    },
    {
        name: 'ברוקולי',
        category: 'frozen',
        count: 1
    },
    {
        name: 'סלמון מעושן',
        category: 'smoke',
        count: 1
    },
]

const categories = [
    {name: 'fruit', icon: 'apple-alt', color: 'green'},
    {name: 'milk', icon: 'cheese', color: 'yellow'},
    {name: 'meat', icon: 'hamburger', color: 'deep-red'},
    {name: 'frozen', icon: 'snowflake', color: 'blue'},
    {name: 'cook', icon: 'mortar-pestle', color: 'parpel'},
    {name: 'cookie', icon: 'sun', color: 'orange'},
    {name: 'candy', icon: 'candy-cane', color: 'red'},
    {name: 'shower', icon: 'shower', color: 'gray'},
    {name: 'clean', icon: 'toilet', color: 'green-yellow'},
    {name: 'drink', icon: 'glass-martini', color: 'light-blue'},
    {name: 'coffee', icon: 'coffee', color: 'brown'},
    {name: 'gf', icon: 'seedling', color: 'light-green'},
    {name: 'smoke', icon: 'horse', color: 'pink'},
    {name: 'other', icon: 'wrench', color: 'black'},
]

function loadList() {
    return list
}

function findIcon(category) {
    var icon = categories.find(item => {
         return item.name === category
    });
    return icon;
}

export default {
    loadList,
    findIcon
}