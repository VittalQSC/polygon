import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  @Input() company: string;
  @Input() company_logo: string;
  @Input() company_url: string;
  @Input() location: string;
  @Input() desctiption: string;
  @Input() how_to_apply: string;

  constructor() { }

  ngOnInit() {}

}
