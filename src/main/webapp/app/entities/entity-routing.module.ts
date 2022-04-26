import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardTaskComponent } from './card-task/card-task.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'task',
        data: { pageTitle: 'Tasks' },
        loadChildren: () => import('./task/task.module').then(m => m.TaskModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
    CardTaskComponent,
  ],
  declarations: [CardTaskComponent],
})
export class EntityRoutingModule {}
