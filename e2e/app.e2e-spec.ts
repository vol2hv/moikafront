import { MoikafrontPage } from './app.po';

describe('moikafront App', () => {
  let page: MoikafrontPage;

  beforeEach(() => {
    page = new MoikafrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
