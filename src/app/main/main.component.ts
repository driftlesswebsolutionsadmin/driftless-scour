import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { DemoComponent } from '../demo/demo.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductComponent, DemoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
