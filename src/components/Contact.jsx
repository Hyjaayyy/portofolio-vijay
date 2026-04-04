import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Pesan berhasil dikirim ✅");
          form.current.reset();
          setLoading(false);
        },
        () => {
          alert("Gagal mengirim pesan ❌");
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact" id="contact"> {/* ✅ FIX DI SINI */}
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="form">
        <input type="text" name="name" placeholder="Nama" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Pesan" required />

        <button type="submit" disabled={loading}>
          {loading ? "Mengirim..." : "Kirim Pesan"}
        </button>
      </form>
    </section>
  );
};

export default Contact;