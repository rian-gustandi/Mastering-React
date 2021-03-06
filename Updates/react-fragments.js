// Example 1: Using empty tags <></>
render() {
  return (
    <>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </>
  );
}

// Example 2: Using React.Fragment
render() {
  return (
    <React.Fragment>
      <h1>An h1 heading</h1>
      Some text here.
          <h2>An h2 heading</h2>
      More text here.
      Even more text here.
        </React.Fragment>
  );
}

// Example 3: Importing Fragment
import React, { Fragment } from 'react';
    ...
render() {
  return (
    <Fragment>
      <h1>An h1 heading</h1>
      Some text here.
          <h2>An h2 heading</h2>
      More text here.
      Even more text here.
        </Fragment>
  );
}