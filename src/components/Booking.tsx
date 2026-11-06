"use client";

import { useId, useState, type FormEvent } from "react";

const PETS = ["Кошка", "Собака", "Другое"] as const;

/* Белорусский номер: +375 XX XXX-XX-XX. Принимаем и «80 29 …», и просто «29 …». */
function toBelarusDigits(raw: string) {
  let d = raw.replace(/\D/g, "");
  if (d.startsWith("80")) d = "375" + d.slice(2);
  else if (!d.startsWith("375") && d.length > 0 && !"375".startsWith(d)) d = "375" + d;
  return d.slice(0, 12);
}
function formatBelarus(raw: string) {
  const d = toBelarusDigits(raw);
  if (!d) return "";
  const rest = d.slice(3);
  let out = "+" + d.slice(0, 3);
  if (rest.length) out += " " + rest.slice(0, 2);
  if (rest.length > 2) out += " " + rest.slice(2, 5);
  if (rest.length > 5) out += "-" + rest.slice(5, 7);
  if (rest.length > 7) out += "-" + rest.slice(7, 9);
  return out;
}

export function Booking() {
  const [pet, setPet] = useState<(typeof PETS)[number]>("Кошка");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const uid = useId();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const next: typeof errors = {};
    if (name.length < 2) next.name = "Напишите, как к вам обращаться";
    if (toBelarusDigits(phone).length !== 12) next.phone = "Проверьте номер: например, +375 29 123-45-67";
    setErrors(next);
    if (Object.keys(next).length) {
      e.currentTarget.querySelector<HTMLInputElement>(next.name ? "[name=name]" : "[name=phone]")?.focus();
      return;
    }
    setState("sending");
    window.setTimeout(() => setState("done"), 900);
  }

  if (state === "done") {
    return (
      <div role="status" className="flex flex-col justify-center gap-3">
        <p className="text-3xl font-black">Готово! Перезвоним через 10 минут.</p>
        <p className="text-latte">
          Это концепт для портфолио — заявка никуда не ушла. Но {pet === "Кошка" ? "котик" : pet === "Собака" ? "пёсик" : "питомец"} был бы
          в надёжных руках.
        </p>
        <button type="button" onClick={() => setState("idle")} className="self-start font-bold text-peach underline underline-offset-4">
          Заполнить ещё раз
        </button>
      </div>
    );
  }

  const field =
    "h-14 w-full rounded-[18px] border-2 border-transparent bg-cream px-5 text-base text-brown placeholder:text-soft/70 transition-colors focus:border-peach";

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      <div>
        <p id={`${uid}-pet`} className="mb-2 text-sm font-bold text-latte">
          Кто пациент?
        </p>
        <div className="grid grid-cols-3 gap-2" role="group" aria-labelledby={`${uid}-pet`}>
          {PETS.map((p) => (
            <button
              key={p}
              type="button"
              aria-pressed={pet === p}
              onClick={() => setPet(p)}
              className={`h-13 rounded-[18px] border-2 font-extrabold transition-[background-color,border-color,color,transform] duration-300 active:scale-95 ${
                pet === p ? "border-peach bg-peach text-brown" : "border-cream/25 text-cream hover:border-cream/60"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor={`${uid}-name`} className="mb-2 block text-sm font-bold text-latte">
          Ваше имя
        </label>
        <input id={`${uid}-name`} name="name" autoComplete="given-name" placeholder="Анна" className={field}
          aria-invalid={!!errors.name} aria-describedby={errors.name ? `${uid}-name-err` : undefined} />
        {errors.name && <p id={`${uid}-name-err`} className="mt-1.5 text-sm font-bold text-peach">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor={`${uid}-phone`} className="mb-2 block text-sm font-bold text-latte">
          Телефон
        </label>
        <input id={`${uid}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+375 29 123-45-67" className={field}
          value={phone}
          onChange={(e) => {
            setPhone(formatBelarus(e.target.value));
            if (errors.phone) setErrors((er) => ({ ...er, phone: undefined }));
          }}
          onFocus={() => !phone && setPhone("+375 ")}
          onBlur={() => phone.replace(/\D/g, "") === "375" && setPhone("")}
          aria-invalid={!!errors.phone} aria-describedby={errors.phone ? `${uid}-phone-err` : undefined} />
        {errors.phone && <p id={`${uid}-phone-err`} className="mt-1.5 text-sm font-bold text-peach">{errors.phone}</p>}
      </div>
      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-1 h-14 rounded-full bg-peach font-extrabold text-brown transition-transform duration-300 ease-soft hover:-translate-y-0.5 active:scale-[0.97] disabled:cursor-wait disabled:opacity-80"
      >
        {state === "sending" ? "Записываем…" : "Записаться"}
      </button>
      <p className="text-xs text-latte/80">Демо-форма: данные никуда не отправляются и не сохраняются.</p>
    </form>
  );
}
