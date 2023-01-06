import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuestrosdepartamentosPage } from './nuestrosdepartamentos.page';

describe('NuestrosdepartamentosPage', () => {
  let component: NuestrosdepartamentosPage;
  let fixture: ComponentFixture<NuestrosdepartamentosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NuestrosdepartamentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuestrosdepartamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
