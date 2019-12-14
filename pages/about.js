import React from 'react';

import Layout from '../components/layout';
import AboutContactBox from '../components/about/about-contact-box';

import './about.less';

class AboutPage extends React.Component {
  
  renderLink(link, description) {
    return (
      <a href={link} rel="noopener noreferrer" target="_blank">
        {description}
      </a>
    );
  }
  
  render() {
    return (
      <Layout displayLayoutSearch={false}>
        <div className="AboutPage">
          <div className="AboutPage-description">
            <div>
              <img src="../static/face.jpg" className="AboutPage-icon" alt="me_and_myself"/>
            </div>
            
            <div>
              <div className="AboutPage-nameAndPosition">
                <div className="AboutPage-name">Daniel Pacurici</div>
                <div className="AboutPage-position">Full Stack Software Developer</div>
              </div>
              
              <div className="AboutPage-detailedDescription">
                <div className="AboutPage-headline">Hi there and welcome to my page. My name is Daniel Pacurici and I am
                  a Full Stack Software Developer with over 7 years of experience, specialized in JavaScript development
                  (ReactJS, NodeJS), previously working with .Net Framework (C#, WPF).
                </div>
                
                <div className="AboutPage-headline">
                  As a Full Stack Developer, my work consists in creating both front-ends and back-ends but also
                  in configuring and taking care of infrastructural part.
                  In these years, I had the opportunity to work with Docker containers, Amazon services, Heroku,
                  Monitoring tools (ELK, Kibana, Grafana, Prometheus) and many other technologies. I also have
                  a great interest in AI and IoT.
                </div>
                
                <div className="AboutPage-headline">
                  This Website has been created in a couple of days for the purpose of presenting
                  some of the way I work with <b>ReactJS</b> on front-end, <b>NodeJS</b> on back-end using
                  <b>Koa</b> as server with <b>MongoDB</b> as database. The code is public made on my github account.
                  The web application is hosted using {this.renderLink('https://zeit.co/', 'Now')},
                  the service is hosted using {this.renderLink('https://www.heroku.com/', 'Heroku')} and
                  the database is in {this.renderLink('https://www.mongodb.com/cloud/atlas/', 'Mongo Atlas')}
                </div>
                
                <div className="AboutPage-headline">
                  Below you can find some of my written articles, published npm package, other work on my github account
                  or my full profile on LinkedIn. For any questions please feel free to contact me.
                </div>
              </div>
            </div>
          </div>
          
          <AboutContactBox/>
        </div>
      </Layout>
    );
  }
}

export default AboutPage;