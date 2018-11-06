/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { MySampleApplicationTestModule } from '../../../../test.module';
import { JobDetailComponent } from 'app/entities/MySampleApplication/job/job-detail.component';
import { Job } from 'app/shared/model/MySampleApplication/job.model';

describe('Component Tests', () => {
  describe('Job Management Detail Component', () => {
    let comp: JobDetailComponent;
    let fixture: ComponentFixture<JobDetailComponent>;
    const route = ({ data: of({ job: new Job(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [MySampleApplicationTestModule],
        declarations: [JobDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(JobDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(JobDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.job).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
