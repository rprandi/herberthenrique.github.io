import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ContactPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={"Contact page of " + site.siteMetadata.description}
        />
      </Helmet>
      <div className="hero-header">
        <div className="headline">get in touch</div>
        <div className="primary-content">
          <p>
            you can find on{" "}
            <a
              href="https://twitter.com/herberth3nrique"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              twitter
            </a>
            ,{" "}
            <a
              href="https://github.com/herberthenrique"
              rel="noopener noreferrer"
              target="_blank"
            >
              github
            </a>{" "}
            or{" "}
            <a
              href="https://linkedin.com/in/herberthenrique"
              rel="noopener noreferrer"
              target="_blank"
            >
              linkedin
            </a>
          </p>
          or just send me a mail to contact@herberthenrique 📝
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
