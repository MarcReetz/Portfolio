export class Vector {
  x: number;
  y: number;

  constructor(x, y) {
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
}

export class Point {
  x: number;
  y: number;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(v: Vector) {
    this.x = this.x + v.x;
    this.y = this.y + v.y;
  }

  euclideanDistance(p: Point) {
    const xMove = Math.abs(this.x - p.x);
    const yMove = Math.abs(this.y - p.y);

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
  id: string,
  [i:string]: any
}

export class Vertex extends Point {
  edges: Edge[] = [];
  repelentForce: number;
  springForce: number;
  data: Data;

  constructor(x, y, repelentForce, springForce,data? : Data) {
    super(x, y);
    this.repelentForce = repelentForce;
    this.springForce = springForce;
    if(data){
      this.data = data
    }
  }

  addEdge(v: Vertex, springLength: number) {
    const EdgeExists = this.edges.some((edge) => {
      return edge.vertex.data.id === v.data.id
    })
    if(!EdgeExists){
      this.edges = this.edges.concat(new Edge(springLength, v));
      v.addEdgeRe(this,springLength)
    }
  }

  addEdgeRe(v: Vertex, springLength: number) {
    this.edges = this.edges.concat(new Edge(springLength,v))
  }

  displacmentMovement(vs: Vertex[]) {
    const vector = this.allRepelentForces(vs);
    vector.add(this.allConnectedForces());
    this.move(vector);
  }

  allRepelentForces(vs: Vertex[]) {
    return vs.reduce((vector, vertex) => {
      const isVertexInEdges = this.edges.some((edge) => {
        return edge.vertex.data.id === vertex.data.id;
      });
      if (vertex.data.id !== this.data.id || isVertexInEdges) {
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
    const resultVector = this.vectorBetween(v);
    resultVector.multiply(this.repelentForce / (this.euclideanDistance(v) ** 2 + 0.01)); //0.01 makes sure there is no divison by 0
    return resultVector;
  }

  forceBetweenConectedVertex(edge: Edge): Vector {
    const resultVector = this.vectorBetween(edge.vertex);
    resultVector.multiply(
      this.springForce *
        Math.log10((this.euclideanDistance(edge.vertex) + 0.01)/ edge.springLength) //0.01 makes sure there is no divison by 0
    );
    return resultVector;
  }
}

export class SpringEmbedderGraph {
  vertices: Vertex[];
  springForce: number;
  repelentForce: number;

  constructor(vertices: Vertex[], springForce: number, repelentForce: number) {
    this.vertices = vertices;
    this.springForce = springForce;
    this.repelentForce = repelentForce;
  }

  orderByAlgorithm(times = 10) {
    let t = 0;
    while (t < times) {
      this.vertices.forEach((v) => {
        v.displacmentMovement(this.vertices);
      });
      t++;
    }
  }
}
