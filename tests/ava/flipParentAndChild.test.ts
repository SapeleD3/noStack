import test from 'ava';

import { Tree } from '../../src/types';

import { flipParentAndChild } from '../../src/robert/flipParentAndChild'
import { sampleTree, treeOfB } from './data/sampleTrees';

test('flipParentAndChild', t => {
	const result: Tree = flipParentAndChild(sampleTree, treeOfB)

	t.is(result.root, 'B');
	t.is(result.children[2].root, 'A');

});