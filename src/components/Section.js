import PropTypes from "prop-types";

const Section = ({ children }) => <section> {children}</section>;
Section.propTypes = { children: PropTypes.node };
export default Section;
