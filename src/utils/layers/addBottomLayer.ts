import { World } from "cannon";
import { Scene } from "three";
import { Layer } from "../../types";
import { generateBox } from "../generateBox";

export const addBottomLayer = (
  x: number,
  z: number,
  width: number,
  depth: number,
  direction: "x" | "z",
  boxHeight: number,
  stack: React.MutableRefObject<Layer[]>,
  scene: React.MutableRefObject<Scene>,
  world: React.MutableRefObject<World>,
  randomNumber: React.MutableRefObject<number>
) => {
  const y = -5;
  const layer: Layer = generateBox(
    x,
    y,
    z,
    width,
    depth,
    direction,
    false,
    boxHeight,
    stack,
    scene,
    world,
    randomNumber
  );
  stack.current.push(layer);
};