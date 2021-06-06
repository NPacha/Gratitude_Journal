const express = require('express');
const itemController = express.Router();
const Item = require('../models/item');

//INDUCES
//Index New Delete Update Create Edit Show

//Create
itemController.post('/', async (req, res)=> {
    try{
        const newItem = await Item.create(
            req.body
        );
        res
            .status(200)
            .json(newItem)

    } catch(error){
        res 
            .status(400)
            .json(error)
    }
})