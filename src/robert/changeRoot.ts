import { Tree } from '../types'

import { flipAncestorsInTree } from './flipAncestorsInTree'
import { getAncestors } from './getAncestors'

/*
    1. find the path of ancestors of newRoot
    2. descending from the root, flip each edge of the path
 */
export const changeRoot = (tree: Tree, newRoot: string): Tree =>
    flipAncestorsInTree(tree, getAncestors(tree, newRoot))