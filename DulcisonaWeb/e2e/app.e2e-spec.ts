import { DulcisonaWebPage } from './app.po';

describe('dulcisona-web App', () => {
  let page: DulcisonaWebPage;

  beforeEach(() => {
    page = new DulcisonaWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
