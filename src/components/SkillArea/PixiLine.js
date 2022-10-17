

import { CustomPIXIComponent } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

const TYPE = "Line";
export const behavior = {
  customDisplayObject: props => new PIXI.Graphics(),
  customApplyProps: function (instance, oldProps, newProps) {
    const { fill, x, y, width, height, ...newPropsRest } = newProps;
    const { fill: oldFill, x: oldX, y: oldY, width: oldWidth, height: oldHeight, ...oldPropsRest } = oldProps || {};
    if (typeof oldProps !== "undefined") {
      instance.clear();
    }
    instance.lineStyle(2, 0xffffff)
    instance.moveTo(0, 0)
    instance.lineTo(400, 100);

    this.applyDisplayObjectProps(oldPropsRest, newPropsRest);
  },
};

export default CustomPIXIComponent(behavior, TYPE);