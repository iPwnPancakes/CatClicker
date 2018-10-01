let Cat = require('../util/Cat').Cat;

let Model = {
    CurrentCat: 0,
    Cats: [
        Cat('Friskers', '../../res/LickCat.jpg', 0),
        Cat('Purrito', '../../res/BaruCat.jpg', 0),
        Cat('Dabnel', '../../res/DeepCat.jpg', 0),
        Cat('Holly', '../../res/NubCat.jpg', 0),
        Cat('Grumpycat', '../../res/CozyCat.jpg', 0)
    ],
    add: function(cat) {
        Model.Cats.push(cat);
    },
    set: function(index, cat) {
        Model.Cats[index] = cat;
    },
    setCurrentCat: function(index) {
        Model.CurrentCat = index;
    },
    get: function(index) {
        return Model.Cats[index];
    },
    getByName: function(name) {
        return Model.Cats.find(cat => cat.getName() === name);
    },
}

module.exports = { Model };
