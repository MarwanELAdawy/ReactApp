import React, { lazy, Suspense } from 'react';

const LazyCount = lazy(() => import('./Count'));

const Count = props => (
  <Suspense fallback={null}>
    <LazyCount {...props} />
  </Suspense>
);

export default Count;
