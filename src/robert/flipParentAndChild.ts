import { Tree } from '../types';

/*
    "Flip" parent and child in tree means to reverse their direction, but otherwise to retain the tree.
    The assumption here is that the parent is the root of the tree.

    Steps used:
        1. clone parent tree      
        2. remove child from cloned tree
        3. clone child tree
        4. add cloned parent tree to children of cloned child tree
*/
export function flipParentAndChild(parentTree: Tree, childTree: Tree): Tree {
    const parentTreeWithChildRemoved = { ...parentTree };

    parentTreeWithChildRemoved.children =
        parentTreeWithChildRemoved.children.filter(
            (currentChild: Tree) => currentChild.root !== childTree.root
        );

    const newTreeRootedInChild = { ...childTree };
    newTreeRootedInChild.children.push(parentTreeWithChildRemoved);
    return newTreeRootedInChild;
}
