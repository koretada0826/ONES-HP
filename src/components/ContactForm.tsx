"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      company: (data.get("company") as string) || "",
      name: (data.get("name") as string) || "",
      email: (data.get("email") as string) || "",
      phone: (data.get("phone") as string) || "",
      message: (data.get("message") as string) || "",
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setErrorMsg("お名前・メールアドレス・お問い合わせ内容は必須です。");
      return;
    }

    setStatus("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "network_error");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "送信に失敗しました。時間をおいて再度お試しいただくか、直接ご連絡ください。"
      );
    }
  };

  if (status === "success") {
    return (
      <div className="border border-white/20 bg-white/[0.03] p-10 text-center backdrop-blur md:p-14">
        <p className="font-display text-[10px] uppercase tracking-[0.42em] text-[#c4897a]">
          THANK YOU
        </p>
        <h3 className="mt-4 text-2xl font-black leading-[1.3] text-white md:text-3xl">
          お問い合わせを受け付けました。
        </h3>
        <p className="mt-6 text-[13px] leading-[2] text-white/70">
          担当より2営業日以内にご返信いたします。
          <br />
          お急ぎの場合は LINE またはお電話にてご連絡ください。
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 inline-flex h-11 items-center gap-3 border border-white/30 px-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-white transition hover:border-white hover:bg-white hover:text-ink-950"
        >
          もう一度送信する
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="会社名・屋号" name="company" placeholder="株式会社 ○○" />
        <Field label="お名前" name="name" required placeholder="山田 太郎" />
        <Field
          label="メールアドレス"
          name="email"
          type="email"
          required
          placeholder="example@ones-mg.com"
        />
        <Field label="お電話番号" name="phone" type="tel" placeholder="090-0000-0000" />
      </div>
      <div>
        <label className="mb-2 block font-display text-[10px] uppercase tracking-[0.32em] text-white/60">
          お問い合わせ内容 <span className="text-[#c4897a]">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={6}
          maxLength={4000}
          placeholder="ご相談内容・ご希望のサービス等をご記入ください。"
          className="w-full resize-none border border-white/15 bg-white/[0.02] px-4 py-3 text-[14px] text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none focus:ring-0"
        />
      </div>

      {errorMsg && (
        <p className="text-[12px] text-[#e39481]" role="alert">
          {errorMsg}
        </p>
      )}

      <div className="flex flex-col items-center gap-4 pt-4 md:flex-row md:justify-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group relative inline-flex h-14 items-center gap-4 overflow-hidden border border-white bg-white px-10 text-[12px] font-semibold uppercase tracking-[0.32em] text-ink-950 transition disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span
            className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-[#c4897a] transition-transform duration-500 ease-out group-hover:scale-x-100"
            aria-hidden
          />
          <span className="relative z-10 transition-colors group-hover:text-white">
            {status === "submitting" ? "送信中..." : "この内容で送信する"}
          </span>
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
            →
          </span>
        </button>
        <p className="text-[10px] uppercase tracking-[0.32em] text-white/40">
          原則2営業日以内にご返信します
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-display text-[10px] uppercase tracking-[0.32em] text-white/60">
        {label}
        {required && <span className="text-[#c4897a]"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full border border-white/15 bg-white/[0.02] px-4 py-3 text-[14px] text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none focus:ring-0"
      />
    </div>
  );
}
