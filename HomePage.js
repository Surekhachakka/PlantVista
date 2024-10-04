import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const openJoinModal = () => setIsJoinModalOpen(true);
  const closeJoinModal = () => setIsJoinModalOpen(false);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };

  // Image style for the banner slider
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  };

  return (
    <div style={{ position: 'relative', padding: '20px', textAlign: 'center', backgroundColor: '#f0f0f0' }}>
      {/* Logo */}
      <div style={logoContainerStyle}>
        <img
          src="/planting.png" // Ensure the path is correct based on where the file is located
          alt="Planting Logo"
          style={logoStyle}
        />
      </div>

      <header style={headerStyle}>
        <h1 style={headerTitleStyle}>PlantVista</h1>
        <p style={headerSubtitleStyle}>Your interactive herbal garden awaits!</p>

        {/* Navbar Section */}
        <nav style={navStyle}>
          <a href="#contact" onClick={openContactModal} style={navLinkStyle}>Contact Us</a>
          <a href="#join" onClick={openJoinModal} style={navLinkStyle}>Join Us</a>
          <a href="/virtual-tours" style={navLinkStyle}>Virtual Tours</a>
        </nav>
      </header>

      <section style={{ margin: '20px auto', width: '100%', maxWidth: '100vw', overflow: 'hidden', height: '500px' }}>
        <Slider {...sliderSettings}>
          <div style={{ height: '100%' }}>
            <img
              src={`${process.env.PUBLIC_URL}/welcome.jpg`}
              alt="Welcome to PlantVista"
              style={imageStyle} // Apply imageStyle
            />
          </div>
          <div style={{ height: '100%' }}>
            <img
              src={`${process.env.PUBLIC_URL}/3D.jpg`}
              alt="Immersive 3D Learning"
              style={imageStyle} // Apply imageStyle
            />
          </div>
          <div style={{ height: '100%' }}>
            <img
              src={`${process.env.PUBLIC_URL}/plantinfo.jpg`}
              alt="Detailed Plant Information"
              style={imageStyle} // Apply imageStyle
            />
          </div>
          <div style={{ height: '100%' }}>
            <img
              src={`${process.env.PUBLIC_URL}/mul.jpg`}
              alt="Multimedia Integration"
              style={imageStyle} // Apply imageStyle
            />
          </div>
        </Slider>
      </section>

      <main>
{/* Plant Gallery */}
      <section style={{ margin: '20px 0' }}>
        <h2>Plant Gallery</h2>
        <p>Browse through our interactive gallery of medicinal plants used in AYUSH.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ padding: '10px', width: '300px' }}>
            <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '8px' }}>
              <img
                src="https://wallpapers.com/images/hd/ayurveda-hd-herbs-on-white-background-vp2mn8ecxq8gjzlc.jpg"
                alt="Ayurveda"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <h3>
              <a href="Ayurveda.html" style={{ textDecoration: 'none', color: '#007bff' }}>
                Ayurveda
              </a>
            </h3>
            <p>Explore the traditional system of medicine from India</p>
          </div>
            <div style={{ padding: '10px', width: '300px' }}>
              <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '8px' }}>
                <img
                  src="https://generated-assets.prod.myninja.ai/60a5d882-4b18-4e33-ab6f-09977aad1a56/351fb239-c31c-47de-b71e-4cc0e1c93444_0.jpeg"
                  alt="Yoga & Naturopathy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3><a href="Yoga&naturopathy.html" style={{ textDecoration: 'none', color: '#007bff' }}>Yoga & Naturopathy</a></h3>
              <p>Holistic healing through nature and ancient practices</p>
            </div>
            <div style={{ padding: '10px', width: '300px' }}>
              <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '8px' }}>
                <img
                  src="https://generated-assets.prod.myninja.ai/9f350e2b-e99a-4d7c-9ea4-d3d1d91c7a1c/81a0afff-0473-4350-9256-780ecec1f05a_3.jpeg"
                  alt="Unani"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3><a href="/unani" style={{ textDecoration: 'none', color: '#007bff' }}>Unani</a></h3>
              <p>An ancient system of medicine from the Middle East</p>
            </div>
            <div style={{ padding: '10px', width: '300px' }}>
              <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '8px' }}>
                <img
                  src="https://career.webindia123.com/career/options/images/siddha.jpg"
                  alt="Siddha"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3><a href="/siddha" style={{ textDecoration: 'none', color: '#007bff' }}>Siddha</a></h3>
              <p>An ancient South Indian system of healing</p>
            </div>
            <div style={{ padding: '10px', width: '300px' }}>
              <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '8px' }}>
                <img
                  src="https://cihts.ac.in/wp-content/uploads/2023/12/05-min.png"
                  alt="Sowa Rigpa"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3><a href="/sowa-rigpa" style={{ textDecoration: 'none', color: '#007bff' }}>Sowa Rigpa</a></h3>
              <p>The Tibetan art of healing</p>
            </div>
            <div style={{ padding: '10px', width: '300px' }}>
              <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '8px' }}>
                <img
                  src="https://thumbs.dreamstime.com/b/bottles-homeopathy-globules-wooden-spoon-dry-healthy-herbs-selective-focus-63180276.jpg"
                  alt="Homeopathy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3><a href="/homeopathy" style={{ textDecoration: 'none', color: '#007bff' }}>Homeopathy</a></h3>
              <p>A holistic approach to medicine</p>
            </div>
          </div>
        </section>
<section style={{ margin: '40px 0', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', textAlign: 'center' }}>
  <h2>About Us</h2>
  <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
    Welcome to PlantVista, your gateway to an immersive world of plants and herbs. Our mission is to educate and inspire
    people about the healing power of plants and nature. We offer a rich gallery of information about medicinal plants
    used in traditional healing systems such as Ayurveda, Unani, and more. Our interactive virtual tours and detailed
    plant guides allow you to explore this vibrant world from the comfort of your home.
  </p>
  <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '20px auto 0 auto', lineHeight: '1.6' }}>
    Whether you're a seasoned herbalist or just beginning your journey with plants, PlantVista has something for you.
    Join us in rediscovering the knowledge of the past and bringing it into the present for a healthier, greener future.
  </p>
</section>



             </main>

      {/* Contact Us Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onRequestClose={closeContactModal}
        style={modalStyle}
        contentLabel="Contact Us Modal"
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={closeContactModal} style={closeIconStyle}>X</button>
        </div>
        <h2>Contact Us</h2>
        <form>
          <label>Name:</label><br />
          <input type="text" placeholder="Enter your name" /><br /><br />
          <label>Email:</label><br />
          <input type="email" placeholder="Enter your email" /><br /><br />
          <label>Message:</label><br />
          <textarea placeholder="Enter your message"></textarea><br /><br />
          <button type="submit" style={submitButtonStyle}>Submit</button>
        </form>
      </Modal>

      {/* Join Us Modal */}
      <Modal
        isOpen={isJoinModalOpen}
        onRequestClose={closeJoinModal}
        style={modalStyle}
        contentLabel="Join Us Modal"
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={closeJoinModal} style={closeIconStyle}>X</button>
        </div>
        <h2>Join Us</h2>
        <form>
          <label>Name:</label><br />
          <input type="text" placeholder="Enter your name" /><br /><br />
          <label>Email:</label><br />
          <input type="email" placeholder="Enter your email" /><br /><br />
          <label>Why do you want to join us?</label><br />
          <textarea placeholder="Tell us about yourself"></textarea><br /><br />
          <button type="submit" style={submitButtonStyle}>Join</button>
        </form>
      </Modal>

      <footer style={{ backgroundColor: '#282c34', color: 'white', padding: '10px' }}>
        <p>&copy; 2024 PlantVista. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Styling for header and navbar
const headerStyle = {
  backgroundColor: 'white',
  color: 'black',
  paddingLeft: '100px',
  height: '100px',
  textAlign: 'left',
};

const headerTitleStyle = {
  fontFamily: 'Cursive, sans-serif',
  fontSize: '3rem',
  margin: '0',
};

const headerSubtitleStyle = {
  fontSize: '1.2rem',
  margin: '5px 0',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '20px',
  position: 'absolute',
  top: '40px',
  right: '30px',
};

const navLinkStyle = {
  textDecoration: 'none',
  color: '#007bff',
  fontSize: '16px',
  padding: '10px 20px',
  backgroundColor: 'transparent',
  borderRadius: '5px',
  cursor: 'pointer',
};

// Button styling (used for modals)
const closeIconStyle = {
  background: 'none',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
  color: '#333',
};

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    width: '400px',
    borderRadius: '8px',
  },
};

const submitButtonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  color: 'white',
  backgroundColor: '#28a745',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  outline: 'none',
};


// Rotating image styling
const rotatingImageStyle = {
  width: '250px',
  height: '250px',
  animation: 'spin 10s linear infinite',
};


// Logo Container styling
const logoContainerStyle = {
  position: 'absolute',
  top: '19px',
  left: '20px',
  zIndex: 1000,
};

// Logo styling with rotation
const logoStyle = {
  width: '100px',
  height: 'auto',
  animation: 'vertical-rotate 10s linear infinite',
};

// Keyframes for vertical rotation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes vertical-rotate {
    from { transform: rotateY(0deg); }
    to { transform: rotateY(360deg); }
  }
`, styleSheet.cssRules.length);
export default HomePage;