import React from 'react';

import AboutContactItem from './about-contact-item';

import './about-contact-box.less';

const AboutContactBox = () => (
  <div className="AboutContactBox">
    <AboutContactItem
      imgAlt="gmail" imgSrc="../../static/gmail.png"
      url="mailto:daniel.pacurici@gmail.com?subject=Contacting you from your website:"/>
    <AboutContactItem imgAlt="linkedin" imgSrc="../../static/li.png" url="https://linkedin.com/in/dannypk"/>
    <AboutContactItem imgAlt="gitHub" imgSrc="../../static/gh.png" url="https://github.com/dannypk"/>
    <AboutContactItem
      imgAlt="npm" imgSrc="../../static/npm.png"
      url="https://www.npmjs.com/package/eslint-config-easy-configuration"/>
    <AboutContactItem imgAlt="medium" imgSrc="../../static/medium.png" url="https://medium.com/@daniel.pacurici"/>
    <AboutContactItem imgAlt="devto" imgSrc="../../static/devto.png" url="https://dev.to/@dannypk"/>
  </div>
);

export default AboutContactBox;
