import { Tree } from '../../../src/types';

export const sampleTree = {
  root: 'A',
  children: [
    {
      root: 'B',
      children: [
        { root: 'C', children: [] },
        { root: 'D', children: [{ root: 'I', children: [] }] },
      ],
    },
    {
      root: 'E',
      children: [
        { root: 'F', children: [] },
        { root: 'G', children: [] },
        { root: 'H', children: [] },
      ],
    },
  ],
} as Tree;

export const treeOfB = {
  root: 'B',
  children: [
    { root: 'C', children: [] },
    { root: 'D', children: [{ root: 'I', children: [] }] },
  ],
} as Tree;
