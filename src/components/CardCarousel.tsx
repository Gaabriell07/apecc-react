import { Children, type ReactNode } from "react"
import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  /** Clases de `basis-*` por breakpoint. Por defecto: 1.2 / 2 / 3 por vista. */
  itemClassName?: string
}

/** Carrusel responsive reutilizable (reemplaza los Swiper del sitio Astro). */
export default function CardCarousel({
  children,
  itemClassName = "basis-[85%] sm:basis-1/2 lg:basis-1/3",
}: Props) {
  return (
    <Carousel opts={{ align: "start", slidesToScroll: "auto" }} className="px-1">
      <CarouselContent>
        {Children.map(children, (child) => (
          <CarouselItem className={cn(itemClassName, "[&>*]:h-full")}>{child}</CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  )
}
