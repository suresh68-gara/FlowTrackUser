

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext"; // Adjusted path to src/context/AuthContext.js

// function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(""); // Added error state for UI feedback
//   const [isHovered, setIsHovered] = useState(false);
//   const [activeInput, setActiveInput] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Floating animation elements
//   const [particles, setParticles] = useState([]);
//   const [orbs, setOrbs] = useState([]);

//   const navigate = useNavigate();
//   const { login } = useAuth();

//   useEffect(() => {
//     // Create floating particles
//     const newParticles = Array.from({ length: 20 }, (_, i) => ({
//       id: i,
//       size: Math.random() * 3 + 1,
//       left: Math.random() * 100,
//       animationDelay: Math.random() * 20,
//       duration: Math.random() * 15 + 10,
//       opacity: Math.random() * 0.6 + 0.2,
//     }));
//     setParticles(newParticles);

//     // Create floating orbs
//     const newOrbs = Array.from({ length: 8 }, (_, i) => ({
//       id: i,
//       size: Math.random() * 150 + 50,
//       left: Math.random() * 100,
//       top: Math.random() * 100,
//       animationDelay: Math.random() * 10,
//       duration: Math.random() * 20 + 15,
//     }));
//     setOrbs(newOrbs);

//     // Mouse move handler
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     // Basic client-side validation
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       setError("Please enter a valid email address.");
//       setIsLoading(false);
//       return;
//     }
//     if (password.length < 6) {
//       setError("Password must be at least 6 characters long.");
//       setIsLoading(false);
//       return;
//     }

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       const userData = {
//         name: email.split("@")[0],
//         email,
//         avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
//           email.split("@")[0]
//         )}&background=3B82F6&color=fff`,
//       };

//       // Update AuthContext and localStorage
//       login(userData);

//       console.log("Login successful:", userData);

//       // Navigate to ForYou page
//       navigate("/for-you", { replace: true });
//     } catch (error) {
//       console.error("Login failed:", error);
//       setError("Login failed. Please check your credentials.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const styles = {
//     container: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       minHeight: "100vh",
//       backgroundColor: "#0a0a0f",
//       background: `
//         radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
//         radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
//         radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%),
//         linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 25%, #16213e 50%, #0a0a0f 100%)
//       `,
//       padding: "20px",
//       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//       position: "relative",
//       overflow: "hidden",
//     },
//     backgroundOverlay: {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       background: `
//         radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
//       `,
//       transition: "background 0.3s ease",
//       pointerEvents: "none",
//     },
//     particlesContainer: {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       pointerEvents: "none",
//       zIndex: 1,
//     },
//     particle: {
//       position: "absolute",
//       background: "linear-gradient(45deg, #60a5fa, #a855f7)",
//       borderRadius: "50%",
//       animation: "floatParticles 20s infinite linear",
//       filter: "blur(1px)",
//     },
//     orb: {
//       position: "absolute",
//       borderRadius: "50%",
//       filter: "blur(40px)",
//       animation: "floatOrbs 25s infinite ease-in-out alternate",
//       opacity: 0.4,
//     },
//     meshGradient: {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       background: `
//         conic-gradient(from 180deg at 50% 50%, 
//           rgba(59, 130, 246, 0.1) 0deg,
//           rgba(168, 85, 247, 0.1) 60deg,
//           rgba(236, 72, 153, 0.1) 120deg,
//           rgba(59, 130, 246, 0.1) 180deg,
//           rgba(34, 197, 94, 0.1) 240deg,
//           rgba(59, 130, 246, 0.1) 360deg
//         )
//       `,
//       animation: "rotateMesh 30s linear infinite",
//       opacity: 0.6,
//       pointerEvents: "none",
//     },
//     card: {
//       backgroundColor: "rgba(15, 15, 25, 0.7)",
//       backdropFilter: "blur(25px)",
//       padding: "50px 40px",
//       borderRadius: "24px",
//       boxShadow: `
//         0 32px 64px -12px rgba(0, 0, 0, 0.4),
//         inset 0 1px 0 rgba(255, 255, 255, 0.1),
//         0 0 0 1px rgba(255, 255, 255, 0.05)
//       `,
//       width: "100%",
//       maxWidth: "420px",
//       border: "1px solid rgba(255, 255, 255, 0.08)",
//       position: "relative",
//       zIndex: 10,
//       animation: "slideUp 1s ease-out",
//     },
//     cardGlow: {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       right: 0,
//       height: "2px",
//       background: "linear-gradient(90deg, transparent, #60a5fa, #a855f7, transparent)",
//       animation: "cardGlow 4s ease-in-out infinite",
//       borderRadius: "24px 24px 0 0",
//     },
//     logo: {
//       textAlign: "center",
//       marginBottom: "40px",
//       animation: "fadeIn 1.2s ease-out",
//     },
//     logoText: {
//       fontSize: "44px",
//       fontWeight: "900",
//       background: "linear-gradient(135deg, #60A5FA 0%, #A855F7 50%, #EC4899 100%)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//       backgroundClip: "text",
//       margin: "0",
//       letterSpacing: "-0.02em",
//       animation: "textShimmer 3s ease-in-out infinite",
//     },
//     tagline: {
//       textAlign: "center",
//       color: "#94A3B8",
//       fontSize: "14px",
//       marginTop: "8px",
//       fontWeight: "400",
//       letterSpacing: "0.02em",
//     },
//     title: {
//       textAlign: "center",
//       marginBottom: "35px",
//       fontSize: "28px",
//       fontWeight: "700",
//       color: "#F1F5F9",
//       marginTop: "0",
//     },
//     inputGroup: {
//       marginBottom: "25px",
//       position: "relative",
//     },
//     label: {
//       display: "block",
//       marginBottom: "8px",
//       fontSize: "14px",
//       fontWeight: "600",
//       color: "#E2E8F0",
//       transition: "all 0.3s ease",
//     },
//     inputContainer: {
//       position: "relative",
//       transition: "all 0.3s ease",
//     },
//     input: {
//       width: "100%",
//       padding: "16px 50px 16px 20px",
//       borderRadius: "16px",
//       border: "2px solid rgba(255, 255, 255, 0.08)",
//       fontSize: "15px",
//       color: "#F1F5F9",
//       backgroundColor: "rgba(255, 255, 255, 0.03)",
//       transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//       boxSizing: "border-box",
//       fontFamily: "inherit",
//     },
//     inputFocus: {
//       borderColor: "rgba(96, 165, 250, 0.5)",
//       backgroundColor: "rgba(96, 165, 250, 0.05)",
//       boxShadow: "0 0 0 4px rgba(96, 165, 250, 0.1)",
//       transform: "translateY(-2px)",
//     },
//     inputIcon: {
//       position: "absolute",
//       right: "15px",
//       top: "50%",
//       transform: "translateY(-50%)",
//       color: "#94A3B8",
//       transition: "all 0.3s ease",
//       fontSize: "18px",
//       width: "20px",
//       height: "20px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     eyeIcon: {
//       position: "absolute",
//       right: "15px",
//       top: "50%",
//       transform: "translateY(-50%)",
//       color: "#94A3B8",
//       transition: "all 0.3s ease",
//       cursor: "pointer",
//       fontSize: "18px",
//       background: "none",
//       border: "none",
//       padding: "5px",
//       borderRadius: "8px",
//       width: "20px",
//       height: "20px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     eyeIconHover: {
//       backgroundColor: "rgba(96, 165, 250, 0.1)",
//       color: "#60A5FA",
//     },
//     button: {
//       width: "100%",
//       padding: "16px",
//       border: "none",
//       borderRadius: "16px",
//       background: "linear-gradient(135deg, #60A5FA 0%, #A855F7 50%, #EC4899 100%)",
//       color: "#FFFFFF",
//       fontWeight: "600",
//       fontSize: "15px",
//       cursor: "pointer",
//       transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//       position: "relative",
//       overflow: "hidden",
//       boxShadow: "0 8px 32px rgba(96, 165, 250, 0.3)",
//     },
//     buttonHover: {
//       transform: "translateY(-3px)",
//       boxShadow: "0 12px 40px rgba(96, 165, 250, 0.4)",
//       filter: "brightness(1.1)",
//     },
//     buttonDisabled: {
//       opacity: "0.6",
//       cursor: "not-allowed",
//       transform: "none",
//     },
//     buttonGlow: {
//       position: "absolute",
//       top: "0",
//       left: "-100%",
//       width: "100%",
//       height: "100%",
//       background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
//       transition: "left 0.6s ease",
//     },
//     loadingSpinner: {
//       width: "20px",
//       height: "20px",
//       border: "2px solid rgba(255,255,255,0.3)",
//       borderTop: "2px solid #FFFFFF",
//       borderRadius: "50%",
//       animation: "spin 1s linear infinite",
//       margin: "0 auto",
//     },
//     footer: {
//       textAlign: "center",
//       marginTop: "30px",
//       paddingTop: "25px",
//       borderTop: "1px solid rgba(255, 255, 255, 0.08)",
//     },
//     footerText: {
//       color: "#94A3B8",
//       fontSize: "12px",
//       margin: "0",
//     },
//     link: {
//       color: "#60A5FA",
//       textDecoration: "none",
//       fontWeight: "500",
//       transition: "all 0.3s ease",
//       position: "relative",
//     },
//     linkHover: {
//       color: "#A855F7",
//     },
//     errorText: {
//       color: "#EC4899",
//       textAlign: "center",
//       fontSize: "14px",
//       marginTop: "15px",
//     },
//   };

//   const isFormValid = email && password;
//   const [isEyeHovered, setIsEyeHovered] = useState(false);

//   // SVG Icons
//   const EmailIcon = () => (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//       <polyline points="22,6 12,13 2,6" />
//     </svg>
//   );

//   const EyeIcon = () => (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   );

//   const EyeOffIcon = () => (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
//       <line x1="1" y1="1" x2="23" y2="23" />
//     </svg>
//   );

//   const LockIcon = () => (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
//       <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//     </svg>
//   );

//   return (
//     <div style={styles.container}>
//       {/* Background Effects */}
//       <div style={styles.backgroundOverlay} />
//       <div style={styles.meshGradient} />

//       {/* Floating Orbs */}
//       <div style={styles.particlesContainer}>
//         {orbs.map((orb) => (
//           <div
//             key={`orb-${orb.id}`}
//             style={{
//               ...styles.orb,
//               width: `${orb.size}px`,
//               height: `${orb.size}px`,
//               left: `${orb.left}%`,
//               top: `${orb.top}%`,
//               background:
//                 orb.id % 3 === 0
//                   ? "radial-gradient(circle, #60a5fa, #3b82f6)"
//                   : orb.id % 3 === 1
//                   ? "radial-gradient(circle, #a855f7, #8b5cf6)"
//                   : "radial-gradient(circle, #ec4899, #f43f5e)",
//               animationDelay: `${orb.animationDelay}s`,
//               animationDuration: `${orb.duration}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Animated Particles */}
//       <div style={styles.particlesContainer}>
//         {particles.map((particle) => (
//           <div
//             key={particle.id}
//             style={{
//               ...styles.particle,
//               width: `${particle.size}px`,
//               height: `${particle.size}px`,
//               left: `${particle.left}%`,
//               top: "-20px",
//               opacity: particle.opacity,
//               animationDelay: `${particle.animationDelay}s`,
//               animationDuration: `${particle.duration}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Login Card */}
//       <div style={styles.card}>
//         <div style={styles.cardGlow} />

//         {/* Logo Section */}
//         <div style={styles.logo}>
//           <h1 style={styles.logoText}>Flow Track</h1>
//           <p style={styles.tagline}>Modern Project Management Solution</p>
//         </div>

//         <h2 style={styles.title}>Welcome User</h2>

//         <form onSubmit={handleSubmit}>
//           {/* Email Input */}
//           <div style={styles.inputGroup}>
//             <label htmlFor="email" style={styles.label}>
//               Email Address
//             </label>
//             <div style={styles.inputContainer}>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 onFocus={() => setActiveInput("email")}
//                 onBlur={() => setActiveInput(null)}
//                 style={{
//                   ...styles.input,
//                   ...(activeInput === "email" || email ? styles.inputFocus : {}),
//                 }}
//                 aria-label="Email address"
//                 disabled={isLoading}
//               />
//               <span style={styles.inputIcon}>
//                 <EmailIcon />
//               </span>
//             </div>
//           </div>

//           {/* Password Input */}
//           <div style={styles.inputGroup}>
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//               <label htmlFor="password" style={styles.label}>
//                 Password
//               </label>
//             </div>
//             <div style={styles.inputContainer}>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 onFocus={() => setActiveInput("password")}
//                 onBlur={() => setActiveInput(null)}
//                 style={{
//                   ...styles.input,
//                   ...(activeInput === "password" || password ? styles.inputFocus : {}),
//                 }}
//                 aria-label="Password"
//                 disabled={isLoading}
//               />
//               <span style={styles.inputIcon}>
//                 <LockIcon />
//               </span>
//               <button
//                 type="button"
//                 style={{
//                   ...styles.eyeIcon,
//                   ...(isEyeHovered ? styles.eyeIconHover : {}),
//                 }}
//                 onClick={togglePasswordVisibility}
//                 onMouseEnter={() => setIsEyeHovered(true)}
//                 onMouseLeave={() => setIsEyeHovered(false)}
//                 title={showPassword ? "Hide password" : "Show password"}
//                 disabled={isLoading}
//               >
//                 {showPassword ? <EyeOffIcon /> : <EyeIcon />}
//               </button>
//             </div>
//           </div>

//           {/* Error Message */}
//           {error && <p style={styles.errorText}>{error}</p>}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             style={{
//               ...styles.button,
//               ...(isFormValid && !isLoading && isHovered ? styles.buttonHover : {}),
//               ...(!isFormValid || isLoading ? styles.buttonDisabled : {}),
//             }}
//             disabled={!isFormValid || isLoading}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             {isLoading ? (
//               <div style={styles.loadingSpinner}></div>
//             ) : (
//               <>
//                 Sign In
//                 <div
//                   style={{
//                     ...styles.buttonGlow,
//                     left: isHovered ? "100%" : "-100%",
//                   }}
//                 />
//               </>
//             )}
//           </button>
//         </form>

//         {/* Footer */}
//         <div style={styles.footer}>
//           <p style={styles.footerText}>
//             New to Flow Track?{" "}
//             <a
//               href="#"
//               style={styles.link}
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               Get started
//             </a>
//           </p>
//           <p style={{ ...styles.footerText, marginTop: "10px" }}>
//             © 2025 Vunathi Technologies Pvt Ltd
//           </p>
//         </div>
//       </div>

//       {/* Enhanced CSS Animations */}
//       <style>
//         {`
//           @keyframes floatParticles {
//             0% {
//               transform: translateY(0) rotate(0deg);
//               opacity: 0;
//             }
//             10% {
//               opacity: 1;
//             }
//             90% {
//               opacity: 1;
//             }
//             100% {
//               transform: translateY(100vh) rotate(360deg);
//               opacity: 0;
//             }
//           }

//           @keyframes floatOrbs {
//             0% {
//               transform: translateY(0px) translateX(0px) scale(1);
//             }
//             50% {
//               transform: translateY(-50px) translateX(30px) scale(1.1);
//             }
//             100% {
//               transform: translateY(-20px) translateX(-20px) scale(0.9);
//             }
//           }

//           @keyframes rotateMesh {
//             0% {
//               transform: rotate(0deg);
//             }
//             100% {
//               transform: rotate(360deg);
//             }
//           }

//           @keyframes textShimmer {
//             0%, 100% {
//               background-position: 0% 50%;
//             }
//             50% {
//               background-position: 100% 50%;
//             }
//           }

//           @keyframes cardGlow {
//             0%, 100% {
//               opacity: 0.5;
//               transform: scaleX(0.8);
//             }
//             50% {
//               opacity: 1;
//               transform: scaleX(1);
//             }
//           }

//           @keyframes slideUp {
//             0% {
//               opacity: 0;
//               transform: translateY(40px) scale(0.95);
//             }
//             100% {
//               opacity: 1;
//               transform: translateY(0) scale(1);
//             }
//           }

//           @keyframes fadeIn {
//             0% {
//               opacity: 0;
//               transform: scale(0.9);
//             }
//             100% {
//               opacity: 1;
//               transform: scale(1);
//             }
//           }

//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }

//           input:focus {
//             outline: none !important;
//           }

//           button:hover:not(:disabled) {
//             transform: translateY(-3px) !important;
//           }

//           a:hover {
//             color: #A855F7 !important;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default LoginPage;




//responsiveness
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Adjusted path to src/context/AuthContext.js

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); // Added error state for UI feedback
  const [isHovered, setIsHovered] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Floating animation elements
  const [particles, setParticles] = useState([]);
  const [orbs, setOrbs] = useState([]);

  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Create floating particles (adjust count based on screen size)
    const particleCount = windowSize.width < 768 ? 12 : 20;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      animationDelay: Math.random() * 20,
      duration: Math.random() * 15 + 10,
      opacity: Math.random() * 0.6 + 0.2,
    }));
    setParticles(newParticles);

    // Create floating orbs (adjust count and size based on screen size)
    const orbCount = windowSize.width < 768 ? 5 : 8;
    const maxOrbSize = windowSize.width < 768 ? 100 : 150;
    const newOrbs = Array.from({ length: orbCount }, (_, i) => ({
      id: i,
      size: Math.random() * maxOrbSize + 50,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 10,
      duration: Math.random() * 20 + 15,
    }));
    setOrbs(newOrbs);

    // Mouse move handler
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize.width]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basic client-side validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const userData = {
        name: email.split("@")[0],
        email,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
          email.split("@")[0]
        )}&background=3B82F6&color=fff`,
      };

      // Update AuthContext and localStorage
      login(userData);

      console.log("Login successful:", userData);

      // Navigate to ForYou page
      navigate("/for-you", { replace: true });
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#0a0a0f",
      background: `
        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%),
        linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 25%, #16213e 50%, #0a0a0f 100%)
      `,
      padding: isMobile ? "16px" : "20px",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      position: "relative",
      overflow: "hidden",
    },
    backgroundOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: `
        radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
      `,
      transition: "background 0.3s ease",
      pointerEvents: "none",
    },
    particlesContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: 1,
    },
    particle: {
      position: "absolute",
      background: "linear-gradient(45deg, #60a5fa, #a855f7)",
      borderRadius: "50%",
      animation: "floatParticles 20s infinite linear",
      filter: "blur(1px)",
    },
    orb: {
      position: "absolute",
      borderRadius: "50%",
      filter: "blur(40px)",
      animation: "floatOrbs 25s infinite ease-in-out alternate",
      opacity: 0.4,
    },
    meshGradient: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: `
        conic-gradient(from 180deg at 50% 50%, 
          rgba(59, 130, 246, 0.1) 0deg,
          rgba(168, 85, 247, 0.1) 60deg,
          rgba(236, 72, 153, 0.1) 120deg,
          rgba(59, 130, 246, 0.1) 180deg,
          rgba(34, 197, 94, 0.1) 240deg,
          rgba(59, 130, 246, 0.1) 360deg
        )
      `,
      animation: "rotateMesh 30s linear infinite",
      opacity: isMobile ? 0.3 : 0.6,
      pointerEvents: "none",
    },
    card: {
      backgroundColor: "rgba(15, 15, 25, 0.7)",
      backdropFilter: "blur(25px)",
      padding: isMobile ? "30px 24px" : isTablet ? "40px 32px" : "50px 40px",
      borderRadius: isMobile ? "20px" : "24px",
      boxShadow: `
        0 32px 64px -12px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.05)
      `,
      width: "100%",
      maxWidth: isMobile ? "340px" : isTablet ? "380px" : "420px",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      position: "relative",
      zIndex: 10,
      animation: "slideUp 1s ease-out",
    },
    cardGlow: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "2px",
      background: "linear-gradient(90deg, transparent, #60a5fa, #a855f7, transparent)",
      animation: "cardGlow 4s ease-in-out infinite",
      borderRadius: isMobile ? "20px 20px 0 0" : "24px 24px 0 0",
    },
    logo: {
      textAlign: "center",
      marginBottom: isMobile ? "30px" : "40px",
      animation: "fadeIn 1.2s ease-out",
    },
    logoText: {
      fontSize: isMobile ? "36px" : "44px",
      fontWeight: "900",
      background: "linear-gradient(135deg, #60A5FA 0%, #A855F7 50%, #EC4899 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      margin: "0",
      letterSpacing: "-0.02em",
      animation: "textShimmer 3s ease-in-out infinite",
    },
    tagline: {
      textAlign: "center",
      color: "#94A3B8",
      fontSize: isMobile ? "12px" : "14px",
      marginTop: "8px",
      fontWeight: "400",
      letterSpacing: "0.02em",
    },
    title: {
      textAlign: "center",
      marginBottom: isMobile ? "25px" : "35px",
      fontSize: isMobile ? "24px" : "28px",
      fontWeight: "700",
      color: "#F1F5F9",
      marginTop: "0",
    },
    inputGroup: {
      marginBottom: isMobile ? "20px" : "25px",
      position: "relative",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontSize: isMobile ? "13px" : "14px",
      fontWeight: "600",
      color: "#E2E8F0",
      transition: "all 0.3s ease",
    },
    inputContainer: {
      position: "relative",
      transition: "all 0.3s ease",
    },
    input: {
      width: "100%",
      padding: isMobile ? "14px 45px 14px 16px" : "16px 50px 16px 20px",
      borderRadius: isMobile ? "14px" : "16px",
      border: "2px solid rgba(255, 255, 255, 0.08)",
      fontSize: isMobile ? "14px" : "15px",
      color: "#F1F5F9",
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      boxSizing: "border-box",
      fontFamily: "inherit",
    },
    inputFocus: {
      borderColor: "rgba(96, 165, 250, 0.5)",
      backgroundColor: "rgba(96, 165, 250, 0.05)",
      boxShadow: "0 0 0 4px rgba(96, 165, 250, 0.1)",
      transform: "translateY(-2px)",
    },
    inputIcon: {
      position: "absolute",
      right: isMobile ? "12px" : "15px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#94A3B8",
      transition: "all 0.3s ease",
      fontSize: isMobile ? "16px" : "18px",
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    eyeIcon: {
      position: "absolute",
      right: isMobile ? "12px" : "15px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#94A3B8",
      transition: "all 0.3s ease",
      cursor: "pointer",
      fontSize: isMobile ? "16px" : "18px",
      background: "none",
      border: "none",
      padding: "5px",
      borderRadius: "8px",
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    eyeIconHover: {
      backgroundColor: "rgba(96, 165, 250, 0.1)",
      color: "#60A5FA",
    },
    button: {
      width: "100%",
      padding: isMobile ? "14px" : "16px",
      border: "none",
      borderRadius: isMobile ? "14px" : "16px",
      background: "linear-gradient(135deg, #60A5FA 0%, #A855F7 50%, #EC4899 100%)",
      color: "#FFFFFF",
      fontWeight: "600",
      fontSize: isMobile ? "14px" : "15px",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 8px 32px rgba(96, 165, 250, 0.3)",
    },
    buttonHover: {
      transform: "translateY(-3px)",
      boxShadow: "0 12px 40px rgba(96, 165, 250, 0.4)",
      filter: "brightness(1.1)",
    },
    buttonDisabled: {
      opacity: "0.6",
      cursor: "not-allowed",
      transform: "none",
    },
    buttonGlow: {
      position: "absolute",
      top: "0",
      left: "-100%",
      width: "100%",
      height: "100%",
      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
      transition: "left 0.6s ease",
    },
    loadingSpinner: {
      width: "20px",
      height: "20px",
      border: "2px solid rgba(255,255,255,0.3)",
      borderTop: "2px solid #FFFFFF",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
      margin: "0 auto",
    },
    footer: {
      textAlign: "center",
      marginTop: isMobile ? "20px" : "30px",
      paddingTop: isMobile ? "20px" : "25px",
      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
    },
    footerText: {
      color: "#94A3B8",
      fontSize: isMobile ? "11px" : "12px",
      margin: "0",
      lineHeight: "1.4",
    },
    link: {
      color: "#60A5FA",
      textDecoration: "none",
      fontWeight: "500",
      transition: "all 0.3s ease",
      position: "relative",
    },
    linkHover: {
      color: "#A855F7",
    },
    errorText: {
      color: "#EC4899",
      textAlign: "center",
      fontSize: isMobile ? "13px" : "14px",
      marginTop: "15px",
    },
  };

  const isFormValid = email && password;
  const [isEyeHovered, setIsEyeHovered] = useState(false);

  // SVG Icons
  const EmailIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  const EyeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  const EyeOffIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );

  const LockIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );

  return (
    <div style={styles.container}>
      {/* Background Effects */}
      <div style={styles.backgroundOverlay} />
      <div style={styles.meshGradient} />

      {/* Floating Orbs */}
      <div style={styles.particlesContainer}>
        {orbs.map((orb) => (
          <div
            key={`orb-${orb.id}`}
            style={{
              ...styles.orb,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              left: `${orb.left}%`,
              top: `${orb.top}%`,
              background:
                orb.id % 3 === 0
                  ? "radial-gradient(circle, #60a5fa, #3b82f6)"
                  : orb.id % 3 === 1
                  ? "radial-gradient(circle, #a855f7, #8b5cf6)"
                  : "radial-gradient(circle, #ec4899, #f43f5e)",
              animationDelay: `${orb.animationDelay}s`,
              animationDuration: `${orb.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Particles */}
      <div style={styles.particlesContainer}>
        {particles.map((particle) => (
          <div
            key={particle.id}
            style={{
              ...styles.particle,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              top: "-20px",
              opacity: particle.opacity,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Login Card */}
      <div style={styles.card}>
        <div style={styles.cardGlow} />

        {/* Logo Section */}
        <div style={styles.logo}>
          <h1 style={styles.logoText}>Flow Track</h1>
          <p style={styles.tagline}>Modern Project Management Solution</p>
        </div>

        <h2 style={styles.title}>Welcome User</h2>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>
              Email Address
            </label>
            <div style={styles.inputContainer}>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setActiveInput("email")}
                onBlur={() => setActiveInput(null)}
                style={{
                  ...styles.input,
                  ...(activeInput === "email" || email ? styles.inputFocus : {}),
                }}
                aria-label="Email address"
                disabled={isLoading}
              />
              <span style={styles.inputIcon}>
                <EmailIcon />
              </span>
            </div>
          </div>

          {/* Password Input */}
          <div style={styles.inputGroup}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label htmlFor="password" style={styles.label}>
                Password
              </label>
            </div>
            <div style={styles.inputContainer}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setActiveInput("password")}
                onBlur={() => setActiveInput(null)}
                style={{
                  ...styles.input,
                  ...(activeInput === "password" || password ? styles.inputFocus : {}),
                }}
                aria-label="Password"
                disabled={isLoading}
              />
              <span style={styles.inputIcon}>
                <LockIcon />
              </span>
              <button
                type="button"
                style={{
                  ...styles.eyeIcon,
                  ...(isEyeHovered ? styles.eyeIconHover : {}),
                }}
                onClick={togglePasswordVisibility}
                onMouseEnter={() => setIsEyeHovered(true)}
                onMouseLeave={() => setIsEyeHovered(false)}
                title={showPassword ? "Hide password" : "Show password"}
                disabled={isLoading}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && <p style={styles.errorText}>{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              ...styles.button,
              ...(isFormValid && !isLoading && isHovered ? styles.buttonHover : {}),
              ...(!isFormValid || isLoading ? styles.buttonDisabled : {}),
            }}
            disabled={!isFormValid || isLoading}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isLoading ? (
              <div style={styles.loadingSpinner}></div>
            ) : (
              <>
                Sign In
                <div
                  style={{
                    ...styles.buttonGlow,
                    left: isHovered ? "100%" : "-100%",
                  }}
                />
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            New to Flow Track?{" "}
            <a
              href="#"
              style={styles.link}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get started
            </a>
          </p>
          <p style={{ ...styles.footerText, marginTop: "10px" }}>
            © 2025 Vunathi Technologies Pvt Ltd
          </p>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style>
        {`
          @keyframes floatParticles {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes floatOrbs {
            0% {
              transform: translateY(0px) translateX(0px) scale(1);
            }
            50% {
              transform: translateY(-50px) translateX(30px) scale(1.1);
            }
            100% {
              transform: translateY(-20px) translateX(-20px) scale(0.9);
            }
          }

          @keyframes rotateMesh {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes textShimmer {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          @keyframes cardGlow {
            0%, 100% {
              opacity: 0.5;
              transform: scaleX(0.8);
            }
            50% {
              opacity: 1;
              transform: scaleX(1);
            }
          }

          @keyframes slideUp {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          input:focus {
            outline: none !important;
          }

          button:hover:not(:disabled) {
            transform: translateY(-3px) !important;
          }

          a:hover {
            color: #A855F7 !important;
          }

          /* Mobile-specific optimizations */
          @media (max-width: 767px) {
            @keyframes floatOrbs {
              0% {
                transform: translateY(0px) translateX(0px) scale(1);
              }
              50% {
                transform: translateY(-30px) translateX(20px) scale(1.05);
              }
              100% {
                transform: translateY(-15px) translateX(-15px) scale(0.95);
              }
            }
            
            @keyframes cardGlow {
              0%, 100% {
                opacity: 0.3;
                transform: scaleX(0.6);
              }
              50% {
                opacity: 0.8;
                transform: scaleX(0.9);
              }
            }
          }

          /* Tablet-specific optimizations */
          @media (min-width: 768px) and (max-width: 1023px) {
            @keyframes cardGlow {
              0%, 100% {
                opacity: 0.4;
                transform: scaleX(0.7);
              }
              50% {
                opacity: 0.9;
                transform: scaleX(1);
              }
            }
          }
        `}
      </style>
    </div>
  );
}

export default LoginPage;














