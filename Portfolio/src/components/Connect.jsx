import React, { useState } from "react";
import axios from "axios";

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

    if (!/^[A-Za-z\s]+$/.test(form.name)) {
      setError("Name should contain only letters");
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
      <div style={styles.card}>
        <h2 style={styles.heading}>Contact Me</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            style={styles.textarea}
          ></textarea>

          <button type="submit" style={styles.button}>
            Send Message
          </button>
           {error && <p style={styles.error}>{error}</p>}
           {success && <p style={styles.success}>{success}</p>}
        </form>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 20px",
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
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #CBD5E1",
    fontSize: "14px",
  },
  textarea: {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #CBD5E1",
    minHeight: "100px",
    fontSize: "14px",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#2563EB",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
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

};

export default ContactSection;
