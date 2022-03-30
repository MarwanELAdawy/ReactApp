import {React, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Count.module.css';

function Count() {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }

  return <button onClick={updateCount}>Count is: {count}</button>;
}

Count.propTypes = {};

Count.defaultProps = {};

export default Count;
