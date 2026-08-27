import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invalid404 } from './invalid404';

describe('Invalid404', () => {
  let component: Invalid404;
  let fixture: ComponentFixture<Invalid404>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Invalid404]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Invalid404);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
