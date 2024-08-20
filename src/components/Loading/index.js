import styles from '@/styles/loading.less';
import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className={styles.compLoading}>
        <div className={styles.fullLoading}>
          <img className={styles.iconLoading} src={require('@/assets/loading.svg')} alt="" />
        </div>
      </div>
    );
  }
}

export default Loading;
