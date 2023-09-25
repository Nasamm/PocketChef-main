import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PocketPage } from './pocket.page';

describe('PocketPage', () => {
  let component: PocketPage;
  let fixture: ComponentFixture<PocketPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PocketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
