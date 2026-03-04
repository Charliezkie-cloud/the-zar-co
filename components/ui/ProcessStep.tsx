type props = {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
};

export default function ProcessStep({ step, title, description, isLast }: props) {
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center gap-0">
        <div className="w-12 h-12 rounded-2xl bg-primary text-white font-heading font-bold text-lg flex items-center justify-center shrink-0 shadow-md shadow-primary/25">
          {step}
        </div>
      </div>
      {!isLast && (<div className="w-px flex-1 min-h-12 bg-gradient-to-b from-primary/30 to-transparent mt-2" />)}

      <div className="pb-10">
        <h3 className="font-heading font-bold text-xl text-ink mb-2">{title}</h3>
        <p className="text-muted text-base leading-relaxed max-w-lg">{description}</p>
      </div>
    </div>
  )
}