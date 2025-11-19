import { Heart, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] bg-rose-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[40rem] h-[40rem] bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 mb-6 backdrop-blur">
            <Sparkles size={16} />
            Поддержка отношений через диалог
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Телеграм-бот психолога для пар
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">
            Мягкие практики, упражнения и советы по улучшению общения и близости. Всё в удобном формате прямо в Telegram.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://t.me/your_couples_psych_bot"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold shadow-lg shadow-rose-500/30 transition"
            >
              <Heart className="fill-white/20" /> Начать сейчас
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition"
            >
              Как это работает
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left w-full">
            {[
              { label: 'Ежедневные практики', value: '5–10 минут' },
              { label: 'Форматы', value: 'диалоги, задания' },
              { label: 'Результаты', value: 'лучше слышать друг друга' },
              { label: 'Стоимость', value: 'доступно' },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur">
                <p className="text-white/60 text-sm">{item.label}</p>
                <p className="text-white font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
