import "./Contact.css";

function Contact() {
  return (
    <section
      className="contact"
      id="contact"
    >

      <p className="section-tag">
        CONTACT
      </p>

      <h2 className="section-title">
        Let's Build Something Amazing
      </h2>

      <p className="contact-description">
        Have an idea, project or opportunity?
        Feel free to reach out.
      </p>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-card">

            <h3>Email</h3>

            <p>
              yourmail@example.com
            </p>

          </div>

          <div className="info-card">

            <h3>Location</h3>

            <p>
              Bangalore, India
            </p>

          </div>

          <div className="info-card">

            <h3>Availability</h3>

            <p>
              Open for Opportunities
            </p>

          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;