import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  @Input() company:string

  constructor() { }

  ngOnInit() {}

}
