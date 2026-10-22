import { Link } from "react-router"
import { MessageCircle, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Course } from "@/data/site"
import { cn } from "@/lib/utils"

const tones = {
  red: "bg-destructive text-white",
  green: "bg-emerald-600 text-white",
  navy: "bg-brand-navy text-white",
}

export default function CourseCard({ course: c }: { course: Course }) {
  const isWhatsApp = !c.price

  return (
    <Card className="h-full gap-0 overflow-hidden py-0 shadow-sm">
      <Link to={`/programa/${c.slug}`} className="relative flex h-[260px] items-center justify-center overflow-hidden bg-slate-100/80 p-2">
        <img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-contain" />
        <Badge className={cn("absolute left-3 top-3 rounded-full", tones[c.badgeTone])}>{c.badge}</Badge>
      </Link>

      <CardContent className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-sm font-semibold text-brand-slate">{c.category}</span>
        <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-semibold leading-snug">
          <Link to={`/programa/${c.slug}`} className="hover:text-brand-coral">{c.title}</Link>
        </h3>
        <div className="mt-auto flex items-start justify-between gap-2 pt-2 text-xs text-muted-foreground">
          {c.meta.map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-1"><Icon className="size-3.5" />{text}</span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="justify-between p-5 pt-0">
        {isWhatsApp ? (
          <span className="text-sm font-semibold text-emerald-600">Cupos limitados</span>
        ) : (
          <span className="text-lg font-bold">{c.price}</span>
        )}
        <Button asChild size="sm">
          <Link to={`/programa/${c.slug}`}>
            {isWhatsApp ? <><MessageCircle /> Ver detalles</> : <><ShoppingCart /> Ver programa</>}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
