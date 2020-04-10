import { TestBed, async, getTestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { ApiService } from '../../services/api.service';

describe('Home page: ', () => {
    let httpMock: HttpTestingController;
    let service: ApiService;
    let injector: TestBed;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            HttpClientTestingModule
        ],
        declarations: [
            HomeComponent
        ],
        }).compileComponents();
        injector = getTestBed();
        service = injector.get(ApiService);
        httpMock = injector.get(HttpTestingController);
    }));
    
    afterEach(() => {
        httpMock.verify();
    });

    it('should create the HomeComponent page', () => {
        const fixture = injector.createComponent(HomeComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('API getPosts() - should return posts', () => {
        const dummyPosts = [
            {
                "id": 1,
                "title": "title",
                "author": "author",
                "publish_date": "publish_date",
                "slug": "slug",
                "description": "description",
                "content": "content"
            },
            {
                "id": 2,
                "title": "title",
                "author": "author",
                "publish_date": "publish_date",
                "slug": "slug",
                "description": "description",
                "content": "content"
            }
        ];
    
        service.getPosts().subscribe(post => {
          expect(post).toEqual(dummyPosts);
        });
        
        const req = httpMock.expectOne(`http://localhost:9001/posts`);
        expect(req.request.method).toBe("GET");
        req.flush(dummyPosts);
      });
});
