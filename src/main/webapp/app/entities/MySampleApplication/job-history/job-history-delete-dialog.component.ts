import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IJobHistory } from 'app/shared/model/MySampleApplication/job-history.model';
import { JobHistoryService } from './job-history.service';

@Component({
  selector: 'jhi-job-history-delete-dialog',
  templateUrl: './job-history-delete-dialog.component.html'
})
export class JobHistoryDeleteDialogComponent {
  jobHistory: IJobHistory;

  constructor(private jobHistoryService: JobHistoryService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.jobHistoryService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'jobHistoryListModification',
        content: 'Deleted an jobHistory'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-job-history-delete-popup',
  template: ''
})
export class JobHistoryDeletePopupComponent implements OnInit, OnDestroy {
  private ngbModalRef: NgbModalRef;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ jobHistory }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(JobHistoryDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.jobHistory = jobHistory;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
          }
        );
      }, 0);
    });
  }

  ngOnDestroy() {
    this.ngbModalRef = null;
  }
}
