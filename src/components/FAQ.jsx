export default function FAQ() {
  const qa = [
    {
      q: 'Нужно ли подключать партнёра?',
      a: 'Желательно проходить практики вдвоём, но многие упражнения полезны и соло — чтобы потом прийти с готовыми словами.'
    },
    {
      q: 'Это заменяет терапию?',
      a: 'Нет. Бот — это поддержка и профилактика. При серьёзных кризисах лучше работать с терапевтом.'
    },
    {
      q: 'Сколько стоит?',
      a: 'Базовые практики — бесплатно. Расширенные модули — доступная подписка.'
    },
    {
      q: 'Насколько это приватно?',
      a: 'Мы не собираем личные данные без необходимости. Вся переписка остаётся в рамках вашего Telegram.'
    }
  ]

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center">Вопросы и ответы</h2>
        <div className="mt-8 grid gap-4">
          {qa.map((item) => (
            <details key={item.q} className="group bg-white/5 border border-white/10 rounded-2xl p-4">
              <summary className="cursor-pointer list-none text-white font-semibold flex items-center justify-between">
                {item.q}
                <span className="text-white/60 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-2 text-white/70">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://t.me/your_couples_psych_bot"
            target="_blank"
            rel="noreferrer"
            className="inline-flex px-6 py-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold"
          >
            Открыть бота в Telegram
          </a>
        </div>
      </div>
    </section>
  )
}
