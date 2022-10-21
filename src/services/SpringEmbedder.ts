export class Vegtor {
  x: number;
  y: number;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v2: Vegtor) {
    this.x = this.x + v2.x;
    this.y = this.y + v2.y;
  }
}

export class Point {
  x: number;
  y: number;

  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  move(v:Vegtor) {
    this.x = this.x + v.x
    this.y = this.y + v.y
  }

  euclideanDistance(p: Point) {
    const xMove = Math.abs(this.x - p.x)
    const yMove = Math.abs(this.y - p.y)

    return Math.sqrt((xMove** 2) + (yMove** 2))
  }
}

