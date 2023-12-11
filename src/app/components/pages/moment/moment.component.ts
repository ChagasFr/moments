import { Component, OnInit } from '@angular/core';
import { Moment } from '../../../moment';
import { MomentService } from '../../../services/moment/moment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css',
})
export class MomentComponent implements OnInit {
  moment?: Moment;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
  }
}
