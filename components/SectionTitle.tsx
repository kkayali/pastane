type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div
      className={
        center
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      {/* Eyebrow (küçük üst başlık) */}
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-muted)]">
          {eyebrow}
        </p>
      ) : null}

      {/* Ana başlık */}
      <h2 className="mt-3 font-title text-3xl leading-tight text-[var(--primary)] md:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>

      {/* Açıklama */}
      {description ? (
        <p className="mt-5 text-base leading-7 text-[var(--text-soft)] md:text-lg md:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}