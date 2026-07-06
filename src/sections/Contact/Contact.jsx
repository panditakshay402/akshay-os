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
              contact@panditakshay.com
            </p>

          </div>

          <div className="info-card">

            <h3>Location</h3>

            <p>
              Mumbai, Maharashtra, India
            </p>

          </div>

          <div className="info-card">

            <h3>Availability</h3>

            <p>
              Open for Opportunities
            </p>

          </div>

        </div>

        <form className="contact-form" action="https://formspree.io/f/mgojdrpl" method="POST">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            pattern="[0-9]{10}"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <input
            type="hidden"
            name="_subject"
             value="New Portfolio Contact Form Submission"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;