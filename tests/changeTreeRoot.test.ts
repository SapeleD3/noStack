import changeTreeRoot from '../src';
import { sampleTree } from '../src/utils';

describe('test-coverage changeTreeRoot', () => {
  it('should error out when newRoot not in graph', () => {
    const newRoot = 'z';
    expect(() => changeTreeRoot(sampleTree, newRoot)).toThrow(
      `No Child tree with root: ${newRoot}`
    );
  });

  const newTree = changeTreeRoot(sampleTree, 'D');
  it('should return object type', () => {
    expect(typeof newTree).toBe('object');
  });

  it('should return a response of type Tree', () => {
    expect(newTree).toHaveProperty('root');
    expect(newTree).toHaveProperty('children');
    expect(typeof newTree.children).toBe('object'); // jest matchers sees array as object
    expect(typeof newTree.root).toBe('string');
  });

  it('should return a tree with D as root', () => {
    expect(newTree.root).toBe('D');
  });
});
