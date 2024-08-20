import styles from './index.less';
import React, { Component } from 'react';
import { getColor } from '@/utils/color';
import { history } from 'umi';

class Card extends Component {
  handleClickItem = (prefix, link) => {
    if (link === undefined || link === null) {
      return;
    }

    const url = prefix ? prefix + link : link;

    if (url.search(/http/) === -1) {
      history.push(url);
    } else {
      window.open(url);
    }
  };

  render() {
    const { title, desc, items, prefix } = this.props;

    return (
      <div className={styles.catalogCard}>
        <div className={`${styles.cardTitle} ${getColor()}`}>{title}</div>
        {desc && <div className={styles.cardDesc}>{desc}</div>}

        <ul className={styles.cardList}>
          {items.map((item, index) => (
            <li key={index}>
              <div
                className={`${styles.itemName} ${
                  item.link ? styles.linkItem : ''
                }`}
                onClick={() => {
                  this.handleClickItem(prefix, item.link);
                }}
              >
                {item.name}
              </div>
              {item.desc && <div className={styles.itemDesc}>{item.desc}</div>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Card;
