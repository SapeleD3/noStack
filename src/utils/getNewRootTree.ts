import { Tree } from '../types';

const getNewRootTree = (undirectedTree: Tree, newRoot: string): Tree | null => {
  if (newRoot === undirectedTree.root) {
    return undirectedTree;
  }

  let newTree: Tree | null = null;
  for (const child of undirectedTree.children) {
    const updatedEdge = getNewRootTree(child, newRoot);

    if (updatedEdge) {
      newTree = updatedEdge;
      break;
    }
  }

  return newTree;
};

export default getNewRootTree;
