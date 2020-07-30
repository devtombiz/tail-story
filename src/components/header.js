import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-gray-100 text-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <Link to="/">
          <h1 className="flex items-center no-underline">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 225 225" fill="#4FD1C5" height="50">
          <g transform="matrix( 1, 0, 0, 1, 0,0) ">
              <g>
                <g id="Layer0_0_FILL">
                  <path d="M210.1,113.7c1.3-1.3,1.3-2.6,0-4l-94.4-94.3c-1.2-1.2-2.4-1.3-3.6-0.3c-0.1,0.1-0.2,0.2-0.4,0.3l-94.3,94.2
          c-1.3,1.4-1.3,2.7,0,4.1l94.3,94.3c0.2,0.2,0.3,0.3,0.4,0.4c1.2,0.9,2.4,0.7,3.6-0.5L210.1,113.7 M160.4,79.4L169,88
          c1.4,1.4,1.4,2.9,0,4.3l-74.3,74.2c-1.4,1.4-2.8,1.4-4.3,0l-8.6-8.6c-0.1-0.1-0.2-0.3-0.3-0.5c-0.4-0.2-0.7-0.5-1-0.7l-18-18.1
          c-0.2-0.2-0.5-0.5-0.7-0.8c-0.2-0.1-0.4-0.2-0.5-0.4l-8.6-8.6c-1.5-1.4-1.5-2.8-0.1-4.3L66.1,111c1.4-1.4,2.9-1.4,4.3,0l8.6,8.6
          c0.2,0.2,0.3,0.3,0.5,0.5c0.3,0.2,0.5,0.5,0.8,0.7L97.4,138l42.9-42.9l-16.2-16.2l-38.3,38.3c-1.4,1.4-2.8,1.4-4.3,0l-8.6-8.6
          c-1.5-1.4-1.5-2.8-0.1-4.3l54-54c1.4-1.5,2.9-1.5,4.3-0.1l8.6,8.6c0.1,0.1,0.2,0.2,0.3,0.3c0.2,0.2,0.4,0.4,0.6,0.6l18.7,18.7
          c0.2,0.2,0.4,0.4,0.6,0.6C160.1,79.2,160.2,79.3,160.4,79.4 M37.8,109.6l13.5-13.5c1.4-1.4,2.8-1.4,4.3,0.1l8.6,8.6
          c1.5,1.4,1.5,2.8,0.1,4.3l-13.5,13.5c-1.4,1.4-2.9,1.4-4.3,0l-8.6-8.6C36.4,112.5,36.4,111.1,37.8,109.6 M84.5,84.6
          c1.5,1.4,1.5,2.9,0,4.3L71,102.4c-1.4,1.4-2.9,1.4-4.3,0L58,93.8c-1.4-1.5-1.4-2.9,0-4.3l13.5-13.5c1.4-1.4,2.8-1.4,4.3,0.1
          L84.5,84.6 M86.9,82.2l-8.6-8.6c-1.4-1.5-1.4-3,0.1-4.4l13.4-13.4c1.5-1.5,2.9-1.5,4.4,0l8.6,8.6c1.5,1.4,1.5,2.9,0,4.3
          L91.3,82.1C89.8,83.6,88.4,83.6,86.9,82.2 M125,44.1c1.5,1.4,1.5,2.9,0.1,4.3l-13.5,13.4c-1.5,1.5-3,1.5-4.4,0.1l-8.6-8.6
          c-1.4-1.5-1.4-3,0.1-4.4l13.6-13.5c1.4-1.4,2.8-1.3,4.2,0.1L125,44.1 M112.2,153.9c0.8-0.1,1.5,0.3,2.3,1.1l6.9,6.9
          c0.1,0.1,0.2,0.2,0.3,0.3l8.6,8.6c1.4,1.4,1.4,2.9,0,4.3l-13.5,13.5c-1.4,1.4-2.8,1.4-4.3,0l-8.6-8.6c-0.1-0.1-0.2-0.2-0.2-0.4
          l-0.1,0l-0.1,0l-6.8-6.8c-1.4-1.4-1.4-2.8,0-4.3l13.5-13.5C110.8,154.3,111.5,154,112.2,153.9z"/>
                </g>
              </g>
            </g>
          </svg>
          <span className="text-xl font-bold tracking-tight">
            {site.siteMetadata.title}
          </span>
          </h1>
        </Link>

      <button
        className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
        onClick={() => toggleExpansion(!isExpanded)}
      >
        <svg
          className="w-3 h-3 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      <nav
        className={`${
          isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
      >
        {[
          {
            route: `/`,
            title: `About`,
          },
          {
            route: `/`,
            title: `Contact`,
          },
        ].map((link) => (
          <Link
            className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6 font-bold"
            key={link.title}
            to={link.route}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      </div>
    </header >
  );
}

export default Header;
