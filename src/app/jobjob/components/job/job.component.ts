import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  @Input() company: string;
  @Input() companyLogo: string;
  @Input() companyUrl: string;
  @Input() location: string;
  @Input() desctiption: string;
  @Input() howToApply: string;

  constructor() { }

  ngOnInit() {}

}
