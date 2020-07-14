import React from 'react';

const Validator = () => (
  <div>
    <h2>Cards Validator</h2>
  </div>
);

export default {
  routeProps: {
    path: '/validator',
    exact: true,
    component: Validator
  },
  name: 'Validator'
};
