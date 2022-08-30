import { Tree } from '../types';
import { flipParentAndChild } from './flipParentAndChild';

/*
    Flip each ancestor with its parent, going down from the root towards the lowest ancestor.
*/
export function flipAncestorsInTreeRecursion(tree: Tree, ancestors: string[]): Tree {

    if (ancestors.length === 0) return tree

    const childToFlip = ancestors.pop()

    for (const child of tree.children) {
        if (child.root === childToFlip) return flipAncestorsInTreeRecursion(flipParentAndChild(tree, child), ancestors)
    }

    throw new Error(`while attempting to flip ancestors in tree, the child ${childToFlip} was not found for the parent ${tree.root}`)
}


/*
    1. pop the root for the tree off of ancestors
    2. pass it to the recursion above
*/
export function flipAncestorsInTree(tree: Tree, ancestors: string[]): Tree {
    const ancestorsWithoutRoot = [...ancestors]
    ancestorsWithoutRoot.pop() // take off root

    return flipAncestorsInTreeRecursion(tree, ancestorsWithoutRoot)
}
