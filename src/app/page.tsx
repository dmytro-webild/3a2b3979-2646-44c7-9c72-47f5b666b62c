"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award, BatteryCharging, CheckCircle, Heart, Lightbulb, Package, Rocket, Shield, Smile, Sparkles, Users, Wifi, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="inset"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "Products",          id: "#products"},
        {
          name: "About",          id: "#about"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/two-smartphones-inside-geometric-neon-frame_187299-46537.jpg"
      brandName="ZYROXstore"
      button={{
        text: "Shop All",        href: "#products"}}
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitKpi
      background={{
        variant: "plain"}}
      imagePosition="right"
      title="Elevate Your Everyday with ZYROXstore"
      description="Discover innovative tech gadgets and accessories designed to simplify your life and amplify your style. Shop the future, today."
      kpis={[
        {
          value: "50k+",          label: "Happy Customers"},
        {
          value: "5-Star",          label: "Products"},
        {
          value: "Fast",          label: "Shipping"},
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Shop All",          href: "#products"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-positive-executive-work_1098-519.jpg",          alt: "Customer 1"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-female-photographer-jacket-standing-front-wall-ready-make-new-photo-adorable-young-brunette-woman-trendy-outfit-posing-concrete-wall-background-with-camera_639032-2530.jpg",          alt: "Customer 2"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-smiling-african-man-looking_171337-9852.jpg",          alt: "Customer 3"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-woman-with-pink-hair_273609-10896.jpg",          alt: "Customer 4"},
        {
          src: "http://img.b2bpic.net/free-photo/smiley-front-view-business-man_23-2148763836.jpg",          alt: "Satisfied customer"},
      ]}
      avatarText="Join thousands of satisfied customers!"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EnocOVqmHtsUNOn4fV5IQGT18u/uploaded-1780823818959-w47yt78j.png"
      imageAlt="Abstract tech background with ZYROXstore logo"
      mediaAnimation="opacity"
      marqueeItems={[
        {
          type: "text-icon",          text: "Innovation",          icon: Lightbulb,
        },
        {
          type: "text-icon",          text: "Quality",          icon: Sparkles,
        },
        {
          type: "text-icon",          text: "Style",          icon: Zap,
        },
        {
          type: "text-icon",          text: "Performance",          icon: Rocket,
        },
        {
          type: "text-icon",          text: "Connectivity",          icon: Wifi,
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      carouselMode="buttons"
      products={[
        {
          id: "p1",          name: "Wireless Earbuds",          price: "Rs. 3,000.00",          variant: "Black",          imageSrc: "http://img.b2bpic.net/free-photo/artist-creating-alternative-bedroom-pop-music_23-2149736747.jpg",          imageAlt: "Wireless Earbuds with Charging Case"},
        {
          id: "p2",          name: "MagSafe Compatible Case",          price: "Rs. 2,149.00",          variant: "Clear",          imageSrc: "http://img.b2bpic.net/free-photo/new-cellphone-charger-with-transparent-cover-isolated-white-background_58702-4668.jpg",          imageAlt: "MagSafe Compatible iPhone Case"},
        {
          id: "p3",          name: "Electronic Organizer",          price: "Rs. 1,500.00",          variant: "Gray",          imageSrc: "http://img.b2bpic.net/free-photo/asian-man-is-preparing-clothes-suitcases-he-s-choosing-clothes-travel-documents-itinerary-solo-trip-check-checklist-travel-holiday-vacation-concept_1150-61539.jpg",          imageAlt: "Electronic Organizer Travel Pouch"},
        {
          id: "p4",          name: "Wellness Smart Band",          price: "Rs. 4,500.00",          variant: "Black",          imageSrc: "http://img.b2bpic.net/free-photo/extreme-closeup-asian-sportswoman-checking-pulse-with-electronic-device_1098-18984.jpg",          imageAlt: "Wellness Smart Band with charger"},
        {
          id: "p5",          name: "Gaming Headset Pro",          price: "Rs. 8,999.00",          variant: "RGB",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-pro-gamer-talking-with-friends-networks-space-shooter-virtual-competition-competitive-woman-with-headphones-streaming-online-cyber-performing-gaming-tournament_482257-3998.jpg",          imageAlt: "Professional Gaming Headset"},
        {
          id: "p6",          name: "Portable Bluetooth Speaker",          price: "Rs. 3,999.00",          variant: "Blue",          imageSrc: "http://img.b2bpic.net/free-photo/square-music-speaker-closeup-interior-room_169016-51098.jpg",          imageAlt: "Waterproof Portable Bluetooth Speaker"},
      ]}
      title="Featured Products"
      description="Explore our best-selling items, carefully curated for quality and innovation, blending seamlessly with your digital life."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Seamless Connectivity",          description: "Effortlessly pair your devices and stay connected with cutting-edge wireless technology for a smooth user experience.",          imageSrc: "http://img.b2bpic.net/free-photo/phone-connecting-with-smart-speaker_53876-105045.jpg",          imageAlt: "Devices seamlessly connected",          buttonIcon: Zap,
        },
        {
          title: "Premium Durability",          description: "Built with high-quality materials, our products are designed to withstand daily wear and tear, ensuring long-lasting performance.",          imageSrc: "http://img.b2bpic.net/free-photo/craftsman-creating-wood-piece_1157-45890.jpg",          imageAlt: "Durable product materials",          buttonIcon: Shield,
        },
        {
          title: "Intuitive User Experience",          description: "Enjoy simple, straightforward controls and ergonomic designs that make interacting with our gadgets a joy.",          imageSrc: "http://img.b2bpic.net/free-photo/minimalist-tech-setup-with-smartwatch_58702-17216.jpg",          imageAlt: "Intuitive user interface",          buttonIcon: Smile,
        },
        {
          title: "Rapid Charging",          description: "Minimize downtime with lightning-fast charging capabilities, keeping your essential devices powered up and ready to go.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-mystery-box_23-2149631441.jpg",          imageAlt: "Fast charging device",          buttonIcon: BatteryCharging,
        },
      ]}
      title="Innovation at Your Fingertips"
      description="Experience seamless technology and smart design crafted for your modern lifestyle. Our products are built to perform and impress."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          title: "Outstanding Quality!",          quote: "The wireless earbuds from ZYROXstore are amazing! The sound quality is fantastic, and they fit perfectly. Definitely recommend for anyone looking for premium audio.",          name: "Sarah J.",          role: "Music Enthusiast",          imageSrc: "http://img.b2bpic.net/free-photo/man-smiling-with-arms-crossed_1187-3243.jpg",          imageAlt: "Sarah Johnson"},
        {
          id: "t2",          title: "Game Changer for My iPhone",          quote: "I love my MagSafe case! It's super sturdy and the magnetic charging works flawlessly. ZYROXstore delivers on its promise of quality products.",          name: "Mark L.",          role: "Tech Reviewer",          imageSrc: "http://img.b2bpic.net/free-photo/confident-woman-being-body-positive_23-2148974042.jpg",          imageAlt: "Mark L."},
        {
          id: "t3",          title: "Organized and Stylish",          quote: "The electronic organizer has been a lifesaver for my travels. No more tangled cables! It's sleek and functional. Great purchase!",          name: "Emily P.",          role: "Frequent Traveler",          imageSrc: "http://img.b2bpic.net/free-photo/handsome-stylish-redhead-man-flannel-shirt-posing-studio-against-white-wall_613910-19142.jpg",          imageAlt: "Emily P."},
        {
          id: "t4",          title: "Health Tracking Made Easy",          quote: "My wellness band is incredibly accurate and comfortable to wear. It helps me stay on top of my fitness goals. Thank you, ZYROXstore!",          name: "David R.",          role: "Fitness Coach",          imageSrc: "http://img.b2bpic.net/free-photo/cool-darkskinned-bearded-man-white-tshirt-orange-jacket-smiles-sincerely-outside-charming-guy-sunglasses-shows-ok-signs-near-white-wall_197531-28765.jpg",          imageAlt: "David R."},
        {
          id: "t5",          title: "Excellent Customer Service",          quote: "Beyond the great products, the customer service at ZYROXstore is top-notch. They helped me with an inquiry quickly and professionally.",          name: "Jessica M.",          role: "Happy Customer",          imageSrc: "http://img.b2bpic.net/free-photo/senior-woman-drinking-coffee-gathering_23-2149230382.jpg",          imageAlt: "Jessica M."},
        {
          id: "t6",          title: "A Brand I Trust",          quote: "Every purchase from ZYROXstore has exceeded my expectations. Their commitment to quality and innovation makes them my go-to for tech accessories.",          name: "Alex K.",          role: "Loyal Shopper",          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-short-hair-relaxing-outdoors_23-2149015728.jpg",          imageAlt: "Alex K."},
      ]}
      title="What Our Customers Say"
      description="Hear from the growing community who trust ZYROXstore for their tech needs and exceptional service."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      animationType="slide-up"
      metrics={[
        {
          id: "m1",          value: "100k+",          title: "Products Sold",          description: "Delivering quality tech accessories worldwide.",          icon: Package,
        },
        {
          id: "m2",          value: "99%",          title: "Customer Satisfaction",          description: "Our customers love what we do, and we love them back.",          icon: Heart,
        },
        {
          id: "m3",          value: "5+",          title: "Years of Excellence",          description: "A trusted name in innovative gadgets since 2018.",          icon: Award,
        },
      ]}
      title="Our Impact & Achievements"
      description="Driving satisfaction and innovation in the tech accessory market, our numbers speak for themselves."
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={true}
      imagePosition="right"
      title="About ZYROXstore"
      description="We are passionate about bringing the latest and greatest tech accessories to your doorstep. Our mission is to enhance your daily life with products that blend innovation, quality, and style seamlessly. From smart wearables to essential phone accessories, we handpick every item to ensure it meets our high standards."
      bulletPoints={[
        {
          title: "Curated Selection",          description: "Handpicked gadgets and accessories for optimal performance.",          icon: Sparkles,
        },
        {
          title: "Quality Assured",          description: "Every product undergoes rigorous testing for durability and reliability.",          icon: CheckCircle,
        },
        {
          title: "Customer-Centric",          description: "Dedicated support and a seamless shopping experience.",          icon: Users,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-3d-dice-with-cup_23-2150891434.jpg"
      imageAlt="Modern tech accessories arranged aesthetically"
      mediaAnimation="opacity"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",          title: "What is your return policy?",          content: "We offer a 30-day money-back guarantee on all purchases. Products must be returned in their original condition and packaging. Please visit our Returns page for more details."},
        {
          id: "faq2",          title: "How long does shipping take?",          content: "Standard shipping typically takes 5-7 business days, while express shipping delivers within 2-3 business days. Shipping times may vary based on your location and product availability."},
        {
          id: "faq3",          title: "Do you offer international shipping?",          content: "Yes, we do! We ship to most countries worldwide. International shipping costs and times will be calculated at checkout based on your destination."},
        {
          id: "faq4",          title: "How can I track my order?",          content: "Once your order is shipped, you will receive an email with a tracking number and a link to track your package's journey. You can also log in to your account to view order status."},
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Find quick answers to your most common questions about our products, shipping, returns, and more."
      faqsAnimation="slide-up"
      textPosition="left"
      showCard={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Get in Touch"
      title="Connect With Us"
      description="Have a question, need support, or want to collaborate? Our friendly team is always ready to assist you. Reach out and let's talk!"
      imageSrc="http://img.b2bpic.net/free-photo/aerial-view-headphones-keyboard-wooden-table_53876-33532.jpg"
      imageAlt="Customer support person with headset"
      mediaAnimation="opacity"
      mediaPosition="right"
      inputPlaceholder="Enter your email"
      buttonText="Send Message"
      termsText="By clicking Send Message you're confirming that you agree with our Privacy Policy."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/deep-blue-liquid-with-black-blobs_23-2147934072.jpg"
      imageAlt="Abstract dark background"
      logoText="ZYROXstore"
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Careers",              href: "#"},
            {
              label: "Blog",              href: "#"},
          ],
        },
        {
          title: "Products",          items: [
            {
              label: "All Products",              href: "#products"},
            {
              label: "Earbuds",              href: "#"},
            {
              label: "Accessories",              href: "#"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "Contact Us",              href: "#contact"},
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Returns",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 ZYROXstore. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
