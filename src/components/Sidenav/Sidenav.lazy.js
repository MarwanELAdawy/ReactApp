import React, { lazy, Suspense } from 'react';

const LazySidenav = lazy(() => import('./Sidenav'));

const Sidenav = props => (
  <Suspense fallback={null}>
    <LazySidenav {...props} />
  </Suspense>
);

export default Sidenav;
