const Cat = function (name, src, cnt) {
    let Name = name;
    let Src = src;
    let Count = cnt;

    return {
        getName: () => { return Name },
        getSrc: () => { return Src },
        getCount: () => { return Count },

        setName: (name) => { Name = name },
        setSrc: (src) => { Src = src },
        setCount: (count) => { Count = count },

        increment: function () { Count++ },
        equals: function(cat) {
            if(cat.getName() === Name && cat.getCount() === Count && cat.getSrc() === Src) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}

module.exports = { Cat };
