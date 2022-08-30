import test from 'ava';

import { Tree } from '../../src/types';

import { flipAncestorsInTree, flipAncestorsInTreeRecursion } from '../../src/robert/flipAncestorsInTree'
import { sampleTree, treeOfB } from './data/sampleTrees';

test('flipAncestorsInTreeRecursion', t => {
	const ancestors = ["D", "B"]
	const result: Tree = flipAncestorsInTreeRecursion(sampleTree, ancestors)

	t.is(result.root, 'D');
	t.is(result.children[1].root, 'B');
	t.is(result.children[1].children[1].root, 'A');

});

test('flipAncestors', t => {
	const ancestors = ["D", "B", "A"]
	const result: Tree = flipAncestorsInTree(sampleTree, ancestors)

	t.is(result.root, 'D');
	t.is(result.children[1].root, 'B');
	t.is(result.children[1].children[1].root, 'A');

});