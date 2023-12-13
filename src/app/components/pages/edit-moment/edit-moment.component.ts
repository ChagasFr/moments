import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MomentService } from './../../../services/moment/moment.service';
import { Moment } from '../../../moment';

@Component({
  selector: 'app-edit-moment',
  standalone: true,
  imports: [],
  templateUrl: './edit-moment.component.html',
  styleUrl: './edit-moment.component.css',
})
export class EditMomentComponent implements OnInit {
  moment!: Moment;
  btnText: string = 'Editar';

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe((item) => {
      this.moment = item.data;
    });
  }
}
