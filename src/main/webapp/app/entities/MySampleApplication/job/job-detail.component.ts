import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IJob } from 'app/shared/model/MySampleApplication/job.model';

@Component({
  selector: 'jhi-job-detail',
  templateUrl: './job-detail.component.html'
})
export class JobDetailComponent implements OnInit {
  job: IJob;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ job }) => {
      this.job = job;
    });
  }

  previousState() {
    window.history.back();
  }
}
