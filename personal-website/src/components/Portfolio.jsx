import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    // DESIGN: "Desing",
    // BRAND: "Brand",
    // PHOTOS: "Photos",
  };

  const projectsData = [
    {
      title: "Nomader",
      projectInfo:
        "A social progressive web app (PWA) for digital nomads",
      technologies: "React, Node.JS, Redux, Typescript, Chakra UI, Socket. io, PostgreSQL, AWS (EC2, S3, Route 53, CloudFront), Knex, JWT, PWA, Docker",
      url: {
        name: "nomader.tecky-kc.me/",
        link: "https://nomader.tecky-kc.me/",
      },
      gitUrl: {
        gitName: "github.com/kellychowkc/Nomader",
        gitLink: "https://github.com/kellychowkc/Nomader",
      },
      hightlights:[
        {index: 1, point:"Completed the project using React within five weeks of learning"},
        {index: 2, point:"Designed and implemented secure authentication flow (hashpassword, bcrypt, JWT) "},
        {index: 3, point:"Designed UXUI and business logic"},
        {index: 4, point:"Proposed and established efficient teamwork practices (Git)"},
        {index: 5, point:`Optimized performance (lazy loading, CDN)  `}
      ],
      thumbImage: "images/projects/project-1.png",
      sliderImages: [
        "images/projects/nomader/Nomader.png",
        "images/projects/nomader/Nomader-1.png",
        "images/projects/nomader/Nomader-2.png",
        "images/projects/nomader/Nomader-3.png",
        "images/projects/nomader/Nomader-4.png",
        "images/projects/nomader/Nomader-5.png",
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Sign Language Platform",
      projectInfo:
        "A sign language online learning platform",
      technologies: "PoseNet, FaceMesh, HandLandmarks, Express, Typescript, NodeJS, GitHub CI/CD, AWS (EC2), PostgreSQL, Knex",
      url: {
        name: "bad-project.tecky-kc.me/",
        link: "https://bad-project.tecky-kc.me/",
      },
      gitUrl: {
        gitName: "github.com/kellychowkc/sign_teaching_platform",
        gitLink: "https://github.com/kellychowkc/sign_teaching_platform",
      },
      hightlights:[
        {index: 1, point:"Designed and developed an online platform providing sign language education with AI-assisted recording and pose detection"},
        {index: 2, point:"Managed a team to complete tasks within a tight two-week timeframe as the project leader"},
        {index: 3, point:"Established clear guidelines for testing, styling, and folder structure"},
        {index: 4, point:"Implemented a streamlined infrastructure, including a delivery pipeline (CI/CD)"},
      ],
      thumbImage: "images/projects/project-2.png",
      sliderImages: [
        "images/projects/signTeaching/image-1.png",
        "images/projects/signTeaching/image-2.png",
        "images/projects/signTeaching/image-3.png",
        "images/projects/signTeaching/image-4.png",
        "images/projects/signTeaching/image-5.png",
        "images/projects/signTeaching/image-6.png",
      ],
      categories: [filters.BRAND],
    },
    // {
    //   title: "Project Title 6",
    //   projectInfo:
    //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    //   client: "Ruby Clinton",
    //   technologies: "iOS, HTML5, CSS3, PHP, Java",
    //   industry: "Art & Design",
    //   date: "July 16, 2019",
    //   url: {
    //     name: "www.example.com",
    //     link: "https://www.example.com",
    //   },
    //   socialLinks: {
    //     facebook: "http://www.facebook.com/",
    //     twitter: "http://www.twitter.com/",
    //     google: "http://www.google.com/",
    //     instagram: "http://www.instagram.com/",
    //     mail: "mailto:example@gmail.com",
    //   },
    //   thumbImage: "images/projects/project-6.jpg",
    //   sliderImages: [
    //     "images/projects/project-1.jpg",
    //     "images/projects/project-5.jpg",
    //   ],
    //   categories: [filters.BRAND],
    // }
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5 title">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Project
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image blurImage"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            {/* <span className="text-light">Category</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
