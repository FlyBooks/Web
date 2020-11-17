interface Point2D {
  x: number;
  y: number;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

let point2D: Point2D = { x: 0, y: 0 };
let point3D: Point3D = { x: 0, y: 0, z: 0 };

function iTakeePoint2D(point2D: Point2D): void {
  console.log(222);
}

iTakeePoint2D(point2D);
iTakeePoint2D(point3D);
iTakeePoint2D({ x: 0, y: 999 });
