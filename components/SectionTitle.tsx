import "./SectionTitle.css";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionTitle({ eyebrow, title, description, light = false }: Props) {
  return (
    <div className={`section-heading sarilar-section-title${light ? " section-heading--light sarilar-section-title--light" : ""}`}>
      <span className={`eyebrow sarilar-section-title__eyebrow${light ? " eyebrow--light" : ""}`}>
        {eyebrow}
      </span>
      <h2 className="section-title sarilar-section-title__heading">{title}</h2>
      {description && <p className="sarilar-section-title__description">{description}</p>}
    </div>
  );
}
