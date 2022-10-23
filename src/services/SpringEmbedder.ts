import { number } from "prop-types";

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

  multiply(n:number){
    this.x = this.x * n
    this.y = this.y * n
  }
}

export class Point {
  x: number;
  y: number;

  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  move(v:Vector) {
    this.x = this.x + v.x
    this.y = this.y + v.y
  }

  euclideanDistance(p: Point) {
    const xMove = Math.abs(this.x - p.x)
    const yMove = Math.abs(this.y - p.y)

    return Math.sqrt((xMove** 2) + (yMove** 2))
  }         

  vectorBetween(p:Point): Vector {
    const x = p.x - this.x
    const y = p.y - this.y
    return new Vector(x,y)
  }
}

export class Edge {
    springLength: number
    vertex: Vertex
}

interface Data {
    id:string,
}

export class Vertex extends Point {
    edges: Edge[]
    repelentForce: number
    springForce: number
    data:Data

    constructor(x,y,repelentForce,springForce){
        super(x,y)
        this.repelentForce = repelentForce;
        this.springForce = springForce;
    }

    displacmentMovement() {

    }

    allRepelentForces(v:Vertex[]) {
        return v.reduce((vector,vertex) => {
            const isVertexInEdges = this.edges.some((edge) => {
                return edge.vertex.data.id === vertex.data.id
            })
            if(vertex.data.id !== this.data.id || isVertexInEdges){
                vector.add(this.repelentForceToOtherVertex(vertex))
            }
            return vector
        },new Vector(0,0))
    }

    allConnectedForces() {
        return this.edges.reduce((vector,vertex) => {
            vector.add(this.forceBetweenConectedVertex(vertex))
            return vector
        },new Vector(0,0))
    }

    repelentForceToOtherVertex(v:Vertex):Vector{
        const resultVector = this.vectorBetween(v)
        resultVector.multiply((this.repelentForce/ (this.euclideanDistance(v)** 2))) 
        return resultVector
    }

    forceBetweenConectedVertex(edge:Edge):Vector{
        const resultVector = this.vectorBetween(edge.vertex)
        resultVector.multiply(this.springForce * Math.log10(this.euclideanDistance(edge.vertex)/edge.springLength))
        return resultVector
    }
}