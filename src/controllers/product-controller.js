'use strict';

const mongosse = require('mongoose');
const Product = mongosse.model('Product');

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product
        .save().then(x => { 
            res.status(200).send({ message: 'Produto Cadastrado com Sucesso...'});
        }).catch(e => { 
            res.status(400).send({ message: 'Falha ao Cadastrado o Produto...', data: e});
        });
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};
