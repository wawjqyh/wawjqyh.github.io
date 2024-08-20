import styles from './index.less';
import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { group } = this.props;

    return (
      <React.Fragment>
        {group === 1 && (
          <React.Fragment>
            <img className={styles.footImg1} src={require('@/assets/foot1.png')} />
            <img className={styles.footImg2} src={require('@/assets/foot4.png')} />
          </React.Fragment>
        )}

        {group === 2 && (
          <React.Fragment>
            <img className={styles.footImg3} src={require('@/assets/foot2.png')} />
            <img className={styles.footImg4} src={require('@/assets/foot3.png')} />
          </React.Fragment>
        )}

        {group === 3 && (
          <React.Fragment>
            <img className={styles.footImg5} src={require('@/assets/21.png')} />
            <img className={styles.footImg6} src={require('@/assets/28.png')} />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Header;
