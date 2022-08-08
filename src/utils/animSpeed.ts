import { Layer, StackArray } from "../types";

export const animSpeed = (stack: StackArray) => {
  const speed = 0.04;

  const topLayer: Layer = stack.current[stack.current.length - 1];

  const howFar = topLayer.threejs.position[topLayer.direction] + speed;
  return { speed, topLayer, howFar };
};
