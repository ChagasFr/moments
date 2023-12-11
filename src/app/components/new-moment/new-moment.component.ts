import { MomentService } from './../../services/moment/moment.service';
import { Component, OnInit } from '@angular/core';
import { Moment } from '../../moment';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-new-moment',
  standalone: true,
  imports: [],
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css',
})
export class NewMomentComponent implements OnInit {
  btnText = 'Compartilhar !';

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {}

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('descriprition', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();
  }
}
