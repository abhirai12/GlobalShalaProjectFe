import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule , HttpTestingController} from '@angular/common/http/testing';
import { TableListComponent } from './table-list.component';
import { RouterTestingModule } from '@angular/router/testing';
fdescribe('TableListComponent', () => {
  let component: TableListComponent;
  let fixture: ComponentFixture<TableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableListComponent ],
      imports: [ HttpClientTestingModule,
        RouterTestingModule ],
       
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
