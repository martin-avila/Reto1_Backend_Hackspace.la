//servidor para el desarrollo del reto 1 del entrenamiento virtual Backend
var express = require('express');
var app=express();
var faker = require('faker');
var _ = require('lodash');

var generarPosts = function()
{
	var randomNumber = faker.random.uuid();
	var randomName = faker.name.findName();
	var randomLastname = faker.name.lastName();
	var randomUsername = faker.internet.userName();
	var randomWords = faker.lorem.sentence();
	var randomDate = faker.date.recent();
	var randomImage = faker.image.image();
	return{
		id: randomNumber,
		nombre: randomName,
		apellido: randomLastname,
		Usuario: randomUsername,
		contenido: randomWords,
		fecha: randomDate,
		imagen: randomImage
	}
}

app.get('/', function (req, res) {
  res.send('servidor para el desarrollo del reto 1 hackspace.la!');
})

app.get('/posts', function (req, res)
{
	var cantidad = _.random(4,7);
	var posts = _.times(cantidad, generarPosts);
	res.json(posts);
})

app.listen(3000);