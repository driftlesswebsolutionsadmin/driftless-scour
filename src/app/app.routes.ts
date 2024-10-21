import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'product', component: ProductComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'demo', component: DemoComponent },
];
