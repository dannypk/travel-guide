import React from 'react';
import Router from 'next/router';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import classnames from 'classnames';

import PAGES from '../constants/pages.const';

import DestinationSearchBar from './destination-search-bar';

import layoutStore from '../stores/layout.store';

import './layout.less';

@observer
class Layout extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.any.isRequired,
    displayLayoutSearch: PropTypes.bool
  };
  
  static defaultProps = {
    title: 'Travel Guide',
    displayLayoutSearch: true
  };
  
  renderMenu() {
    return Object.values(PAGES).map(page => {
      const menuItemClassName = classnames('Layout-menuItem', {
        'is-active': page === layoutStore.currentPage
      });
      
      return (
        <div className={menuItemClassName} key={page}
             onClick={() => {
               layoutStore.currentPage = page;
               Router.push(`/${page.toLowerCase()}`);
             }}>
          {page}
        </div>
      );
    });
  }
  
  render() {
    const layoutHeaderClassName = classnames('Layout-header', {
      'Layout-header--noSearchBar': !this.props.displayLayoutSearch
    });
    
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <div className={layoutHeaderClassName}>
          <img className="Layout-headerBackground" src="/static/travel.jpg" alt="travel_bkgr"/>
          
          <div className="Layout-logoAndMenu">
            <div>
              <img src="../static/logo.png" alt="world-logo"/>
            </div>
            
            <div className="Layout-menu">
              {this.renderMenu()}
            </div>
          </div>
          
          {this.props.displayLayoutSearch &&
          <div className="Layout-search">
            <p>We help you find your next destination</p>
            <DestinationSearchBar/>
          </div>
          }
        </div>
        
        {this.props.children}
        
        <div className="Layout-footer"/>
      </div>
    );
  }
}

export default Layout;