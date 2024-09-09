import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our Innovation Research Newsletter to Receive the Latest
          Breakthroughs!
        </p>
        <p className="footer-subscription-text">
          you can un sunscribe any time you want
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="your email"
              className="footer-input"
            />
            <Button href='/about' buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      {/* <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About us</h2>
            <Link href="/sign-up">how it works </Link>
            <Link href="/"> Testimonials </Link>
            <Link href="/"> Careers </Link>
            <Link href="/"> Investors </Link>
            <Link href="/"> Terms of Services </Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link href="/">Contact</Link>
            <Link href="/">Support</Link>
            <Link href="/">Destinations</Link>
            <Link href="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link href="/">Submit Video</Link>
            <Link href="/">Ambassadors</Link>
            <Link href="/">Agency</Link>
            <Link href="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link href="/">Instagram</Link>
            <Link href="/">Facebook</Link>
            <Link href="/">Youtube</Link>
            <Link href="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link href="/" className="social-logo">
            <img src="/images/frc-logo-nobg.png" alt="FRC Logo" className="logo-image" />
              
            </Link>
          </div>
          <small class="website-rights">frc © 2024</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              href="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              href="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              href="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              href="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              href="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div> */}
      {/* </section> */}
    </div>
  );
}

export default Footer;
