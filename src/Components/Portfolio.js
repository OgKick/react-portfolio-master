import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if (!this.props.data) {
      return null;
    }

    // Group projects by category
    const projectsByCategory = {};
    this.props.data.projects.forEach((project) => {
      if (!projectsByCategory[project.category]) {
        projectsByCategory[project.category] = [];
      }
      projectsByCategory[project.category].push(project);
    });

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {Object.entries(projectsByCategory).map(([category, projects]) => (
                <div key={category}>
                  <h2>{category}</h2>
                  <div className="category-projects">
                    {projects.map((project) => {
                      const projectImage = `images/portfolio/${project.image}`;
                      return (
                        <div key={project.title} className="columns portfolio-item">
                          <div className="item-wrap">
                            <a href={project.url} title={project.title}>
                              <img alt={project.title} src={projectImage} />
                              <div className="overlay">
                                <div className="portfolio-item-meta">
                                  <h5>{project.title}</h5>
                                  <p>{project.description}</p>
                                  <p>{project.tools}</p>
                                </div>
                              </div>
                              <div className="link-icon">
                                <i className="fa fa-link"></i>
                              </div>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
