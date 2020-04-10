import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotFoundComponent } from './404.component';

describe('404 page: ', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NotFoundComponent
      ],
    }).compileComponents();
  }));
  
  it('should create the NotFoundComponent page', () => {
    const fixture = TestBed.createComponent(NotFoundComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
