import { motion } from "framer-motion";
import { ArrowRight, Zap, Code, Palette, Rocket, Sparkles, Flame, Star, ChevronDown, ExternalLink, Globe, Mail, Phone } from "lucide-react";
import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const floatVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const services = [
    {
      name: "Web Development",
      icon: Code,
      desc: "Modern, scalable web applications built with cutting-edge technologies",
      features: ["React/Next.js", "Node.js", "Cloud Integration"]
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      desc: "Beautiful interfaces that delight users and drive conversions",
      features: ["User Research", "Prototyping", "Design Systems"]
    },
    {
      name: "App Development",
      icon: Zap,
      desc: "Fast and responsive mobile apps for iOS and Android platforms",
      features: ["React Native", "Flutter", "Cross-platform"]
    },
  ];

  const benefits = [
    {
      name: "Fast Delivery",
      icon: Rocket,
      desc: "Rapid turnaround without compromising quality",
      stat: "2-4 weeks"
    },
    {
      name: "Modern Design",
      icon: Sparkles,
      desc: "Contemporary aesthetics and smooth UX",
      stat: "100% Modern"
    },
    {
      name: "Expert Team",
      icon: Flame,
      desc: "Passionate developers and designers",
      stat: "10+ Years Exp"
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Thrylos transformed our vision into reality. Their attention to detail and innovative approach exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateLab",
      content: "Working with Thrylos was a game-changer. Their team's expertise and dedication delivered outstanding results.",
      rating: 5
    }
  ];

  return (
    <div className="app">
      {/* NAVBAR */}
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Thrylos
        </motion.h1>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <motion.div
            animate={menuOpen ? { rotate: 45 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            ☰
          </motion.div>
        </button>

        <motion.div
          className={`nav-links ${menuOpen ? "active" : ""}`}
          initial={false}
          animate={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none" }}
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact" className="contact-btn">
            Get Started
          </a>
        </motion.div>
      </motion.nav>

      {/* HERO */}
      <section className="hero" id="home">
        <motion.div
          className="hero-bg"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
        >
          <div className="hero-bg-gradient"></div>
          <div className="hero-bg-particles">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="particle"
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Star size={16} />
            Award-winning digital agency
          </motion.div>

          <motion.h1 variants={floatVariants}>
            Build the Future with <span className="gradient">Thrylos India</span>
          </motion.h1>

          <motion.p variants={itemVariants}>
            We craft cutting-edge digital experiences that transform businesses and captivate audiences. From concept to launch, we bring your vision to life with innovation and excellence.
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={itemVariants}
          >
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.08, boxShadow: "0 30px 60px rgba(168, 85, 247, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project <ArrowRight size={20} />
            </motion.button>

            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.button>
          </motion.div>

          <motion.div
            className="hero-stats"
            variants={itemVariants}
          >
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="container">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="about-text">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Crafting Digital Excellence Since 2020
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Thrylos India is a forward-thinking tech company focused on building scalable,
                innovative, and user-centric digital products. We partner with businesses to
                transform their ideas into powerful digital solutions that drive real business value.
              </motion.p>

              <motion.div
                className="about-features"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="feature">
                  <div className="feature-icon">🚀</div>
                  <span>Innovation First</span>
                </div>
                <div className="feature">
                  <div className="feature-icon">🎯</div>
                  <span>Results Driven</span>
                </div>
                <div className="feature">
                  <div className="feature-icon">🤝</div>
                  <span>Client Focused</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="image-placeholder">
                <div className="image-overlay"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>Our Services</h2>
            <p>Comprehensive digital solutions tailored to your business needs</p>
          </motion.div>

          <motion.div
            className="cards"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, i) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="card service-card"
                  whileHover={{ y: -15, boxShadow: "0 30px 60px rgba(168, 85, 247, 0.3)" }}
                  onHoverStart={() => setHoveredCard(i)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <motion.div
                    className="card-icon"
                    animate={hoveredCard === i ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent size={45} />
                  </motion.div>
                  <h3>{service.name}</h3>
                  <p>{service.desc}</p>

                  <motion.div
                    className="service-features"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="card-arrow"
                    animate={hoveredCard === i ? { x: 8, rotate: 45 } : { x: 0, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight size={22} />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>

          <motion.div
            className="cards benefits-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, i) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="card benefit-card"
                  whileHover={{ scale: 1.08 }}
                  onHoverStart={() => setHoveredCard(i)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <motion.div
                    animate={hoveredCard === i ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent size={55} className="benefit-icon" />
                  </motion.div>
                  <h3>{benefit.name}</h3>
                  <p>{benefit.desc}</p>
                  <div className="benefit-stat">{benefit.stat}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>

          <motion.div
            className="testimonials-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="testimonial-card"
                whileHover={{ y: -10 }}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} size={16} fill="#ffd700" color="#ffd700" />
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2>Ready to Transform Your Digital Presence?</h2>
          <p>Let's discuss your project and bring your vision to life</p>

          <motion.div
            className="cta-buttons"
            variants={itemVariants}
          >
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch <ArrowRight size={20} />
            </motion.button>

            <motion.button
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Call
            </motion.button>
          </motion.div>

          <motion.div
            className="cta-contact"
            variants={itemVariants}
          >
            <div className="contact-item">
              <Mail size={20} />
              <span>hello@thrylosindia.in</span>
            </div>
            <div className="contact-item">
              <Phone size={20} />
              <span>+91 XXX-XXX-XXXX</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Thrylos India</h4>
              <p>Crafting digital excellence since 2020. Building the future, one project at a time.</p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <ExternalLink size={20} />
                </a>
                <a href="https://instagram.com/thrylosindia" className="social-link">
                  <Globe size={20} />
                </a>
                <a href="#" className="social-link">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <a href="#services">Web Development</a>
              <a href="#services">UI/UX Design</a>
              <a href="#services">App Development</a>
              <a href="#services">Consulting</a>
            </div>

            <div className="footer-section">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
              <a href="#">Careers</a>
            </div>

            <div className="footer-section">
              <h4>Resources</h4>
              <a href="#">Blog</a>
              <a href="#">Case Studies</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Thrylos India. All rights reserved.</p>
            <p>Made with ❤️ for digital innovation</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;