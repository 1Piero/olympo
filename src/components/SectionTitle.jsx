// SectionTitle

export default function SectionTitle({ eyebrow, title, description, center = true }) {
  return (
    <div className={`mb-14 ${center ? 'text-center mx-auto max-w-2xl' : ''}`}>
      {eyebrow && (
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-olympo-gold">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl text-olympo-cream md:text-4xl">{title}</h2>
      <div className={`gold-divider my-5 ${center ? 'mx-auto' : ''}`} />
      {description && <p className="text-olympo-gray leading-relaxed">{description}</p>}
    </div>
  )
}
