import styles from './index.less';
import React, { Component } from 'react';
import { NavLink, withRouter } from 'umi';

class Sidebar extends Component {
  render() {
    const path = this.props.match.path.split(':')[0];
    const docs = this.props.docs;

    return (
      <div className={styles.sidebar}>
        {docs.map((item, index) => (
          <React.Fragment key={index}>
            {typeof item === 'object' && (
              <React.Fragment>
                {item[1] && (
                  <NavLink className={styles.link} to={`${path}${item[1]}`}>
                    {item[0]}
                  </NavLink>
                )}
                {!item[1] && <div className={styles.navDisabled}>{item[0]}</div>}
              </React.Fragment>
            )}
            {typeof item === 'string' && <div className={styles.classification}>{item}</div>}
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default withRouter(Sidebar);
