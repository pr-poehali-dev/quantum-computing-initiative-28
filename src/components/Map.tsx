export function Map() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Как нас найти</p>
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-8">г. Мурманск, ул. Шабалина 14</h2>
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