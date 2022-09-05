import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoGraphsComponent } from './do-graphs.component';

describe('DoGraphsComponent', () => {
  let component: DoGraphsComponent;
  let fixture: ComponentFixture<DoGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoGraphsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
