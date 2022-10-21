import { Point } from "./SpringEmbedder";

describe('test euclidean Length', () => {
  test('for point(0,0) and (2,2)', () => {
    const p = new Point(0,0);
    const p1 = new Point(3,4);
    expect(p.euclideanDistance(p1)).toBe(5)
  });
});