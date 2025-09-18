import "./About.css";

const About = () => {
  return (
    <section className="about_section">
      <div className="about_overlay">
        <div className="about_content">
          <h2>About FlowerShop</h2>
          <p>
            At <span className="highlight">FlowerShop</span>, we believe every flower
            tells a story. From roses that whisper love, to lilies that bring peace,
            our mission is to spread happiness and beauty with fresh and vibrant
            blooms. 🌸
          </p>
          <p>
            We source our flowers from trusted local growers and craft each bouquet
            with care, passion, and creativity. Whether it’s a special occasion or
            just a little gift for yourself, our flowers are here to make life
            brighter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
