import { Tree, TreeBuildingPayload } from '../types';
import getNewRootTree from './getNewRootTree';

const buildNewTree = (payload: TreeBuildingPayload): Tree => {
  const { undirectedTree, newRootTree, subParent, newRoot } = payload;

  const treeBranchExcludingParentOfNewRoot = {
    root: undirectedTree.root,
    children: undirectedTree.children.filter(
      (child: Tree) => child.root !== subParent
    ),
  };

  const parentTreeOfNewRoot = getNewRootTree(undirectedTree, subParent);

  if (!parentTreeOfNewRoot) {
    throw new Error(`No Child tree with root: ${subParent}`);
  }

  const index = parentTreeOfNewRoot.children.findIndex(
    (child: Tree) => child.root === newRoot
  );

  // swap the location of the newRootTree and parentTree
  parentTreeOfNewRoot.children[index] = treeBranchExcludingParentOfNewRoot;
  newRootTree.children.push(parentTreeOfNewRoot);

  return newRootTree;
};

export default buildNewTree;
