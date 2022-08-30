import test from 'ava';

import { Tree } from '../../src/types';

import { changeRoot } from '../../src/robert/changeRoot'
import { sampleTree } from './data/sampleTrees';

test('changeRoot', t => {
	const result: Tree = changeRoot(sampleTree, 'D')

	t.is(result.root, 'D');
	t.is(result.children[1].root, 'B');
	t.is(result.children[1].children[1].root, 'A');
});