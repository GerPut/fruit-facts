const main = document.getElementById('main')
const addFruitbtn = document.getElementById('add-fruit')
const doubleBtn = document.getElementById('double')
const showBtn = document.getElementById('show')
const sortBtn = document.getElementById('sort')
const calculateBtn = document.getElementById('calculate')

let fruits = ["apple", "strawberry", "pineapple", "mango", "banana", "pear"]
let calories = Math.floor(Math.random() * 500)

let randomfruit = fruits[(Math.floor(Math.random() * 6))]

updateDom()
function updateDom() {
    main.innerHTML = '<h2><strong>Fruit<strong>Calories</h2>';

    fruits.forEach(item => {
        const element = document.createElement('div')
        element.classList.add('fruit');
        element.innerHTML = `<strong>${item = randomfruit}</strong> ${item = calories}`
    })
    main.appendChild(element)
}


