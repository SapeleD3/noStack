export interface Tree {
  root: string;
  children: Tree[];
}

export type TreeBuildingPayload = {
  undirectedTree: Tree;
  newRootTree: Tree;
  newRoot: string;
  subParent: string;
};
