import { AmazonPGPage } from './app.po';

describe('amazon-pg App', () => {
  let page: AmazonPGPage;

  beforeEach(() => {
    page = new AmazonPGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
