import { Tree } from '../types';

export interface GetAnswersRecursiveResult { ancestors: string[]; found: boolean; }

export function getAncestorsRecursive(tree: Tree, nodeName: string, ancestorsFound: string[]): GetAnswersRecursiveResult {
    const { root } = tree
    if (nodeName === root) {
        ancestorsFound.push(root);
        return { ancestors: ancestorsFound, found: true };
    }

    if (tree.children.length === 0) {
        return { ancestors: ancestorsFound, found: false };
    }

    let ancestors = { ...ancestorsFound };
    for (const child of tree.children) {
        const results = getAncestorsRecursive(child, nodeName, ancestorsFound);
        if (results.found) {
            ancestors: results.ancestors.push(root)
            return { ancestors: results.ancestors, found: true };
        }
    }

    return { ancestors, found: false };
}


export const getAncestors = (tree: Tree, nodeName: string): string[] => getAncestorsRecursive(tree, nodeName, []).ancestors