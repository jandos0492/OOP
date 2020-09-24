class List {
    constructor(item) {
        this.item = item;
    }

    render() {
        let ul = document.createElement("ul");
        let out = "";
        for (let i = 0; i < this.item.length; i++) {
            out += `<li>${this.item[i]}</li><br>`
        }
        ul.innerHTML = out;
        return ul;
    }
}



