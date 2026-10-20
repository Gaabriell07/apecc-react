import { ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Book } from "@/data/site"
import { cn } from "@/lib/utils"

type Props = { book: Book; href: string; newTab?: boolean }

export default function BookCard({ book: b, href, newTab }: Props) {
  return (
    <Card className="h-full gap-0 overflow-hidden border-brand-navy/5 py-0 shadow-sm">
      <div className="relative flex min-h-[280px] items-center justify-center bg-brand-cream p-4">
        <img src={b.image} alt={b.title} loading="lazy" className="max-h-60 rounded object-contain shadow-sm" />
        {b.badge && (
          <Badge className={cn("absolute left-3 top-3 text-white", b.badge.tone === "coral" ? "bg-brand-coral" : "bg-brand-navy")}>
            {b.badge.text}
          </Badge>
        )}
      </div>
      <CardContent className="flex flex-1 flex-col gap-2 p-5">
        <Badge variant="secondary" className="self-start">{b.author}</Badge>
        <h3 className="font-bold leading-snug">{b.title}</h3>
        <p className="flex-1 text-sm text-brand-slate">{b.description}</p>
        <div className="mt-2 flex items-center justify-between border-t border-brand-cream pt-3">
          <span className="text-2xl font-bold">{b.price}</span>
          <Button asChild size="sm" className="rounded-full bg-brand-coral px-4 hover:bg-brand-coral/90">
            <a href={href} {...(newTab ? { target: "_blank", rel: "noreferrer" } : {})}>
              <ShoppingCart /> Comprar
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
