import React from "react";
import heroImg from "./assests/newhome.png"; // Hero image
import sectionImg from "./assests/d02.1.png"; // About section image
import cause1 from "./assests/cause_img_1.jpg";
import cause2 from "./assests/cause_img_2.png";
import cause3 from "./assests/cause_img_3.png";
import cause4 from "./assests/cause_img_4.png";
import logo from "./assests/logo.jpg"
import { Link } from "react-router-dom";


const NavLink = ({ label, href }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      style={{
        color: "#fff",
        textDecoration: "none",
        fontWeight: hover ? "700" : "500",
        transition: "0.2s ease",
      }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {label}
    </a>
  );
};

const DonateVerseHome = () => {
  const styles = {
    page: {
      fontFamily: "'Segoe UI', sans-serif",
      margin: 0,
      padding: 0,
      backgroundColor: "#fff",
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#0C2A34",
      padding: "17px 40px",
      color: "#fff",
      flexWrap: "wrap",
    },
    logo: {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "44px",
      flexGrow: 1,
      justifyContent: "center",
      flexWrap: "wrap",
    },
    navBtn: {
      backgroundColor: "#3B82F6",
      border: "none",
      padding: "7px 12px",
      borderRadius: "5px",
      color: "#fff",
      cursor: "pointer",
    },
    navContainer: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexGrow: 1,
  flexWrap: "wrap",
},

navLinks: {
  display: "flex",
  justifyContent: "center",
  //alignItems: "center",
  gap: "73px",
  flex: 1,
  marginLeft:"510px"
},

navButtons: {
  display: "flex",
  gap: "40px",
  marginRight:"20px",
  height:"50px",
  width:"200px"
},

    hero: {
      position: "relative",
      width: "100%",
      textAlign: "center",
    },
    heroImage: {
  width: "100%",
  height: "100vh", 
  objectFit: "cover", 
  
    },
    heroText: {
      position: "absolute",
      top: "270px",
      left: "280px",
      transform: "translate(-50%, -50%)",
      color: "#fff",
      fontSize: "1.3rem",
      fontWeight: "",
      lineHeight: "1.4",
       fontfamily: '"Playfair Display", serif',
       marginLeft:"59px",
       marginTop:"59px"



    },
    donateBtn: {
      marginTop: "16px",
      padding: "10px 24px",
      backgroundColor: "#3B82F6",
      border: "none",
      borderRadius: "13px",
      color: "#fff",
      cursor: "pointer",
      height:"47px",
      width:"119px",
      fontSize:"1.1rem"
    },
    section: {
  padding: "60px 20px",
  maxWidth: "1100px",
  margin: "-45px auto", 
},
    twoCol: {
      display: "flex",
      flexWrap: "wrap",
      gap: "30px",
      alignItems: "center",
    },
    textCol: {
      flex: "1 1 60%",
    },
    imageCol: {
      flex: "1 1 35%",
    },
    heading: {
      fontSize: "1.rem",
      fontWeight: "600",
      marginBottom: "10px",
    },
    paragraph: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "#444",
    },
    chooseHeading: {
      textAlign: "center",
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "50px",
          color: "#111827",
          borderBottom: "4px solid #111827",
          //width:"fit-content"
    },
cardGrid: {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "stretch",
  flexWrap: "nowrap",
  gap: "58px",
  overflowX: "auto",
  paddingBottom: "10px",
  marginLeft: "-69px", // aligns to left
  width: "1397px",
  marginRight:"-69px"
},
card: {
  flex: "0 1 320px",  // fixed width, slightly bigger
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "20px",
  backgroundColor: "#fafafa",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.06)",
  transition: "transform 0.3s ease",
  marginTop: "25px",
},
cardImage: {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "6px",
  marginBottom: "12px",
},
cardButton: {
  marginTop: "16px",
  backgroundColor: "#FACC15",
  border: "none",
  padding: "12px 20px",
  fontSize: "1rem",
  fontWeight: "600",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
},
    howItWorks: {
  padding: "60px 20px",
  backgroundColor: "#ffffff",
  fontFamily: "sans-serif",
  marginBottom: "40px",
  marginTop: "-65px", 
},
    footer: {
      backgroundColor: "#1f2937",
      color: "#fff",
      padding: "40px 20px",
      marginTop: "50px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      borderTop: "1px solid #374151",
    },
    footerCol: {
      flex: "1 1 200px",
      marginBottom: "20px",
      marginLeft:"58px",
      fontSize:"1.4rem"
    },
    footerTitle: {
      fontWeight: "bold",
      marginBottom: "10px",
    },
    small: {
      fontSize: "0.9rem",
      lineHeight: "1.5",
    },
    aboutSection: {
  padding: "31px 55px",
  maxWidth: "1100px",
  margin: "0px auto",
  boxSizing: "border-box",
},

  };
  const causeCards = [
  {
    img: cause1,
    title: "Help the Needy Ones",
    description: "India's has a Huge amount of Street Beggars.Your support can provide food relief to them."
  },
  {
    img: cause2,
    title: "Food Relief For Helpless",
    description: "In India thousands of people live without access to food and at an imminent risk of hunger.Your donations can help us provide food relief to ones in need."
  },
  {
    img: cause3,
    title: "Feed India's Childern",
    description: "Childern across India are facing a threat of undernourishment. Your donation helps us nourish millions of childern with mid-day meals across thousands of ngo across India"
  },
  {
    img: cause4,
    title: "Aid The Elderly",
    description: "Our senior citizens are managing without any basic support. your generous donations can contribute to keep them safe."
  }
];


  return (
    <div style={styles.page}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <div style={styles.logo}>
  <img
    src={logo}
    alt="DonateVerse Logo"
    style={{
      width: "50px",
      height: "50px",
      objectFit: "contain"
    }}
  />
</div>
       <div style={styles.navContainer}>
  <div style={styles.navLinks}>
    <NavLink label="Home" href="#" />
    <NavLink label="About" href="#about" />
    <NavLink label="How it Works" href="#how" />
    <NavLink label="Contact" href="#contact" />
  </div>
  <div style={styles.navButtons}>
    <Link to="/ngologin">

    <button style={styles.navBtn}>Ngo Login</button>
    </Link>
  
  <Link to="/ngosignup">
    <button style={styles.navBtn}>Sign up</button>
  </Link>
</div>
</div>
</div>

      {/* Hero */}
      
      <div style={styles.hero}>
        <img src={heroImg} alt="Hero" style={styles.heroImage} />
        <div style={styles.heroText}>
          <div><h1 className="text-[62px] text-center leading-tight text-gray-900" style={{ fontFamily: "Jomhuria, sans-serif",fontSize:"135px",fontWeight:"320",lineHeight:"0.9", margin:"0",padding:"0", color:"white" }}>
                Inspiring Hope<br />Igniting Change</h1></div>
                <Link to="/donate">
          <button style={styles.donateBtn}>Donate</button></Link>
        </div>
      </div>

      {/* About */}
      
      <div style={styles.aboutSection}>

        <div style={styles.twoCol}>
          <div style={styles.textCol}>
            <h1></h1>
            <h1 style={styles.heading}>Our battle against hunger is humanity’s war for equality</h1>
            <p style={styles.paragraph}>
A country cannot progress if most of its people are hungry. Today, 14% of our population is undernourished and needs our undivided attention. The only way to ensure a healthy and happy country is by nourishing the ones who need it the most. Annamrita Foundation is an NGO working with an aim to provide food-relief and nourishment to the underprivileged communities of India.
At Annamrita, we exchange ‘Hunger for Hope’.<br/>

Your charity in the form of generous donations can help Annamrita provide nutritious mid-day meals and food-relief to the children and underprivileged sections of our society.            </p>
          </div>
          <div style={styles.imageCol}>
            <img src={sectionImg} alt="Chef" width="110%" height="200%" marginRight="200px" style={{ borderRadius: "8px" }} />
          </div>
        </div>
      </div>
      

     
{/* Choose A Cause */}
<div style={styles.section}>
  <div style={{ textAlign: "center" }}>
    <h1
      style={{
        display: "inline-block",
        fontSize: "2rem",
        fontWeight: "700",
        color: "#111827",
      }}
    >
      Choose A Cause
    </h1>
  </div>

  <div
    id="causeScroll"
    style={{
      display: "flex",
      overflowX: "auto",
      scrollBehavior: "smooth",
      gap: "24px",
      padding: "20px 40px",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      marginLeft:"-57px"
    }}
  >
    <style>
      {`
        #causeScroll::-webkit-scrollbar {
          display: none;
        }
      `}
    </style>
{causeCards.map((card, i) => (
      <div
        key={i}
        style={{
          minWidth: "320px",
          maxWidth: "320px",
          border: "1px solid #ccc",
          borderRadius: "12px",
          padding: "20px",
          backgroundColor: "#fafafa",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          flexShrink: 0,
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
<img
  src={card.img}
  alt={card.title}
  style={{
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "12px",
  }}
/>
<h4 style={{ marginBottom: "8px", fontSize: "1.1rem" }}>{card.title}</h4>
<p style={{ minHeight: "60px", fontSize: "0.95rem", lineHeight: "1.5" }}>
  {card.description}
</p>
        <button
          style={{
            marginTop: "12px",
            background: "#f9f9f8ff",
            padding: "10px 16px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "400",
            fontSize: "1.3rem",
            color:"#FACC15"
          }}
        >
          Donate Now 
        </button>
      </div>
    ))}
  </div>

  {/* Custom Arrows Below */}
  <div style={{ textAlign: "right", marginTop: "12px", paddingRight: "40px" }}>
    <button
      style={{
        background: "none",
        color: "gray",
        border: "none",
        borderRadius: "6px",
        width: "40px",
        height: "40px",
        fontSize: "1.5rem",
        marginRight: "10px",
        cursor: "pointer",
      }}
      onClick={() => {
        document.getElementById("causeScroll").scrollBy({ left: -360, behavior: "smooth" });
      }}
    >
      ‹
    </button>
    <button
      style={{
        background: "none",
        color: "gray",
        border: "none",
        borderRadius: "6px",
        width: "40px",
        height: "40px",
        fontSize: "1.5rem",
        cursor: "pointer",
      }}
      onClick={() => {
        document.getElementById("causeScroll").scrollBy({ left: 360, behavior: "smooth" });
      }}
    >
      ›
    </button>
  </div>
</div>



      {/* How it Works Section */}
      <section id="how-it-works">

      <div id="how">
      <div style={styles.howItWorks}>
        <h2 style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "50px",
          color: "#111827",

        }}>
          How it Works
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}>
          {[1, 2, 3].map((step) => {
            const content = {
              1: {
                title: "Sign Up",
                desc: "Register as a donor or NGO through a simple form to get started."
              },
              2: {
                title: "List or Request Donation",
                desc: "Restaurants list leftover food, NGOs browse and request it."
              },
              3: {
                title: "Schedule Pickup",
                desc: "NGO picks a time for collection and confirms donation with restaurant."
              }
            };
            return (
              <div key={step} style={{
                backgroundColor: "#F9FAFB",
                width: "300px",
                borderRadius: "12px",
                padding: "30px 25px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                transition: "transform 0.3s",
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <div style={{
                  width: "56px",
                  height: "56px",
                  margin: "0 auto 15px",
                  borderRadius: "50%",
                  backgroundColor: "#3B82F6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                  color: "#fff",
                  fontWeight: "600",
                }}>
                  {step}
                </div>
                <h4 style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  marginBottom: "8px",
                  color: "#1F2937"
                }}>{content[step].title}</h4>
                <p style={{
                  fontSize: "0.95rem",
                  color: "#4B5563",
                  lineHeight: "1.6"
                }}>{content[step].desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      </div>
      </section>

     {/* Mission Section */}
     <section id="about">
     <div id="about">
<div
  style={{
    padding: "60px 20px",
    maxWidth: "1100px",
    margin: "-58px auto",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
    borderRadius: "12px",
    marginBottom: "40px",
  }}
>
  <h2
    style={{
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "20px",
      position: "relative",
      display: "inline-block",
      color:"#111827"
    }}
  >
    About Our Initiative Our Mission
    
      
  </h2>
  <p
    style={{
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "#333",
      maxWidth: "800px",
      margin: "20px auto 0",
    }}
  >
    HeartPool bridges the gap between surplus and scarcity by connecting generous donors
    with those facing food insecurity in our local communities.
  </p>
  <p
    style={{
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "#333",
      maxWidth: "800px",
      margin: "20px auto 0",
    }}
  >
    What started as a simple food donation drive has now expanded to include clothing,
    books, and other essential items that can help uplift lives.
  </p>
</div>
</div>
</section>


      {/* Footer */}
<section id="contact">
      <div id="contact">
      <div style={styles.footer}>
        <div style={styles.footerCol}>
          <div style={styles.footerTitle}>Website Name</div>
          <div style={styles.small}>Donate Verse Foundation</div>
        </div>
        <div style={styles.footerCol}>
          <div style={styles.footerTitle}>Quick Links</div>
          <div style={styles.small}>About Us<br />How it Works<br />Donate<br />Contact</div>
        </div>
        <div style={styles.footerCol}>
          <div style={styles.footerTitle}>Resources</div>
          <div style={styles.small}>Blog<br />FAQs<br />Privacy Policy</div>
        </div>
        <div style={styles.footerCol}>
          <div style={styles.footerTitle}>Contact Us</div>
          <div style={styles.small}>donate@verse.org<br />+91-1234567890</div>
        </div>
      </div>
    </div>
    </section>
    </div>
    
  );
};

export default DonateVerseHome;
