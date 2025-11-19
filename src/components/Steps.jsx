import { ListChecks } from 'lucide-react'

export default function Steps() {
  const steps = [
    {
      title: 'Старт',
      text: 'Переходите в Telegram и нажимаете «Начать» — бот познакомит вас с форматом.'
    },
    {
      title: 'Диалог',
      text: 'Бот задаёт вопросы по очереди, помогает формулировать «я‑сообщения», напоминает о заботе.'
    },
    {
      title: 'Результат',
      text: 'Вы лучше понимаете друг друга, быстрее находите решения и остаётесь ближе.'
    },
  ]

  return (
    <section className="relative py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-300 items-center justify-center flex-shrink-0">
              <ListChecks />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Как это работает</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {steps.map((s) => (
                  <div key={s.title} className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <h3 className="text-white font-semibold">{s.title}</h3>
                    <p className="text-white/70 mt-1 text-sm">{s.text}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://t.me/your_couples_psych_bot"
                target="_blank"
                rel="noreferrer"
                className="inline-flex mt-6 px-5 py-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold"
              >
                Перейти в бота
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
