import { SectionClass, SectionTitle } from "./styled"

const Section = ({ title, headerButton, body }) => (
  <SectionClass>
      <SectionTitle>
      {title}
        {headerButton}
      </SectionTitle>
    {body}
  </SectionClass>
);

export default Section;

