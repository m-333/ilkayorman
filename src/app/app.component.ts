import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig],
})
export class AppComponent {
  title = 'ilkayormancilik';
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
