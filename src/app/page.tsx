import type { CSSProperties, ReactNode } from "react";
import { Booking } from "@/components/Booking";
import { Faq } from "@/components/Faq";
import { Icon, Paw } from "@/components/Icon";
import { Pets } from "@/components/Pets";
import { RevealObserver } from "@/components/Reveal";
import { ADDRESS, FAQ, PHONE, PHONE_HREF, REVIEWS, SERVICES, TEAM, WHY } from "@/lib/data";

const WRAP = "mx-auto w-full max-w-[1240px] px-5";
const BTN =
  "inline-flex h-14 items-center justify-center gap-2 rounded-full px-7 font-extrabold transition-[transform,box-shadow,background-color] duration-[400ms] ease-soft hover:-translate-y-[3px]";
const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

function Head({ title, children }: { title: ReactNode; children?: ReactNode }) {
  return (
    <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-6">
      <h2 className="text-[clamp(34px,4.4vw,56px)] leading-[1.05] font-black tracking-[-0.03em]">{title}</h2>
      {children && <p className="max-w-[420px] text-lg text-soft">{children}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <RevealObserver />

      <header className="sticky top-0 z-30 bg-cream/90 backdrop-blur-md">
        <div className={`${WRAP} flex h-[76px] items-center justify-between gap-4`}>
          <a href="#top" className="flex items-center gap-2.5 text-2xl font-black tracking-[-0.02em]">
            <span className="grid size-9 place-items-center rounded-full bg-terra text-cream">
              <Paw className="size-5" />
            </span>
            Лапа
          </a>
          <nav aria-label="Разделы" className="hidden gap-7 font-bold text-soft md:flex">
            {[
              ["#services", "Услуги"],
              ["#team", "Врачи"],
              ["#reviews", "Отзывы"],
              ["#faq", "Вопросы"],
              ["#contacts", "Контакты"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="transition-colors hover:text-terra">
                {label}
              </a>
            ))}
          </nav>
          <a href="#booking" className={`${BTN} h-11 bg-terra px-5 text-[15px] text-white shadow-[0_10px_24px_-10px_#c94f2c99] sm:h-12`}>
            Записаться
          </a>
        </div>
      </header>

      <main id="top">
        {/* первый экран */}
        <section className="pt-8 pb-16 sm:pt-10 sm:pb-20">
          <div className={`${WRAP} grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]`}>
            <div className="reveal">
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[15px] font-bold shadow-[0_2px_0_#2b1d140d]">
                <span className="size-2.5 rounded-full bg-[#3bb273] shadow-[0_0_0_4px_#3bb27333]" aria-hidden="true" />
                Открыто сегодня до 22:00 · экстренно 24/7
              </p>
              <h1 className="my-6 text-[clamp(44px,6.4vw,88px)] leading-none font-black tracking-[-0.035em]">
                Здесь лечат{" "}
                <span className="relative whitespace-nowrap text-terra">
                  с любовью
                  <svg viewBox="0 0 200 20" preserveAspectRatio="none" className="absolute inset-x-0 -bottom-[0.12em] h-[0.3em] w-full" aria-hidden="true">
                    <path d="M2 14 C50 2 150 2 198 12" fill="none" stroke="#ffb48a" strokeWidth="7" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                и&nbsp;без&nbsp;страха
              </h1>
              <p className="mb-8 max-w-[520px] text-xl text-soft">
                Ветеринарная клиника для кошек, собак и всех, кто помещается в переноску. Спокойные врачи и отдельные зоны
                для котов и собак.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="#booking" className={`${BTN} bg-terra text-white shadow-[0_10px_24px_-10px_#c94f2c99] hover:bg-terra-dark`}>
                  Записаться на приём
                </a>
                <a href={PHONE_HREF} className={`${BTN} bg-white shadow-[inset_0_0_0_2px_#2b1d1415]`}>
                  <Icon name="phone" className="size-5" />
                  {PHONE}
                </a>
              </div>
              <ul className="mt-7 flex flex-wrap gap-2" aria-label="Кого лечим">
                {["Кошки", "Собаки", "Кролики", "Хорьки", "Птицы"].map((p) => (
                  <li key={p} className="flex items-center gap-1.5 rounded-full bg-sand px-3.5 py-1.5 text-[15px] font-bold">
                    <Paw className="size-3.5 text-terra" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal relative mx-auto aspect-square w-full max-w-[520px]" style={delay(0.15)}>
              <div className="blob absolute inset-[6%] rounded-[42%_58%_63%_37%/45%_40%_60%_55%] bg-peach" />
              <div className="blob-slow absolute inset-[14%_2%_4%_22%] rounded-[58%_42%_38%_62%/55%_62%_38%_45%] bg-mint opacity-90" />
              <Pets />
              <div className="bob absolute top-[14%] left-0 rounded-[22px] bg-white px-4 py-3 leading-tight font-extrabold shadow-[0_18px_40px_-20px_#2b1d1440]">
                4,9 ★<span className="block text-[13px] font-semibold text-soft">1 200 отзывов</span>
              </div>
              <div className="bob absolute right-0 bottom-[10%] rounded-[22px] bg-white px-4 py-3 leading-tight font-extrabold shadow-[0_18px_40px_-20px_#2b1d1440] [animation-delay:-2.5s]">
                Приём за 15 минут<span className="block text-[13px] font-semibold text-soft">без долгих очередей</span>
              </div>
            </div>
          </div>
        </section>

        {/* услуги */}
        <section id="services" className="scroll-mt-20 py-16 sm:py-20">
          <div className={WRAP}>
            <Head title="Чем поможем">Всё в одном месте: от первой прививки котёнка до сложной операции.</Head>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <article
                  key={s.title}
                  className={`reveal rounded-[32px] p-7 ${s.bg} hover:-translate-y-1.5 hover:-rotate-[0.6deg]`}
                  style={delay((i % 3) * 0.08)}
                >
                  <div className="pop mb-6 grid size-[62px] place-items-center rounded-[20px] bg-white/70 text-terra">
                    <Icon name={s.icon} />
                  </div>
                  <h3 className="mb-1.5 text-[23px] font-black tracking-[-0.02em]">{s.title}</h3>
                  <p className="mb-4 text-soft">{s.text}</p>
                  <p className="font-black">{s.price}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* почему мы */}
        <section className="py-16 sm:py-20">
          <div className={`${WRAP}`}>
            <div className="reveal grid gap-10 rounded-[44px] bg-white p-[clamp(28px,5vw,60px)] lg:grid-cols-[1fr_1.4fr]">
              <div>
                <h2 className="text-[clamp(32px,4vw,52px)] leading-[1.05] font-black tracking-[-0.03em]">
                  Чтобы визит к врачу не&nbsp;был стрессом
                </h2>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    ["12", "лет работаем"],
                    ["4,9", "средняя оценка"],
                  ].map(([n, t]) => (
                    <div key={t} className="rounded-[24px] bg-cream p-5">
                      <p className="text-4xl font-black text-terra">{n}</p>
                      <p className="font-bold text-soft">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
              <ul className="grid gap-6">
                {WHY.map((w, i) => (
                  <li key={w.title} className="reveal flex gap-5" style={delay(0.1 + i * 0.1)}>
                    <span className="pop grid size-14 shrink-0 place-items-center rounded-[18px] bg-mint text-[#2f7a57]">
                      <Icon name={w.icon} />
                    </span>
                    <div>
                      <h3 className="text-xl font-black">{w.title}</h3>
                      <p className="text-soft">{w.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* врачи */}
        <section id="team" className="scroll-mt-20 py-16 sm:py-20">
          <div className={WRAP}>
            <Head title="Наши врачи">Знают по имени каждого пациента — и его любимое лакомство.</Head>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TEAM.map((d, i) => (
                <article key={d.name} className="reveal rounded-[32px] bg-white p-7 text-center hover:-translate-y-1.5" style={delay(i * 0.08)}>
                  <div className="pop mx-auto mb-5 grid size-[120px] place-items-center rounded-full text-[42px] font-black text-white" style={{ background: d.color }}>
                    {d.initials}
                  </div>
                  <h3 className="text-[22px] font-black">{d.name}</h3>
                  <p className="font-bold text-terra">{d.role}</p>
                  <p className="text-sm text-soft">{d.years}</p>
                  <p className="mt-3 text-soft">{d.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* отзывы */}
        <section id="reviews" className="scroll-mt-20 py-16 sm:py-20">
          <div className={WRAP}>
            <Head title="Нам доверяют хвосты">Отзывы-примеры для концепта.</Head>
          </div>
          <div className="marquee-wrap overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <ul className="marquee flex w-max gap-4" aria-label="Отзывы">
              {[...REVIEWS, ...REVIEWS].map((r, i) => (
                <li key={i} aria-hidden={i >= REVIEWS.length} className="w-[320px] rounded-[28px] bg-white p-6 sm:w-[360px]">
                  <p className="mb-1 text-terra" aria-label="5 из 5">★★★★★</p>
                  <p className="mb-4">«{r.text}»</p>
                  <p className="font-bold text-soft">{r.who}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* вопросы */}
        <section id="faq" className="scroll-mt-20 py-16 sm:py-20">
          <div className={`${WRAP} grid gap-10 lg:grid-cols-[1fr_1.3fr]`}>
            <div className="reveal">
              <h2 className="text-[clamp(34px,4.4vw,56px)] leading-[1.05] font-black tracking-[-0.03em]">Частые вопросы</h2>
              <p className="mt-4 max-w-sm text-lg text-soft">Не нашли ответ — спросите по телефону, подскажем.</p>
            </div>
            <Faq items={FAQ} />
          </div>
        </section>

        {/* запись и контакты */}
        <section id="booking" className="scroll-mt-20 py-16 sm:py-20">
          <div className={WRAP}>
            <div className="reveal grid gap-10 rounded-[44px] bg-brown p-[clamp(28px,5vw,64px)] text-cream lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-[clamp(36px,4.6vw,60px)] leading-none font-black tracking-[-0.03em]">
                  Запишитесь — перезвоним за&nbsp;10&nbsp;минут
                </h2>
                <p className="text-latte">Ежедневно 8:00–22:00. Экстренный врач — круглосуточно, без записи.</p>
              </div>
              <Booking />
            </div>
          </div>
        </section>

        <section id="contacts" className="scroll-mt-20 pb-16 sm:pb-20">
          <div className={`${WRAP} grid gap-4 lg:grid-cols-[1fr_1.5fr]`}>
            <div className="reveal flex flex-col justify-between gap-6 rounded-[32px] bg-sand p-8">
              <h2 className="text-[clamp(30px,3.4vw,44px)] leading-[1.05] font-black tracking-[-0.03em]">Как нас найти</h2>
              <ul className="grid gap-4 text-lg">
                <li className="flex items-center gap-3"><Icon name="pin" className="size-6 text-terra" />{ADDRESS}</li>
                <li className="flex items-center gap-3"><Icon name="clock" className="size-6 text-terra" />Ежедневно 8:00–22:00, экстренно 24/7</li>
                <li className="flex items-center gap-3">
                  <Icon name="phone" className="size-6 text-terra" />
                  <a href={PHONE_HREF} className="font-bold underline-offset-4 hover:underline">{PHONE}</a>
                </li>
              </ul>
              <p className="text-sm text-soft">Парковка у входа, пандус для колясок и тяжёлых переносок.</p>
            </div>
            {/* схема проезда — нарисованная, без внешних карт */}
            <div className="reveal relative min-h-[300px] overflow-hidden rounded-[32px] bg-mint" style={delay(0.1)}>
              <svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" role="img" aria-label="Схема проезда к клинике">
                <rect width="600" height="340" fill="#d4ecdf" />
                <path d="M-20 250 C120 230 200 120 320 140 S520 90 640 60" stroke="#fff" strokeWidth="26" fill="none" />
                <path d="M120 -20 L180 360" stroke="#fff" strokeWidth="18" />
                <path d="M420 -20 L380 360" stroke="#fff" strokeWidth="18" />
                <path d="M-20 70 L640 120" stroke="#fff" strokeWidth="12" />
                <g fill="#bfe0cd">
                  <rect x="200" y="160" width="80" height="60" rx="14" />
                  <rect x="440" y="150" width="110" height="70" rx="14" />
                  <rect x="20" y="110" width="80" height="90" rx="14" />
                  <rect x="210" y="250" width="140" height="70" rx="14" />
                  <circle cx="455" cy="285" r="36" />
                </g>
                <text x="438" y="290" fill="#2f7a57" fontSize="14" fontWeight="800" fontFamily="var(--font-nunito)">Парк</text>
              </svg>
              <div className="bob absolute top-[30%] left-[52%] -translate-x-1/2 -translate-y-full">
                <div className="grid size-14 place-items-center rounded-full rounded-br-none bg-terra text-cream shadow-[0_14px_30px_-12px_#c94f2c] rotate-45">
                  <Paw className="size-7 -rotate-45" />
                </div>
              </div>
              <p className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-sm font-bold">Схема, а не настоящая карта</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${WRAP} flex flex-col gap-3 border-t border-brown/10 py-9 text-[15px] text-soft sm:flex-row sm:items-center sm:justify-between`}>
        <p className="flex items-center gap-2 font-bold text-brown">
          <Paw className="size-4 text-terra" /> Лапа — ветеринарная клиника
        </p>
        <p>Концепт для портфолио: клиника, врачи и отзывы вымышленные.</p>
        <a href="#top" className="hover:text-terra">Наверх ↑</a>
      </footer>
    </>
  );
}
