import { TestBed, async, getTestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostPageComponent } from './postPage.component';
import { MonogrammePipe, StripHtmlPipe } from '../../helpers/customPipes';
import { ApiService } from '../../services/api.service';

describe('Single post page: ', () => {
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
            PostPageComponent,
            MonogrammePipe,
            StripHtmlPipe
        ],
        }).compileComponents();
        injector = getTestBed();
        service = injector.get(ApiService);
        httpMock = injector.get(HttpTestingController);
    }));
    
    afterEach(() => {
        httpMock.verify();
    });

    it('should create the PostPageComponent page', () => {
        const fixture = injector.createComponent(PostPageComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('MonogrammePipe - should display monogramme as TT from Testing Teo', () => {
        const name = 'Testing Teo';
        const pipe = new MonogrammePipe();
        const result = pipe.transform(name);
        expect(result).toBe('TT');
    });

    it('StripHtmlPipe - should remove html tags from provided strings', () => {
        const txt = '<h1>This is a test <strong>!!!</strong></h1>';
        const pipe = new StripHtmlPipe();
        const result = pipe.transform(txt);
        expect(result).toBe('This is a test !!!');
    });

    it('API getSinglePost() - should return posts', () => {
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
    
        service.getSinglePost('1').subscribe(post => {
          expect(post).toEqual(dummyPosts);
        });
        
        const req = httpMock.expectOne(`http://localhost:9001/posts/1`);
        expect(req.request.method).toBe("GET");
        req.flush(dummyPosts);
      });
});
