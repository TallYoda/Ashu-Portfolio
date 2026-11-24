import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const title = String(data.get("title") ?? "").trim();
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!title || !name || !email || !message) {
      setStatus("error");
      setError("Please fill in the title, name, email, and message.");
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
          title,
          name,
          email,
          message,
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
        Title
        <input
          type="text"
          name="title"
          autoComplete="off"
          required
          disabled={status === "sending"}
        />
      </label>
      <label>
        Name
        <input
          type="text"
          name="name"
          autoComplete="name"
          required
          disabled={status === "sending"}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
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
