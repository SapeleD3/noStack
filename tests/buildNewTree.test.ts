import { buildNewTree, getNewRootTree } from '../src/utils';
import { sampleTree } from '../src/utils';

describe('test-coverage buildNewTree', () => {
  const newRootTree = getNewRootTree(sampleTree, 'D');
  if (!newRootTree) {
    throw new Error(`No Child tree with root: D`);
  }
  const newTree = buildNewTree({
    undirectedTree: sampleTree,
    newRootTree,
    newRoot: 'D',
    subParent: 'B',
  });

  it('should error out if subparent not in undirectedTree', () => {
    expect(() =>
      buildNewTree({
        undirectedTree: sampleTree,
        newRootTree,
        newRoot: 'D',
        subParent: 'Z',
      })
    ).toThrow(`No Child tree with root: Z`);
  });

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
