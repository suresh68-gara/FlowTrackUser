
// import React, { useEffect, useState } from 'react';
// import { useAuth } from "../../context/AuthContext";

// export default function ForYou() {
//   const [user, setUser] = useState(null);
//   const [recentlyViewed, setRecentlyViewed] = useState([]);
//   const [yourBoards, setYourBoards] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [particles, setParticles] = useState([]);
//   const [orbs, setOrbs] = useState([]);

//   const { user: authUser } = useAuth();

//   useEffect(() => {
//     // Create floating particles
//     const newParticles = Array.from({ length: 15 }, (_, i) => ({
//       id: i,
//       size: Math.random() * 3 + 1,
//       left: Math.random() * 100,
//       animationDelay: Math.random() * 20,
//       duration: Math.random() * 15 + 10,
//       opacity: Math.random() * 0.6 + 0.2,
//     }));
//     setParticles(newParticles);

//     // Create floating orbs
//     const newOrbs = Array.from({ length: 6 }, (_, i) => ({
//       id: i,
//       size: Math.random() * 120 + 40,
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

//   useEffect(() => {
//     // Initialize empty data structures
//     setRecentlyViewed([]);
//     setYourBoards([]);
    
//     // Simulate API call to backend
//     const fetchData = async () => {
//       try {
//         setLoading(true);
        
//         // Use auth user data if available
//         if (authUser) {
//           setUser(authUser);
//         } else {
//           setUser({ name: "" });
//         }
        
//         setTimeout(() => {
//           setLoading(false);
//         }, 1000);
        
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [authUser]);

//   const styles = {
//     container: {
//       minHeight: "100vh",
//       backgroundColor: "#0a0a0f",
//       background: `
//         radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
//         radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
//         radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%),
//         linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 25%, #16213e 50%, #0a0a0f 100%)
//       `,
//       padding: "2rem",
//       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//       position: "relative",
//       overflow: "hidden"
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
//     content: {
//       position: "relative",
//       zIndex: 10,
//       maxWidth: "1400px",
//       margin: "0 auto"
//     },
//     welcomeTitle: {
//       fontSize: "3rem",
//       fontWeight: "800",
//       background: "linear-gradient(135deg, #60A5FA 0%, #A855F7 50%, #EC4899 100%)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//       backgroundClip: "text",
//       margin: "0 0 0.5rem 0",
//       animation: "fadeInUp 1s ease-out, textShimmer 3s ease-in-out infinite",
//       textShadow: "0 2px 20px rgba(96, 165, 250, 0.3)"
//     },
//     subtitle: {
//       color: "rgba(255, 255, 255, 0.8)",
//       fontSize: "1.2rem",
//       fontWeight: "400",
//       margin: "0 0 3rem 0",
//       animation: "fadeInUp 1.2s ease-out"
//     },
//     cardsContainer: {
//       display: "grid",
//       gridTemplateColumns: "1fr 1fr",
//       gap: "2rem",
//       marginBottom: "2rem"
//     },
//     card: {
//       // backgroundColor: "rgba(15, 15, 25, 0.7)",
//       // backgroundColor: "rgba(255, 255, 255, 0.8)",
//       backdropFilter: "blur(25px)",
//       padding: "2.5rem",
//       borderRadius: "24px",
//       border: "1px solid rgba(255, 255, 255, 0.08)",
//       boxShadow: `
//         0 32px 64px -12px rgba(0, 0, 0, 0.4),
//         inset 0 1px 0 rgba(255, 255, 255, 0.1),
//         0 0 0 1px rgba(255, 255, 255, 0.05)
//       `,
//       position: "relative",
//       animation: "slideUp 1.4s ease-out",
//       overflow: "hidden",
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
//     cardHeader: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       marginBottom: "2rem"
//     },
//     cardTitle: {
//       fontSize: "1.5rem",
//       fontWeight: "700",
//       color: "#F1F5F9",
//       margin: "0",
//       display: "flex",
//       alignItems: "center",
//       gap: "0.5rem"
//     },
//     boardList: {
//       listStyle: "none",
//       padding: "0",
//       margin: "0",
//       display: "flex",
//       flexDirection: "column",
//       gap: "1rem"
//     },
//     boardItem: {
//       padding: "1.25rem",
//       background: "rgba(255, 255, 255, 0.05)",
//       borderRadius: "16px",
//       border: "1px solid rgba(255, 255, 255, 0.08)",
//       transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//       cursor: "pointer",
//       backdropFilter: "blur(10px)",
//     },
//     boardItemHover: {
//       background: "rgba(96, 165, 250, 0.1)",
//       borderColor: "rgba(96, 165, 250, 0.3)",
//       transform: "translateY(-2px)",
//       boxShadow: "0 8px 32px rgba(96, 165, 250, 0.2)",
//     },
//     boardTitle: {
//       fontSize: "1rem",
//       fontWeight: "600",
//       color: "#F1F5F9",
//       margin: "0 0 0.5rem 0",
//       display: "flex",
//       alignItems: "center",
//       gap: "0.75rem"
//     },
//     boardMeta: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       fontSize: "0.85rem",
//     },
//     teamBadge: {
//       padding: "0.3rem 0.75rem",
//       borderRadius: "12px",
//       fontSize: "0.8rem",
//       fontWeight: "600",
//       background: "rgba(96, 165, 250, 0.2)",
//       color: "#60A5FA",
//       border: "1px solid rgba(96, 165, 250, 0.3)",
//     },
//     itemsCount: {
//       padding: "0.3rem 0.75rem",
//       borderRadius: "12px",
//       fontSize: "0.8rem",
//       fontWeight: "600",
//       background: "rgba(168, 85, 247, 0.2)",
//       color: "#A855F7",
//       border: "1px solid rgba(168, 85, 247, 0.3)",
//     },
//     colorIndicator: {
//       width: "4px",
//       height: "20px",
//       borderRadius: "2px",
//       background: "linear-gradient(135deg, #60A5FA, #A855F7)",
//     },
//     emptyState: {
//       textAlign: "center",
//       color: "rgba(255, 255, 255, 0.6)",
//       padding: "3rem 1rem",
//       fontSize: "1rem",
//       fontStyle: "italic",
//     },
//     loadingSpinner: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       padding: "5rem",
//       color: "#FFFFFF",
//       position: "relative",
//       zIndex: 10,
//     },
//     spinner: {
//       width: "50px",
//       height: "50px",
//       border: "3px solid rgba(255, 255, 255, 0.3)",
//       borderTop: "3px solid #60A5FA",
//       borderRadius: "50%",
//       animation: "spin 1s linear infinite",
//     },
//     viewAllButton: {
//       background: "rgba(96, 165, 250, 0.1)",
//       border: "1px solid rgba(96, 165, 250, 0.3)",
//       color: "#60A5FA",
//       padding: "0.5rem 1rem",
//       borderRadius: "12px",
//       fontSize: "0.9rem",
//       fontWeight: "600",
//       cursor: "pointer",
//       transition: "all 0.3s ease",
//     },
//     viewAllButtonHover: {
//       background: "rgba(96, 165, 250, 0.2)",
//       transform: "translateY(-1px)",
//     },
//   };

//   const [hoveredBoard, setHoveredBoard] = useState(null);
//   const [isViewAllHovered, setIsViewAllHovered] = useState(false);

//   if (loading) {
//     return (
//       <div style={styles.container}>
//         <div style={styles.backgroundOverlay} />
//         <div style={styles.meshGradient} />
        
//         <div style={styles.particlesContainer}>
//           {orbs.map((orb) => (
//             <div
//               key={`orb-${orb.id}`}
//               style={{
//                 ...styles.orb,
//                 width: `${orb.size}px`,
//                 height: `${orb.size}px`,
//                 left: `${orb.left}%`,
//                 top: `${orb.top}%`,
//                 background:
//                   orb.id % 3 === 0
//                     ? "radial-gradient(circle, #60a5fa, #3b82f6)"
//                     : orb.id % 3 === 1
//                     ? "radial-gradient(circle, #a855f7, #8b5cf6)"
//                     : "radial-gradient(circle, #ec4899, #f43f5e)",
//                 animationDelay: `${orb.animationDelay}s`,
//                 animationDuration: `${orb.duration}s`,
//               }}
//             />
//           ))}
//         </div>

//         <div style={styles.loadingSpinner}>
//           <div style={styles.spinner}></div>
//         </div>
        
//         <style>
//           {`
//             @keyframes spin {
//               0% { transform: rotate(0deg); }
//               100% { transform: rotate(360deg); }
//             }
//           `}
//         </style>
//       </div>
//     );
//   }

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

//       <div style={styles.content}>
//         {/* Header */}
//         <h1 style={styles.welcomeTitle}>
//           👋 Welcome{user?.name ? `, ${user.name}` : ''}
//         </h1>
//         <p style={styles.subtitle}>Your workspace at a glance</p>

//         {/* Two Column Layout */}
//         <div style={styles.cardsContainer}>
//           {/* Recently Viewed Card */}
//           <div style={styles.card}>
//             <div style={styles.cardGlow} />
//             <div style={styles.cardHeader}>
//               <h2 style={styles.cardTitle}>🕒 Recently Viewed</h2>
//               <button 
//                 style={{
//                   ...styles.viewAllButton,
//                   ...(isViewAllHovered ? styles.viewAllButtonHover : {})
//                 }}
//                 onMouseEnter={() => setIsViewAllHovered(true)}
//                 onMouseLeave={() => setIsViewAllHovered(false)}
//               >
//                 View All
//               </button>
//             </div>
//             <ul style={styles.boardList}>
//               {recentlyViewed.length > 0 ? (
//                 recentlyViewed.map((board) => (
//                   <li 
//                     key={board.id} 
//                     style={{
//                       ...styles.boardItem,
//                       ...(hoveredBoard === board.id ? styles.boardItemHover : {})
//                     }} 
//                     onMouseEnter={() => setHoveredBoard(board.id)}
//                     onMouseLeave={() => setHoveredBoard(null)}
//                   >
//                     <div style={styles.boardTitle}>
//                       <div style={styles.colorIndicator} />
//                       {board.title}
//                     </div>
//                     <div style={styles.boardMeta}>
//                       <span style={styles.teamBadge}>{board.team || "Team"}</span>
//                       <span style={{color: "rgba(255, 255, 255, 0.7)"}}>
//                         Viewed {board.lastViewed || "recently"}
//                       </span>
//                     </div>
//                   </li>
//                 ))
//               ) : (
//                 <li style={styles.emptyState}>No recently viewed boards</li>
//               )}
//             </ul>
//           </div>

//           {/* Your Boards Card */}
//           <div style={styles.card}>
//             <div style={styles.cardGlow} />
//             <div style={styles.cardHeader}>
//               <h2 style={styles.cardTitle}>🗂️ Your Boards</h2>
//               <button 
//                 style={{
//                   ...styles.viewAllButton,
//                   ...(isViewAllHovered ? styles.viewAllButtonHover : {})
//                 }}
//                 onMouseEnter={() => setIsViewAllHovered(true)}
//                 onMouseLeave={() => setIsViewAllHovered(false)}
//               >
//                 View All
//               </button>
//             </div>
//             <ul style={styles.boardList}>
//               {yourBoards.length > 0 ? (
//                 yourBoards.map((board) => (
//                   <li 
//                     key={board.id} 
//                     style={{
//                       ...styles.boardItem,
//                       ...(hoveredBoard === board.id ? styles.boardItemHover : {})
//                     }}
//                     onMouseEnter={() => setHoveredBoard(board.id)}
//                     onMouseLeave={() => setHoveredBoard(null)}
//                   >
//                     <div style={styles.boardTitle}>
//                       <div style={styles.colorIndicator} />
//                       {board.title}
//                     </div>
//                     <div style={styles.boardMeta}>
//                       <span style={styles.itemsCount}>
//                         {board.items || 0} items
//                       </span>
//                       <span style={{color: "rgba(255, 255, 255, 0.7)"}}>
//                         Updated {board.updated || "recently"}
//                       </span>
//                     </div>
//                   </li>
//                 ))
//               ) : (
//                 <li style={styles.emptyState}>No boards created yet</li>
//               )}
//             </ul>
//           </div>
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

//           @keyframes fadeInUp {
//             0% {
//               opacity: 0;
//               transform: translateY(20px);
//             }
//             100% {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }

//           button:hover:not(:disabled) {
//             transform: translateY(-1px) !important;
//           }
//         `}
//       </style>
//     </div>
//   );
// }








//responsiveness
// import React, { useEffect, useState } from 'react';
// import { useAuth } from "../../context/AuthContext";

// export default function ForYou() {
//   const [user, setUser] = useState(null);
//   const [recentlyViewed, setRecentlyViewed] = useState([]);
//   const [yourBoards, setYourBoards] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [particles, setParticles] = useState([]);
//   const [orbs, setOrbs] = useState([]);
//   const [isMobile, setIsMobile] = useState(false);

//   const { user: authUser } = useAuth();

//   useEffect(() => {
//     // Check if mobile on mount and resize
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener('resize', checkMobile);

//     // Create floating particles (fewer on mobile)
//     const particleCount = window.innerWidth < 768 ? 8 : 15;
//     const newParticles = Array.from({ length: particleCount }, (_, i) => ({
//       id: i,
//       size: Math.random() * 3 + 1,
//       left: Math.random() * 100,
//       animationDelay: Math.random() * 20,
//       duration: Math.random() * 15 + 10,
//       opacity: Math.random() * 0.6 + 0.2,
//     }));
//     setParticles(newParticles);

//     // Create floating orbs (fewer and smaller on mobile)
//     const orbCount = window.innerWidth < 768 ? 3 : 6;
//     const orbSize = window.innerWidth < 768 ? 
//       Math.random() * 60 + 20 : 
//       Math.random() * 120 + 40;
    
//     const newOrbs = Array.from({ length: orbCount }, (_, i) => ({
//       id: i,
//       size: orbSize,
//       left: Math.random() * 100,
//       top: Math.random() * 100,
//       animationDelay: Math.random() * 10,
//       duration: Math.random() * 20 + 15,
//     }));
//     setOrbs(newOrbs);

//     // Mouse move handler (desktop only)
//     const handleMouseMove = (e) => {
//       if (window.innerWidth >= 768) {
//         setMousePosition({
//           x: (e.clientX / window.innerWidth) * 100,
//           y: (e.clientY / window.innerHeight) * 100,
//         });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener('resize', checkMobile);
//     };
//   }, []);

//   useEffect(() => {
//     // Initialize empty data structures
//     setRecentlyViewed([]);
//     setYourBoards([]);
    
//     // Simulate API call to backend
//     const fetchData = async () => {
//       try {
//         setLoading(true);
        
//         // Use auth user data if available
//         if (authUser) {
//           setUser(authUser);
//         } else {
//           setUser({ name: "" });
//         }
        
//         setTimeout(() => {
//           setLoading(false);
//         }, 1000);
        
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [authUser]);

//   const styles = {
//     container: {
//       minHeight: "100vh",
//       backgroundColor: "#0a0a0f",
//       background: `
//         radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
//         radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
//         radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%),
//         linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 25%, #16213e 50%, #0a0a0f 100%)
//       `,
//       padding: isMobile ? "1rem" : "2rem",
//       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//       position: "relative",
//       overflow: "hidden"
//     },
//     backgroundOverlay: {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       background: isMobile 
//         ? "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
//         : `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
//       transition: isMobile ? "none" : "background 0.3s ease",
//       pointerEvents: "none",
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
//       opacity: isMobile ? 0.3 : 0.6,
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
//       filter: isMobile ? "blur(20px)" : "blur(40px)",
//       animation: "floatOrbs 25s infinite ease-in-out alternate",
//       opacity: isMobile ? 0.2 : 0.4,
//     },
//     content: {
//       position: "relative",
//       zIndex: 10,
//       maxWidth: "1400px",
//       margin: "0 auto"
//     },
//     welcomeTitle: {
//       fontSize: isMobile ? "2rem" : "3rem",
//       fontWeight: "800",
//       background: "linear-gradient(135deg, #60A5FA 0%, #A855F7 50%, #EC4899 100%)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//       backgroundClip: "text",
//       margin: "0 0 0.5rem 0",
//       animation: "fadeInUp 1s ease-out, textShimmer 3s ease-in-out infinite",
//       textShadow: "0 2px 20px rgba(96, 165, 250, 0.3)",
//       textAlign: isMobile ? "center" : "left",
//       lineHeight: isMobile ? "1.2" : "1.3"
//     },
//     subtitle: {
//       color: "rgba(255, 255, 255, 0.8)",
//       fontSize: isMobile ? "1rem" : "1.2rem",
//       fontWeight: "400",
//       margin: "0 0 2rem 0",
//       animation: "fadeInUp 1.2s ease-out",
//       textAlign: isMobile ? "center" : "left",
//     },
//     cardsContainer: {
//       display: "grid",
//       gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
//       gap: isMobile ? "1rem" : "2rem",
//       marginBottom: "2rem"
//     },
//     card: {
//       backdropFilter: "blur(25px)",
//       padding: isMobile ? "1.5rem" : "2.5rem",
//       borderRadius: isMobile ? "16px" : "24px",
//       border: "1px solid rgba(255, 255, 255, 0.08)",
//       boxShadow: `
//         0 32px 64px -12px rgba(0, 0, 0, 0.4),
//         inset 0 1px 0 rgba(255, 255, 255, 0.1),
//         0 0 0 1px rgba(255, 255, 255, 0.05)
//       `,
//       position: "relative",
//       animation: "slideUp 1.4s ease-out",
//       overflow: "hidden",
//     },
//     cardGlow: {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       right: 0,
//       height: "2px",
//       background: "linear-gradient(90deg, transparent, #60a5fa, #a855f7, transparent)",
//       animation: "cardGlow 4s ease-in-out infinite",
//       borderRadius: isMobile ? "16px 16px 0 0" : "24px 24px 0 0",
//     },
//     cardHeader: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: isMobile ? "flex-start" : "center",
//       marginBottom: isMobile ? "1.5rem" : "2rem",
//       flexDirection: isMobile ? "column" : "row",
//       gap: isMobile ? "1rem" : "0"
//     },
//     cardTitle: {
//       fontSize: isMobile ? "1.25rem" : "1.5rem",
//       fontWeight: "700",
//       color: "#F1F5F9",
//       margin: "0",
//       display: "flex",
//       alignItems: "center",
//       gap: "0.5rem"
//     },
//     boardList: {
//       listStyle: "none",
//       padding: "0",
//       margin: "0",
//       display: "flex",
//       flexDirection: "column",
//       gap: isMobile ? "0.75rem" : "1rem"
//     },
//     boardItem: {
//       padding: isMobile ? "1rem" : "1.25rem",
//       background: "rgba(255, 255, 255, 0.05)",
//       borderRadius: isMobile ? "12px" : "16px",
//       border: "1px solid rgba(255, 255, 255, 0.08)",
//       transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//       cursor: "pointer",
//       backdropFilter: "blur(10px)",
//     },
//     boardItemHover: {
//       background: "rgba(96, 165, 250, 0.1)",
//       borderColor: "rgba(96, 165, 250, 0.3)",
//       transform: isMobile ? "scale(1.02)" : "translateY(-2px)",
//       boxShadow: "0 8px 32px rgba(96, 165, 250, 0.2)",
//     },
//     boardTitle: {
//       fontSize: isMobile ? "0.9rem" : "1rem",
//       fontWeight: "600",
//       color: "#F1F5F9",
//       margin: "0 0 0.5rem 0",
//       display: "flex",
//       alignItems: "center",
//       gap: "0.75rem"
//     },
//     boardMeta: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       fontSize: isMobile ? "0.75rem" : "0.85rem",
//       flexDirection: isMobile ? "column" : "row",
//       gap: isMobile ? "0.5rem" : "0",
//       alignItems: isMobile ? "flex-start" : "center"
//     },
//     teamBadge: {
//       padding: isMobile ? "0.25rem 0.5rem" : "0.3rem 0.75rem",
//       borderRadius: isMobile ? "8px" : "12px",
//       fontSize: isMobile ? "0.7rem" : "0.8rem",
//       fontWeight: "600",
//       background: "rgba(96, 165, 250, 0.2)",
//       color: "#60A5FA",
//       border: "1px solid rgba(96, 165, 250, 0.3)",
//     },
//     itemsCount: {
//       padding: isMobile ? "0.25rem 0.5rem" : "0.3rem 0.75rem",
//       borderRadius: isMobile ? "8px" : "12px",
//       fontSize: isMobile ? "0.7rem" : "0.8rem",
//       fontWeight: "600",
//       background: "rgba(168, 85, 247, 0.2)",
//       color: "#A855F7",
//       border: "1px solid rgba(168, 85, 247, 0.3)",
//     },
//     colorIndicator: {
//       width: "4px",
//       height: isMobile ? "16px" : "20px",
//       borderRadius: "2px",
//       background: "linear-gradient(135deg, #60A5FA, #A855F7)",
//     },
//     emptyState: {
//       textAlign: "center",
//       color: "rgba(255, 255, 255, 0.6)",
//       padding: isMobile ? "2rem 1rem" : "3rem 1rem",
//       fontSize: isMobile ? "0.9rem" : "1rem",
//       fontStyle: "italic",
//     },
//     loadingSpinner: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       padding: isMobile ? "3rem" : "5rem",
//       color: "#FFFFFF",
//       position: "relative",
//       zIndex: 10,
//     },
//     spinner: {
//       width: isMobile ? "40px" : "50px",
//       height: isMobile ? "40px" : "50px",
//       border: "3px solid rgba(255, 255, 255, 0.3)",
//       borderTop: "3px solid #60A5FA",
//       borderRadius: "50%",
//       animation: "spin 1s linear infinite",
//     },
//     viewAllButton: {
//       background: "rgba(96, 165, 250, 0.1)",
//       border: "1px solid rgba(96, 165, 250, 0.3)",
//       color: "#60A5FA",
//       padding: isMobile ? "0.4rem 0.8rem" : "0.5rem 1rem",
//       borderRadius: isMobile ? "8px" : "12px",
//       fontSize: isMobile ? "0.8rem" : "0.9rem",
//       fontWeight: "600",
//       cursor: "pointer",
//       transition: "all 0.3s ease",
//       width: isMobile ? "100%" : "auto",
//       textAlign: "center",
//     },
//     viewAllButtonHover: {
//       background: "rgba(96, 165, 250, 0.2)",
//       transform: isMobile ? "scale(1.02)" : "translateY(-1px)",
//     },
//   };

//   const [hoveredBoard, setHoveredBoard] = useState(null);
//   const [isViewAllHovered, setIsViewAllHovered] = useState(false);

//   if (loading) {
//     return (
//       <div style={styles.container}>
//         <div style={styles.backgroundOverlay} />
//         <div style={styles.meshGradient} />
        
//         <div style={styles.particlesContainer}>
//           {orbs.map((orb) => (
//             <div
//               key={`orb-${orb.id}`}
//               style={{
//                 ...styles.orb,
//                 width: `${orb.size}px`,
//                 height: `${orb.size}px`,
//                 left: `${orb.left}%`,
//                 top: `${orb.top}%`,
//                 background:
//                   orb.id % 3 === 0
//                     ? "radial-gradient(circle, #60a5fa, #3b82f6)"
//                     : orb.id % 3 === 1
//                     ? "radial-gradient(circle, #a855f7, #8b5cf6)"
//                     : "radial-gradient(circle, #ec4899, #f43f5e)",
//                 animationDelay: `${orb.animationDelay}s`,
//                 animationDuration: `${orb.duration}s`,
//               }}
//             />
//           ))}
//         </div>

//         <div style={styles.loadingSpinner}>
//           <div style={styles.spinner}></div>
//         </div>
        
//         <style>
//           {`
//             @keyframes spin {
//               0% { transform: rotate(0deg); }
//               100% { transform: rotate(360deg); }
//             }
//           `}
//         </style>
//       </div>
//     );
//   }

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

//       <div style={styles.content}>
//         {/* Header */}
//         <h1 style={styles.welcomeTitle}>
//           👋 Welcome{user?.name ? `, ${user.name}` : ''}
//         </h1>
//         <p style={styles.subtitle}>Your workspace at a glance</p>

//         {/* Responsive Grid Layout */}
//         <div style={styles.cardsContainer}>
//           {/* Recently Viewed Card */}
//           <div style={styles.card}>
//             <div style={styles.cardGlow} />
//             <div style={styles.cardHeader}>
//               <h2 style={styles.cardTitle}>🕒 Recently Viewed</h2>
//               <button 
//                 style={{
//                   ...styles.viewAllButton,
//                   ...(isViewAllHovered ? styles.viewAllButtonHover : {})
//                 }}
//                 onMouseEnter={() => setIsViewAllHovered(true)}
//                 onMouseLeave={() => setIsViewAllHovered(false)}
//                 onTouchStart={() => setIsViewAllHovered(true)}
//                 onTouchEnd={() => setIsViewAllHovered(false)}
//               >
//                 View All
//               </button>
//             </div>
//             <ul style={styles.boardList}>
//               {recentlyViewed.length > 0 ? (
//                 recentlyViewed.map((board) => (
//                   <li 
//                     key={board.id} 
//                     style={{
//                       ...styles.boardItem,
//                       ...(hoveredBoard === board.id ? styles.boardItemHover : {})
//                     }} 
//                     onMouseEnter={() => !isMobile && setHoveredBoard(board.id)}
//                     onMouseLeave={() => !isMobile && setHoveredBoard(null)}
//                     onTouchStart={() => isMobile && setHoveredBoard(board.id)}
//                     onTouchEnd={() => isMobile && setHoveredBoard(null)}
//                   >
//                     <div style={styles.boardTitle}>
//                       <div style={styles.colorIndicator} />
//                       {board.title}
//                     </div>
//                     <div style={styles.boardMeta}>
//                       <span style={styles.teamBadge}>{board.team || "Team"}</span>
//                       <span style={{color: "rgba(255, 255, 255, 0.7)"}}>
//                         Viewed {board.lastViewed || "recently"}
//                       </span>
//                     </div>
//                   </li>
//                 ))
//               ) : (
//                 <li style={styles.emptyState}>No recently viewed boards</li>
//               )}
//             </ul>
//           </div>

//           {/* Your Boards Card */}
//           <div style={styles.card}>
//             <div style={styles.cardGlow} />
//             <div style={styles.cardHeader}>
//               <h2 style={styles.cardTitle}>🗂️ Your Boards</h2>
//               <button 
//                 style={{
//                   ...styles.viewAllButton,
//                   ...(isViewAllHovered ? styles.viewAllButtonHover : {})
//                 }}
//                 onMouseEnter={() => setIsViewAllHovered(true)}
//                 onMouseLeave={() => setIsViewAllHovered(false)}
//                 onTouchStart={() => setIsViewAllHovered(true)}
//                 onTouchEnd={() => setIsViewAllHovered(false)}
//               >
//                 View All
//               </button>
//             </div>
//             <ul style={styles.boardList}>
//               {yourBoards.length > 0 ? (
//                 yourBoards.map((board) => (
//                   <li 
//                     key={board.id} 
//                     style={{
//                       ...styles.boardItem,
//                       ...(hoveredBoard === board.id ? styles.boardItemHover : {})
//                     }}
//                     onMouseEnter={() => !isMobile && setHoveredBoard(board.id)}
//                     onMouseLeave={() => !isMobile && setHoveredBoard(null)}
//                     onTouchStart={() => isMobile && setHoveredBoard(board.id)}
//                     onTouchEnd={() => isMobile && setHoveredBoard(null)}
//                   >
//                     <div style={styles.boardTitle}>
//                       <div style={styles.colorIndicator} />
//                       {board.title}
//                     </div>
//                     <div style={styles.boardMeta}>
//                       <span style={styles.itemsCount}>
//                         {board.items || 0} items
//                       </span>
//                       <span style={{color: "rgba(255, 255, 255, 0.7)"}}>
//                         Updated {board.updated || "recently"}
//                       </span>
//                     </div>
//                   </li>
//                 ))
//               ) : (
//                 <li style={styles.emptyState}>No boards created yet</li>
//               )}
//             </ul>
//           </div>
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

//           @keyframes fadeInUp {
//             0% {
//               opacity: 0;
//               transform: translateY(20px);
//             }
//             100% {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }

//           button:hover:not(:disabled) {
//             transform: ${isMobile ? 'scale(1.02)' : 'translateY(-1px)'} !important;
//           }

//           /* Mobile-specific optimizations */
//           @media (max-width: 768px) {
//             body {
//               -webkit-tap-highlight-color: transparent;
//             }
            
//             button:active {
//               transform: scale(0.98) !important;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// }











import React, { useEffect, useState } from 'react';
import { useAuth } from "../../context/AuthContext";

export default function ForYou() {
  const [user, setUser] = useState(null);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [yourBoards, setYourBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredBoard, setHoveredBoard] = useState(null);
  const [isViewAllHovered, setIsViewAllHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { user: authUser } = useAuth();

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Initialize empty data structures
    setRecentlyViewed([]);
    setYourBoards([]);
    
    // Simulate API call to backend
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Use auth user data if available
        if (authUser) {
          setUser(authUser);
        } else {
          setUser({ name: "" });
        }
        
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [authUser]);

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#0a0a0f",
      backgroundImage: `
        /* Main equation background */
        radial-gradient(circle at 20% 30%, rgba(120, 119, 198, 0.15) 0%, transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(255, 119, 198, 0.15) 0%, transparent 40%),
        /* Mathematical equations overlay */
        url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' font-family='monospace' font-size='14' fill='rgba(120,119,198,0.1)' text-anchor='middle' dominant-baseline='middle'%3E1 2 ÷ 3 = 4%3C/text%3E%3C/svg%3E"),
        url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' font-family='monospace' font-size='16' fill='rgba(255,119,198,0.1)' text-anchor='middle' dominant-baseline='middle' transform='rotate(45 60 60)'%3E1 2 ÷ 3 = 4%3C/text%3E%3C/svg%3E"),
        url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' font-family='monospace' font-size='12' fill='rgba(120,219,255,0.1)' text-anchor='middle' dominant-baseline='middle' transform='rotate(-30 40 40)'%3E1 2 ÷ 3 = 4%3C/text%3E%3C/svg%3E")
      `,
      backgroundSize: `
        auto, 
        auto,
        100px 100px,
        120px 120px,
        80px 80px
      `,
      backgroundPosition: `
        20% 30%,
        80% 70%,
        0 0,
        20px 40px,
        60px 80px
      `,
      backgroundBlendMode: "overlay",
      padding: isMobile ? "1rem" : "2rem",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      position: "relative",
      overflow: "hidden"
    },
    content: {
      position: "relative",
      zIndex: 10,
      maxWidth: "1400px",
      margin: "0 auto"
    },
    welcomeTitle: {
      fontSize: isMobile ? "2rem" : "3rem",
      fontWeight: "800",
      background: '#F1F5F9',
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      margin: "0 0 0.5rem 0",
      animation: "fadeInUp 1s ease-out, textShimmer 3s ease-in-out infinite",
      textShadow: "0 2px 20px rgba(96, 165, 250, 0.3)",
      textAlign: isMobile ? "center" : "left",
      lineHeight: isMobile ? "1.2" : "1.3"
    },
    subtitle: {
      color: "rgba(255, 255, 255, 0.8)",
      fontSize: isMobile ? "1rem" : "1.2rem",
      fontWeight: "400",
      margin: "0 0 2rem 0",
      animation: "fadeInUp 1.2s ease-out",
      textAlign: isMobile ? "center" : "left",
    },
    cardsContainer: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "1rem" : "2rem",
      marginBottom: "2rem"
    },
    card: {
      backdropFilter: "blur(25px)",
      padding: isMobile ? "1.5rem" : "2.5rem",
      borderRadius: isMobile ? "16px" : "24px",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      boxShadow: `
        0 32px 64px -12px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.05)
      `,
      position: "relative",
      animation: "slideUp 1.4s ease-out",
      overflow: "hidden",
    },
    cardGlow: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "2px",
      background: "linear-gradient(90deg, transparent, #60a5fa, #a855f7, transparent)",
      animation: "cardGlow 4s ease-in-out infinite",
      borderRadius: isMobile ? "16px 16px 0 0" : "24px 24px 0 0",
    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: isMobile ? "flex-start" : "center",
      marginBottom: isMobile ? "1.5rem" : "2rem",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "1rem" : "0"
    },
    cardTitle: {
      fontSize: isMobile ? "1.25rem" : "1.5rem",
      fontWeight: "700",
      color: "#F1F5F9",
      margin: "0",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    },
    boardList: {
      listStyle: "none",
      padding: "0",
      margin: "0",
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? "0.75rem" : "1rem"
    },
    boardItem: {
      padding: isMobile ? "1rem" : "1.25rem",
      background: "rgba(255, 255, 255, 0.05)",
      borderRadius: isMobile ? "12px" : "16px",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
      backdropFilter: "blur(10px)",
    },
    boardItemHover: {
      background: "rgba(96, 165, 250, 0.1)",
      borderColor: "rgba(96, 165, 250, 0.3)",
      transform: isMobile ? "scale(1.02)" : "translateY(-2px)",
      boxShadow: "0 8px 32px rgba(96, 165, 250, 0.2)",
    },
    boardTitle: {
      fontSize: isMobile ? "0.9rem" : "1rem",
      fontWeight: "600",
      color: "#F1F5F9",
      margin: "0 0 0.5rem 0",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem"
    },
    boardMeta: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: isMobile ? "0.75rem" : "0.85rem",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "0.5rem" : "0",
      alignItems: isMobile ? "flex-start" : "center"
    },
    teamBadge: {
      padding: isMobile ? "0.25rem 0.5rem" : "0.3rem 0.75rem",
      borderRadius: isMobile ? "8px" : "12px",
      fontSize: isMobile ? "0.7rem" : "0.8rem",
      fontWeight: "600",
      background: "rgba(96, 165, 250, 0.2)",
      color: "#60A5FA",
      border: "1px solid rgba(96, 165, 250, 0.3)",
    },
    itemsCount: {
      padding: isMobile ? "0.25rem 0.5rem" : "0.3rem 0.75rem",
      borderRadius: isMobile ? "8px" : "12px",
      fontSize: isMobile ? "0.7rem" : "0.8rem",
      fontWeight: "600",
      background: "rgba(168, 85, 247, 0.2)",
      color: "#A855F7",
      border: "1px solid rgba(168, 85, 247, 0.3)",
    },
    colorIndicator: {
      width: "4px",
      height: isMobile ? "16px" : "20px",
      borderRadius: "2px",
      background: "linear-gradient(135deg, #60A5FA, #A855F7)",
    },
    emptyState: {
      textAlign: "center",
      color: "rgba(255, 255, 255, 0.6)",
      padding: isMobile ? "2rem 1rem" : "3rem 1rem",
      fontSize: isMobile ? "0.9rem" : "1rem",
      fontStyle: "italic",
    },
    loadingSpinner: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: isMobile ? "3rem" : "5rem",
      color: "#FFFFFF",
      position: "relative",
      zIndex: 10,
    },
    spinner: {
      width: isMobile ? "40px" : "50px",
      height: isMobile ? "40px" : "50px",
      border: "3px solid rgba(255, 255, 255, 0.3)",
      borderTop: "3px solid #60A5FA",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
    viewAllButton: {
      background: "rgba(96, 165, 250, 0.1)",
      border: "1px solid rgba(96, 165, 250, 0.3)",
      color: "#60A5FA",
      padding: isMobile ? "0.4rem 0.8rem" : "0.5rem 1rem",
      borderRadius: isMobile ? "8px" : "12px",
      fontSize: isMobile ? "0.8rem" : "0.9rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      width: isMobile ? "100%" : "auto",
      textAlign: "center",
    },
    viewAllButtonHover: {
      background: "rgba(96, 165, 250, 0.2)",
      transform: isMobile ? "scale(1.02)" : "translateY(-1px)",
    },
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loadingSpinner}>
          <div style={styles.spinner}></div>
        </div>
        
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Header */}
        <h1 style={styles.welcomeTitle}>
          👋 Welcome{user?.name ? `, ${user.name}` : ''}
        </h1>
        <p style={styles.subtitle}>Your workspace at a glance</p>

        {/* Responsive Grid Layout */}
        <div style={styles.cardsContainer}>
          {/* Recently Viewed Card */}
          <div style={styles.card}>
            <div style={styles.cardGlow} />
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>🕒 Recently Viewed</h2>
              <button 
                style={{
                  ...styles.viewAllButton,
                  ...(isViewAllHovered ? styles.viewAllButtonHover : {})
                }}
                onMouseEnter={() => setIsViewAllHovered(true)}
                onMouseLeave={() => setIsViewAllHovered(false)}
                onTouchStart={() => setIsViewAllHovered(true)}
                onTouchEnd={() => setIsViewAllHovered(false)}
              >
                View All
              </button>
            </div>
            <ul style={styles.boardList}>
              {recentlyViewed.length > 0 ? (
                recentlyViewed.map((board) => (
                  <li 
                    key={board.id} 
                    style={{
                      ...styles.boardItem,
                      ...(hoveredBoard === board.id ? styles.boardItemHover : {})
                    }} 
                    onMouseEnter={() => !isMobile && setHoveredBoard(board.id)}
                    onMouseLeave={() => !isMobile && setHoveredBoard(null)}
                    onTouchStart={() => isMobile && setHoveredBoard(board.id)}
                    onTouchEnd={() => isMobile && setHoveredBoard(null)}
                  >
                    <div style={styles.boardTitle}>
                      <div style={styles.colorIndicator} />
                      {board.title}
                    </div>
                    <div style={styles.boardMeta}>
                      <span style={styles.teamBadge}>{board.team || "Team"}</span>
                      <span style={{color: "rgba(255, 255, 255, 0.7)"}}>
                        Viewed {board.lastViewed || "recently"}
                      </span>
                    </div>
                  </li>
                ))
              ) : (
                <li style={styles.emptyState}>No recently viewed boards</li>
              )}
            </ul>
          </div>

          {/* Your Boards Card */}
          <div style={styles.card}>
            <div style={styles.cardGlow} />
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>🗂️ Your Boards</h2>
              <button 
                style={{
                  ...styles.viewAllButton,
                  ...(isViewAllHovered ? styles.viewAllButtonHover : {})
                }}
                onMouseEnter={() => setIsViewAllHovered(true)}
                onMouseLeave={() => setIsViewAllHovered(false)}
                onTouchStart={() => setIsViewAllHovered(true)}
                onTouchEnd={() => setIsViewAllHovered(false)}
              >
                View All
              </button>
            </div>
            <ul style={styles.boardList}>
              {yourBoards.length > 0 ? (
                yourBoards.map((board) => (
                  <li 
                    key={board.id} 
                    style={{
                      ...styles.boardItem,
                      ...(hoveredBoard === board.id ? styles.boardItemHover : {})
                    }}
                    onMouseEnter={() => !isMobile && setHoveredBoard(board.id)}
                    onMouseLeave={() => !isMobile && setHoveredBoard(null)}
                    onTouchStart={() => isMobile && setHoveredBoard(board.id)}
                    onTouchEnd={() => isMobile && setHoveredBoard(null)}
                  >
                    <div style={styles.boardTitle}>
                      <div style={styles.colorIndicator} />
                      {board.title}
                    </div>
                    <div style={styles.boardMeta}>
                      <span style={styles.itemsCount}>
                        {board.items || 0} items
                      </span>
                      <span style={{color: "rgba(255, 255, 255, 0.7)"}}>
                        Updated {board.updated || "recently"}
                      </span>
                    </div>
                  </li>
                ))
              ) : (
                <li style={styles.emptyState}>No boards created yet</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style>
        {`
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

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          button:hover:not(:disabled) {
            transform: ${isMobile ? 'scale(1.02)' : 'translateY(-1px)'} !important;
          }

          /* Mobile-specific optimizations */
          @media (max-width: 768px) {
            body {
              -webkit-tap-highlight-color: transparent;
            }
            
            button:active {
              transform: scale(0.98) !important;
            }
          }
        `}
      </style>
    </div>
  );
}