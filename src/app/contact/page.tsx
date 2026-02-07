"use client";
import { useForm, ValidationError } from "@formspree/react";
import { FaEnvelope, FaPhone, FaArrowRightLong, FaPaperclip, FaWhatsapp, FaTelegram, FaDiscord } from "react-icons/fa6";
import style from "./contact.module.scss";
import form from "@styles/modules/form.module.scss";
import button from "@styles/modules/Button.module.scss";

function ContactForm() {
  const [state, handleSubmit] = useForm("mlgblggp");

  if (state.succeeded) {
    return <p>♡ Message Sent! ♡</p>;
  }
  return (
    <form onSubmit={handleSubmit} className={form.form}>
      <fieldset className={form.field}>
        <input placeholder="your name (required)" className={form.input} type="name" id="name" name="name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input
          placeholder="your email address"
          className={form.input}
          type="email"
          id="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="<3 hey, what's up? Give me a message, suggestion or feedback here. If you give a return e-mail address I'll get back you asap!"
          required
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button disabled={state.submitting} className={button.vamp} role="button">
          <span className={button.text}>Send Message</span>
          <span className={button["vamp-background"]}></span>
          <span className={button["vamp-border"]}></span>

          {/* <!-- mask-border fallback --> */}
          <svg style={{ position: "absolute", width: "0", height: "0" }}>
            <filter id="remove-black-vamp" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0
                 0 1 0 0 0
                 0 0 1 0 0
                 -1 -1 -1 0 1"
                result="black-pixels"
              ></feColorMatrix>
              <feComposite in="SourceGraphic" in2="black-pixels" operator="out"></feComposite>
            </filter>
          </svg>
        </button>
      </fieldset>
    </form>
  );
}

const ContactPage = () => {
  return (
    <section className={style.container}>
      <div>
        <div style={{ gap: "1rem", display: "flex", flexDirection: "column" }}>
          <button
            aria-label="Book a Video Call"
            onClick={() => {
              window.location.href = "https://calendar.app.google/psZPwELYuBV2JgvC8";
            }}
            className={button.glass}
          >
            <FaPhone size={24} className={button.icon} />
            <div className={button["glass-text"]}>
              <p className={button.title}>Book A Video Call</p>
              <p className={button.info}>Schedule via Google Calendar</p>
            </div>
            <FaArrowRightLong className={button.arrow} size={20} />
          </button>
          <button
            aria-label="Send an email"
            onClick={() => {
              window.location.href = "mailto:yunghigue@gmail.com";
            }}
            className={button.glass}
          >
            <FaEnvelope size={24} className={button.icon} />
            <div className={button["glass-text"]}>
              <p className={button.title}>Email me</p>
              <p className={button.info}>yunghigue@gmail.com</p>
            </div>
            <FaArrowRightLong className={button.arrow} size={20} />
          </button>
          <button
            aria-label="Message on Whatsapp"
            onClick={() => {
              window.location.href = "https://wa.me/18764135825";
            }}
            className={button.glass}
          >
            <FaWhatsapp size={24} className={button.icon} />
            <div className={button["glass-text"]}>
              <p className={button.title}>Whatsapp me</p>
              <p className={button.info}>+1-876-413-5825</p>
            </div>
            <FaArrowRightLong className={button.arrow} size={20} />
          </button>
          <button
            aria-label="Message on Telegram"
            onClick={() => {
              window.location.href = "https://t.me/medwinter";
            }}
            className={button.glass}
          >
            <FaTelegram size={24} className={button.icon} />
            <div className={button["glass-text"]}>
              <p className={button.title}>shoot me a Telegram</p>
              <p className={button.info}>@YungHigue</p>
            </div>
            <FaArrowRightLong className={button.arrow} size={20} />
          </button>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
