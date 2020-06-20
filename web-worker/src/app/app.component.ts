import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  readonly HEXCHARS = '0123456789ABCDEF';

  public color: string;
  public number: number;
  public output: MessageEvent;

  private webWorker: Worker;

  ngOnInit() {
    if (typeof Worker !== undefined) {
      this.webWorker = new Worker('./app.worker', { type: 'module' });
      this.webWorker.onmessage = ({ data }) => {
        this.output = data;
      };
    }
  }

  calculateFibonacci() {
    this.webWorker.postMessage(this.number);
  }

  calculateFibonacciMainThread() {
    this.output = this.fibonacci(this.number);
  }

  fibonacci(num) {
    if (num === 1 || num === 2) {
      return 1;
    }
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }

  changeBgColor() {
    this.color = '#';
    for (let i = 0; i < 6; i++) {
      this.color += this.HEXCHARS[Math.floor(Math.random() * 16)];
    }
  }
}
