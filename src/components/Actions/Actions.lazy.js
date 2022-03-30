import React, { lazy, Suspense } from 'react';

const LazyActions = lazy(() => import('./Actions'));

const Actions = props => (
  <Suspense fallback={null}>
    <LazyActions {...props} />
  </Suspense>
);

export default Actions;
