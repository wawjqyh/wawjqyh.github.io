import styles from './index.less';
import React, { Component } from 'react';
import { history } from 'umi';
import Breadcrumb from '../Breadcrumb';

class Header extends Component {
  handleGoHome = () => {
    history.push('/');
  };

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.content}>
          <div className={styles.homeWrapper} onClick={this.handleGoHome}>
            <img className={styles.iconHome1} src={require('@/assets/home.png')} />
            <img className={styles.iconHome2} src={require('@/assets/home2.png')} />
          </div>

          <Breadcrumb nav={this.props.nav} />
        </div>
      </div>
    );
  }
}

export default Header;
