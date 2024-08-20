import styles from './index.less';
import React, { Component } from 'react';
import sIntoView from 'scroll-into-view-if-needed';

class Nav extends Component {
  state = {
    navList: []
  };

  componentDidMount() {
    this.props.onRef('refArticleNav', this);
  }

  generateNav = wrapper => {
    let eleList = wrapper.querySelectorAll('h2,h3');
    let navList = [];

    eleList.forEach(item => {
      navList.push({
        id: item.id,
        type: item.tagName.toLowerCase(),
        content: item.innerText
      });
    });

    this.setState({ navList });
  };

  handleScroll = id => {
    sIntoView(document.getElementById(id), {
      block: 'start',
      inline: 'start',
      behavior: 'smooth',
      boundary: document.getElementById('articleWrapper')
    });
  };

  render() {
    const { navList } = this.state;

    return navList.length ? (
      <div className={styles.articleNav}>
        <ul>
          {navList.map((item, index) => (
            <li
              key={index}
              className={item.type === 'h3' ? styles.linkH3 : ''}
              onClick={() => {
                this.handleScroll(item.id);
              }}
            >
              {item.content}
            </li>
          ))}
        </ul>
      </div>
    ) : null;
  }
}

export default Nav;
