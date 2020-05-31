import { CircuitElement } from './CircuitElement';

export class Battery9v extends CircuitElement {
  static pointHalf = 4;
  constructor(public canvas: any, x: number, y: number) {
    super('Battery9v', x, y, 'Battery9v.json', canvas);
  }
<<<<<<< HEAD
  save() {
  }
  load(data: any): void {
=======
  init() {
    this.nodes[1].addValueListener((_, calledby, __) => {
      if (calledby.parent.id === this.id) {
        /// TODO: Show Toast and Stop Simulation
        console.log('Short Circuit');
        window['showToast']('Short Circuit');
      }
    });
>>>>>>> master
  }
  getNode(x: number, y: number): Point {
    return null;
  }
  properties(): { keyName: string; id: number; body: HTMLElement; title: string; } {
    const body = document.createElement('div');
    return {
      keyName: 'Battery9v',
      id: this.id,
      body,
      title: '9v Battery'
    };
  }
  initSimulation(): void {
    this.nodes[0].setValue(9, null);
  }
  closeSimulation(): void {
  }
  simulate(): void {
  }

}


export class CoinCell extends CircuitElement {
  static pointHalf = 5;
  constructor(public canvas: any, x: number, y: number) {
    super('CoinCell', x, y, 'CoinCell.json', canvas);
  }
<<<<<<< HEAD
  save() {
  }
  load(data: any): void {
  }
  getNode(x: number, y: number): Point {
    return null;
  }
=======
>>>>>>> master
  properties(): { keyName: string; id: number; body: HTMLElement; title: string; } {
    const body = document.createElement('div');
    return {
      keyName: this.keyName,
      id: this.id,
      body,
      title: 'Coin Cell'
    };
  }
  initSimulation(): void {
  }
  closeSimulation(): void {
  }
  simulate(): void {
  }
}
