import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { heroSlides } from "@/data/site"
import { cn } from "@/lib/utils"

export default function HeroCarousel() {
  const [ref, api] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4500, stopOnMouseEnter: true, stopOnInteraction: false }),
  ])
  const [index, setIndex] = useState(0)

  const onSelect = useCallback(() => api && setIndex(api.selectedScrollSnap()), [api])
  useEffect(() => {
    if (!api) return
    onSelect()
    api.on("select", onSelect)
    return () => { api.off("select", onSelect) }
  }, [api, onSelect])

  const navBtn =
    "absolute top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-brand-navy/70 text-white backdrop-blur transition hover:scale-105 hover:bg-brand-coral"

  return (
    <section className="relative h-[clamp(320px,45vw,560px)] w-full overflow-hidden bg-brand-navy">
      <div ref={ref} className="h-full overflow-hidden">
        <div className="flex h-full">
          {heroSlides.map((s, i) => (
            <div key={s.src} className="h-full min-w-0 flex-[0_0_100%]">
              <img
                src={s.src}
                alt={s.alt}
                fetchPriority={i === 0 ? "high" : "auto"}
                loading={i === 0 ? "eager" : "lazy"}
                className="size-full object-cover contrast-[1.04] saturate-[1.05]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Degradado sutil arriba y abajo */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-transparent via-20% to-brand-navy/60" />

      <button aria-label="Anterior" onClick={() => api?.scrollPrev()} className={cn(navBtn, "left-3 sm:left-6")}>
        <ChevronLeft className="size-5" />
      </button>
      <button aria-label="Siguiente" onClick={() => api?.scrollNext()} className={cn(navBtn, "right-3 sm:right-6")}>
        <ChevronRight className="size-5" />
      </button>

      <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
        {heroSlides.map((s, i) => (
          <button
            key={s.src}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "h-[5px] rounded transition-all shadow",
              i === index ? "w-[50px] bg-brand-coral" : "w-7 bg-white/55"
            )}
          />
        ))}
      </div>
    </section>
  )
}
