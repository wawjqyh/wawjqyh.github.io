import styles from './index.less';
import React, { Component } from 'react';
import { Link } from 'umi';

class Breadcrumb extends Component {
  render() {
    const nav = this.props.nav || [];

    return (
      <div className={styles.breadcrumb}>
        {nav.map((item, index) => (
          <React.Fragment key={index}>
            {item.url && (
              <Link className={styles.link} to={item.url}>
                {item.name}
              </Link>
            )}
            {!item.url && <div className={styles.linkCur}>{item.name}</div>}
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Breadcrumb;
