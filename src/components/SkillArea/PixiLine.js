import { CustomPIXIComponent } from "react-pixi-fiber/index";
import * as PIXI from "pixi.js";

const TYPE = "Line";
export const behavior = {
  customDisplayObject: () => new PIXI.Graphics(),
  customApplyProps: function (instance, oldProps, newProps) {
    const { color, x, y, x2, y2, ...newPropsRest } = newProps;
    const {...oldPropsRest } = oldProps || {};
    if (typeof oldProps !== "undefined") {
      instance.clear();
    }
    instance.lineStyle(2, color)
    instance.moveTo(x, y)
    instance.lineTo(x2, y2);

    this.applyDisplayObjectProps(oldPropsRest, newPropsRest);
  },
};

export default CustomPIXIComponent(behavior, TYPE);