interface SectionTitleProps {
  title: string;
  subtitle: string;
  description?: string;
}

const SectionTitle = ({ title, subtitle, description }: SectionTitleProps) => (
  <div className="section-title" data-aos="fade-up">
    <p className="section-title__eyebrow">{subtitle}</p>
    <h2 className="section-title__heading">{title}</h2>
    {description ? <p className="section-title__text">{description}</p> : null}
  </div>
);

export default SectionTitle;
