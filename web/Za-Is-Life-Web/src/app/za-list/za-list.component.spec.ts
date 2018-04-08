import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaListComponent } from './za-list.component';

describe('ZaListComponent', () => {
  let component: ZaListComponent;
  let fixture: ComponentFixture<ZaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
