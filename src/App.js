



// //for project boards
// import React, { useState, useEffect } from 'react';
// import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import { ProjectProvider, useProjects } from './context/ProjectContext';
 
// import Login from './components/auth/Login';
// import Users from './components/users/Users';
// import ProjectList from './components/projects/ProjectList';
// import ProjectView from './components/projects/ProjectView';
// import KanbanBoard from './components/boards/KanbanBoard';
// import Backlog from './components/backlog/Backlog';
// import IssueDetails from './components/issues/IssueDetails';
// import IssueCreate from './components/issues/IssueCreate';
// import Assets from './components/assets/Assets';
// import Timeline from './components/timeline/Timeline';
// import ForYou from './components/dashboard/ForYou';
// import Notifications from './components/notifications/Notifications';
// import { FiMenu } from 'react-icons/fi';
 
// // PrivateRoute: Only allows authenticated users
// function PrivateRoute({ children }) {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login" replace />;
// }
 
// export default function App() {
//   return (
//     <AuthProvider>
//       <ProjectProvider>
//         <Routes>
//           <Route path="/" element={<AuthLanding />} />
//           <Route path="/login" element={<LoginRedirectAfterAuth />} />
//           <Route path="/*" element={
//             <PrivateRoute>
//               <Layout />
//             </PrivateRoute>
//           } />
//         </Routes>
//       </ProjectProvider>
//     </AuthProvider>
//   );
// }
 
// function AuthLanding() {
//   const { user } = useAuth();
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   } else {
//     return <Navigate to="/for-you" replace />;
//   }
// }
 
// function LoginRedirectAfterAuth() {
//   const { user } = useAuth();
//   const navigate = useNavigate();
 
//   useEffect(() => {
//     if (user) {
//       navigate("/for-you", { replace: true });
//     }
//   }, [user, navigate]);
 
//   return <Login />;
// }
 
// function Layout() {
//   const { user, logout } = useAuth();
//   const { projects } = useProjects();
 
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [currentProjectName, setCurrentProjectName] = useState(null);
 
//   useEffect(() => {
//     if (projects.length > 0) {
//       setCurrentProjectName(projects[0].name);
//     } else {
//       setCurrentProjectName(null);
//     }
//   }, [projects]);
 
//   const toggleSidebar = () => setSidebarOpen(prev => !prev);
 
//   const sidebarStyle = {
//     width: sidebarOpen ? '240px' : '70px',
//     transition: 'width 0.3s ease',
//     backgroundColor: '#111827',
//     color: '#fff',
//     height: '100vh',
//     padding: '16px 12px',
//     boxSizing: 'border-box',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     boxShadow: '2px 0 8px rgba(0,0,0,0.1)'
//   };
 
//   const navLinkStyle = {
//     display: 'block',
//     padding: sidebarOpen ? '10px 16px' : '10px 0',
//     color: '#e5e7eb',
//     textDecoration: 'none',
//     fontSize: '15px',
//     margin: '6px 0',
//     borderRadius: '6px',
//     backgroundColor: '#1f2937',
//     transition: 'all 0.2s ease',
//     fontWeight: '500',
//     textAlign: sidebarOpen ? 'left' : 'center'
//   };
 
//   const navLinkActiveStyle = {
//     backgroundColor: '#ffffff',
//     color: '#374151'
//   };
 
//   const contentStyle = {
//     flex: 1,
//     padding: '24px',
//     backgroundColor: '#f9fafb',
//     height: '100vh',
//     overflowY: 'auto'
//   };
 
//   const topbarStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     padding: '16px 24px',
//     borderBottom: '1px solid #e5e7eb',
//     boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
//   };
 
//   const appShellStyle = {
//     display: 'flex',
//     fontFamily: 'Segoe UI, Roboto, sans-serif',
//     fontSize: '14px',
//     color: '#111827'
//   };
 
//   const menuButtonStyle = {
//     background: 'none',
//     border: 'none',
//     color: '#e5e7eb',
//     cursor: 'pointer',
//     marginRight: '8px',
//     padding: '4px'
//   };
 
//   const userInfoStyle = {
//     fontSize: '17px',
//     lineHeight: '1.5',
//     padding: '12px',
//     backgroundColor: '#1f2937',
//     borderRadius: '6px',
//     marginTop: '12px'
//   };
 
//   const btnLinkStyle = {
//     background: 'none',
//     border: 'none',
//     color: '#3b82f6',
//     cursor: 'pointer',
//     padding: '0',
//     marginTop: '8px',
//     fontSize: '13px'
//   };
 
//   const navItems = [
//     { path: '/for-you', label: 'For You' },
//     // { path: '/projects', label: 'Projects' },
//     { path: currentProjectName ? `/kanban/${currentProjectName}` : '/kanban/:name', label: 'Boards' },
//     { path: '/assets', label: 'Assets' },
//     { path: '/timeline', label: 'Timeline' },
//     // { path: '/users', label: 'Users' },
//   ];
 
//   return (
//     <div style={appShellStyle} role="application" aria-label="Ticketing application">
//       <aside style={sidebarStyle} aria-label="Sidebar navigation">
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//           <button style={menuButtonStyle} onClick={toggleSidebar} aria-label="Toggle sidebar">
//             <FiMenu size={20} />
//           </button>
//           {sidebarOpen && <span style={{ fontWeight: 'bold' }}>Flow Track</span>}
//         </div>
//         <nav role="navigation" aria-label="Main">
//           {navItems.map(({ path, label }) => (
//             <NavLink
//               key={path}
//               to={path}
//               style={({ isActive }) =>
//                 isActive
//                   ? { ...navLinkStyle, ...navLinkActiveStyle }
//                   : navLinkStyle
//               }
//               end
//             >
//               {sidebarOpen ? label : label.charAt(0)}
//             </NavLink>
//           ))}
//         </nav>
//         <div>
//           {user ? (
//             <div style={userInfoStyle} aria-label="User Profile">
//               <div><strong>{user.name}</strong></div>
//               <div>{user.email}</div>
//               <button style={btnLinkStyle} onClick={logout}>Sign out</button>
//             </div>
//           ) : (
//             <NavLink to="/login" style={navLinkStyle}>Sign in</NavLink>
//           )}
//         </div>
//       </aside>
//       <div style={contentStyle}>
//         <header style={topbarStyle} role="banner">
//           <div>
//             <h1 style={{ margin: 0, fontSize: '20px' }}>Flow Track</h1>
//           </div>
//           <div style={{ fontSize: '12px', color: '#666' }}>Accessible demo • keyboard friendly</div>
//         </header>
//         <main id="main" tabIndex="-1" role="main">
//           <Routes>
//             <Route path="/projects" element={<ProjectList />} />
//             <Route path="/projects/:id" element={<ProjectView />} />
//             <Route path="/kanban/:name" element={<KanbanBoard />} />
//             <Route path="/backlog/:id" element={<Backlog />} />
//             <Route path="/issues/new" element={<IssueCreate />} />
//             <Route path="/issues/:id" element={<IssueDetails />} />
//             <Route path="/assets" element={<Assets />} />
//             <Route path="/timeline" element={<Timeline />} />
//             <Route path="/users" element={<Users />} />
//             <Route path="/notifications" element={<Notifications />} />
//             <Route path="/for-you" element={<ForYou />} />
//             <Route path="*" element={<Navigate to="/for-you" replace />} />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   );
// }









///////////////////////////////////////////////////////////////////////////////////////
// App.js
// import React, { useState, useEffect } from 'react';
// import { Routes, Route, NavLink, Navigate, useNavigate, useLocation } from 'react-router-dom';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import { ProjectProvider, useProjects } from './context/ProjectContext';
 
// import Login from './components/auth/Login';
// import Users from './components/users/Users';
// import ProjectList from './components/projects/ProjectList';
// import ProjectView from './components/projects/ProjectView';
// import KanbanBoard from './components/boards/KanbanBoard';
// import Backlog from './components/backlog/Backlog';
// import IssueDetails from './components/issues/IssueDetails';
// import IssueCreate from './components/issues/IssueCreate';
// import Assets from './components/assets/Assets';
// import Timeline from './components/timeline/Timeline';
// import ForYou from './components/dashboard/ForYou';
// import Notifications from './components/notifications/Notifications';
// import { FiMenu, FiHome, FiTrello, FiFolder, FiClock, FiUser, FiBell, FiLogOut, FiChevronRight } from 'react-icons/fi';
 
// // PrivateRoute: Only allows authenticated users
// function PrivateRoute({ children }) {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login" replace />;
// }
 
// export default function App() {
//   return (
//     <AuthProvider>
//       <ProjectProvider>
//         <Routes>
//           <Route path="/" element={<AuthLanding />} />
//           <Route path="/login" element={<LoginRedirectAfterAuth />} />
//           <Route path="/*" element={
//             <PrivateRoute>
//               <Layout />
//             </PrivateRoute>
//           } />
//         </Routes>
//       </ProjectProvider>
//     </AuthProvider>
//   );
// }
 
// function AuthLanding() {
//   const { user } = useAuth();
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   } else {
//     return <Navigate to="/for-you" replace />;
//   }
// }
 
// function LoginRedirectAfterAuth() {
//   const { user } = useAuth();
//   const navigate = useNavigate();
 
//   useEffect(() => {
//     if (user) {
//       navigate("/for-you", { replace: true });
//     }
//   }, [user, navigate]);
 
//   return <Login />;
// }
 
// function Layout() {
//   const { user, logout } = useAuth();
//   const { projects } = useProjects();
//   const location = useLocation();
 
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [particles, setParticles] = useState([]);
//   const [orbs, setOrbs] = useState([]);
//   const [currentProjectName, setCurrentProjectName] = useState(null);
//   const [isHovered, setIsHovered] = useState(null);
 
//   useEffect(() => {
//     // Create floating particles
//     const newParticles = Array.from({ length: 12 }, (_, i) => ({
//       id: i,
//       size: Math.random() * 2 + 1,
//       left: Math.random() * 100,
//       animationDelay: Math.random() * 20,
//       duration: Math.random() * 15 + 10,
//       opacity: Math.random() * 0.4 + 0.1,
//     }));
//     setParticles(newParticles);
 
//     // Create floating orbs
//     const newOrbs = Array.from({ length: 4 }, (_, i) => ({
//       id: i,
//       size: Math.random() * 80 + 30,
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
//     if (projects.length > 0) {
//       setCurrentProjectName(projects[0].name);
//     } else {
//       setCurrentProjectName(null);
//     }
//   }, [projects]);
 
//   const toggleSidebar = () => setSidebarOpen(prev => !prev);
 
//   const styles = {
//     appShell: {
//       display: 'flex',
//       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//       minHeight: '100vh',
//       backgroundColor: '#0a0a0f',
//       background: `
//         radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
//         radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
//         radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%),
//         linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 25%, #16213e 50%, #0a0a0f 100%)
//       `,
//       position: 'relative',
//       overflow: 'hidden',
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
//       opacity: 0.4,
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
//       filter: "blur(30px)",
//       animation: "floatOrbs 25s infinite ease-in-out alternate",
//       opacity: 0.3,
//     },
//     sidebar: {
//       width: sidebarOpen ? '280px' : '80px',
//       transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//       backgroundColor: 'rgba(15, 15, 25, 0.8)',
//       backdropFilter: 'blur(20px)',
//       color: '#fff',
//       height: '100vh',
//       padding: '24px 16px',
//       boxSizing: 'border-box',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'space-between',
//       borderRight: '1px solid rgba(255, 255, 255, 0.08)',
//       boxShadow: '0 0 40px rgba(0, 0, 0, 0.3)',
//       position: 'relative',
//       zIndex: 20,
//       overflow: 'hidden',
//     },
//     sidebarGlow: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       height: '2px',
//       background: 'linear-gradient(90deg, transparent, #60a5fa, #a855f7, transparent)',
//       animation: 'cardGlow 4s ease-in-out infinite',
//     },
//     content: {
//       flex: 1,
//       padding: '0',
//       height: '100vh',
//       overflowY: 'auto',
//       position: 'relative',
//       zIndex: 10,
//     },
//     topbar: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       backgroundColor: 'rgba(15, 15, 25, 0.7)',
//       backdropFilter: 'blur(20px)',
//       padding: '20px 32px',
//       borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
//       boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
//       position: 'relative',
//       zIndex: 15,
//     },
//     menuButton: {
//       background: 'rgba(255, 255, 255, 0.1)',
//       border: '1px solid rgba(255, 255, 255, 0.1)',
//       color: '#e5e7eb',
//       cursor: 'pointer',
//       padding: '10px',
//       borderRadius: '12px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       transition: 'all 0.3s ease',
//       backdropFilter: 'blur(10px)',
//     },
//     menuButtonHover: {
//       background: 'rgba(96, 165, 250, 0.2)',
//       borderColor: 'rgba(96, 165, 250, 0.3)',
//       transform: 'scale(1.05)',
//     },
//     navLink: {
//       display: 'flex',
//       alignItems: 'center',
//       padding: sidebarOpen ? '14px 20px' : '14px 0',
//       color: 'rgba(255, 255, 255, 0.8)',
//       textDecoration: 'none',
//       fontSize: '15px',
//       margin: '4px 0',
//       borderRadius: '14px',
//       backgroundColor: 'rgba(255, 255, 255, 0.03)',
//       transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//       fontWeight: '500',
//       border: '1px solid rgba(255, 255, 255, 0.05)',
//       justifyContent: sidebarOpen ? 'flex-start' : 'center',
//       gap: '12px',
//       position: 'relative',
//       overflow: 'hidden',
//     },
//     navLinkActive: {
//       backgroundColor: 'rgba(96, 165, 250, 0.15)',
//       color: '#60A5FA',
//       borderColor: 'rgba(96, 165, 250, 0.3)',
//       transform: 'translateX(4px)',
//     },
//     navLinkHover: {
//       backgroundColor: 'rgba(96, 165, 250, 0.1)',
//       transform: 'translateX(4px)',
//       color: '#FFFFFF',
//     },
//     userInfo: {
//       padding: '20px',
//       backgroundColor: 'rgba(255, 255, 255, 0.05)',
//       borderRadius: '16px',
//       border: '1px solid rgba(255, 255, 255, 0.08)',
//       marginTop: '20px',
//       backdropFilter: 'blur(10px)',
//     },
//     btnLink: {
//       background: 'rgba(96, 165, 250, 0.2)',
//       border: '1px solid rgba(96, 165, 250, 0.3)',
//       color: '#60A5FA',
//       cursor: 'pointer',
//       padding: '8px 16px',
//       borderRadius: '10px',
//       fontSize: '14px',
//       fontWeight: '600',
//       marginTop: '12px',
//       width: '100%',
//       transition: 'all 0.3s ease',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       gap: '8px',
//     },
//     btnLinkHover: {
//       background: 'rgba(96, 165, 250, 0.3)',
//       transform: 'translateY(-1px)',
//     },
//     logo: {
//       display: 'flex',
//       alignItems: 'center',
//       marginBottom: '32px',
//       padding: '0 8px',
//     },
//     logoText: {
//       fontSize: '24px',
//       fontWeight: '800',
//       background: 'linear-gradient(135deg, #60A5FA 0%, #A855F7 50%, #EC4899 100%)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       backgroundClip: 'text',
//       margin: '0',
//       animation: 'textShimmer 3s ease-in-out infinite',
//     },
//     pageTitle: {
//       fontSize: '28px',
//       fontWeight: '700',
//       color: '#F1F5F9',
//       margin: '0',
//       background: 'linear-gradient(135deg, #60A5FA 0%, #A855F7 100%)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       backgroundClip: 'text',
//     },
//     topbarText: {
//       fontSize: '14px',
//       color: 'rgba(255, 255, 255, 0.7)',
//       fontWeight: '500',
//     },
//     icon: {
//       fontSize: '18px',
//       minWidth: '20px',
//     },
//   };
 
//   const navItems = [
//     { path: '/for-you', label: 'For You', icon: <FiHome style={styles.icon} /> },
//     { path: currentProjectName ? `/kanban/${currentProjectName}` : '/kanban/general', label: 'Boards', icon: <FiTrello style={styles.icon} /> },
//     { path: '/assets', label: 'Assets', icon: <FiFolder style={styles.icon} /> },
//     { path: '/timeline', label: 'Timeline', icon: <FiClock style={styles.icon} /> },
//     // { path: '/notifications', label: 'Notifications', icon: <FiBell style={styles.icon} /> },
//   ];
 
//   const getPageTitle = () => {
//     const path = location.pathname;
//     if (path === '/for-you') return 'Dashboard';
//     if (path.includes('/kanban')) return 'Project Boards';
//     if (path === '/assets') return 'Assets';
//     if (path === '/timeline') return 'Timeline';
//     if (path === '/notifications') return 'Notifications';
//     return 'Flow Track';
//   };
 
//   return (
//     <div style={styles.appShell} role="application" aria-label="Flow Track application">
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
//               top: '-20px',
//               opacity: particle.opacity,
//               animationDelay: `${particle.animationDelay}s`,
//               animationDuration: `${particle.duration}s`,
//             }}
//           />
//         ))}
//       </div>
 
//       <aside style={styles.sidebar} aria-label="Sidebar navigation">
//         <div style={styles.sidebarGlow} />
//         <div>
//           <div style={styles.logo}>
//             <button 
//               style={{
//                 ...styles.menuButton,
//                 ...(isHovered === 'menu' ? styles.menuButtonHover : {})
//               }} 
//               onClick={toggleSidebar}
//               onMouseEnter={() => setIsHovered('menu')}
//               onMouseLeave={() => setIsHovered(null)}
//               aria-label="Toggle sidebar"
//             >
//               <FiMenu size={20} />
//             </button>
//             {sidebarOpen && (
//               <span style={styles.logoText}>Flow Track</span>
//             )}
//           </div>
//           <nav role="navigation" aria-label="Main navigation">
//             {navItems.map(({ path, label, icon }) => (
//               <NavLink
//                 key={path}
//                 to={path}
//                 style={({ isActive }) => ({
//                   ...styles.navLink,
//                   ...(isActive ? styles.navLinkActive : {}),
//                   ...(isHovered === label ? styles.navLinkHover : {})
//                 })}
//                 onMouseEnter={() => setIsHovered(label)}
//                 onMouseLeave={() => setIsHovered(null)}
//                 end
//               >
//                 {icon}
//                 {sidebarOpen && (
//                   <>
//                     {label}
//                     <FiChevronRight style={{ marginLeft: 'auto', opacity: 0.7 }} />
//                   </>
//                 )}
//               </NavLink>
//             ))}
//           </nav>
//         </div>
 
//         <div>
//           {user ? (
//             <div style={styles.userInfo} aria-label="User Profile">
//               <div style={{ color: '#F1F5F9', fontWeight: '600', fontSize: '16px' }}>
//                 {user.name}
//               </div>
//               <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', marginTop: '4px' }}>
//                 {user.email}
//               </div>
//               <button 
//                 style={{
//                   ...styles.btnLink,
//                   ...(isHovered === 'logout' ? styles.btnLinkHover : {})
//                 }}
//                 onClick={logout}
//                 onMouseEnter={() => setIsHovered('logout')}
//                 onMouseLeave={() => setIsHovered(null)}
//               >
//                 <FiLogOut /> {sidebarOpen && 'Sign Out'}
//               </button>
//             </div>
//           ) : (
//             <NavLink to="/login" style={styles.navLink}>Sign in</NavLink>
//           )}
//         </div>
//       </aside>
 
//       <div style={styles.content}>
//         <header style={styles.topbar} role="banner">
//           <div>
//             <h1 style={styles.pageTitle}>{getPageTitle()}</h1>
//           </div>
//           <div style={styles.topbarText}>Modern Project Management • {new Date().toLocaleDateString()}</div>
//         </header>
//         <main id="main" tabIndex="-1" role="main" style={{ padding: '32px', minHeight: 'calc(100vh - 80px)' }}>
//           <Routes>
//             <Route path="/projects" element={<ProjectList />} />
//             <Route path="/projects/:id" element={<ProjectView />} />
//             <Route path="/kanban/:name" element={<KanbanBoard />} />
//             <Route path="/backlog/:id" element={<Backlog />} />
//             <Route path="/issues/new" element={<IssueCreate />} />
//             <Route path="/issues/:id" element={<IssueDetails />} />
//             <Route path="/assets" element={<Assets />} />
//             <Route path="/timeline" element={<Timeline />} />
//             <Route path="/users" element={<Users />} />
//             <Route path="/notifications" element={<Notifications />} />
//             <Route path="/for-you" element={<ForYou />} />
//             <Route path="*" element={<Navigate to="/for-you" replace />} />
//           </Routes>
//         </main>
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
 
//           @keyframes slideIn {
//             0% {
//               opacity: 0;
//               transform: translateX(-20px);
//             }
//             100% {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           }
 
//           * {
//             box-sizing: border-box;
//           }
 
//           body {
//             margin: 0;
//             background: #0a0a0f;
//           }
 
//           button:hover:not(:disabled) {
//             transform: translateY(-1px) !important;
//           }
 
//           a:hover {
//             color: #60A5FA !important;
//           }
 
//           /* Custom scrollbar */
//           ::-webkit-scrollbar {
//             width: 6px;
//           }
 
//           ::-webkit-scrollbar-track {
//             background: rgba(255, 255, 255, 0.05);
//           }
 
//           ::-webkit-scrollbar-thumb {
//             background: rgba(96, 165, 250, 0.3);
//             border-radius: 3px;
//           }
 
//           ::-webkit-scrollbar-thumb:hover {
//             background: rgba(96, 165, 250, 0.5);
//           }
//         `}
//       </style>
//     </div>
//   );
// }









//mobile resposiveness



import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProjectProvider, useProjects } from './context/ProjectContext';

import Login from './components/auth/Login';
import Users from './components/users/Users';
import ProjectList from './components/projects/ProjectList';
import ProjectView from './components/projects/ProjectView';
import KanbanBoard from './components/boards/KanbanBoard';
import Backlog from './components/backlog/Backlog';
import IssueDetails from './components/issues/IssueDetails';
import IssueCreate from './components/issues/IssueCreate';
import Assets from './components/assets/Assets';
import Timeline from './components/timeline/Timeline';
import ForYou from './components/dashboard/ForYou';
import Notifications from './components/notifications/Notifications';
import { FiMenu, FiHome, FiTrello, FiFolder, FiClock, FiUser, FiBell, FiLogOut, FiChevronRight, FiX } from 'react-icons/fi';

// PrivateRoute: Only allows authenticated users
function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <ProjectProvider>
        <Routes>
          <Route path="/" element={<AuthLanding />} />
          <Route path="/login" element={<LoginRedirectAfterAuth />} />
          <Route path="/*" element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          } />
        </Routes>
      </ProjectProvider>
    </AuthProvider>
  );
}

function AuthLanding() {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  } else {
    return <Navigate to="/for-you" replace />;
  }
}

function LoginRedirectAfterAuth() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/for-you", { replace: true });
    }
  }, [user, navigate]);

  return <Login />;
}

function Layout() {
  const { user, logout } = useAuth();
  const { projects } = useProjects();
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [orbs, setOrbs] = useState([]);
  const [currentProjectName, setCurrentProjectName] = useState(null);
  const [isHovered, setIsHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto-close sidebar on mobile when resizing to desktop
      if (window.innerWidth >= 768) {
        setMobileSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-close sidebar on mobile when route changes
  useEffect(() => {
    if (isMobile) {
      setMobileSidebarOpen(false);
    }
  }, [location.pathname, isMobile]);

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: isMobile ? 6 : 12 }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      left: Math.random() * 100,
      animationDelay: Math.random() * 20,
      duration: Math.random() * 15 + 10,
      opacity: Math.random() * 0.4 + 0.1,
    }));
    setParticles(newParticles);

    // Create floating orbs
    const newOrbs = Array.from({ length: isMobile ? 2 : 4 }, (_, i) => ({
      id: i,
      size: Math.random() * (isMobile ? 40 : 80) + 30,
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
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  useEffect(() => {
    if (projects.length > 0) {
      setCurrentProjectName(projects[0].name);
    } else {
      setCurrentProjectName(null);
    }
  }, [projects]);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileSidebarOpen(prev => !prev);
    } else {
      setSidebarOpen(prev => !prev);
    }
  };

  const closeMobileSidebar = () => {
    setMobileSidebarOpen(false);
  };

  const styles = {
    appShell: {
      display: 'flex',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      minHeight: '100vh',
      backgroundColor: '#0a0a0f',
      background: `
        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%),
        linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 25%, #16213e 50%, #0a0a0f 100%)
      `,
      position: 'relative',
      overflow: 'hidden',
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
      opacity: 0.4,
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
      filter: "blur(30px)",
      animation: "floatOrbs 25s infinite ease-in-out alternate",
      opacity: 0.3,
    },
    sidebar: {
      width: isMobile ? (mobileSidebarOpen ? '280px' : '0') : (sidebarOpen ? '280px' : '80px'),
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      backgroundColor: 'rgba(15, 15, 25, 0.95)',
      backdropFilter: 'blur(20px)',
      color: '#fff',
      height: '100vh',
      padding: isMobile ? (mobileSidebarOpen ? '24px 16px' : '0') : '24px 16px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRight: '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: '0 0 40px rgba(0, 0, 0, 0.3)',
      position: isMobile ? 'fixed' : 'relative',
      zIndex: 30,
      overflow: isMobile ? (mobileSidebarOpen ? 'auto' : 'hidden') : 'hidden',
      left: 0,
      top: 0,
    },
    mobileSidebarOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 25,
      display: mobileSidebarOpen ? 'block' : 'none',
    },
    sidebarGlow: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '2px',
      background: 'linear-gradient(90deg, transparent, #60a5fa, #a855f7, transparent)',
      animation: 'cardGlow 4s ease-in-out infinite',
    },
    content: {
      flex: 1,
      padding: '0',
      height: '100vh',
      overflowY: 'auto',
      position: 'relative',
      zIndex: 10,
      marginLeft: isMobile ? '0' : (sidebarOpen ? '0' : '0'),
      width: isMobile ? '100%' : 'auto',
    },
    topbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(15, 15, 25, 0.7)',
      backdropFilter: 'blur(20px)',
      padding: isMobile ? '16px 20px' : '20px 32px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      zIndex: 15,
      flexWrap: isMobile ? 'wrap' : 'nowrap',
      gap: isMobile ? '12px' : '0',
    },
    menuButton: {
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      color: '#e5e7eb',
      cursor: 'pointer',
      padding: isMobile ? '8px' : '10px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      zIndex: 40,
    },
    menuButtonHover: {
      background: 'rgba(96, 165, 250, 0.2)',
      borderColor: 'rgba(96, 165, 250, 0.3)',
      transform: 'scale(1.05)',
    },
    navLink: {
      display: 'flex',
      alignItems: 'center',
      padding: (isMobile && mobileSidebarOpen) || (!isMobile && sidebarOpen) ? '14px 20px' : '14px 0',
      color: 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      fontSize: isMobile ? '16px' : '15px',
      margin: '4px 0',
      borderRadius: '14px',
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      fontWeight: '500',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      justifyContent: (isMobile && mobileSidebarOpen) || (!isMobile && sidebarOpen) ? 'flex-start' : 'center',
      gap: '12px',
      position: 'relative',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
    navLinkActive: {
      backgroundColor: 'rgba(96, 165, 250, 0.15)',
      color: '#60A5FA',
      borderColor: 'rgba(96, 165, 250, 0.3)',
      transform: 'translateX(4px)',
    },
    navLinkHover: {
      backgroundColor: 'rgba(96, 165, 250, 0.1)',
      transform: 'translateX(4px)',
      color: '#FFFFFF',
    },
    userInfo: {
      padding: isMobile ? '16px' : '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      marginTop: '20px',
      backdropFilter: 'blur(10px)',
      display: isMobile && !mobileSidebarOpen ? 'none' : 'block',
    },
    btnLink: {
      background: 'rgba(96, 165, 250, 0.2)',
      border: '1px solid rgba(96, 165, 250, 0.3)',
      color: '#60A5FA',
      cursor: 'pointer',
      padding: isMobile ? '10px 16px' : '8px 16px',
      borderRadius: '10px',
      fontSize: isMobile ? '15px' : '14px',
      fontWeight: '600',
      marginTop: '12px',
      width: '100%',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
    btnLinkHover: {
      background: 'rgba(96, 165, 250, 0.3)',
      transform: 'translateY(-1px)',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: isMobile ? '24px' : '32px',
      padding: '0 8px',
      justifyContent: isMobile && !mobileSidebarOpen ? 'center' : 'flex-start',
    },
    logoText: {
      fontSize: isMobile ? '20px' : '24px',
      fontWeight: '800',
      // background: 'linear-gradient(135deg, #60A5FA 0%, #A855F7 50%, #EC4899 100%)',
      background: '#F1F5F9',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      margin: '0',
      animation: 'textShimmer 3s ease-in-out infinite',
    },
    pageTitle: {
      fontSize: isMobile ? '20px' : '28px',
      fontWeight: '700',
      color: '#F1F5F9',
      margin: '0',
      background: '#F1F5F9',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    topbarText: {
      fontSize: isMobile ? '12px' : '14px',
      color: 'rgba(255, 255, 255, 0.7)',
      fontWeight: '500',
      textAlign: isMobile ? 'right' : 'left',
      flex: isMobile ? '1 1 100%' : 'auto',
    },
    icon: {
      fontSize: isMobile ? '20px' : '18px',
      minWidth: isMobile ? '24px' : '20px',
    },
    closeSidebarButton: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      background: 'rgba(255, 255, 255, 0.1)',
      border: 'none',
      color: '#fff',
      borderRadius: '8px',
      width: '32px',
      height: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 35,
    },
  };

  const navItems = [
    { path: '/for-you', label: 'For You', icon: <FiHome style={styles.icon} /> },
    { path: currentProjectName ? `/kanban/${currentProjectName}` : '/kanban/general', label: 'Boards', icon: <FiTrello style={styles.icon} /> },
    { path: '/assets', label: 'Assets', icon: <FiFolder style={styles.icon} /> },
    { path: '/timeline', label: 'Timeline', icon: <FiClock style={styles.icon} /> },
  ];

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/for-you') return 'Dashboard';
    if (path.includes('/kanban')) return 'Project Boards';
    if (path === '/assets') return 'Assets';
    if (path === '/timeline') return 'Timeline';
    if (path === '/notifications') return 'Notifications';
    return 'Flow Track';
  };

  return (
    <div style={styles.appShell} role="application" aria-label="Flow Track application">
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
              top: '-20px',
              opacity: particle.opacity,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobile && (
        <div 
          style={styles.mobileSidebarOverlay} 
          onClick={closeMobileSidebar}
          aria-hidden="true"
        />
      )}

      <aside style={styles.sidebar} aria-label="Sidebar navigation">
        <div style={styles.sidebarGlow} />
        
        {/* Close button for mobile */}
        {isMobile && mobileSidebarOpen && (
          <button 
            style={styles.closeSidebarButton}
            onClick={closeMobileSidebar}
            aria-label="Close sidebar"
          >
            <FiX size={18} />
          </button>
        )}
        
        <div>
          <div style={styles.logo}>
            {(!isMobile || mobileSidebarOpen) && (
              <button 
                style={{
                  ...styles.menuButton,
                  ...(isHovered === 'menu' ? styles.menuButtonHover : {})
                }} 
                onClick={toggleSidebar}
                onMouseEnter={() => setIsHovered('menu')}
                onMouseLeave={() => setIsHovered(null)}
                aria-label="Toggle sidebar"
              >
                <FiMenu size={isMobile ? 18 : 20} />
              </button>
            )}
            {(isMobile && mobileSidebarOpen) || (!isMobile && sidebarOpen) ? (
              <span style={styles.logoText}>Flow Track</span>
            ) : isMobile ? (
              <span style={styles.logoText}>FT</span>
            ) : null}
          </div>
          
          <nav role="navigation" aria-label="Main navigation">
            {navItems.map(({ path, label, icon }) => (
              <NavLink
                key={path}
                to={path}
                style={({ isActive }) => ({
                  ...styles.navLink,
                  ...(isActive ? styles.navLinkActive : {}),
                  ...(isHovered === label ? styles.navLinkHover : {})
                })}
                onMouseEnter={() => setIsHovered(label)}
                onMouseLeave={() => setIsHovered(null)}
                onClick={isMobile ? closeMobileSidebar : undefined}
                end
              >
                {icon}
                {(isMobile && mobileSidebarOpen) || (!isMobile && sidebarOpen) ? (
                  <>
                    {label}
                    <FiChevronRight style={{ marginLeft: 'auto', opacity: 0.7 }} />
                  </>
                ) : null}
              </NavLink>
            ))}
          </nav>
        </div>

        <div>
          {user ? (
            <div style={styles.userInfo} aria-label="User Profile">
              <div style={{ color: '#F1F5F9', fontWeight: '600', fontSize: isMobile ? '15px' : '16px' }}>
                {user.name}
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: isMobile ? '13px' : '14px', marginTop: '4px' }}>
                {user.email}
              </div>
              <button 
                style={{
                  ...styles.btnLink,
                  ...(isHovered === 'logout' ? styles.btnLinkHover : {})
                }}
                onClick={logout}
                onMouseEnter={() => setIsHovered('logout')}
                onMouseLeave={() => setIsHovered(null)}
              >
                <FiLogOut /> {(isMobile && mobileSidebarOpen) || (!isMobile && sidebarOpen) ? 'Sign Out' : ''}
              </button>
            </div>
          ) : (
            <NavLink to="/login" style={styles.navLink}>Sign in</NavLink>
          )}
        </div>
      </aside>

      <div style={styles.content}>
        <header style={styles.topbar} role="banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Always show menu button on mobile */}
            {isMobile && (
              <button 
                style={{
                  ...styles.menuButton,
                  ...(isHovered === 'mobileMenu' ? styles.menuButtonHover : {})
                }} 
                onClick={toggleSidebar}
                onMouseEnter={() => setIsHovered('mobileMenu')}
                onMouseLeave={() => setIsHovered(null)}
                aria-label="Open menu"
              >
                <FiMenu size={18} />
              </button>
            )}
            <h1 style={styles.pageTitle}>{getPageTitle()}</h1>
          </div>
          
        </header>
        <main 
          id="main" 
          tabIndex="-1" 
          role="main" 
          style={{ 
            padding: isMobile ? '20px 16px' : '32px', 
            minHeight: 'calc(100vh - 80px)',
            maxWidth: '100%',
            overflowX: 'hidden'
          }}
        >
          <Routes>
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/:id" element={<ProjectView />} />
            <Route path="/kanban/:name" element={<KanbanBoard />} />
            <Route path="/backlog/:id" element={<Backlog />} />
            <Route path="/issues/new" element={<IssueCreate />} />
            <Route path="/issues/:id" element={<IssueDetails />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/users" element={<Users />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/for-you" element={<ForYou />} />
            <Route path="*" element={<Navigate to="/for-you" replace />} />
          </Routes>
        </main>
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

          @keyframes slideIn {
            0% {
              opacity: 0;
              transform: translateX(-20px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            background: #0a0a0f;
          }

          button:hover:not(:disabled) {
            transform: translateY(-1px) !important;
          }

          a:hover {
            color: #60A5FA !important;
          }

          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 6px;
          }

          ::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
          }

          ::-webkit-scrollbar-thumb {
            background: rgba(96, 165, 250, 0.3);
            border-radius: 3px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: rgba(96, 165, 250, 0.5);
          }

          /* Mobile-specific styles */
          @media (max-width: 767px) {
            .mobile-hidden {
              display: none !important;
            }
            
            .mobile-full-width {
              width: 100% !important;
            }
            
            .mobile-text-center {
              text-align: center !important;
            }
            
            .mobile-padding {
              padding: 16px !important;
            }
          }

          /* Tablet-specific styles */
          @media (min-width: 768px) and (max-width: 1023px) {
            .tablet-optimized {
              font-size: 14px !important;
            }
          }

          /* Touch device optimizations */
          @media (hover: none) and (pointer: coarse) {
            button, a {
              min-height: 44px;
              min-width: 44px;
            }
            
            .nav-link {
              padding: 16px 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
}