class Triangle {
  constructor(height, base) {
    this.height = height;
    this.width = base;
  }

  function areaTriangle () {
    return 0.5 * this.height * this.base
  }
}

let triangle = new Triangle(5, 4);

console.log(triangle.areaTriangle);
