import { cn } from "@/lib/utils"

type Props = { images: string[]; duration?: number; reverse?: boolean; alt?: string }

/** Fila infinita de imágenes. Se duplica el track para que el loop sea continuo. */
export default function Marquee({ images, duration = 22, reverse = false, alt = "Testimonio" }: Props) {
  const track = (hidden: boolean) => (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-6 pr-6">
      {images.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={hidden ? "" : `${alt} ${i + 1}`}
          loading="lazy"
          draggable={false}
          className="pointer-events-none h-[150px] w-auto select-none rounded-lg object-contain md:h-[200px]"
        />
      ))}
    </div>
  )

  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div
        className={cn(
          "flex w-max will-change-transform group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ animationDuration: `${duration}s` }}
      >
        {track(false)}
        {track(true)}
      </div>
    </div>
  )
}
