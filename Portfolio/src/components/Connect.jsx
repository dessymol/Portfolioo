import React, { useState } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaUser,
  FaRegCommentDots,
} from "react-icons/fa";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^[A-Za-z\s.'-]{2,50}$/.test(form.name)) {
  setError("Please enter a valid name");
  return;
}

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Enter valid email address");
      return;
    }

   

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        form
      );

      setSuccess(res.data.message);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSuccess("");
      }, 3000);

    } catch (err) {
      setError(
        err.response?.data?.errors?.join(", ") ||
        "Something went wrong"
      );
       setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <section style={styles.section} id="connect">
      <div style={styles.container}>
        <div style={styles.infoCard}>
          <h2 style={styles.infoHeading}>Contact Info</h2>

          <div style={styles.infoRow}>
            <FaEnvelope style={styles.infoIcon} />
            <div>
              <h3 style={styles.infoTitle}>Email</h3>
              <a href="mailto:dessymoldixon@gmail.com" style={styles.infoLink}>
                dessymoldixon@gmail.com
              </a>
            </div>
          </div>

          <div style={styles.infoRow}>
            <FaLinkedin style={styles.infoIcon} />
            <div>
              <h3 style={styles.infoTitle}>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/dessymol-dixon-a56141263"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.infoLink}
              >
                linkedin.com/in/dessymol-dixon-a56141263
              </a>
            </div>
          </div>

          <div style={styles.infoRow}>
            <FaGithub style={styles.infoIcon} />
            <div>
              <h3 style={styles.infoTitle}>GitHub</h3>
              <a href="https://github.com/dessymol" target="_blank" rel="noopener noreferrer" style={styles.infoLink}>
                github.com/dessymol
              </a>
            </div>
          </div>

          <div style={styles.infoRow}>
            <FaMapMarkerAlt style={styles.infoIcon} />
            <div>
              <h3 style={styles.infoTitle}>Location</h3>
              <p style={styles.infoText}>Kerala, India</p>
            </div>
          </div>

          <div style={styles.infoRow}>
            <FaPhoneAlt style={styles.infoIcon} />
            <div>
              <h3 style={styles.infoTitle}>Phone</h3>
              <p style={styles.infoText}>+91 8714585458</p>
            </div>
          </div>
        </div>

        <div style={styles.formCard}>
          <h2 style={styles.heading}>Get In Touch</h2>

          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputWrapper}>
              <FaUser style={styles.fieldIcon} />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.inputWrapper}>
              <FaEnvelope style={styles.fieldIcon} />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.textareaWrapper}>
              <FaRegCommentDots style={styles.fieldIconTop} />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                style={styles.textarea}
              />
            </div>

            <button type="submit" style={styles.button}>
              <FaPaperPlane style={styles.buttonIcon} />
              Send Message
            </button>

            {error && <p style={styles.error}>{error}</p>}
            {success && <p style={styles.success}>{success}</p>}
          </form>
        </div>
      </div>
    </section>

  );
};

const styles = {
  section: {
    padding: "72px 16px",
    backgroundColor: "#F8FAFC",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
    width: "100%",
    maxWidth: "500px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#1E293B",
  },
  infoHeading: {
    marginBottom: "20px",
    color: "#1E293B",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "0 12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #CBD5E1",
    backgroundColor: "#fff",
  },
  input: {
    padding: "12px 0",
    border: "none",
    outline: "none",
    width: "100%",
    fontSize: "14px",
  },
  textareaWrapper: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #CBD5E1",
    backgroundColor: "#fff",
  },
  textarea: {
    border: "none",
    outline: "none",
    width: "100%",
    resize: "vertical",
    minHeight: "100px",
    fontSize: "14px",
  },
  fieldIcon: {
    color: "#64748B",
    fontSize: "14px",
    flexShrink: 0,
  },
  fieldIconTop: {
    color: "#64748B",
    fontSize: "14px",
    marginTop: "4px",
    flexShrink: 0,
  },
  button: {
    padding: "12px 14px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#2563EB",
    color: "#fff",
    fontWeight: "600",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
  buttonIcon: {
    fontSize: "14px",
  },
  error: {
    marginTop: "15px",
    color: "#DC2626",
    fontSize: "14px",
    textAlign: "center",
  },
  success: {
    marginTop: "15px",
    color: "#16A34A",
    fontSize: "14px",
    textAlign: "center",
  },
  container: {
    display: "flex",
    gap: "24px",
    maxWidth: "1100px",
    width: "100%",
    flexWrap: "wrap",
    alignItems: "stretch",
  },
  infoCard: {
    flex: "1 1 280px",
    minWidth: "0",
    width: "100%",
    backgroundColor: "#ffffff",
    padding: "clamp(20px, 4vw, 40px)",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  },
  infoRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    marginBottom: "16px",
  },
  infoIcon: {
    color: "#2563EB",
    marginTop: "4px",
    fontSize: "14px",
    flexShrink: 0,
  },
  formCard: {
    flex: "2 1 420px",
    minWidth: "0",
    width: "100%",
    backgroundColor: "#ffffff",
    padding: "clamp(20px, 4vw, 40px)",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  },
  infoTitle: {
    marginBottom: "5px",
    color: "#1E293B",
  },
  infoText: {
    color: "#334155",
  },
  infoLink: {
    color: "#2563EB",
    textDecoration: "none",
    fontWeight: "500",
    wordBreak: "break-word",
  },
};

export default ContactSection;
