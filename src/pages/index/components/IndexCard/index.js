import './index.less';
import React, { Component } from 'react';
import { Link } from 'umi';
import { getColor } from '@/utils/color';

class Card extends Component {
  render() {
    const { link, title, desc } = this.props;

    return (
      <div className="indexCard">
        <Link to={link}>
          <div className={`title ${getColor()}`}>{title}</div>
          <div className="content">
            <div className="desc">{desc}</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;
