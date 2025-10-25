import React, { useState, useEffect } from 'react';
import { Menu, X, Star, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function TiffinBoxApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="app">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Playfair Display', 'Georgia', serif;
          background: #0a0a0a;
          color: #fff;
          overflow-x: hidden;
        }
           * {
            -webkit-font-smoothing: antialiased;
           -moz-osx-font-smoothing: grayscale;
          }

          img {
             content-visibility: auto;
           }
          
          

        .app {
          width: 100%;
          min-height: 100vh;
          background: #0a0a0a;
        }

        /* Header */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
        }

        .logo {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #f4a522 0%, #d4881f 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          border-radius: 8px;
          transition: transform 0.3s ease;
          font-weight: bold;
        }

        .logo:hover {
          transform: rotate(5deg) scale(1.05);
        }

        .nav {
          display: none;
          gap: 3rem;
        }

        .nav-link {
          color: #fff;
          text-decoration: none;
          font-size: 0.9rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          position: relative;
          transition: color 0.3s ease;
          font-family: 'Arial', sans-serif;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #f4a522;
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #f4a522;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .order-btn {
          background: #f4a522;
          color: #0a0a0a;
          border: none;
          padding: 0.8rem 1.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.85rem;
        }

        .order-btn:hover {
          background: #d4881f;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(244, 165, 34, 0.4);
        }

        .menu-toggle {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .menu-toggle:hover {
          transform: rotate(90deg);
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          max-width: 400px;
          height: 100vh;
          background: #0a0a0a;
          padding: 2rem;
          transition: right 0.3s ease;
          z-index: 2000;
          box-shadow: -5px 0 20px rgba(0, 0, 0, 0.5);
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-menu-close {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          margin-bottom: 2rem;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .mobile-nav-link {
          color: #fff;
          text-decoration: none;
          font-size: 1.2rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: all 0.3s ease;
          padding: 1rem;
          border-left: 3px solid transparent;
        }

        .mobile-nav-link:hover {
          color: #f4a522;
          border-left-color: #f4a522;
          padding-left: 1.5rem;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 2rem;
          background: linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(20, 20, 20, 0.9) 100%);
        }

        .hero-content {
          max-width: 800px;
          text-align: center;
          z-index: 10;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-subtitle {
          color: #f4a522;
          font-size: 0.9rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 1rem;
          font-family: 'Arial', sans-serif;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 400;
          line-height: 1.2;
          margin-bottom: 2rem;
          letter-spacing: 2px;
        }

        .hero-description {
          color: #aaa;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 3rem;
          font-family: 'Arial', sans-serif;
        }

        .hero-image {
          width: 300px;
          height: 300px;
          margin: 0 auto 2rem;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #f4a522;
          animation: float 3s ease-in-out infinite;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8rem;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        /* Experience Section */
        .experience-section {
          padding: 4rem 2rem;
          background: #0a0a0a;
        }

        .experience-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .experience-image {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
        }

        .experience-content {
          background: #f4a522;
          padding: 3rem;
          color: #0a0a0a;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .experience-title {
          font-size: 2.5rem;
          font-weight: 400;
          line-height: 1.3;
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
        }

        .experience-text {
          font-size: 1rem;
          line-height: 1.8;
          font-family: 'Arial', sans-serif;
          margin-bottom: 2rem;
        }

        .learn-more {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #0a0a0a;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 0.85rem;
          transition: gap 0.3s ease;
          font-family: 'Arial', sans-serif;
        }

        .learn-more:hover {
          gap: 1rem;
        }

        /* Dishes Section */
        .dishes-section {
          padding: 6rem 2rem;
          background: #0a0a0a;
          text-align: center;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 400;
          margin-bottom: 1rem;
          letter-spacing: 2px;
        }

        .section-subtitle {
          color: #f4a522;
          font-size: 0.9rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 4rem;
          font-family: 'Arial', sans-serif;
        }

        .dishes-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        .dish-card {
          background: #1a1a1a;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          animation: scaleIn 0.6s ease-out;
          animation-fill-mode: both;
        }

        .dish-card:nth-child(1) { animation-delay: 0.1s; }
        .dish-card:nth-child(2) { animation-delay: 0.2s; }
        .dish-card:nth-child(3) { animation-delay: 0.3s; }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .dish-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(244, 165, 34, 0.2);
        }

        .dish-image {
          width: 100%;
          height: 250px;
          background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          transition: transform 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .dish-card:hover .dish-image {
          transform: scale(1.1);
        }

        .dish-content {
          padding: 2rem;
          text-align: center;
        }

        .dish-name {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }

        .dish-description {
          color: #aaa;
          font-size: 0.9rem;
          line-height: 1.6;
          font-family: 'Arial', sans-serif;
        }

        /* South Indian Section */
        .south-indian-section {
          padding: 6rem 2rem;
          background: #0f0f0f;
        }

        .south-indian-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        .south-indian-text h2 {
          font-size: 2.5rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          letter-spacing: 2px;
          line-height: 1.3;
        }

        .south-indian-text p {
          color: #aaa;
          line-height: 1.8;
          margin-bottom: 2rem;
          font-family: 'Arial', sans-serif;
        }

        .south-indian-image {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6rem;
        }

        /* Dining Section */
        .dining-section {
          padding: 6rem 2rem;
          background: #0a0a0a;
        }

        .dining-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        .dining-image {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6rem;
        }

        .dining-text h2 {
          font-size: 2.5rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          letter-spacing: 2px;
          line-height: 1.3;
        }

        .dining-text p {
          color: #aaa;
          line-height: 1.8;
          margin-bottom: 2rem;
          font-family: 'Arial', sans-serif;
        }

        /* Specialties Section */
        .specialties-section {
          padding: 6rem 2rem;
          background: #0f0f0f;
          text-align: center;
        }

        .specialties-grid {
          max-width: 1200px;
          margin: 4rem auto 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        .specialty-card {
          background: #1a1a1a;
          padding: 3rem 2rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .specialty-card:hover {
          transform: translateY(-10px);
          background: #2a2a2a;
        }

        .specialty-icon {
          width: 120px;
          height: 120px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #f4a522 0%, #d4881f 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          transition: transform 0.3s ease;
        }

        .specialty-card:hover .specialty-icon {
          transform: rotate(360deg);
        }

        .specialty-name {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          letter-spacing: 1px;
        }

        .specialty-description {
          color: #aaa;
          line-height: 1.6;
          font-family: 'Arial', sans-serif;
        }

        /* Chef Section */
        .chef-section {
          padding: 6rem 2rem;
          background: #0a0a0a;
        }

        .chef-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        .chef-image {
          width: 100%;
          height: 500px;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8rem;
        }

        .chef-text h3 {
          color: #f4a522;
          font-size: 0.9rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 1rem;
          font-family: 'Arial', sans-serif;
        }

        .chef-text h2 {
          font-size: 2.5rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          letter-spacing: 2px;
        }

        .chef-text p {
          color: #aaa;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-family: 'Arial', sans-serif;
        }

        .chef-signature {
          font-family: 'Brush Script MT', cursive;
          font-size: 2.5rem;
          color: #f4a522;
          margin-top: 2rem;
        }

        /* Reviews Section */
        .reviews-section {
          padding: 6rem 2rem;
          background: #0f0f0f;
          text-align: center;
        }

        .reviews-grid {
          max-width: 1200px;
          margin: 4rem auto 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .review-card {
          background: #1a1a1a;
          padding: 2.5rem 2rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .review-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(244, 165, 34, 0.2);
        }

        .review-stars {
          display: flex;
          justify-content: center;
          gap: 0.3rem;
          margin-bottom: 1.5rem;
        }

        .review-text {
          color: #aaa;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-family: 'Arial', sans-serif;
        }

        .review-author {
          font-size: 1.1rem;
          color: #f4a522;
          letter-spacing: 1px;
        }

        /* Location Section */
        .location-section {
          padding: 6rem 2rem;
          background: #0a0a0a;
          text-align: center;
        }

        .location-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .location-map {
          width: 100%;
          height: 400px;
          background: #1a1a1a;
          border-radius: 8px;
          margin-top: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
        }

        /* Gallery Section */
        .gallery-section {
          padding: 6rem 2rem;
          background: #0f0f0f;
          text-align: center;
        }

        .gallery-grid {
          max-width: 1200px;
          margin: 4rem auto 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .gallery-item {
          aspect-ratio: 1;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
        }

        .gallery-item:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(244, 165, 34, 0.3);
        }

        /* Footer */
        .footer {
          background: #000;
          padding: 4rem 2rem 2rem;
          text-align: center;
        }

        .footer-logo {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #f4a522 0%, #d4881f 100%);
          margin: 0 auto 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          border-radius: 8px;
        }

        .footer-social {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin: 2rem 0;
        }

        .social-link {
          color: #fff;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          color: #f4a522;
          transform: translateY(-3px);
        }

        .footer-text {
          color: #666;
          font-size: 0.9rem;
          margin-top: 2rem;
          font-family: 'Arial', sans-serif;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .nav {
            display: flex;
          }

          .menu-toggle {
            display: none;
          }

          .hero-title {
            font-size: 4rem;
          }

          .experience-grid {
            grid-template-columns: 1fr 1fr;
          }

          .dishes-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .south-indian-content {
            grid-template-columns: 1fr 1fr;
          }

          .dining-content {
            grid-template-columns: 1fr 1fr;
          }

          .specialties-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .chef-content {
            grid-template-columns: 1fr 1fr;
          }

          .reviews-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 5rem;
          }

          .specialties-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .reviews-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">🍱</div>
        <nav className="nav">
          <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
          <a href="#menu" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}>Menu</a>
          <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        </nav>
        <button className="order-btn">Order Now</button>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setIsMenuOpen(false)}>
          <X size={32} />
        </button>
        <nav className="mobile-nav">
          <a href="#home" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
          <a href="#menu" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}>Menu</a>
          <a href="#about" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          <a href="#contact" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        </nav>
      </div>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">Welcome to TiffinBox</p>
          <h1 className="hero-title">Authentic South Indian Cuisine</h1>
          <div className="hero-image">🥘</div>
          <p className="hero-description">
            Experience the rich flavors and traditional recipes of South India, 
            delivered fresh to your doorstep every day.
          </p>
          <button className="order-btn">Explore Menu</button>
        </div>
      </section>

      {/* Experience */}
      <section className="experience-section">
        <div className="experience-grid">
          <div className="experience-image">👨‍🍳</div>
          <div className="experience-content">
            <h2 className="experience-title">Experience Authentic South Indian Flavors with TiffinBox</h2>
            <p className="experience-text">
              Our chefs bring decades of culinary expertise to create traditional dishes 
              that taste just like home. Each meal is prepared with love and the finest ingredients.
            </p>
            <a href="#" className="learn-more">Learn More →</a>
          </div>
        </div>
      </section>

      {/* Dishes */}
      <section id="menu" className="dishes-section">
        <p className="section-subtitle">Our Menu</p>
        <h2 className="section-title">Discover Our Most Popular Dishes</h2>
        <div className="dishes-grid">
          <div className="dish-card">
            <div className="dish-image">🥞</div>
            <div className="dish-content">
              <h3 className="dish-name">Masala Dosa</h3>
              <p className="dish-description">
                Crispy rice crepe filled with spiced potato masala, served with sambhar and chutney
              </p>
            </div>
          </div>
          <div className="dish-card">
            <div className="dish-image">🍛</div>
            <div className="dish-content">
              <h3 className="dish-name">Hyderabadi Biryani</h3>
              <p className="dish-description">
                Fragrant basmati rice layered with tender meat and aromatic spices
              </p>
            </div>
          </div>
          <div className="dish-card">
            <div className="dish-image">🫓</div>
            <div className="dish-content">
              <h3 className="dish-name">Idli Sambhar</h3>
              <p className="dish-description">
                Soft steamed rice cakes served with lentil soup and coconut chutney
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* South Indian Flavors */}
      <section className="south-indian-section">
        <div className="south-indian-content">
          <div className="south-indian-text">
            <h2>Fresh South Indian Flavors Delivered</h2>
            <p>
              Every dish is prepared fresh daily using traditional methods and authentic recipes 
              passed down through generations. We source the finest ingredients to ensure an 
              authentic taste experience.
            </p>
            <button className="order-btn">Order Now</button>
          </div>
          <div className="south-indian-image">🍲</div>
        </div>
      </section>

      {/* Dining Experience */}
      <section className="dining-section">
        <div className="dining-content">
          <div className="dining-image">🍽️</div>
          <div className="dining-text">
            <h2>Planning a Meal at the TiffinBox?</h2>
            <p>
              Whether it's a family gathering or a special celebration, we cater to all your needs. 
              Our tiffin service ensures fresh, delicious meals delivered right to your location.
            </p>
            <button className="order-btn">Book Now</button>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="specialties-section">
        <p className="section-subtitle">Our Specialties</p>
        <h2 className="section-title">What Makes Us Special</h2>
        <div className="specialties-grid">
          <div className="specialty-card">
            <div className="specialty-icon">🌶️</div>
            <h3 className="specialty-name">Authentic Spices</h3>
            <p className="specialty-description">
              We use traditional South Indian spices ground fresh daily for authentic flavors
            </p>
          </div>
          <div className="specialty-card">
            <div className="specialty-icon">🥥</div>
            <h3 className="specialty-name">Fresh Coconut</h3>
            <p className="specialty-description">
              Hand-grated fresh coconut in every dish for that authentic taste
            </p>
          </div>
          <div className="specialty-card">
            <div className="specialty-icon">🍚</div>
            <h3 className="specialty-name">Premium Rice</h3>
            <p className="specialty-description">
              We use only the finest quality basmati and sona masoori rice
            </p>
          </div>
          <div className="specialty-card">
            <div className="specialty-icon">🫚</div>
            <h3 className="specialty-name">Homestyle Cooking</h3>
            <p className="specialty-description">
              Traditional cooking methods that bring out the true flavors
            </p>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section id="about" className="chef-section">
        <div className="chef-content">
          <div className="chef-image">👨‍🍳</div>
          <div className="chef-text">
            <h3>Our Brand Chef</h3>
            <h2>Chef Raman</h2>
            <p>
              With over 25 years of culinary experience, Chef Raman brings the authentic 
              flavors of South India to every dish. Trained in traditional cooking methods 
              and passionate about preserving culinary heritage.
            </p>
            <p>
              His expertise in regional cuisines and commitment to quality has made TiffinBox 
              a trusted name for authentic South Indian food.
            </p>
            <div className="chef-signature">Chef Raman</div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews-section">
        <p className="section-subtitle">Testimonials</p>
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#f4a522" color="#f4a522" />)}
            </div>
            <p className="review-text">
              "The best South Indian food I've had outside my hometown. Absolutely authentic!"
            </p>
            <p className="review-author">Priya Sharma</p>
          </div>
          <div className="review-card">
            <div className="review-stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#f4a522" color="#f4a522" />)}
            </div>
            <p className="review-text">
              "Fresh, delicious, and always on time. TiffinBox has become part of our daily routine."
            </p>
            <p className="review-author">Raj Kumar</p>
          </div>
          <div className="review-card">
            <div className="review-stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#f4a522" color="#f4a522" />)}
            </div>
            <p className="review-text">
              "The taste reminds me of my mother's cooking. Highly recommended for authentic flavors!"
            </p>
            <p className="review-author">Lakshmi Iyer</p>
          </div>
          <div className="review-card">
            <div className="review-stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#f4a522" color="#f4a522" />)}
            </div>
            <p className="review-text">
              "Excellent quality and variety. The biryani is to die for!"
            </p>
            <p className="review-author">Arun Reddy</p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="contact" className="location-section">
        <p className="section-subtitle">Find Us</p>
        <h2 className="section-title">Where Convenience Meets Location</h2>
        <div className="location-content">
          <p style={{ color: '#aaa', marginBottom: '2rem', fontFamily: 'Arial, sans-serif' }}>
            Visit us at our location or order online for home delivery. We're here to serve you 
            the best South Indian cuisine in town.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
              <MapPin size={24} color="#f4a522" />
              <span style={{ fontFamily: 'Arial, sans-serif' }}>123 South Street, Chennai - 600001</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
              <Phone size={24} color="#f4a522" />
              <span style={{ fontFamily: 'Arial, sans-serif' }}>+91 98765 43210</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
              <Mail size={24} color="#f4a522" />
              <span style={{ fontFamily: 'Arial, sans-serif' }}>hello@tiffinbox.com</span>
            </div>
          </div>
          <button className="order-btn">Visit Us</button>
        </div>
        <div className="location-map">🗺️</div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <p className="section-subtitle">Gallery</p>
        <h2 className="section-title">Join Our Community</h2>
        <div className="gallery-grid">
          <div className="gallery-item">🍛</div>
          <div className="gallery-item">👨‍🍳</div>
          <div className="gallery-item">🥘</div>
          <div className="gallery-item">🍲</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">🍱</div>
        <h3 style={{ marginBottom: '1rem', letterSpacing: '2px' }}>TiffinBox</h3>
        <div className="footer-social">
          <a href="#" className="social-link"><Instagram size={24} /></a>
          <a href="#" className="social-link"><Facebook size={24} /></a>
          <a href="#" className="social-link"><Twitter size={24} /></a>
        </div>
        <p className="footer-text">© 2025 TiffinBox. All Rights Reserved.</p>
        <p className="footer-text">Crafted with love for authentic South Indian cuisine</p>
      </footer>
    </div>
  );
}