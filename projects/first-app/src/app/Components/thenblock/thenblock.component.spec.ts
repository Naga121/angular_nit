import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThenblockComponent } from './thenblock.component';

describe('ThenblockComponent', () => {
  let component: ThenblockComponent;
  let fixture: ComponentFixture<ThenblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThenblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThenblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
