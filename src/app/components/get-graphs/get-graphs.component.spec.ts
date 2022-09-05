import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGraphsComponent } from './get-graphs.component';

describe('GetGraphsComponent', () => {
  let component: GetGraphsComponent;
  let fixture: ComponentFixture<GetGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetGraphsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
