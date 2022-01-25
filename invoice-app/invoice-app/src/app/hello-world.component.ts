import { Component } from '@angular/core';

@Component({
    selector: 'app-hello-world',
    template: `
    <h1>{{ title }}</h1>
    <input type="text" #box placeholder="Enter Name" name="name">
    <button (click)="getValue(box.value)">Click me!</button>
    <p>Hello {{displayVal}}</p>
    `,
    styles: [`
    h1, p  {
        color: aqua;
        font-family: "Helvetica";
    }
    `]
})

export class HelloWorldComponent {
    title = 'Invoice Manager'
    displayVal = '';
    getValue(val:string) {
        console.warn(val);
        this.displayVal = val;
    }
}