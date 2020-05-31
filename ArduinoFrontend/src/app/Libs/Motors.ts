import { CircuitElement } from './CircuitElement';
import { Point } from './Point';

declare var Raphael;

export class Motor extends CircuitElement {
  static pointHalf = 4;

  constructor(public canvas: any, x: number, y: number) {
    super('Motor', x, y);
    this.elements.push(
      this.canvas.image('assets/images/components/Motor.svg', this.x, this.y, 69, 56),
      this.canvas.image('assets/images/components/MotorAbove.svg', this.x + 24, this.y + 17.5, 21, 21),
    );
    this.nodes = [
      new Point(canvas, x + 24, y + 51, 'NEGATIVE', Motor.pointHalf, this),
      new Point(canvas, x + 40, y + 51, 'POSITIVE', Motor.pointHalf, this),
    ];
    this.setClickListener(null);
    this.setDragListeners();
    this.setHoverListener();

    // const anim = Raphael.animation({transform: 'r360'}, 2500).repeat(Infinity);
    // this.elements[1].animate(anim);
  }
  save() {
  }
<<<<<<< HEAD:ArduinoFrontend/src/app/Libs/Motors.ts
  load(data: any): void {
  }
  getNode(x: number, y: number): Point {
    return null;
  }
=======
>>>>>>> master:ArduinoFrontend/src/app/Libs/outputs/Motors.ts
  properties(): { keyName: string; id: number; body: HTMLElement; title: string; } {
    const body = document.createElement('div');
    return {
      keyName: this.keyName,
      id: this.id,
      body,
      title: 'Motor'
    };
  }
  initSimulation(): void {
  }
  closeSimulation(): void {
  }
  simulate(): void {
  }

}


export class L298N extends CircuitElement {
  static pointHalf = 4;
  constructor(public canvas: any, x: number, y: number) {
    super('L298N', x, y, 'L298N.json', canvas);
  }
<<<<<<< HEAD:ArduinoFrontend/src/app/Libs/Motors.ts
  save() {
  }
  load(data: any): void {
  }
  getNode(x: number, y: number): Point {
    return null;
  }
=======
>>>>>>> master:ArduinoFrontend/src/app/Libs/outputs/Motors.ts
  properties(): { keyName: string; id: number; body: HTMLElement; title: string; } {
    const body = document.createElement('div');
    body.innerText = 'If you Don\'t Connect The ENA and ENB Pins it automatically connects to the 5V suppy';
    return {
      keyName: this.keyName,
      id: this.id,
      body,
      title: 'Motor Driver (L298N)'
    };
  }
  initSimulation(): void {
  }
  closeSimulation(): void {
  }
  simulate(): void {
  }
}

export class ServoMotor extends CircuitElement {
  static pointHalf = 6;

  constructor(public canvas: any, x: number, y: number) {
    super('ServoMotor', x, y, 'ServoMotor.json', canvas);
  }
  animate(angle: number) {
    const anim = Raphael.animation({ transform: `r${angle}` }, 2500);
    this.elements[1].animate(anim);
  }
<<<<<<< HEAD:ArduinoFrontend/src/app/Libs/Motors.ts
  save() {
  }
  load(data: any): void {
  }
  getNode(x: number, y: number): Point {
    return null;
  }
=======
>>>>>>> master:ArduinoFrontend/src/app/Libs/outputs/Motors.ts
  properties(): { keyName: string; id: number; body: HTMLElement; title: string; } {
    const body = document.createElement('div');
    return {
      keyName: this.keyName,
      id: this.id,
      body,
      title: 'Motor'
    };
  }
  initSimulation(): void {
  }
  closeSimulation(): void {
  }
  simulate(): void {
  }

}
