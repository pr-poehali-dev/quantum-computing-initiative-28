import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "Бесплатная диагностика",
    description:
      "Сначала смотрим и объясняем — что сломалось, почему и сколько стоит. Никаких скрытых работ.",
  },
  {
    title: "Качественные материалы",
    description:
      "Используем сертифицированные трубы, хомуты и глушители от проверенных поставщиков. Дешёвые запчасти — это повторный ремонт через полгода. Мы так не работаем.",
  },
  {
    title: "Работа без переделок",
    description:
      "Делаем правильно с первого раза. Сварка держит, соединения не текут, шумы не возвращаются. Если что-то не так — устраним бесплатно.",
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
                src="https://cdn.poehali.dev/projects/f962568d-c5ff-4b77-995c-c770a5661c80/files/62d50cfd-a529-4679-a269-41708f9b9034.jpg"
                alt="Сварка выхлопной трубы"
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