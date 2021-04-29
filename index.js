const pets = [
	{ owner: 'Joe', type: 'Dog', name: 'Taco' },
	{ owner: 'Megan', type: 'Cat', name: 'Biscuit' },
	{ owner: 'Ivan', type: 'Dog', name: 'CJ' },
	{ owner: 'Stefan', type: 'Fish', name: 'Goldie' },
	{ owner: 'Keith', type: 'Dog', name: 'Sydney' },
	{ owner: 'Jay', type: 'Dog', name: 'Momo' },
	{ owner: 'Chris', type: 'Cat', name: 'Sir Charles' },
	{ owner: 'Tony', type: 'Dog', name: 'Blanca' },
	{ owner: 'Vic', type: 'Dog', name: 'Pixl' },
	{ owner: 'Katelyn', type: 'Cat', name: 'BatMann' },
];

// console.log the pets array
console.log(pets)

// console.log each of the pet names
pets.forEach(pet => {
	console.log(pet.name)
})

// add a title to the page with an h1
const title = document.createElement('h1')
title.innerText = 'I LOVE Pets'
// const div = document.querySelector('div')
// document.body.insertBefore(title, div)
document.body.prepend(title)

// insert a list item for each owner's name in the ul with id='owners'
const ownersUl = document.getElementById('owners')
pets.forEach(pet => {
	let li = document.createElement('li')
	li.innerText = pet.owner
	ownersUl.append(li)
})

// insert a list item for each pet's name in the ul with id='pet-names'
const petNamesUl = document.querySelector('#pet-names')
pets.forEach(pet => {
	let li = document.createElement('li')
	li.innerText = pet.name
	petNamesUl.append(li)
})

// insert a list of pet types with the number of each in the ul with id='pet-types'
let dogCount = 0
let catCount = 0
let fishCount = 0
pets.forEach(pet => {
	if(pet.type === 'Dog'){
		dogCount++
	} else if (pet.type === 'Cat'){
		catCount++
	}else if(pet.type === 'Fish'){
		fishCount++
	}
})
const dogs = document.createElement('li')
const cats = document.createElement('li')
const fish = document.createElement('li')

dogs.innerText = `Dogs: ${dogCount}`
cats.innerText = `Cats: ${catCount}`
fish.innerText = `Fishies: ${fishCount}`

const petTypesUl = document.querySelector('#pet-types')
petTypesUl.append(dogs, cats, fish)

// try ^^^ dut dynamically as if you didn't know all of the pet types

// insert a list of owners and their pets in the div with id='owner-pets'
// {Owner} has a {pet type} named {pet name}.

let div = document.querySelector('#owner-pets')
let ul = document.createElement('ul')

pets.forEach(pet => {
	let li = document.createElement('li')
	li.innerText = `${pet.owner} has a ${pet.type} named ${pet.name}.`
	ul.append(li)
	console.log(li)
})
div.append(ul)

// Practice styling by updating the DOM with JS...
