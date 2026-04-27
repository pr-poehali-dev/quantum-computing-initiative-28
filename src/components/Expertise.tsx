import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const expertiseAreas = [
  {
    title: "Замена и ремонт глушителей, резонаторов",
    description: "Работаем со всеми типами глушителей и резонаторов— от бюджетных до спортивных прямоточных систем.",
    icon: "Wrench",
  },
  {
    title: "Сварка выхлопных труб, замена гофры и фланцев",
    description: "Устраняем трещины, прогары и коррозию в любом месте выхлопной трассы. Перевариваем гофры и меняем фланцы. Меняем кронштейны и крепежи (резинки) выхлопной системы.",
    icon: "Flame",
  },
  {
    title: "Катализаторы",
    description: "Проверка катализатора на противодавление. Эндоскопия катализатора. Удаление катализатора. Установка пламегасителя или ремонтного катализатора.",
    icon: "ShieldCheck",
  },
  {
    title: "Замена гофры или фланцев",
    description: "Делаем нестандартные выхлопные системы по вашим параметрам: спортивные, тихие, спрятанные — любой конфигурации для любого авто.",
    icon: "Settings",
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши услуги</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Опыт</HighlightedText>, отточенный
            <br />
            практикой
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Более 6 лет ремонтируем выхлопные системы любой сложности. Каждый автомобиль получает индивидуальный подход и гарантию на работу.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon name={area.icon} fallback="Wrench" className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.25} />
                </div>
                <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}