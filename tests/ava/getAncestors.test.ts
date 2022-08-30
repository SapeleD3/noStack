import test from 'ava';

import { Tree } from '../../src/types';

import { getAncestors, getAncestorsRecursive, GetAnswersRecursiveResult } from '../../src/robert/getAncestors'
import { sampleTree } from './data/sampleTrees';

const fn = () => 'foo';

test('getAncestorsRecursive', t => {
	const newRoot = 'D'
	const result: GetAnswersRecursiveResult = getAncestorsRecursive(sampleTree, newRoot, [])
	const { ancestors } = result

	t.true(ancestors.length > 0);
	t.is(ancestors[0], 'D')
	t.is(ancestors[1], 'B')
	t.is(ancestors[2], 'A')

});

test('getAncestors', t => {
	const newRoot = 'D'
	const result: string[] = getAncestors(sampleTree, newRoot)

	t.true(result.length > 0);
	t.is(result[0], 'D')
	t.is(result[1], 'B')
	t.is(result[2], 'A')

});