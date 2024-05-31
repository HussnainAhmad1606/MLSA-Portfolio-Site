/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "HoxTrackr",
    description:
      "HoxTrackr is user-friendly web application designed to help individual students efficiently manage their personal finances while living in hostels or shared accommodations",
    url: "https://hox-trackr.vercel.app",
  },
  {
    title: "SnapStock",
    description:
      "Pinterest inspired project where user can find stock images & videos for projects. User can upload images & videos to platform. Machine Learning Model is implemented to check for inappropriate content in image",
    url: "https://github.com/HussnainAhmad1606/SnapStock-Website",
  },
  {
    title: "OSS Lab",
    description:
      "OSS Lab is online directory for finding open-source projects based on skill level and differnet skillsets",
    url: "https://oss-lab.vercel.app/",
  },
  {
    title: "LogFusion",
    description:
      "LogFusion is Social-Networking platform for professionals. It includes features of daily streaks, auto-portfolio making, career visualization & project management. Users can share about their learnings and experimental projects.",
    url: "https://logfusion.net",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
