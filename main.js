const THICCNESS = 800;
const SVG_PATH_SELECTOR = "#matter-path";
const SVG_WIDTH_IN_PX = 100;
const SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH = 0.09;

const matterContainer = document.querySelector("#matter-container");

// module aliases
const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  Body = Matter.Body,
  Svg = Matter.Svg,
  Vector = Matter.Vector,
  Vertices = Matter.Vertices;
  Common = Matter.Common;

// create an engine
const engine = Engine.create();

// create a renderer
const render = Render.create({
  element: matterContainer,
  engine: engine,
  options: {
    width: matterContainer.clientWidth,
    height: matterContainer.clientHeight,
    background: "transparent",
    wireframes: false,
    showAngleIndicator: false
  }
});

createSvgBodies();

const ground = Bodies.rectangle(
  matterContainer.clientWidth / 2,
  matterContainer.clientHeight + THICCNESS / 2,
  27184,
  THICCNESS,
  { isStatic: true }
);

const ceiling = Bodies.rectangle(
  matterContainer.clientWidth / 2,
  0 - THICCNESS / 2,
  27184,
  THICCNESS,
  { isStatic: true }
);

let leftWall = Bodies.rectangle(
  0 - THICCNESS / 2,
  matterContainer.clientHeight / 2,
  THICCNESS,
  matterContainer.clientHeight * 5,
  {
    isStatic: true
  }
);

let rightWall = Bodies.rectangle(
  matterContainer.clientWidth + THICCNESS / 2,
  matterContainer.clientHeight / 2,
  THICCNESS,
  matterContainer.clientHeight * 5,
  { isStatic: true }
);

// add all of the bodies to the world
Composite.add(engine.world, [ceiling, ground, leftWall, rightWall]);

let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.2,
    render: {
      visible: false
    }
  }
});

Composite.add(engine.world, mouseConstraint);

// allow scroll through the canvas
mouseConstraint.mouse.element.removeEventListener(
  "mousewheel",
  mouseConstraint.mouse.mousewheel
);
mouseConstraint.mouse.element.removeEventListener(
  "DOMMouseScroll",
  mouseConstraint.mouse.mousewheel
);

// run the renderer
Render.run(render);

// create runner
const runner = Runner.create();

// run the engine
Runner.run(runner, engine);
// console.log(Composite.allBodies(engine.world));

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createSvgBodies() {
  color = [
    '#F15A24',
    '#7A9E43',
    '#E1551E',
    '#7AC943'
  ];

  document.querySelectorAll("#svg1").forEach((path, index) => {
    let vertices = Svg.pathToVertices(path, 5);
    let scaleFactor =
      (matterContainer.clientWidth * SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH) /
      156;
    vertices = Vertices.scale(vertices, scaleFactor, scaleFactor);
    let svgBody = Bodies.fromVertices(
      getRandomInt(matterContainer.clientWidth),
      40,
      [vertices],
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          fillStyle: color[1],
          strokeStyle: color[1],
          lineWidth: 1.5
        }
      }
    );
    Composite.add(engine.world, svgBody);
  });

  document.querySelectorAll("#svg2").forEach((path, index) => {
    let vertices = Svg.pathToVertices(path, 5);
    let scaleFactor =
      (matterContainer.clientWidth * SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH) /
      180;
    vertices = Vertices.scale(vertices, scaleFactor, scaleFactor);
    let svgBody = Bodies.fromVertices(
      getRandomInt(matterContainer.clientWidth),
      40,
      [vertices],
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          fillStyle: color[0],
          strokeStyle: color[0],
          lineWidth: 1.5
        }
      }
    );
    Composite.add(engine.world, svgBody);
  });

  document.querySelectorAll("#svg3").forEach((path, index) => {
    let vertices = Svg.pathToVertices(path, 5);
    let scaleFactor =
      (matterContainer.clientWidth * SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH) /
      213;
    vertices = Vertices.scale(vertices, scaleFactor, scaleFactor);
    let svgBody = Bodies.fromVertices(
      getRandomInt(matterContainer.clientWidth),
      40,
      [vertices],
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          fillStyle: color[2],
          strokeStyle: color[2],
          lineWidth: 1.5
        }
      }
    );
    Composite.add(engine.world, svgBody);
  });

  document.querySelectorAll("#svg4").forEach((path, index) => {
    let vertices = Svg.pathToVertices(path, 5);
    let scaleFactor =
      (matterContainer.clientWidth * SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH) /
      197;
    vertices = Vertices.scale(vertices, scaleFactor, scaleFactor);
    let svgBody = Bodies.fromVertices(
      getRandomInt(matterContainer.clientWidth),
      40,
      [vertices],
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          fillStyle: color[3],
          strokeStyle: color[3],
          lineWidth: 1.5
        }
      }
    );
    Composite.add(engine.world, svgBody);
  });
  
  document.querySelectorAll("#svg5").forEach((path, index) => {
    let vertices = Svg.pathToVertices(path, 5);
    let scaleFactor =
      (matterContainer.clientWidth * SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH) /
      268;
    vertices = Vertices.scale(vertices, scaleFactor, scaleFactor);
    let svgBody = Bodies.fromVertices(
      getRandomInt(matterContainer.clientWidth),
      40,
      [vertices],
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          fillStyle: color[3],
          strokeStyle: color[3],
          lineWidth: 1.5
        }
      }
    );
    Composite.add(engine.world, svgBody);
  });

  document.querySelectorAll("#svg6").forEach((path, index) => {
    let vertices = Svg.pathToVertices(path, 5);
    let scaleFactor =
      (matterContainer.clientWidth * 0.09) /
      459;
    vertices = Vertices.scale(vertices, scaleFactor, scaleFactor);
    let svgBody = Bodies.fromVertices(
      getRandomInt(matterContainer.clientWidth),
      40,
      [vertices],
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          fillStyle: color[3],
          strokeStyle: color[3],
          lineWidth: 1.5
        }
      }
    );
    Composite.add(engine.world, svgBody);
  });

  document.querySelectorAll("#svg7").forEach((path, index) => {
    let vertices = Svg.pathToVertices(path, 5);
    let scaleFactor =
      (matterContainer.clientWidth * 0.05) /
      265;
    vertices = Vertices.scale(vertices, scaleFactor, scaleFactor);
    let svgBody = Bodies.fromVertices(
      getRandomInt(matterContainer.clientWidth),
      40,
      [vertices],
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          fillStyle: color[3],
          strokeStyle: color[3],
          lineWidth: 1.5
        }
      }
    );
    Composite.add(engine.world, svgBody);
  });

  document.querySelectorAll("#svg8").forEach((path, index) => {
    let vertices = Svg.pathToVertices(path, 5);
    let scaleFactor =
      (matterContainer.clientWidth * SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH) /
      256;
    vertices = Vertices.scale(vertices, scaleFactor, scaleFactor);
    let svgBody = Bodies.fromVertices(
      getRandomInt(matterContainer.clientWidth),
      40,
      [vertices],
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          fillStyle: color[3],
          strokeStyle: color[3],
          lineWidth: 1.5
        }
      }
    );
    Composite.add(engine.world, svgBody);
  });

  document.querySelectorAll("#svg9").forEach((path, index) => {
    let vertices = Svg.pathToVertices(path, 5);
    let scaleFactor =
      (matterContainer.clientWidth * SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH) /
      115;
    vertices = Vertices.scale(vertices, scaleFactor, scaleFactor);
    let svgBody = Bodies.fromVertices(
      getRandomInt(matterContainer.clientWidth),
      40,
      [vertices],
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          fillStyle: color[3],
          strokeStyle: color[3],
          lineWidth: 1.5
        }
      }
    );
    Composite.add(engine.world, svgBody);
  });

  document.querySelectorAll("#svg10").forEach((path, index) => {
    let vertices = Svg.pathToVertices(path, 5);
    let scaleFactor =
      (matterContainer.clientWidth * SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH) /
      168;
    vertices = Vertices.scale(vertices, scaleFactor, scaleFactor);
    let svgBody = Bodies.fromVertices(
      getRandomInt(matterContainer.clientWidth),
      40,
      [vertices],
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          fillStyle: color[3],
          strokeStyle: color[3],
          lineWidth: 1.5
        }
      }
    );
    Composite.add(engine.world, svgBody);
  });
}

function scaleBodies() {
  const allBodies = Composite.allBodies(engine.world);

  allBodies.forEach((body) => {
    console.log(body);
    if (body.isStatic === true) return; // don't scale walls and ground
    const { min, max } = body.bounds;
    const bodyWidth = max.x - min.x;
    let scaleFactor =
      (matterContainer.clientWidth * SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH) /
      bodyWidth;

    Body.scale(body, scaleFactor, scaleFactor);
  });
}

function handleResize(matterContainer) {
  // set canvas size to new values
  render.canvas.width = matterContainer.clientWidth;
  render.canvas.height = matterContainer.clientHeight;

  // reposition ceiling
  Body.setPosition(
    ceiling,
    Vector.create(
      matterContainer.clientWidth / 2,
      0 - THICCNESS / 2
    )
  );

  // reposition ground
  Body.setPosition(
    ground,
    Vector.create(
      matterContainer.clientWidth / 2,
      matterContainer.clientHeight + THICCNESS / 2
    )
  );

  // reposition right wall
  Body.setPosition(
    rightWall,
    Vector.create(
      matterContainer.clientWidth + THICCNESS / 2,
      0 - THICCNESS / 2
    )
  );

  scaleBodies();
}

window.addEventListener("resize", () => handleResize(matterContainer));