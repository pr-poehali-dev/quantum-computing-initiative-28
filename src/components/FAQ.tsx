import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Сколько стоит ремонт выхлопной системы?",
    answer:
      "Стоимость зависит от объёма работ: сварка трещины от 1 000 руб., замена глушителя от 2500 руб., замена гофры от 3500, удаление катализатора от 6 000 руб. Точную цену называем после осмотра автомобиля — это бесплатно.",
  },
  {
    question: "Как долго делается ремонт?",
    answer:
      "Большинство работ занимает от 20 минут до 1 часа. Сложные работы — от 2 часов до полноценного рабочего дня.",
  },
  {
    question: "Даёте ли вы гарантию?",
    answer:
      "Да. На сварочные работы — 6 месяцев, на замену запчастей — 12 месяцев. Если в гарантийный срок появится дефект по нашей вине — устраним бесплатно.",
  },
  {
    question: "Нужна ли запись или можно приехать без неё?",
    answer:
      "Можно приехать без записи — примем в порядке живой очереди. Но лучше позвонить заранее, чтобы мы подготовили нужные запчасти и вы не ждали.",
  },
  {
    question: "Работаете ли вы с иномарками и отечественными авто?",
    answer:
      "Да, работаем со всеми марками и моделями: от Lada и ГАЗ до BMW, Mercedes, Toyota, Kia и других. Если нужна нестандартная деталь — изготовим под ваш автомобиль.",
  },
  {
    question: "Что делать, если появился шум или запах выхлопа в салоне?",
    answer:
      "Это тревожный сигнал — приезжайте как можно скорее. Запах выхлопных газов в салоне опасен для здоровья. Мы быстро найдём место утечки и устраним её.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}