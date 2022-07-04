import { Component,OnInit , importProvidersFrom } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable, observable} from 'rxjs'
import {map,startWith} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material';
  selectedvalue = ''
  options: string[] = ['angular','react','node'];
  object = [
    {
      name:"angular14"

    },
  {
    name:"node15"
  }]
  _filtervalue: any;
  displayfn(subject :any)
  {
    return subject ? subject.name : undefined;
  }
  mycontrol = new FormControl();
  filteredoptions!: Observable<string[]>;

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.filteredoptions = this.mycontrol.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value))
  );
}
private _filter(value: string):string[]{
  const filtervalue = value.toLowerCase();
  return this.options.filter(options => options.toLowerCase().includes(filtervalue));
}
  obj(obj: any, arg1: any): string[] {
    throw new Error('Method not implemented.');
  }
}
