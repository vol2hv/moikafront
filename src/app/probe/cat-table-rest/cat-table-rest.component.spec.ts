import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatTableRestComponent } from './cat-table-rest.component';

describe('CatTableRestComponent', () => {
  let component: CatTableRestComponent;
  let fixture: ComponentFixture<CatTableRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatTableRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatTableRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
