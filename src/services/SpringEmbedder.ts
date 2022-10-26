
export class Vector {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(v2: Vector) {
    this.x = this.x + v2.x;
    this.y = this.y + v2.y;
  }

  multiply(n: number) {
    this.x = this.x * n;
    this.y = this.y * n;
  }

  divide(n: number) {
    this.x = this.x / n
    this.y = this.y / n
  }

  normalized(distance: number) {
    return new Vector(this.x/distance || 0 ,this.y / distance || 0)
  }
}

export class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  move(v: Vector) {
    this.x = this.x + v.x;
    this.y = this.y + v.y;
  }

  euclideanDistance(p: Point) {
    const xMove = this.x - p.x;
    const yMove = this.y - p.y;

    return Math.sqrt(xMove ** 2 + yMove ** 2);
  }

  vectorBetween(p: Point): Vector {
    const x = p.x - this.x;
    const y = p.y - this.y;
    return new Vector(x, y);
  }
}

export class Edge {
  springLength: number;
  vertex: Vertex;

  constructor(springLength: number, vertex: Vertex) {
    this.springLength = springLength;
    this.vertex = vertex;
  }
}

interface Data {
  id: string;
  [i: string]: any;
}

export class Vertex extends Point {
  edges: Edge[] = [];
  repelentForce: number;
  springForce: number;
  data: Data;
  isFixed = false;

  constructor(
    x: number,
    y: number,
    repelentForce: number,
    springForce: number,
    data: Data,
    isFixed?: boolean
  ) {
    super(x, y);
    this.repelentForce = repelentForce;
    this.springForce = springForce;
    this.data = data;
    if (isFixed) {
      this.isFixed = isFixed;
    }
  }

  addEdge(v: Vertex, springLength: number) {
    const EdgeExists = this.edges.some((edge) => {
      return edge.vertex.data.id === v.data.id;
    });
    if (!EdgeExists) {
      this.edges = this.edges.concat(new Edge(springLength, v));
      v.addEdgeRe(this, springLength);
    }
  }

  addEdgeRe(v: Vertex, springLength: number) {
    this.edges = this.edges.concat(new Edge(springLength, v));
  }

  displacmentMovement(vs: Vertex[]) {
    if (this.isFixed){
      return
    }
    const vector = this.allRepelentForces(vs);
    vector.add(this.allConnectedForces());
    this.move(vector)
  }


  allRepelentForces(vs: Vertex[]) {
    return vs.reduce((vector, vertex) => {
      const isVertexInEdges = this.edges.some((edge) => {
        return edge.vertex.data.id === vertex.data.id;
      });
      if (vertex.data.id !== this.data.id && !isVertexInEdges) {
        vector.add(this.repelentForceToOtherVertex(vertex));
      }
      return vector;
    }, new Vector(0, 0));
  }

  allConnectedForces() {
    return this.edges.reduce((vector, vertex) => {
      vector.add(this.forceBetweenConectedVertex(vertex));
      return vector;
    }, new Vector(0, 0));
  }

  repelentForceToOtherVertex(v: Vertex): Vector {
    const distance = v.euclideanDistance(this) + 0.01; //avoid forces at minimal range
    const direction = v.vectorBetween(this).normalized(distance)
    direction.multiply(this.repelentForce)
    direction.divide(distance **2 * 0.5)
    return direction
  }

  forceBetweenConectedVertex(edge: Edge): Vector {
    const vector = edge.vertex.vectorBetween(this)
    const displacment = edge.springLength - this.euclideanDistance(edge.vertex)
    const direction = vector.normalized(this.euclideanDistance(edge.vertex))
    direction.multiply(this.springForce * displacment * 0.5)
    return direction
  }
}

export class SpringEmbedderGraph {
  vertices: Vertex[];
  springForce: number;
  repelentForce: number;
  center: Point

  constructor(vertices: Vertex[], springForce: number, repelentForce: number, height:number, width:number) {
    this.vertices = vertices;
    this.springForce = springForce;
    this.repelentForce = repelentForce;
    this.center = new Point(width /2, height/2)
  }

  attractToCenter(){
    this.vertices.forEach(v => {
      const vector = v.vectorBetween(this.center)
      const distance = v.euclideanDistance(this.center)
      const direction = vector.normalized(distance)
      const x = 2**(1/(this.center.x*10))*distance * 0.001
      const y = 2**(1/(this.center.y*10))*distance * 0.001

      v.move(new Vector(x * direction.x,y * direction.y))
    })
  }

  orderByAlgorithm(times = 10) {
    let t = 0;
    while (t < times) {
      this.vertices.forEach((v) => {
        v.displacmentMovement(this.vertices);
      });
      this.attractToCenter()
      t++;
    }
  }
}
