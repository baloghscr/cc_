import { TestBed, async, getTestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('API services: ', () => {
    let httpMock: HttpTestingController;
    let service: ApiService;
    let injector: TestBed;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            HttpClientTestingModule
        ],
        declarations: [],
        }).compileComponents();
        injector = getTestBed();
        service = injector.get(ApiService);
        httpMock = injector.get(HttpTestingController);
    }));
    
    afterEach(() => {
        httpMock.verify();
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
            }
        ];
    
        service.getPosts().subscribe(post => {
          expect(post).toEqual(dummyPosts);
        });
        
        const req = httpMock.expectOne(`http://localhost:9001/posts`);
        expect(req.request.method).toBe("GET");
        req.flush(dummyPosts);
    });

    it('API getSinglePost() - should return a single post by id', () => {
        const dummyPosts = [
            {
                "id": 1,
                "title": "title",
                "author": "author",
                "publish_date": "publish_date",
                "slug": "slug",
                "description": "description",
                "content": "content"
            }
        ];
    
        service.getSinglePost('1').subscribe(post => {
          expect(post).toEqual(dummyPosts);
        });
        
        const req = httpMock.expectOne(`http://localhost:9001/posts/1`);
        expect(req.request.method).toBe("GET");
        req.flush(dummyPosts);
    });

    it('API getAllComments() - should return all comments', () => {
        const dummyPosts = [
            {
                "id": 1,
                "title": "title",
                "author": "author",
                "publish_date": "publish_date",
                "slug": "slug",
                "description": "description",
                "content": "content"
            }
        ];
    
        service.getAllComments().subscribe(post => {
          expect(post).toEqual(dummyPosts);
        });
        
        const req = httpMock.expectOne(`http://localhost:9001/comments`);
        expect(req.request.method).toBe("GET");
        req.flush(dummyPosts);
    });

    it('API getComments() - should return comments for blogpost by id', () => {
        const dummyPosts = [
            {
                "id": 1,
                "title": "title",
                "author": "author",
                "publish_date": "publish_date",
                "slug": "slug",
                "description": "description",
                "content": "content"
            }
        ];
    
        service.getComments('1').subscribe(post => {
          expect(post).toEqual(dummyPosts);
        });

        const req = httpMock.expectOne(`http://localhost:9001/posts/1/comments`);
        expect(req.request.method).toBe("GET");
        req.flush(dummyPosts);
    });
});
