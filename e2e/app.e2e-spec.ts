import { NgJagPage } from './app.po';

describe('ng-jag App', () => {
  let page: NgJagPage;

  beforeEach(() => {
    page = new NgJagPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
