import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-moment',
  standalone: true,
  imports: [],
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css',
})
export class NewMomentComponent implements OnInit {
  btnText = 'Compartilhar !';

  constructor() {}

  ngOnInit(): void {}
}
