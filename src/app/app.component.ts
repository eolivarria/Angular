//fiel that supports root components that forms part of the angular app
import { Component } from '@angular/core';//component class from angular core library

@Component({//prepare app component class, component decorator, js object as parameter
  selector: 'app-root',//in index.html file also includes it, where the view of this component is displayed in browser
  templateUrl: './app.component.html',//template corresponding to this compoennet, template defines the view for this component
  styleUrls: ['./app.component.scss']//scss for component template
})
export class AppComponent {//export the class
  title = 'conFusion'; //display this is the brower, display in the view
}