function ContactPage() {
  return (
    <section className="contact-page-container">
      <figure className="contact-figure-container">
        <img
          id="figure-img"
          src={`${import.meta.env.VITE_API_URL}/assets/contact_page/contact_page.jpg`}
          alt=""
        />
      </figure>
      <figcaption className="contact-page-description-container">
        <a href="mailto:degorreh@gmail.com">degorreh@gmail.com</a>
      </figcaption>
    </section>
  );
}

export default ContactPage;
