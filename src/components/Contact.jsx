import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact_section">
      <div className="contact_overlay">
        <div className="contact_content">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you! Fill in the form below 🌷</p>

          <form className="contact_form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
