import { sampleTree, getChildParentMap } from '../src/utils';

describe('test-coverage getChildParentMapping', () => {
  const childParentMap = getChildParentMap(sampleTree);

  it('should return object type', () => {
    expect(typeof childParentMap).toBe('object');
  });

  it('should point A as parent of B', () => {
    expect(childParentMap['B']).toBe('A');
  });
});
