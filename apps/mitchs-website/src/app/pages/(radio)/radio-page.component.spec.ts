import { ComponentFixture, TestBed } from '@angular/core/testing';
import RadioPageComponent from './radio.page';

describe('RadioPageComponent', () => {
  let component: RadioPageComponent;
  let fixture: ComponentFixture<RadioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
