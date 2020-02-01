import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BacarySharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [BacarySharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class BacaryHomeModule {}
