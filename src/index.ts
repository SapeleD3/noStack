import { Tree } from './types';
import { getNewRootTree, getChildParentMap, buildNewTree } from './utils';
// import sampleGraph from './utils/sampleGraph';

const changeTreeRoot = (undirectedTree: Tree, newRoot: string): Tree => {
  const childToParentMap = getChildParentMap(undirectedTree);

  const newRootTree = getNewRootTree(undirectedTree, newRoot);

  if (!newRootTree) {
    throw new Error(`No Child tree with root: ${newRoot}`);
  }

  let subParent = childToParentMap[newRootTree.root];
  // loop backwards to find the last Parent
  while (childToParentMap[subParent] !== undirectedTree.root) {
    subParent = childToParentMap[subParent];
  }

  const newTree = buildNewTree({
    undirectedTree,
    newRootTree,
    newRoot,
    subParent,
  });

  console.dir(newTree, { depth: null });
  return newTree;
};

// uncomment below to test
// changeTreeRoot(sampleGraph, 'D');

export default changeTreeRoot;
export * from './types';
