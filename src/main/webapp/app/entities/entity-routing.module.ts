import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardTaskComponent } from './card-task/card-task.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
    CardTaskComponent,
  ],
  declarations: [CardTaskComponent],
})
export class EntityRoutingModule {}
