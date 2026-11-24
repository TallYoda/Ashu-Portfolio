import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("from_name") ?? "").trim();
    const email = String(data.get("from_email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setError("Please fill in your name, email, and message.");
      return;
    }

    const serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_gjf5jdo";
    const templateId =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_o6nobdj";
    const publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "EMgUd-RIXA5PV2Xvl";

    setStatus("sending");
    setError("");

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message,
          reply_to: email,
        },
        { publicKey },
      );
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("The message could not be sent. Please try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <label>
        Name
        <input
          type="text"
          name="from_name"
          autoComplete="name"
          required
          disabled={status === "sending"}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="from_email"
          autoComplete="email"
          required
          disabled={status === "sending"}
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          rows={6}
          required
          disabled={status === "sending"}
        />
      </label>
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "sent" && (
        <p className="contact-note" role="status">
          Thank you. Your message has been sent.
        </p>
      )}
      {status === "error" && error && (
        <p className="contact-note error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
