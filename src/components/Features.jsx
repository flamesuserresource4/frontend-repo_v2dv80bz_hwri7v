import { MessageCircleHeart, HandHeart, ShieldCheck, Sun, Moon, Coffee } from 'lucide-react'

const features = [
  {
    icon: MessageCircleHeart,
    title: 'Улучшает общение',
    desc: 'Пошаговые диалоги и упражнения, чтобы говорить о важном спокойно и понятно.'
  },
  {
    icon: HandHeart,
    title: 'Поддержка специалиста',
    desc: 'Методика основана на практиках семейной терапии и эмпатичного общения.'
  },
  {
    icon: ShieldCheck,
    title: 'Безопасно и приватно',
    desc: 'Все разговоры только между вами и ботом. Мы не спрашиваем лишнего.'
  },
  {
    icon: Sun,
    title: 'Лёгкий старт',
    desc: '5–10 минут в день — чтобы влиять на атмосферу отношений.'
  },
  {
    icon: Moon,
    title: 'Удобный ритм',
    desc: 'Напоминания и мягкие чек‑ин вопросы в комфортное время.'
  },
  {
    icon: Coffee,
    title: 'Практично',
    desc: 'Реальные задания: договориться, поблагодарить, обсудить сложную тему.'
  },
]

export default function Features() {
  return (
    <section id="how" className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Что умеет бот</h2>
        <p className="text-white/70 text-center mt-3 max-w-2xl mx-auto">
          Под капотом — последовательности, которые помогают слышать друг друга и выражать потребности без обвинений.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
              <Icon className="text-rose-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
