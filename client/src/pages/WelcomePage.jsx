function WelcomePage() {
  return (
    <section className="welcome-container">
      <img
        id="welcome-img"
        src={`${import.meta.env.VITE_API_URL}/assets/welcome_page/landingpage_photo.jpg`}
        alt="accordeon en noir et blanc"
      />
    </section>
  );
}

export default WelcomePage;
