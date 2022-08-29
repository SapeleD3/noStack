**CODE BREAKDOWN**

The core function the changing the root of the tree is exported at the src/index.ts this function is dependant on 3 utility functions that

1. Extracts a tree from the undirectedTree given a root
2. traverses the undirected tree to generate a child-parent Mapping
3. builds the tree by moving the location of the newRoot to top retaining the edges of the tree

```
    childToParentMap =  { B: 'A', C: 'B', D: 'B', I: 'D', E: 'A', F: 'E', G: 'E', H: 'E' }
    newRootTree.root = "D"
    undirectedTree.root = "A"

  let subParent = childToParentMap[newRootTree.root];
  while (childToParentMap[subParent] !== undirectedTree.root) {
    subParent = childToParentMap[subParent];
  }
  subparent = "B"
```

The snippet above using the given tree as an example, traces the path taken from the top root in this case `A` to the given newRoot `D` and seeing that there is only one parent seperating A and D and that is `B` Knowing the location of B we can then swap D to be parent of B and A a child of B hence changing the root

Edge cases considered:

1. in a case where the tree is nested and there is 3 layers seperating the newRoot to Top root the while loop creates a sequence resulting at the child root that branches of to form the relation and does the swapping from there

**HOW TO GET STARTED**

STEP 1: Run to install all required packages

```
npm i
```

STEP 2: Run `cmd` to change the root of sampleTree

**NB** in File src/index.ts uncomment code

```
// import sampleGraph from './utils/sampleGraph';

// changeTreeRoot(sampleGraph, 'D');
```

Then Run

```
npm run dev
```

**100% test coverage**

```
npm run test
```

![alt text](testCoverage.png 'Title')
