import { NullRoutePipe } from './null-route.pipe';

describe('NullRoutePipe', () => {
  it('create an instance', () => {
    const pipe = new NullRoutePipe();
    expect(pipe).toBeTruthy();
  });
});
