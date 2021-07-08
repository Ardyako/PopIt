import { UniguePipe } from './unique.pipe';

describe('UniguePipe', () => {
  it('create an instance', () => {
    const pipe = new UniguePipe();
    expect(pipe).toBeTruthy();
  });
});
