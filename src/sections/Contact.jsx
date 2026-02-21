import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import MatrixCanvas from "../components/MatrixCanvas";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    title: "",
    content: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // import vars from .env
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS credentials are not configured");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_email: formData.email,
          to_email: import.meta.env.VITE_YOUR_EMAIL || formData.email,
          subject: formData.title,
          message: formData.content,
        },
        publicKey
      );

      setSubmitStatus("success");
      setFormData({ email: "", title: "", content: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section section-matrix">
      <MatrixCanvas />
      <motion.div 
        className="contact-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="contact-title" variants={item}>
          Contact
        </motion.h2>
        
        <motion.div className="contact-info" variants={item}>
          <a 
            href={`tel:${import.meta.env.VITE_PHONE_NUMBER || "+1234567890"}`} 
            className="phone-number"
            onClick={(e) => {
              // Only allow tel: links on mobile devices
              if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                e.preventDefault();
              }
            }}
          >
            {import.meta.env.VITE_PHONE_NUMBER || "+1 (234) 567-8900"}
          </a>
          <p className="contact-subtitle">or send me an email</p>
        </motion.div>
        
        <motion.form 
          onSubmit={handleSubmit} 
          className="contact-form" 
          variants={container}
        >
          <motion.div className="form-group" variants={item}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </motion.div>

          <motion.div className="form-group" variants={item}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Message title"
            />
          </motion.div>

          <motion.div className="form-group" variants={item}>
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Your message..."
            />
          </motion.div>

          {submitStatus === "success" && (
            <motion.div 
              className="form-message success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Message sent successfully!
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div 
              className="form-message error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Failed to send message. Please try again.
            </motion.div>
          )}

          <motion.button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
            variants={item}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
