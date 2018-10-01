let Model = require('./Model').Model;
let Cat = require('../util/Cat.js').Cat;

let Controller = {
    getCurrentIndex: function() {
        return Model.Cats.findIndex(cat => cat.getName() === Model.CurrentCat.getName());
    },
    getCurrentCatObj: function() {
        return Model.get(Model.CurrentCat);
    },
    setCurrentCat: function(name) {
        let found = Model.Cats.findIndex(cat => cat.getName() === name);

        if(found) {
            Model.setCurrentCat(found);
        }
    },
    addNewCat: function(name, url, count) {
        let newCat = Cat(name, url, count);

        Model.add(newCat);

        Model.CurrentCat = Model.Cats.length - 1; // Set CurrentCat to newest cat
    },
    getAllCats: function() {
        return Model.Cats;
    },
    getCatAt: function(index) {
        return Model.get(index);
    },
    getCat: function(name) {
        return Model.searchName(name);
    },
    incrementCurrentCat: function() {
        Model.get(Model.CurrentCat).increment();
    }
};

module.exports = { Controller };
