type ScriptTextProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ScriptText({
  children,
  className = "",
}: ScriptTextProps) {
  return (
    <span
      className={`
        font-script
        text-[var(--primary)]
        leading-[1.1]
        tracking-[0.02em]
        ${className}
      `}
    >
      {children}
    </span>
  );
}