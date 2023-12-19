window.onresize = () => setup();

let canvas;
let img;

let circle = {
    color: {red: 200, green: 200, blue: 50, alpha: 205},
    position: {x: 100, y: 200},
    shape: {diameter: 100},
    onCanvas: function () {
        let c = this.color;
        let p = this.position;
        let s = this.shape;

        fill(c.red, c.green, c.blue, c.alpha);
        ellipse(p.x, p.y, s.diameter, s.diameter);

    }
}

let b0 = {
    color: {red: 0, green: 200, blue: 0, alpha: 255},
    font: {name: "Apple LiSung Light", size: 140},
    position: {x: 200, y: 200},
    text: "X",
    onCanvas: function () {
        let c = this.color;
        let p = this.position;
        let f = this.font;
        let t = this.text;

        fill(c.red, c.green, c.blue, c.alpha);
        textSize(f.size);
        textFont(f.name);
        text(t, p.x, p.y);
    }
};

let b1 = {
    color: {red: 255, green: 0, blue: 0, alpha: 255},
    font: {name: "Apple LiSung Light", size: 140},
    position: {x: 100, y: 400},
    text: "M",
    onCanvas: function () {
        let c = this.color;
        let p = this.position;
        let f = this.font;
        let t = this.text;

        fill(c.red, c.green, c.blue, c.alpha);
        textSize(f.size);
        textFont(f.name);
        text(t, p.x, p.y);
    }
};

let b2 = {
    color: {red: 0, green: 0, blue: 255, alpha: 255},
    font: {name: "Apple LiSung Light", size: 140},
    position: {x: 200, y: 500},
    text: "A",
    onCanvas: function () {
        let c = this.color;
        let p = this.position;
        let f = this.font;
        let t = this.text;

        fill(c.red, c.green, c.blue, c.alpha);
        textSize(f.size);
        textFont(f.name);
        text(t, p.x, p.y);
    }
};

let b3 = {
    color: {red: 0, green: 255, blue: 255, alpha: 255},
    font: {name: "Apple LiSung Light", size: 140},
    position: {x: 350, y: 500},
    text: "S",
    onCanvas: function () {
        let c = this.color;
        let p = this.position;
        let f = this.font;
        let t = this.text;

        fill(c.red, c.green, c.blue, c.alpha);
        textSize(f.size);
        textFont(f.name);
        text(t, p.x, p.y);
    }
};


function preload() {
    img = loadImage("img/xmas.JPG");
}

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("container");

    // @ts-expect-error
    noStroke();
}

function draw() {
    background(img);

    const items = [b0, b1, b2, b3, circle];
    items.forEach(element => element.onCanvas());
}

function mousePressed() {
    // @ts-expect-error
    circle.position.x = mouseX;
    // @ts-expect-error
    circle.position.y = mouseY;
}