import { ComponentFixture, TestBed } from '@angular/core/testing';
import CavingPageComponent from './caving.page';

describe('CavingPageComponent', () => {
  let component: CavingPageComponent;
  let fixture: ComponentFixture<CavingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CavingPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CavingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
