
import { Component } from '@angular/core';
@Component({
    selector: 'my-child',
    template:`<h2>child app component</h2>
    <label>enter child component value</label>
    <input type="text">
    <p>the parent component value is</p>
    {{parentData}}`,
    inputs : [`parentData`]
})
export class ChildComponent{
public parentData:string;
}