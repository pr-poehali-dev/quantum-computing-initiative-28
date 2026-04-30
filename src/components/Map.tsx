export function Map() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Как нас найти</p>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">г. Мурманск, ул. Шабалина 14</h2>
          <a
            href="https://yandex.ru/maps/?rtext=~68.958,33.082&rtt=auto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm tracking-wide hover:opacity-80 transition-opacity"
          >
            Проложить маршрут
          </a>
        </div>
        <div className="w-full h-[400px] rounded-lg overflow-hidden">
          <iframe
            src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=72214834079"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="Карта проезда"
          />
        </div>
      </div>
    </section>
  )
}