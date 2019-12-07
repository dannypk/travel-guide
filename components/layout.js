import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';

import './layout.less';

export default class Layout extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.any.isRequired
  };

  static defaultProps = {
    title: 'Your travel guide is now here !'
  };

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <div className="Layout-header">
          here will be our menu !
        </div>
        <div className="Layout-content">
          {this.props.children}
        </div>
        <div className="Layout-footer">
          here will be our footer details ! :)
        </div>
      </div>
    );
  }
}