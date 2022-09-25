

const Section = ({ title, headerButton, body }) => (
  <section className="section">
    <div className="section__buttons">
      <h2 className="section__header">{title}
        {headerButton}
      </h2>
    </div>
    {body}
  </section>
);

export default Section;

