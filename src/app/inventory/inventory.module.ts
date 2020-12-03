import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { MaterialModule } from './../material.module'
import { InventoryRoutingModule } from './inventory-routing.module';
import { HomeComponent } from './home/home.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component'

@NgModule({
  declarations: [HomeComponent, StockEntryComponent, ProductsComponent, CategoriesComponent],
  imports: [CommonModule, InventoryRoutingModule, MaterialModule],
})
export class InventoryModule {}
