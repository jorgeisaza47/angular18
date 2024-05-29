import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from "@shared/title/title.component";

@Component({
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <app-title [title]="currentFramework()" />


  `,
    imports: [TitleComponent]
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  })

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  }

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React'
      this.frameworkAsSignal.update(value => {
        value.name = 'React';
        return {...value};
      })
    }, 3000)
  }
}
