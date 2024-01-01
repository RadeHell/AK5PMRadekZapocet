import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchHistoryPage } from './search-history.page';

describe('SearchHistoryPage', () => {
  let component: SearchHistoryPage;
  let fixture: ComponentFixture<SearchHistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
