import { Tree } from '../types';

const roots: { [name: string]: string } = {};

const getChildParentMap = (tree: Tree) => {
  tree.children.forEach((child) => {
    roots[child.root] = tree.root;
    getChildParentMap(child);
  });

  return roots;
};

export default getChildParentMap;
