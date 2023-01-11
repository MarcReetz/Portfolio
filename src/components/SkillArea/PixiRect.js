import { CustomPIXIComponent } from "react-pixi-fiber/index"
import * as PIXI from "pixi.js";

const TYPE = "Rect";
export const behavior = {
  customDisplayObject: () => new PIXI.Graphics(),
  customApplyProps: function (instance, oldProps, newProps) {
    const { fill, x, y, width, height, ...newPropsRest } = newProps;
    // variables actually theme to be used by PIXI if the screen size changes
    // eslint-disable-next-line no-unused-vars
    const { fill: oldFill, x: oldX, y: oldY, width: oldWidth, height: oldHeight, ...oldPropsRest } = oldProps || {};
    if (typeof oldProps !== "undefined") {
      instance.clear();
    }
    instance.beginFill(fill);
    instance.drawRect(x - width/2, y - height/2, width, height);
    instance.endFill();

    this.applyDisplayObjectProps(oldPropsRest, newPropsRest);
  },
};

export default CustomPIXIComponent(behavior, TYPE);