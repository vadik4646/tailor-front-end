import { TailorFrontEndPage } from './app.po';

describe('tailor-front-end App', function() {
  let page: TailorFrontEndPage;

  beforeEach(() => {
    page = new TailorFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
