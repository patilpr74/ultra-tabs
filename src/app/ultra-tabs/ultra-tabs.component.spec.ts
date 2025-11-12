import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraTabsComponent } from './ultra-tabs.component';

describe('UltraTabsComponent', () => {
  let component: UltraTabsComponent;
  let fixture: ComponentFixture<UltraTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltraTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltraTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
