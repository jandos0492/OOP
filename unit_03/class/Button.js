class Button {;
    constructor(width, height, background, value) {;
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    };

    render() {;
        let button = document.createElement("button");

        button.style.background = `${this.background}`;
        button.textContent = `${this.value}`;
        button.style.width = `${this.width}`;
        button.style.height = `${this.height}`;

        return button;
    };
};

let btn = new Button("50px", "50px", "red", "hello");

document.body.appendChild(btn.render());