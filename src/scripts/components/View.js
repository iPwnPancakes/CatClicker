let Controller = require('./Controller').Controller;

let View = {
    Menu: {
        createMenuEntry: function(catObj) {
            let listItem = document.createElement('li');

            let listItemText = document.createElement('h2');

            listItemText.textContent = catObj.getName();

            listItemText.addEventListener('click', (event) => {
                Controller.setCurrentCat(event.srcElement.textContent);
                View.CatArea.render();

                console.log(Controller.getCurrentCatObj().getName());

                console.log(event.srcElement);
            });

            listItem.appendChild(listItemText);

            return listItem;
        },
        render: function() {
            let Cats = Controller.getAllCats();
            let menu = document.getElementById('menu');

            while(menu.hasChildNodes()) { // Removes all cat entries in the cat menu, then rebuilds the list
                menu.removeChild(menu.firstChild);
            }

            Cats.map(cat => {
                let listItem = View.Menu.createMenuEntry(cat);

                menu.appendChild(listItem)
            });
        }
    },
    CatArea: {
        render: function() {
            let cat = Controller.getCurrentCatObj();

            document.getElementById('catHeader').textContent = cat.getName();

            document.getElementById('catImg').src = cat.getSrc();

            document.getElementById('catCounter').textContent = 'Times Clicked: ' + cat.getCount();
        }
    },
    AdminArea: {
        render: function() {
            document.getElementById('admin-btn').addEventListener('click', () => {
                    document.getElementById('admin-form').style.display = 'block';
            });

            document.getElementById('admin-Submit').addEventListener('click', () => {
                let name = document.getElementById('admin-CatName').value;
                let url = document.getElementById('admin-CatUrl').value;
                let count = Number(document.getElementById('admin-CatCount').value);

                Controller.addNewCat(name, url, count);
                
                View.Menu.render(); 
                View.CatArea.render();

                document.getElementById('admin-form').style.display = 'none';
            });

            document.getElementById('admin-Cancel').addEventListener('click', () => {
                document.getElementById('admin-form').style.display = 'none';
            });
        }
    },
    render: function() {
        View.Menu.render();

        View.CatArea.render();

        View.AdminArea.render();

        document.getElementById('catImg').addEventListener('click', function(e) {
            Controller.incrementCurrentCat();
            View.CatArea.render();
        });
    },

};

module.exports = { View };
