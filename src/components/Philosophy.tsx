import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "Бесплатная диагностика",
    description:
      "В 90% случаев стоимость ремонта озвучиваем по телефону, но возможны и скрытые повреждения, которые выявляются после полноценной диагностики.",
  },
  {
    title: "Качественные материалы",
    description:
      "Используем комплектующие от проверенных поставщиков. Дешёвые запчасти — это повторный ремонт через полгода. Мы так не работаем.",
  },
  {
    title: "Ремонт с гарантией",
    description:
      "На все работы и комплектующие даем гарантию 6 месяцев. Если что-то не так — устраним БЕСПЛАТНО.",
  },
  {
    title: "Уважение к вашему времени",
    description: "Большинство работ выполняем за 1–3 часа. Вы можете подождать прямо в мастерской или оставить авто и забрать когда удобно.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
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
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наш подход</p>
            <h2 className="text-6xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Ремонт с
              <br />
              <HighlightedText>гарантией</HighlightedText>
            </h2>

            <div className="relative hidden lg:block">
              <img
                src="https://cdn.poehali.dev/projects/f962568d-c5ff-4b77-995c-c770a5661c80/bucket/b2d32fa2-1662-4479-a7bf-703232e38b4e.jpeg"
                alt="Ремонт выхлопной трубы"
                className="opacity-90 relative z-10 w-auto rounded"
              />
            </div>
          </div>

          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              Выхлопная система — это лёгкие вашего автомобиля. Мы восстанавливаем её работу так, чтобы двигатель дышал свободно, а в салоне было тихо.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}