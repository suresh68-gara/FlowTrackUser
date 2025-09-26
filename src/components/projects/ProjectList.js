
// // import React, { useEffect, useState } from 'react';
// // import { listProjects, addProject } from '../../services/mockApi';
// // import { Link } from 'react-router-dom';
// // import { v4 as uuidv4 } from 'uuid';
// // import { FiPlus } from 'react-icons/fi';

// // export default function ProjectList() {
// //   const [projects, setProjects] = useState([]);
// //   const [name, setName] = useState('');
// //   const [key, setKey] = useState('');

// //   useEffect(()=>{ listProjects().then(setProjects); },[]);

// //   const create = async () => {
// //     const p = { id: uuidv4(), key: key.toUpperCase()||'PRJ', name, description:'', leads:[] };
// //     await addProject(p);
// //     setProjects(await listProjects());
// //     setName(''); setKey('');
// //   };

// //   return (
// //     <div className="grid">
// //       <div className="card" aria-labelledby="proj-create">
// //         <h2 id="proj-create">Create Project</h2>
// //         <div className="form-row"><label>Project Name<input value={name} onChange={e=>setName(e.target.value)} /></label></div>
// //         <div className="form-row"><label>Project Key<input value={key} onChange={e=>setKey(e.target.value)} /></label></div>
// //         <button className="btn" onClick={create}><FiPlus /> Create</button>
// //       </div>
// //       <div className="card" aria-labelledby="proj-list">
// //         <h2 id="proj-list">Projects</h2>
// //         <ul>{projects.map(p=>(<li key={p.id}><Link to={'/projects/'+p.id}><strong>{p.name}</strong> <span className="small">({p.key})</span></Link></li>))}</ul>
// //       </div>
// //     </div>
// //   );
// // }


// // import React, { useEffect, useState } from 'react';
// // import { listProjects, addProject } from '../../services/mockApi';
// // import { Link } from 'react-router-dom';
// // import { v4 as uuidv4 } from 'uuid';
// // import { FiPlus } from 'react-icons/fi';
 
// // export default function ProjectList() {
// //   const [projects, setProjects] = useState([]);
// //   const [name, setName] = useState('');
// //   const [key, setKey] = useState('');
 
// //   useEffect(() => {
// //     listProjects().then(setProjects);
// //   }, []);
 
// //   const create = async () => {
// //     const p = { id: uuidv4(), key: key.toUpperCase() || 'PRJ', name, description: '', leads: [] };
// //     await addProject(p);
// //     setProjects(await listProjects());
// //     setName('');
// //     setKey('');
// //   };
 
// //   return (
// //     <div className="grid">
// //       <div className="card" aria-labelledby="proj-create">
// //         <h2 id="proj-create">Create Project</h2>
// //         <div className="form-row">
// //           <label>
// //             Project Name
// //             <input value={name} onChange={e => setName(e.target.value)} />
// //           </label>
// //         </div>
// //         <div className="form-row">
// //           <label>
// //             Project Key
// //             <input value={key} onChange={e => setKey(e.target.value)} />
// //           </label>
// //         </div>
// //         <button className="btn" onClick={create}>
// //           <FiPlus /> Create
// //         </button>
// //       </div>
// //       <div className="card" aria-labelledby="proj-list">
// //         <h2 id="proj-list">Projects</h2>
// //         <ul>
// //           {projects.map(p => (
// //             <li key={p.id}>
// //               <Link to={'/projects/' + p.id}>
// //                 <strong>{p.name}</strong> <span className="small">({p.key})</span>
// //               </Link>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }
 
//  //////////////////////










// import React, { useEffect, useState } from 'react';
// import { listProjects, addProject } from '../../services/mockApi';
// import { Link } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import { FiPlus } from 'react-icons/fi';
 
// export default function ProjectList() {
//   const [projects, setProjects] = useState([]);
//   const [name, setName] = useState('');
//   const [key, setKey] = useState('');
 
//   useEffect(() => {
//     listProjects().then(setProjects);
//   }, []);
 
//   const create = async () => {
//     const p = { id: uuidv4(), key: key.toUpperCase() || 'PRJ', name, description: '', leads: [] };
//     await addProject(p);
//     setProjects(await listProjects());
//     setName('');
//     setKey('');
//   };
 
//   return (
//     <div className="grid">
//       <div className="card" aria-labelledby="proj-create">
//         <h2 id="proj-create">Create Project</h2>
//         <div className="form-row">
//           <label>
//             Project Name
//             <input value={name} onChange={e => setName(e.target.value)} />
//           </label>
//         </div>
//         <div className="form-row">
//           <label>
//             Project Key
//             <input value={key} onChange={e => setKey(e.target.value)} />
//           </label>
//         </div>
//         <button className="btn" onClick={create}>
//           <FiPlus /> Create
//         </button>
//       </div>
//       <div className="card" aria-labelledby="proj-list">
//         <h2 id="proj-list">Projects</h2>
//         <ul>
//           {projects.map(p => (
//             <li key={p.id}>
//               <Link to={'/projects/' + p.id}>
//                 <strong>{p.name}</strong> <span className="small">({p.key})</span>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }






// import React, { useEffect, useState } from 'react';
// import { listProjects, addProject, deleteProject, updateProject } from '../../services/mockApi';
// import { Link } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import { FiPlus, FiTrash2, FiEdit2, FiCheck, FiX, FiChevronUp, FiChevronDown } from 'react-icons/fi';
// import { formatDistanceToNow } from 'date-fns';

// export default function ProjectList() {
//   const [projects, setProjects] = useState([]);
//   const [name, setName] = useState('');
//   const [key, setKey] = useState('');
//   const [lead, setLead] = useState('');
//   const [type, setType] = useState('Software');
//   const [editingId, setEditingId] = useState(null);
//   const [editName, setEditName] = useState('');
//   const [editKey, setEditKey] = useState('');
//   const [editLead, setEditLead] = useState('');
//   const [editType, setEditType] = useState('');
//   const [search, setSearch] = useState('');
//   const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });

//   useEffect(() => {
//     loadProjects();
//   }, []);

//   const loadProjects = async () => {
//     setProjects(await listProjects());
//   };

//   const create = async () => {
//     if (!name.trim()) return;
//     const now = new Date().toISOString();
//     const p = {
//       id: uuidv4(),
//       key: key.toUpperCase() || 'PRJ',
//       name,
//       type,
//       lead: lead || 'Unassigned',
//       description: '',
//       leads: [],
//       lastUpdated: now
//     };
//     await addProject(p);
//     await loadProjects();
//     setName('');
//     setKey('');
//     setLead('');
//     setType('Software');
//   };

//   const remove = async (id) => {
//     if (window.confirm("Are you sure you want to delete this project?")) {
//       await deleteProject(id);
//       await loadProjects();
//     }
//   };

//   const startEdit = (p) => {
//     setEditingId(p.id);
//     setEditName(p.name);
//     setEditKey(p.key);
//     setEditLead(p.lead || '');
//     setEditType(p.type || 'Software');
//   };

//   const cancelEdit = () => {
//     setEditingId(null);
//     setEditName('');
//     setEditKey('');
//     setEditLead('');
//     setEditType('');
//   };

//   const saveEdit = async (id) => {
//     const now = new Date().toISOString();
//     await updateProject(id, {
//       name: editName,
//       key: editKey.toUpperCase(),
//       lead: editLead,
//       type: editType,
//       lastUpdated: now
//     });
//     setEditingId(null);
//     await loadProjects();
//   };

//   const avatarStyle = {
//     width: '28px',
//     height: '28px',
//     borderRadius: '50%',
//     background: '#0052cc',
//     color: 'white',
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: '600',
//     marginRight: '8px',
//     fontSize: '12px'
//   };

//   const typeBadgeStyle = (t) => {
//     const colors = {
//       Software: { bg: '#e3fcef', color: '#006644' },
//       Business: { bg: '#deebff', color: '#0747a6' },
//       Service: { bg: '#ffebe6', color: '#de350b' }
//     };
//     const c = colors[t] || { bg: '#f4f5f7', color: '#172b4d' };
//     return {
//       background: c.bg,
//       color: c.color,
//       padding: '0.25rem 0.6rem',
//       borderRadius: '4px',
//       fontSize: '12px',
//       fontWeight: 600
//     };
//   };

//   const getProjectColor = (id) => {
//     const colors = ['#0052cc', '#2684ff', '#00a3bf', '#36b37e', '#ff991f', '#de350b', '#6554c0'];
//     const index = id.charCodeAt(0) % colors.length;
//     return colors[index];
//   };

//   const projectIconStyle = (id) => ({
//     width: '28px',
//     height: '28px',
//     borderRadius: '4px',
//     background: getProjectColor(id),
//     color: 'white',
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: 600,
//     marginRight: '8px',
//     fontSize: '12px',
//     textTransform: 'uppercase'
//   });

//   // Filtering
//   const filteredProjects = projects.filter(p =>
//     p.name.toLowerCase().includes(search.toLowerCase()) ||
//     p.key.toLowerCase().includes(search.toLowerCase()) ||
//     (p.lead && p.lead.toLowerCase().includes(search.toLowerCase())) ||
//     (p.type && p.type.toLowerCase().includes(search.toLowerCase()))
//   );

//   // Sorting
//   const sortedProjects = [...filteredProjects].sort((a, b) => {
//     const aVal = a[sortConfig.key]?.toString().toLowerCase() || '';
//     const bVal = b[sortConfig.key]?.toString().toLowerCase() || '';
//     if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
//     if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
//     return 0;
//   });

//   const toggleSort = (key) => {
//     setSortConfig((prev) =>
//       prev.key === key
//         ? { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
//         : { key, direction: 'asc' }
//     );
//   };

//   const sortIcon = (col) => {
//     if (sortConfig.key !== col) return null;
//     return sortConfig.direction === 'asc' ? <FiChevronUp /> : <FiChevronDown />;
//   };

//   return (
//     <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem' }}>
//       {/* Create Project */}
//       {/* ... (same as before, keeping form part unchanged) ... */}

//       {/* Project Table */}
//       <div style={{ background: '#fff', borderRadius: '6px', padding: '1.5rem', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
//         <h2 style={{ marginBottom: '1rem' }}>Projects</h2>

//         <input
//           type="text"
//           value={search}
//           onChange={e => setSearch(e.target.value)}
//           placeholder="Search projects..."
//           style={{
//             width: '100%',
//             padding: '0.6rem',
//             marginBottom: '1rem',
//             border: '1px solid #dfe1e6',
//             borderRadius: '4px'
//           }}
//         />

//         {sortedProjects.length === 0 ? (
//           <p>No projects found.</p>
//         ) : (
//           <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//             <thead>
//               <tr>
//                 <th onClick={() => toggleSort('key')} style={{ cursor: 'pointer', padding: '0.75rem 1rem', borderBottom: '1px solid #f0f0f0', background: '#f4f5f7' }}>
//                   Key {sortIcon('key')}
//                 </th>
//                 <th onClick={() => toggleSort('name')} style={{ cursor: 'pointer', padding: '0.75rem 1rem', borderBottom: '1px solid #f0f0f0', background: '#f4f5f7' }}>
//                   Name {sortIcon('name')}
//                 </th>
//                 <th onClick={() => toggleSort('type')} style={{ cursor: 'pointer', padding: '0.75rem 1rem', borderBottom: '1px solid #f0f0f0', background: '#f4f5f7' }}>
//                   Type {sortIcon('type')}
//                 </th>
//                 <th onClick={() => toggleSort('lead')} style={{ cursor: 'pointer', padding: '0.75rem 1rem', borderBottom: '1px solid #f0f0f0', background: '#f4f5f7' }}>
//                   Lead {sortIcon('lead')}
//                 </th>
//                 <th onClick={() => toggleSort('lastUpdated')} style={{ cursor: 'pointer', padding: '0.75rem 1rem', borderBottom: '1px solid #f0f0f0', background: '#f4f5f7' }}>
//                   Last Updated {sortIcon('lastUpdated')}
//                 </th>
//                 <th style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #f0f0f0', background: '#f4f5f7', textAlign: 'right' }}>
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {sortedProjects.map(p => (
//                 <tr key={p.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
//                   <td style={{ padding: '0.75rem 1rem' }}>{p.key}</td>
//                   <td style={{ padding: '0.75rem 1rem', display: 'flex', alignItems: 'center' }}>
//                     <span style={projectIconStyle(p.id)}>{p.key.slice(0, 2)}</span>
//                     {editingId === p.id ? (
//                       <input value={editName} onChange={e => setEditName(e.target.value)} />
//                     ) : (
//                       <Link to={'/projects/' + p.id} style={{ fontWeight: 600, color: '#0052cc', textDecoration: 'none' }}>
//                         {p.name}
//                       </Link>
//                     )}
//                   </td>
//                   <td style={{ padding: '0.75rem 1rem' }}>
//                     {editingId === p.id ? (
//                       <select value={editType} onChange={e => setEditType(e.target.value)}>
//                         <option value="Software">Software</option>
//                         <option value="Business">Business</option>
//                         <option value="Service">Service</option>
//                       </select>
//                     ) : (
//                       <span style={typeBadgeStyle(p.type)}>{p.type}</span>
//                     )}
//                   </td>
//                   <td style={{ padding: '0.75rem 1rem' }}>
//                     {editingId === p.id ? (
//                       <input value={editLead} onChange={e => setEditLead(e.target.value)} />
//                     ) : (
//                       <div style={{ display: 'flex', alignItems: 'center' }}>
//                         <span style={avatarStyle}>{p.lead ? p.lead.charAt(0).toUpperCase() : '?'}</span>
//                         {p.lead || 'Unassigned'}
//                       </div>
//                     )}
//                   </td>
//                   <td style={{ padding: '0.75rem 1rem', color: '#6b778c' }}>
//                     {p.lastUpdated ? formatDistanceToNow(new Date(p.lastUpdated), { addSuffix: true }) : '—'}
//                   </td>
//                   <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
//                     {editingId === p.id ? (
//                       <>
//                         <button onClick={() => saveEdit(p.id)}><FiCheck /></button>
//                         <button onClick={cancelEdit}><FiX /></button>
//                       </>
//                     ) : (
//                       <>
//                         <button onClick={() => startEdit(p)}><FiEdit2 /></button>
//                         <button onClick={() => remove(p.id)}><FiTrash2 /></button>
//                       </>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }






// import React, { useEffect, useState } from 'react';
// import { listProjects, addProject, deleteProject, updateProject } from '../../services/mockApi';
// import { v4 as uuidv4 } from 'uuid';
// import { FiPlus, FiTrash2, FiEdit2, FiCheck, FiX } from 'react-icons/fi';
// import { formatDistanceToNow } from 'date-fns';

// export default function ProjectList() {
//   const [projects, setProjects] = useState([]);
//   const [name, setName] = useState('');
//   const [key, setKey] = useState('');
//   const [leads, setLeads] = useState([]);
//   const [type, setType] = useState('Software');
//   const [editingId, setEditingId] = useState(null);
//   const [editName, setEditName] = useState('');
//   const [editKey, setEditKey] = useState('');
//   const [editLeads, setEditLeads] = useState([]);
//   const [editType, setEditType] = useState('');

//   useEffect(() => { loadProjects(); }, []);
//   const loadProjects = async () => setProjects(await listProjects());

//   const createProject = async () => {
//     if (!name.trim()) return;
//     const now = new Date().toISOString();
//     const p = {
//       id: uuidv4(),
//       key: key.toUpperCase() || 'PRJ',
//       name,
//       type,
//       leads: leads.length ? leads : ['Unassigned'],
//       description: '',
//       lastUpdated: now,
//       createdAt: now
//     };
//     await addProject(p);
//     setName(''); setKey(''); setLeads([]); setType('Software');
//     loadProjects();
//   };

//   const removeProject = async (id) => {
//     if (window.confirm("Are you sure you want to delete this project?")) {
//       await deleteProject(id);
//       loadProjects();
//     }
//   };

//   const startEdit = (p) => {
//     setEditingId(p.id);
//     setEditName(p.name);
//     setEditKey(p.key);
//     setEditLeads(p.leads || []);
//     setEditType(p.type || 'Software');
//   };
//   const cancelEdit = () => { setEditingId(null); setEditName(''); setEditKey(''); setEditLeads([]); setEditType(''); };
//   const saveEdit = async (id) => {
//     await updateProject(id, {
//       name: editName,
//       key: editKey.toUpperCase(),
//       leads: editLeads.length ? editLeads : ['Unassigned'],
//       type: editType,
//       lastUpdated: new Date().toISOString()
//     });
//     cancelEdit();
//     loadProjects();
//   };

//   const leadColor = (name) => {
//     const colors = ['#0052CC', '#36B37E', '#FF5630', '#FFAB00', '#6554C0', '#00A3BF'];
//     if (!name) return '#6B778C';
//     const index = name.charCodeAt(0) % colors.length;
//     return colors[index];
//   };

//   const typeBadgeStyle = t => {
//     const colors = {
//       Software: { bg: '#E3FCF7', color: '#006644' },
//       Business: { bg: '#DEEBFF', color: '#0747A6' },
//       Service: { bg: '#FFEBE6', color: '#DE350B' }
//     };
//     const c = colors[t] || { bg: '#F4F5F7', color: '#172B4D' };
//     return { background: c.bg, color: c.color, padding:'0.25rem 0.6rem', borderRadius:'4px', fontSize:'12px', fontWeight:600 };
//   };

//   const renderLeads = (leadsArr) => (
//     <div style={{ display:'flex', alignItems:'center' }}>
//       {leadsArr.map((l,i) => (
//         <div key={i} title={l} style={{
//           width:'28px', height:'28px', borderRadius:'50%', background:leadColor(l), color:'#fff',
//           display:'flex', alignItems:'center', justifyContent:'center',
//           fontSize:'12px', fontWeight:600, marginLeft:i>0?-8:0, border:'2px solid #fff'
//         }}>{l.charAt(0).toUpperCase()}</div>
//       ))}
//     </div>
//   );

//   return (
//     <div style={{ display:'grid', gridTemplateColumns:'1fr 3fr', gap:'2rem', padding:'2rem', fontFamily:'Arial,sans-serif' }}>
//       {/* Create Project Form */}
//       <div style={{ background:'#fff', padding:'1.5rem', borderRadius:'8px', boxShadow:'0 2px 6px rgba(0,0,0,0.1)' }}>
//         <h2 style={{ marginBottom:'1rem', fontSize:'18px', color:'#172b4d' }}>Create Project</h2>
//         <div style={{ marginBottom:'1rem' }}><label>Project Name</label><input value={name} onChange={e=>setName(e.target.value)} style={{ width:'100%', padding:'8px', borderRadius:'4px', border:'1px solid #ccc' }} /></div>
//         <div style={{ marginBottom:'1rem' }}><label>Project Key</label><input value={key} onChange={e=>setKey(e.target.value)} style={{ width:'100%', padding:'8px', borderRadius:'4px', border:'1px solid #ccc' }} /></div>
//         <div style={{ marginBottom:'1rem' }}><label>Leads (comma separated)</label><input value={leads.join(',')} onChange={e=>setLeads(e.target.value.split(',').map(l=>l.trim()))} style={{ width:'100%', padding:'8px', borderRadius:'4px', border:'1px solid #ccc' }} /></div>
//         <div style={{ marginBottom:'1rem' }}><label>Type</label><select value={type} onChange={e=>setType(e.target.value)} style={{ width:'100%', padding:'8px', borderRadius:'4px', border:'1px solid #ccc' }}><option>Software</option><option>Business</option><option>Service</option></select></div>
//         <button onClick={createProject} style={{ display:'flex', alignItems:'center', gap:'6px', background:'#0052CC', color:'#fff', border:'none', padding:'10px 16px', borderRadius:'4px', cursor:'pointer' }}><FiPlus /> Create</button>
//       </div>

//       {/* Jira-style Project Cards */}
//       <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'1rem' }}>
//         {projects.map(p => (
//           <div key={p.id} style={{
//             display:'flex', flexDirection:'column', padding:'1rem', borderRadius:'6px',
//             boxShadow:'0 1px 3px rgba(0,0,0,0.1)', position:'relative',
//             borderLeft:`6px solid ${leadColor(p.leads[0])}`, transition:'transform 0.2s',
//           }}
//           onMouseEnter={e=>e.currentTarget.style.transform='translateY(-3px)'}
//           onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}
//           >
//             <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
//               <div style={{ fontWeight:600, fontSize:'16px', color:'#172b4d' }}>{editingId===p.id?<input value={editName} onChange={e=>setEditName(e.target.value)} />:<span>{p.name}</span>}</div>
//               <div style={{ display:'flex', gap:'6px', opacity:0.7 }}>
//                 {editingId===p.id?(<>
//                   <button onClick={()=>saveEdit(p.id)}><FiCheck /></button>
//                   <button onClick={cancelEdit}><FiX /></button>
//                 </>):(<>
//                   <button onClick={()=>startEdit(p)}><FiEdit2 /></button>
//                   <button onClick={()=>removeProject(p.id)}><FiTrash2 /></button>
//                 </>)}
//               </div>
//             </div>
//             <div style={{ margin:'0.5rem 0', color:'#6b778c', fontSize:'13px' }}>{p.key}</div>
//             <div style={{ margin:'0.5rem 0' }}><span style={typeBadgeStyle(p.type)}>{p.type}</span></div>
//             <div style={{ marginTop:'auto', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
//               {editingId===p.id?<input value={editLeads.join(',')} onChange={e=>setEditLeads(e.target.value.split(',').map(l=>l.trim()))} />:renderLeads(p.leads)}
//               <div style={{ fontSize:'12px', color:'#6b778c' }}>{p.lastUpdated?formatDistanceToNow(new Date(p.lastUpdated),{addSuffix:true}):'—'}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





// //deepseek

// import React, { useEffect, useState } from 'react';
// import { listProjects, addProject, deleteProject, updateProject } from '../../services/mockApi';
// import { v4 as uuidv4 } from 'uuid';
// import { FiPlus, FiTrash2, FiEdit2, FiCheck, FiX, FiUsers, FiLayers, FiKey, FiCalendar } from 'react-icons/fi';
// import { formatDistanceToNow } from 'date-fns';

// export default function ProjectList() {
//   const [projects, setProjects] = useState([]);
//   const [name, setName] = useState('');
//   const [key, setKey] = useState('');
//   const [leads, setLeads] = useState([]);
//   const [type, setType] = useState('Software');
//   const [editingId, setEditingId] = useState(null);
//   const [editName, setEditName] = useState('');
//   const [editKey, setEditKey] = useState('');
//   const [editLeads, setEditLeads] = useState([]);
//   const [editType, setEditType] = useState('');

//   useEffect(() => { loadProjects(); }, []);
//   const loadProjects = async () => setProjects(await listProjects());

//   const createProject = async () => {
//     if (!name.trim()) return;
//     const now = new Date().toISOString();
//     const p = {
//       id: uuidv4(),
//       key: key.toUpperCase() || 'PRJ',
//       name,
//       type,
//       leads: leads.length ? leads : ['Unassigned'],
//       description: '',
//       lastUpdated: now,
//       createdAt: now
//     };
//     await addProject(p);
//     setName(''); setKey(''); setLeads([]); setType('Software');
//     loadProjects();
//   };

//   const removeProject = async (id) => {
//     if (window.confirm("Are you sure you want to delete this project?")) {
//       await deleteProject(id);
//       loadProjects();
//     }
//   };

//   const startEdit = (p) => {
//     setEditingId(p.id);
//     setEditName(p.name);
//     setEditKey(p.key);
//     setEditLeads(p.leads || []);
//     setEditType(p.type || 'Software');
//   };
  
//   const cancelEdit = () => { 
//     setEditingId(null); 
//     setEditName(''); 
//     setEditKey(''); 
//     setEditLeads([]); 
//     setEditType(''); 
//   };
  
//   const saveEdit = async (id) => {
//     await updateProject(id, {
//       name: editName,
//       key: editKey.toUpperCase(),
//       leads: editLeads.length ? editLeads : ['Unassigned'],
//       type: editType,
//       lastUpdated: new Date().toISOString()
//     });
//     cancelEdit();
//     loadProjects();
//   };

//   const leadColor = (name) => {
//     const colors = ['#0052CC', '#36B37E', '#FF5630', '#FFAB00', '#6554C0', '#00A3BF'];
//     if (!name) return '#6B778C';
//     const index = name.charCodeAt(0) % colors.length;
//     return colors[index];
//   };

//   const typeBadgeStyle = t => {
//     const colors = {
//       Software: { bg: '#E3FCF7', color: '#006644', icon: '💻' },
//       Business: { bg: '#DEEBFF', color: '#0747A6', icon: '📊' },
//       Service: { bg: '#FFEBE6', color: '#DE350B', icon: '🔧' }
//     };
//     const c = colors[t] || { bg: '#F4F5F7', color: '#172B4D', icon: '📁' };
//     return c;
//   };

//   const renderLeads = (leadsArr) => (
//     <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
//       <FiUsers size={14} color="#6B778C" />
//       {leadsArr.map((l, i) => (
//         <div key={i} title={l} style={{
//           width: '28px', 
//           height: '28px', 
//           borderRadius: '50%', 
//           background: leadColor(l), 
//           color: '#fff',
//           display: 'flex', 
//           alignItems: 'center', 
//           justifyContent: 'center',
//           fontSize: '12px', 
//           fontWeight: 600, 
//           marginLeft: i > 0 ? -8 : 0, 
//           border: '2px solid #fff',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }}>
//           {l.charAt(0).toUpperCase()}
//         </div>
//       ))}
//     </div>
//   );

//   const InputField = ({ label, value, onChange, icon: Icon, ...props }) => (
//     <div style={{ marginBottom: '1rem' }}>
//       <label style={{ 
//         display: 'block', 
//         marginBottom: '4px', 
//         fontSize: '14px', 
//         fontWeight: 600, 
//         color: '#172B4D' 
//       }}>
//         {Icon && <Icon size={14} style={{ marginRight: '6px' }} />}
//         {label}
//       </label>
//       <input 
//         value={value} 
//         onChange={onChange}
//         style={{ 
//           width: '100%', 
//           padding: '10px 12px', 
//           borderRadius: '4px', 
//           border: '1px solid #DFE1E6',
//           fontSize: '14px',
//           transition: 'all 0.2s'
//         }}
//         onFocus={(e) => e.target.style.borderColor = '#0052CC'}
//         onBlur={(e) => e.target.style.borderColor = '#DFE1E6'}
//         {...props}
//       />
//     </div>
//   );

//   return (
//     <div style={{ 
//       minHeight: '100vh', 
//       background: '#F4F5F7', 
//       padding: '2rem',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
//     }}>
//       <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
//         {/* Header */}
//         <div style={{ marginBottom: '2rem' }}>
//           <h1 style={{ 
//             fontSize: '24px', 
//             fontWeight: 600, 
//             color: '#172B4D',
//             marginBottom: '4px'
//           }}>
//             Projects
//           </h1>
//           <p style={{ color: '#6B778C', fontSize: '14px' }}>
//             Manage your team's projects and settings
//           </p>
//         </div>

//         <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '2rem' }}>
//           {/* Create Project Form */}
//           <div style={{ 
//             background: '#fff', 
//             padding: '1.5rem', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//             border: '1px solid #DFE1E6',
//             height: 'fit-content',
//             position: 'sticky',
//             top: '2rem'
//           }}>
//             <h2 style={{ 
//               marginBottom: '1.5rem', 
//               fontSize: '16px', 
//               fontWeight: 600,
//               color: '#172B4D',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '8px'
//             }}>
//               <FiPlus size={18} /> Create New Project
//             </h2>
            
//             <InputField 
//               label="Project Name" 
//               value={name} 
//               onChange={e => setName(e.target.value)}
//               icon={FiLayers}
//               placeholder="Enter project name"
//             />
            
//             <InputField 
//               label="Project Key" 
//               value={key} 
//               onChange={e => setKey(e.target.value)}
//               icon={FiKey}
//               placeholder="PRJ"
//               style={{ textTransform: 'uppercase' }}
//             />
            
//             <InputField 
//               label="Leads (comma separated)" 
//               value={leads.join(',')} 
//               onChange={e => setLeads(e.target.value.split(',').map(l => l.trim()))}
//               icon={FiUsers}
//               placeholder="John Doe, Jane Smith"
//             />
            
//             <div style={{ marginBottom: '1.5rem' }}>
//               <label style={{ 
//                 display: 'block', 
//                 marginBottom: '4px', 
//                 fontSize: '14px', 
//                 fontWeight: 600, 
//                 color: '#172B4D' 
//               }}>
//                 <FiLayers size={14} style={{ marginRight: '6px' }} />
//                 Type
//               </label>
//               <select 
//                 value={type} 
//                 onChange={e => setType(e.target.value)} 
//                 style={{ 
//                   width: '100%', 
//                   padding: '10px 12px', 
//                   borderRadius: '4px', 
//                   border: '1px solid #DFE1E6',
//                   fontSize: '14px',
//                   background: '#fff'
//                 }}
//               >
//                 <option value="Software">💻 Software</option>
//                 <option value="Business">📊 Business</option>
//                 <option value="Service">🔧 Service</option>
//               </select>
//             </div>
            
//             <button 
//               onClick={createProject} 
//               style={{ 
//                 display: 'flex', 
//                 alignItems: 'center', 
//                 justifyContent: 'center',
//                 gap: '8px', 
//                 background: '#0052CC', 
//                 color: '#fff', 
//                 border: 'none', 
//                 padding: '12px 20px', 
//                 borderRadius: '4px', 
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 fontWeight: 600,
//                 width: '100%',
//                 transition: 'all 0.2s'
//               }}
//               onMouseEnter={(e) => e.target.style.background = '#0747A6'}
//               onMouseLeave={(e) => e.target.style.background = '#0052CC'}
//             >
//               <FiPlus size={16} /> Create Project
//             </button>
//           </div>

//           {/* Project Grid */}
//           <div>
//             <div style={{ 
//               display: 'flex', 
//               justifyContent: 'space-between', 
//               alignItems: 'center',
//               marginBottom: '1rem'
//             }}>
//               <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172B4D' }}>
//                 All Projects ({projects.length})
//               </h3>
//             </div>
            
//             <div style={{ 
//               display: 'grid', 
//               gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
//               gap: '1rem' 
//             }}>
//               {projects.map(p => (
//                 <div key={p.id} style={{
//                   display: 'flex', 
//                   flexDirection: 'column', 
//                   padding: '1.25rem',
//                   borderRadius: '8px',
//                   background: '#fff',
//                   boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
//                   border: '1px solid #DFE1E6',
//                   transition: 'all 0.2s ease',
//                   position: 'relative',
//                   overflow: 'hidden'
//                 }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.transform = 'translateY(-2px)';
//                   e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                   e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
//                 }}
//                 >
//                   {/* Project Key Badge */}
//                   <div style={{ 
//                     position: 'absolute',
//                     top: '0',
//                     right: '0',
//                     background: '#DFE1E6',
//                     color: '#172B4D',
//                     padding: '4px 8px',
//                     fontSize: '12px',
//                     fontWeight: 600,
//                     borderBottomLeftRadius: '4px'
//                   }}>
//                     {p.key}
//                   </div>

//                   {/* Project Header */}
//                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
//                     <div style={{ flex: 1, marginRight: '1rem' }}>
//                       {editingId === p.id ? (
//                         <input 
//                           value={editName} 
//                           onChange={e => setEditName(e.target.value)}
//                           style={{ 
//                             width: '100%', 
//                             padding: '6px 8px', 
//                             border: '1px solid #DFE1E6',
//                             borderRadius: '4px',
//                             fontSize: '14px'
//                           }}
//                         />
//                       ) : (
//                         <h4 style={{ 
//                           fontWeight: 600, 
//                           fontSize: '16px', 
//                           color: '#172B4D',
//                           margin: 0,
//                           lineHeight: 1.3
//                         }}>
//                           {p.name}
//                         </h4>
//                       )}
//                     </div>
                    
//                     <div style={{ display: 'flex', gap: '4px' }}>
//                       {editingId === p.id ? (
//                         <>
//                           <button 
//                             onClick={() => saveEdit(p.id)}
//                             style={{
//                               padding: '6px',
//                               border: 'none',
//                               background: '#36B37E',
//                               color: 'white',
//                               borderRadius: '4px',
//                               cursor: 'pointer'
//                             }}
//                           >
//                             <FiCheck size={14} />
//                           </button>
//                           <button 
//                             onClick={cancelEdit}
//                             style={{
//                               padding: '6px',
//                               border: 'none',
//                               background: '#FF5630',
//                               color: 'white',
//                               borderRadius: '4px',
//                               cursor: 'pointer'
//                             }}
//                           >
//                             <FiX size={14} />
//                           </button>
//                         </>
//                       ) : (
//                         <>
//                           <button 
//                             onClick={() => startEdit(p)}
//                             style={{
//                               padding: '6px',
//                               border: 'none',
//                               background: 'transparent',
//                               color: '#6B778C',
//                               borderRadius: '4px',
//                               cursor: 'pointer',
//                               transition: 'all 0.2s'
//                             }}
//                             onMouseEnter={(e) => {
//                               e.target.style.background = '#EBECF0';
//                               e.target.style.color = '#172B4D';
//                             }}
//                             onMouseLeave={(e) => {
//                               e.target.style.background = 'transparent';
//                               e.target.style.color = '#6B778C';
//                             }}
//                           >
//                             <FiEdit2 size={14} />
//                           </button>
//                           <button 
//                             onClick={() => removeProject(p.id)}
//                             style={{
//                               padding: '6px',
//                               border: 'none',
//                               background: 'transparent',
//                               color: '#6B778C',
//                               borderRadius: '4px',
//                               cursor: 'pointer',
//                               transition: 'all 0.2s'
//                             }}
//                             onMouseEnter={(e) => {
//                               e.target.style.background = '#FFEBE6';
//                               e.target.style.color = '#DE350B';
//                             }}
//                             onMouseLeave={(e) => {
//                               e.target.style.background = 'transparent';
//                               e.target.style.color = '#6B778C';
//                             }}
//                           >
//                             <FiTrash2 size={14} />
//                           </button>
//                         </>
//                       )}
//                     </div>
//                   </div>

//                   {/* Project Type */}
//                   <div style={{ marginBottom: '1rem' }}>
//                     <span style={{ 
//                       background: typeBadgeStyle(p.type).bg, 
//                       color: typeBadgeStyle(p.type).color, 
//                       padding: '4px 8px', 
//                       borderRadius: '4px', 
//                       fontSize: '12px', 
//                       fontWeight: 600,
//                       display: 'inline-flex',
//                       alignItems: 'center',
//                       gap: '4px'
//                     }}>
//                       {typeBadgeStyle(p.type).icon} {p.type}
//                     </span>
//                   </div>

//                   {/* Project Leads */}
//                   <div style={{ marginBottom: '1rem' }}>
//                     {editingId === p.id ? (
//                       <input 
//                         value={editLeads.join(',')} 
//                         onChange={e => setEditLeads(e.target.value.split(',').map(l => l.trim()))}
//                         style={{ 
//                           width: '100%', 
//                           padding: '6px 8px', 
//                           border: '1px solid #DFE1E6',
//                           borderRadius: '4px',
//                           fontSize: '14px'
//                         }}
//                         placeholder="Enter leads separated by commas"
//                       />
//                     ) : renderLeads(p.leads)}
//                   </div>

//                   {/* Last Updated */}
//                   <div style={{ 
//                     display: 'flex', 
//                     alignItems: 'center', 
//                     gap: '6px',
//                     fontSize: '12px', 
//                     color: '#6B778C',
//                     marginTop: 'auto',
//                     paddingTop: '0.75rem',
//                     borderTop: '1px solid #F4F5F7'
//                   }}>
//                     <FiCalendar size={12} />
//                     Updated {p.lastUpdated ? formatDistanceToNow(new Date(p.lastUpdated), { addSuffix: true }) : '—'}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







// import React, { useEffect, useState } from 'react';
// import { listProjects, addProject, deleteProject, updateProject } from '../../services/mockApi';
// import { v4 as uuidv4 } from 'uuid';
// import { FiPlus, FiTrash2, FiEdit2, FiCheck, FiX, FiUsers, FiLayers, FiKey, FiCalendar } from 'react-icons/fi';
// import { formatDistanceToNow } from 'date-fns';

// export default function ProjectList() {
//   const [projects, setProjects] = useState([]);
//   const [name, setName] = useState('');
//   const [key, setKey] = useState('');
//   const [leads, setLeads] = useState([]);
//   const [type, setType] = useState('Software');
//   const [editingId, setEditingId] = useState(null);
//   const [editName, setEditName] = useState('');
//   const [editKey, setEditKey] = useState('');
//   const [editLeads, setEditLeads] = useState([]);
//   const [editType, setEditType] = useState('');

//   useEffect(() => { loadProjects(); }, []);
//   const loadProjects = async () => setProjects(await listProjects());

//   const createProject = async () => {
//     if (!name.trim()) return;
//     const now = new Date().toISOString();
//     const p = {
//       id: uuidv4(),
//       key: key.toUpperCase() || 'PRJ',
//       name,
//       type,
//       leads: leads.length ? leads : ['Unassigned'],
//       description: '',
//       lastUpdated: now,
//       createdAt: now
//     };
//     await addProject(p);
//     setName(''); setKey(''); setLeads([]); setType('Software');
//     loadProjects();
//   };

//   const removeProject = async (id) => {
//     if (window.confirm("Are you sure you want to delete this project?")) {
//       await deleteProject(id);
//       loadProjects();
//     }
//   };

//   const startEdit = (p) => {
//     setEditingId(p.id);
//     setEditName(p.name);
//     setEditKey(p.key);
//     setEditLeads(p.leads || []);
//     setEditType(p.type || 'Software');
//   };
  
//   const cancelEdit = () => { 
//     setEditingId(null); 
//     setEditName(''); 
//     setEditKey(''); 
//     setEditLeads([]); 
//     setEditType(''); 
//   };
  
//   const saveEdit = async (id) => {
//     await updateProject(id, {
//       name: editName,
//       key: editKey.toUpperCase(),
//       leads: editLeads.length ? editLeads : ['Unassigned'],
//       type: editType,
//       lastUpdated: new Date().toISOString()
//     });
//     cancelEdit();
//     loadProjects();
//   };

//   const leadColor = (name) => {
//     const colors = ['#0052CC', '#36B37E', '#FF5630', '#FFAB00', '#6554C0', '#00A3BF'];
//     if (!name) return '#6B778C';
//     const index = name.charCodeAt(0) % colors.length;
//     return colors[index];
//   };

//   const typeBadgeStyle = t => {
//     const colors = {
//       Software: { bg: '#E3FCF7', color: '#006644', icon: '💻' },
//       Business: { bg: '#DEEBFF', color: '#0747A6', icon: '📊' },
//       Service: { bg: '#FFEBE6', color: '#DE350B', icon: '🔧' }
//     };
//     const c = colors[t] || { bg: '#F4F5F7', color: '#172B4D', icon: '📁' };
//     return c;
//   };

//   const renderLeads = (leadsArr) => (
//     <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
//       <FiUsers size={14} color="#6B778C" />
//       {leadsArr.map((l, i) => (
//         <div key={i} title={l} style={{
//           width: '28px', 
//           height: '28px', 
//           borderRadius: '50%', 
//           background: leadColor(l), 
//           color: '#fff',
//           display: 'flex', 
//           alignItems: 'center', 
//           justifyContent: 'center',
//           fontSize: '12px', 
//           fontWeight: 600, 
//           marginLeft: i > 0 ? -8 : 0, 
//           border: '2px solid #fff',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }}>
//           {l.charAt(0).toUpperCase()}
//         </div>
//       ))}
//     </div>
//   );

//   const InputField = ({ label, value, onChange, icon: Icon, ...props }) => (
//     <div style={{ marginBottom: '1rem' }}>
//       <label style={{ 
//         display: 'block', 
//         marginBottom: '4px', 
//         fontSize: '14px', 
//         fontWeight: 600, 
//         color: '#172B4D' 
//       }}>
//         {Icon && <Icon size={14} style={{ marginRight: '6px' }} />}
//         {label}
//       </label>
//       <input 
//         value={value} 
//         onChange={onChange}
//         style={{ 
//           width: '100%', 
//           padding: '10px 12px', 
//           borderRadius: '4px', 
//           border: '1px solid #DFE1E6',
//           fontSize: '14px',
//           transition: 'all 0.2s',
//           ...props.style // Merge additional styles
//         }}
//         onFocus={(e) => e.target.style.borderColor = '#0052CC'}
//         onBlur={(e) => e.target.style.borderColor = '#DFE1E6'}
//         {...props}
//       />
//     </div>
//   );

//   return (
//     <div style={{ 
//       minHeight: '100vh', 
//       background: '#F4F5F7', 
//       padding: '2rem',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
//     }}>
//       <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
//         {/* Header */}
//         <div style={{ marginBottom: '2rem' }}>
//           <h1 style={{ 
//             fontSize: '24px', 
//             fontWeight: 600, 
//             color: '#172B4D',
//             marginBottom: '4px'
//           }}>
//             Projects
//           </h1>
//           <p style={{ color: '#6B778C', fontSize: '14px' }}>
//             Manage your team's projects and settings
//           </p>
//         </div>

//         <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '2rem' }}>
//           {/* Create Project Form */}
//           <div style={{ 
//             background: '#fff', 
//             padding: '1.5rem', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//             border: '1px solid #DFE1E6',
//             height: 'fit-content',
//             position: 'sticky',
//             top: '2rem'
//           }}>
//             <h2 style={{ 
//               marginBottom: '1.5rem', 
//               fontSize: '16px', 
//               fontWeight: 600,
//               color: '#172B4D',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '8px'
//             }}>
//               <FiPlus size={18} /> Create New Project
//             </h2>
            
//             <InputField 
//               label="Project Name" 
//               value={name} 
//               onChange={e => setName(e.target.value)}
//               icon={FiLayers}
//               placeholder="Enter project name"
//             />
            
//             <InputField 
//               label="Project Key" 
//               value={key} 
//               onChange={e => setKey(e.target.value.toUpperCase())} // Fixed: auto-uppercase on change
//               icon={FiKey}
//               placeholder="PRJ"
//               maxLength={10}
//             />
            
//             <InputField 
//               label="Leads (comma separated)" 
//               value={leads.join(',')} 
//               onChange={e => setLeads(e.target.value.split(',').map(l => l.trim()).filter(l => l))}
//               icon={FiUsers}
//               placeholder="John Doe, Jane Smith"
//             />
            
//             <div style={{ marginBottom: '1.5rem' }}>
//               <label style={{ 
//                 display: 'block', 
//                 marginBottom: '4px', 
//                 fontSize: '14px', 
//                 fontWeight: 600, 
//                 color: '#172B4D' 
//               }}>
//                 <FiLayers size={14} style={{ marginRight: '6px' }} />
//                 Type
//               </label>
//               <select 
//                 value={type} 
//                 onChange={e => setType(e.target.value)} 
//                 style={{ 
//                   width: '100%', 
//                   padding: '10px 12px', 
//                   borderRadius: '4px', 
//                   border: '1px solid #DFE1E6',
//                   fontSize: '14px',
//                   background: '#fff'
//                 }}
//               >
//                 <option value="Software">💻 Software</option>
//                 <option value="Business">📊 Business</option>
//                 <option value="Service">🔧 Service</option>
//               </select>
//             </div>
            
//             <button 
//               onClick={createProject} 
//               style={{ 
//                 display: 'flex', 
//                 alignItems: 'center', 
//                 justifyContent: 'center',
//                 gap: '8px', 
//                 background: '#0052CC', 
//                 color: '#fff', 
//                 border: 'none', 
//                 padding: '12px 20px', 
//                 borderRadius: '4px', 
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 fontWeight: 600,
//                 width: '100%',
//                 transition: 'all 0.2s'
//               }}
//               onMouseEnter={(e) => e.target.style.background = '#0747A6'}
//               onMouseLeave={(e) => e.target.style.background = '#0052CC'}
//             >
//               <FiPlus size={16} /> Create Project
//             </button>
//           </div>

//           {/* Project Grid */}
//           <div>
//             <div style={{ 
//               display: 'flex', 
//               justifyContent: 'space-between', 
//               alignItems: 'center',
//               marginBottom: '1rem'
//             }}>
//               <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#172B4D' }}>
//                 All Projects ({projects.length})
//               </h3>
//             </div>
            
//             <div style={{ 
//               display: 'grid', 
//               gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
//               gap: '1rem' 
//             }}>
//               {projects.map(p => (
//                 <div key={p.id} style={{
//                   display: 'flex', 
//                   flexDirection: 'column', 
//                   padding: '1.25rem',
//                   borderRadius: '8px',
//                   background: '#fff',
//                   boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
//                   border: '1px solid #DFE1E6',
//                   transition: 'all 0.2s ease',
//                   position: 'relative',
//                   overflow: 'hidden'
//                 }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.transform = 'translateY(-2px)';
//                   e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                   e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
//                 }}
//                 >
//                   {/* Project Key Badge */}
//                   <div style={{ 
//                     position: 'absolute',
//                     top: '0',
//                     right: '0',
//                     background: '#DFE1E6',
//                     color: '#172B4D',
//                     padding: '4px 8px',
//                     fontSize: '12px',
//                     fontWeight: 600,
//                     borderBottomLeftRadius: '4px'
//                   }}>
//                     {p.key}
//                   </div>

//                   {/* Project Header */}
//                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
//                     <div style={{ flex: 1, marginRight: '1rem' }}>
//                       {editingId === p.id ? (
//                         <input 
//                           value={editName} 
//                           onChange={e => setEditName(e.target.value)}
//                           style={{ 
//                             width: '100%', 
//                             padding: '6px 8px', 
//                             border: '1px solid #DFE1E6',
//                             borderRadius: '4px',
//                             fontSize: '14px'
//                           }}
//                         />
//                       ) : (
//                         <h4 style={{ 
//                           fontWeight: 600, 
//                           fontSize: '16px', 
//                           color: '#172B4D',
//                           margin: 0,
//                           lineHeight: 1.3
//                         }}>
//                           {p.name}
//                         </h4>
//                       )}
//                     </div>
                    
//                     <div style={{ display: 'flex', gap: '4px' }}>
//                       {editingId === p.id ? (
//                         <>
//                           <button 
//                             onClick={() => saveEdit(p.id)}
//                             style={{
//                               padding: '6px',
//                               border: 'none',
//                               background: '#36B37E',
//                               color: 'white',
//                               borderRadius: '4px',
//                               cursor: 'pointer'
//                             }}
//                           >
//                             <FiCheck size={14} />
//                           </button>
//                           <button 
//                             onClick={cancelEdit}
//                             style={{
//                               padding: '6px',
//                               border: 'none',
//                               background: '#FF5630',
//                               color: 'white',
//                               borderRadius: '4px',
//                               cursor: 'pointer'
//                             }}
//                           >
//                             <FiX size={14} />
//                           </button>
//                         </>
//                       ) : (
//                         <>
//                           <button 
//                             onClick={() => startEdit(p)}
//                             style={{
//                               padding: '6px',
//                               border: 'none',
//                               background: 'transparent',
//                               color: '#6B778C',
//                               borderRadius: '4px',
//                               cursor: 'pointer',
//                               transition: 'all 0.2s'
//                             }}
//                             onMouseEnter={(e) => {
//                               e.target.style.background = '#EBECF0';
//                               e.target.style.color = '#172B4D';
//                             }}
//                             onMouseLeave={(e) => {
//                               e.target.style.background = 'transparent';
//                               e.target.style.color = '#6B778C';
//                             }}
//                           >
//                             <FiEdit2 size={14} />
//                           </button>
//                           <button 
//                             onClick={() => removeProject(p.id)}
//                             style={{
//                               padding: '6px',
//                               border: 'none',
//                               background: 'transparent',
//                               color: '#6B778C',
//                               borderRadius: '4px',
//                               cursor: 'pointer',
//                               transition: 'all 0.2s'
//                             }}
//                             onMouseEnter={(e) => {
//                               e.target.style.background = '#FFEBE6';
//                               e.target.style.color = '#DE350B';
//                             }}
//                             onMouseLeave={(e) => {
//                               e.target.style.background = 'transparent';
//                               e.target.style.color = '#6B778C';
//                             }}
//                           >
//                             <FiTrash2 size={14} />
//                           </button>
//                         </>
//                       )}
//                     </div>
//                   </div>

//                   {/* Project Type */}
//                   <div style={{ marginBottom: '1rem' }}>
//                     {editingId === p.id ? (
//                       <select 
//                         value={editType} 
//                         onChange={e => setEditType(e.target.value)}
//                         style={{ 
//                           padding: '6px 8px', 
//                           border: '1px solid #DFE1E6',
//                           borderRadius: '4px',
//                           fontSize: '14px'
//                         }}
//                       >
//                         <option value="Software">Software</option>
//                         <option value="Business">Business</option>
//                         <option value="Service">Service</option>
//                       </select>
//                     ) : (
//                       <span style={{ 
//                         background: typeBadgeStyle(p.type).bg, 
//                         color: typeBadgeStyle(p.type).color, 
//                         padding: '4px 8px', 
//                         borderRadius: '4px', 
//                         fontSize: '12px', 
//                         fontWeight: 600,
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         gap: '4px'
//                       }}>
//                         {typeBadgeStyle(p.type).icon} {p.type}
//                       </span>
//                     )}
//                   </div>

//                   {/* Project Leads */}
//                   <div style={{ marginBottom: '1rem' }}>
//                     {editingId === p.id ? (
//                       <input 
//                         value={editLeads.join(',')} 
//                         onChange={e => setEditLeads(e.target.value.split(',').map(l => l.trim()).filter(l => l))}
//                         style={{ 
//                           width: '100%', 
//                           padding: '6px 8px', 
//                           border: '1px solid #DFE1E6',
//                           borderRadius: '4px',
//                           fontSize: '14px'
//                         }}
//                         placeholder="Enter leads separated by commas"
//                       />
//                     ) : renderLeads(p.leads)}
//                   </div>

//                   {/* Project Key in Edit Mode */}
//                   {editingId === p.id && (
//                     <div style={{ marginBottom: '1rem' }}>
//                       <label style={{ fontSize: '12px', fontWeight: 600, color: '#172B4D', display: 'block', marginBottom: '4px' }}>
//                         Project Key
//                       </label>
//                       <input 
//                         value={editKey} 
//                         onChange={e => setEditKey(e.target.value.toUpperCase())}
//                         style={{ 
//                           width: '100%', 
//                           padding: '6px 8px', 
//                           border: '1px solid #DFE1E6',
//                           borderRadius: '4px',
//                           fontSize: '14px'
//                         }}
//                         maxLength={10}
//                       />
//                     </div>
//                   )}

//                   {/* Last Updated */}
//                   <div style={{ 
//                     display: 'flex', 
//                     alignItems: 'center', 
//                     gap: '6px',
//                     fontSize: '12px', 
//                     color: '#6B778C',
//                     marginTop: 'auto',
//                     paddingTop: '0.75rem',
//                     borderTop: '1px solid #F4F5F7'
//                   }}>
//                     <FiCalendar size={12} />
//                     Updated {p.lastUpdated ? formatDistanceToNow(new Date(p.lastUpdated), { addSuffix: true }) : '—'}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





import React, { useEffect, useState } from 'react';
import { listProjects, addProject, deleteProject, updateProject } from '../../services/mockApi';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FiPlus, FiTrash2, FiEdit2, FiCheck, FiX, FiChevronUp, FiChevronDown, FiUsers, FiCalendar } from 'react-icons/fi';
import { formatDistanceToNow } from 'date-fns';

// Reusable input component
function InputField({ label, value, onChange, icon: Icon, placeholder, maxLength }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '0.25rem', color: '#172B4D' }}>
        {label}
      </label>
      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #DFE1E6', borderRadius: '4px', background: '#fff' }}>
        {Icon && <Icon style={{ marginLeft: '8px', color: '#6B778C' }} />}
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          style={{
            flex: 1,
            padding: '8px',
            border: 'none',
            outline: 'none',
            fontSize: '14px',
            borderRadius: '4px',
          }}
        />
      </div>
    </div>
  );
}

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState('');
  const [key, setKey] = useState('');
  const [type, setType] = useState('Software');
  const [leadsInput, setLeadsInput] = useState(''); // store as plain text
  const [expanded, setExpanded] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editKey, setEditKey] = useState('');
  const [editType, setEditType] = useState('');
  const [editLeadsInput, setEditLeadsInput] = useState('');

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const data = await listProjects();
    setProjects(data);
  };

  const createProject = async () => {
    if (!name.trim()) return;
    const now = new Date().toISOString();
    const p = {
      id: uuidv4(),
      key: key.toUpperCase() || 'PRJ',
      name,
      type,
      leads: leadsInput
        ? leadsInput.split(',').map(l => l.trim()).filter(l => l)
        : ['Unassigned'],
      description: '',
      lastUpdated: now,
      createdAt: now,
    };
    await addProject(p);
    setName('');
    setKey('');
    setLeadsInput('');
    setType('Software');
    loadProjects();
  };

  const removeProject = async (id) => {
    await deleteProject(id);
    loadProjects();
  };

  const startEdit = (p) => {
    setEditingId(p.id);
    setEditName(p.name);
    setEditKey(p.key);
    setEditType(p.type);
    setEditLeadsInput(p.leads.join(', '));
  };

  const saveEdit = async (id) => {
    const updated = {
      ...projects.find(p => p.id === id),
      name: editName,
      key: editKey,
      type: editType,
      leads: editLeadsInput
        ? editLeadsInput.split(',').map(l => l.trim()).filter(l => l)
        : ['Unassigned'],
      lastUpdated: new Date().toISOString(),
    };
    await updateProject(id, updated);
    setEditingId(null);
    loadProjects();
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar create project form */}
      <div style={{ width: '320px', borderRight: '1px solid #DFE1E6', padding: '1rem', background: '#F4F5F7' }}>
        <h2 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '1rem' }}>Create Project</h2>

        <InputField label="Project Name" value={name} onChange={e => setName(e.target.value)} placeholder="Enter project name" />
        <InputField label="Project Key" value={key} onChange={e => setKey(e.target.value)} placeholder="e.g. PROJ" maxLength={10} />
        <InputField label="Project Type" value={type} onChange={e => setType(e.target.value)} placeholder="Software, Business..." />
        <InputField label="Leads (comma separated)" value={leadsInput} onChange={e => setLeadsInput(e.target.value)} placeholder="John Doe, Jane Smith" icon={FiUsers} />

        <button
          onClick={createProject}
          style={{
            width: '100%',
            background: '#0052CC',
            color: 'white',
            padding: '8px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
          }}
        >
          <FiPlus style={{ marginRight: '6px' }} /> Create Project
        </button>
      </div>

      {/* Main project list */}
      <div style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '1.5rem' }}>Projects</h2>

        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {projects.map(p => (
            <div
              key={p.id}
              style={{
                background: '#fff',
                border: '1px solid #DFE1E6',
                borderRadius: '8px',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {editingId === p.id ? (
                <>
                  <InputField label="Name" value={editName} onChange={e => setEditName(e.target.value)} />
                  <InputField label="Key" value={editKey} onChange={e => setEditKey(e.target.value)} />
                  <InputField label="Type" value={editType} onChange={e => setEditType(e.target.value)} />
                  <InputField label="Leads" value={editLeadsInput} onChange={e => setEditLeadsInput(e.target.value)} />
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <button onClick={() => saveEdit(p.id)} style={{ background: '#36B37E', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' }}>
                      <FiCheck />
                    </button>
                    <button onClick={() => setEditingId(null)} style={{ background: '#FF5630', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' }}>
                      <FiX />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    <Link to={`/projects/${p.id}`} style={{ color: '#0052CC', textDecoration: 'none' }}>
                      {p.name}
                    </Link>
                  </h3>
                  <p style={{ fontSize: '13px', color: '#6B778C', marginBottom: '0.5rem' }}>{p.type} Project</p>
                  <p style={{ fontSize: '13px', marginBottom: '0.5rem' }}>Key: {p.key}</p>
                  <p style={{ fontSize: '13px', marginBottom: '0.5rem' }}>Leads: {p.leads.join(', ')}</p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button onClick={() => startEdit(p)} style={{ background: '#FFAB00', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' }}>
                        <FiEdit2 />
                      </button>
                      <button onClick={() => removeProject(p.id)} style={{ background: '#FF5630', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' }}>
                        <FiTrash2 />
                      </button>
                    </div>
                    <button onClick={() => setExpanded({ ...expanded, [p.id]: !expanded[p.id] })} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#0052CC' }}>
                      {expanded[p.id] ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                  </div>

                  {expanded[p.id] && (
                    <div style={{ marginTop: '0.5rem', fontSize: '13px', color: '#172B4D' }}>
                      <p>{p.description || 'No description provided.'}</p>
                    </div>
                  )}
                </>
              )}

              {/* Metadata */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 'auto',
                  marginTop: '1rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid #EBECF0',
                  fontSize: '12px',
                  color: '#6B778C',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <FiCalendar size={12} />
                  {p.createdAt ? (
                    <>Created {formatDistanceToNow(new Date(p.createdAt), { addSuffix: true })}</>
                  ) : (
                    <>Created just now</>
                  )}
                </div>
                <div>
                  {p.lastUpdated ? (
                    <>Updated {formatDistanceToNow(new Date(p.lastUpdated), { addSuffix: true })}</>
                  ) : (
                    <>Updated just now</>
                  )}
                </div>
              </div>
            </div>
          ))}

          {projects.length === 0 && (
            <div
              style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '3rem 2rem',
                background: '#fff',
                borderRadius: '8px',
                border: '1px dashed #DFE1E6',
                color: '#6B778C',
              }}
            >
              <p style={{ marginBottom: '1rem' }}>No projects yet.</p>
              <p style={{ fontSize: '14px' }}>Create your first project using the form on the left.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}







/////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from 'react';
// import { listProjects, addProject, deleteProject, updateProject } from '../../services/mockApi';
// import { Link } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import { FiPlus, FiTrash2, FiEdit2, FiCheck, FiX, FiChevronUp, FiChevronDown, FiUsers, FiCalendar } from 'react-icons/fi';
// import { formatDistanceToNow } from 'date-fns';

// // Reusable input component
// function InputField({ label, value, onChange, icon: Icon, placeholder, maxLength }) {
//   return (
//     <div style={{ marginBottom: '1rem' }}>
//       <label
//         style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '0.25rem', color: '#172B4D' }}
//       >
//         {label}
//       </label>
//       <div
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           border: '1px solid #DFE1E6',
//           borderRadius: '4px',
//           background: '#fff',
//         }}
//       >
//         {Icon && <Icon style={{ marginLeft: '8px', color: '#6B778C' }} />}
//         <input
//           type="text"
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           maxLength={maxLength}
//           style={{
//             flex: 1,
//             padding: '8px',
//             border: 'none',
//             outline: 'none',
//             fontSize: '14px',
//             borderRadius: '4px',
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default function ProjectList() {
//   const [projects, setProjects] = useState([]);
//   const [name, setName] = useState('');
//   const [key, setKey] = useState('');
//   const [type, setType] = useState('Software');
//   const [leadsInput, setLeadsInput] = useState('');
//   const [expanded, setExpanded] = useState({});
//   const [editingId, setEditingId] = useState(null);
//   const [editName, setEditName] = useState('');
//   const [editKey, setEditKey] = useState('');
//   const [editType, setEditType] = useState('');
//   const [editLeadsInput, setEditLeadsInput] = useState('');

//   useEffect(() => {
//     loadProjects();
//   }, []);

//   const loadProjects = async () => {
//     const data = await listProjects();
//     setProjects(data);
//   };

//   const createProject = async () => {
//     if (!name.trim()) return;
//     const now = new Date().toISOString();
//     const p = {
//       id: uuidv4(),
//       key: key.toUpperCase() || 'PRJ',
//       name,
//       type,
//       leads: leadsInput ? leadsInput.split(',').map((l) => l.trim()).filter((l) => l) : ['Unassigned'],
//       description: '',
//       lastUpdated: now,
//       createdAt: now,
//     };
//     await addProject(p);
//     setName('');
//     setKey('');
//     setLeadsInput('');
//     setType('Software');
//     loadProjects();
//   };

//   const removeProject = async (id) => {
//     await deleteProject(id);
//     loadProjects();
//   };

//   const startEdit = (p) => {
//     setEditingId(p.id);
//     setEditName(p.name);
//     setEditKey(p.key);
//     setEditType(p.type);
//     setEditLeadsInput(p.leads.join(', '));
//   };

//   const saveEdit = async (id) => {
//     const updated = {
//       ...projects.find((p) => p.id === id),
//       name: editName,
//       key: editKey,
//       type: editType,
//       leads: editLeadsInput ? editLeadsInput.split(',').map((l) => l.trim()).filter((l) => l) : ['Unassigned'],
//       lastUpdated: new Date().toISOString(),
//     };
//     await updateProject(id, updated);
//     setEditingId(null);
//     loadProjects();
//   };

//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       {/* Sidebar create project form */}
//       <div
//         style={{
//           width: '320px',
//           borderRight: '1px solid #DFE1E6',
//           padding: '1rem',
//           background: '#F4F5F7',
//         }}
//       >
//         <h2 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '1rem' }}>Create Project</h2>

//         <InputField label="Project Name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter project name" />
//         <InputField label="Project Key" value={key} onChange={(e) => setKey(e.target.value)} placeholder="e.g. PROJ" maxLength={10} />
//         <InputField label="Project Type" value={type} onChange={(e) => setType(e.target.value)} placeholder="Software, Business..." />
//         <InputField
//           label="Leads (comma separated)"
//           value={leadsInput}
//           onChange={(e) => setLeadsInput(e.target.value)}
//           placeholder="John Doe, Jane Smith"
//           icon={FiUsers}
//         />

//         <button
//           onClick={createProject}
//           style={{
//             width: '100%',
//             background: '#0052CC',
//             color: 'white',
//             padding: '8px',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontSize: '14px',
//           }}
//         >
//           <FiPlus style={{ marginRight: '6px' }} /> Create Project
//         </button>
//       </div>

//       {/* Main project list */}
//       <div style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
//         <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '1.5rem' }}>Projects</h2>

//         <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
//           {projects.map((p) => (
//             <div
//               key={p.id}
//               style={{
//                 background: '#fff',
//                 border: '1px solid #DFE1E6',
//                 borderRadius: '8px',
//                 padding: '1rem',
//                 display: 'flex',
//                 flexDirection: 'column',
//               }}
//             >
//               {editingId === p.id ? (
//                 <>
//                   <InputField label="Name" value={editName} onChange={(e) => setEditName(e.target.value)} />
//                   <InputField label="Key" value={editKey} onChange={(e) => setEditKey(e.target.value)} />
//                   <InputField label="Type" value={editType} onChange={(e) => setEditType(e.target.value)} />
//                   <InputField label="Leads" value={editLeadsInput} onChange={(e) => setEditLeadsInput(e.target.value)} />
//                   <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
//                     <button
//                       onClick={() => saveEdit(p.id)}
//                       style={{
//                         background: '#36B37E',
//                         color: '#fff',
//                         border: 'none',
//                         padding: '6px 10px',
//                         borderRadius: '4px',
//                         cursor: 'pointer',
//                       }}
//                     >
//                       <FiCheck />
//                     </button>
//                     <button
//                       onClick={() => setEditingId(null)}
//                       style={{
//                         background: '#FF5630',
//                         color: '#fff',
//                         border: 'none',
//                         padding: '6px 10px',
//                         borderRadius: '4px',
//                         cursor: 'pointer',
//                       }}
//                     >
//                       <FiX />
//                     </button>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '0.5rem' }}>
//                     <Link to={`/projects/${p.id}`} style={{ color: '#0052CC', textDecoration: 'none' }}>
//                       {p.name}
//                     </Link>
//                   </h3>
//                   <p style={{ fontSize: '13px', color: '#6B778C', marginBottom: '0.5rem' }}>{p.type} Project</p>
//                   <p style={{ fontSize: '13px', marginBottom: '0.5rem' }}>Key: {p.key}</p>
//                   <p style={{ fontSize: '13px', marginBottom: '0.5rem' }}>Leads: {p.leads.join(', ')}</p>

//                   <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
//                     <div style={{ display: 'flex', gap: '0.5rem' }}>
//                       <button
//                         onClick={() => startEdit(p)}
//                         style={{
//                           background: '#FFAB00',
//                           color: '#fff',
//                           border: 'none',
//                           padding: '6px 10px',
//                           borderRadius: '4px',
//                           cursor: 'pointer',
//                         }}
//                       >
//                         <FiEdit2 />
//                       </button>
//                       <button
//                         onClick={() => removeProject(p.id)}
//                         style={{
//                           background: '#FF5630',
//                           color: '#fff',
//                           border: 'none',
//                           padding: '6px 10px',
//                           borderRadius: '4px',
//                           cursor: 'pointer',
//                         }}
//                       >
//                         <FiTrash2 />
//                       </button>
//                     </div>
//                     <button
//                       onClick={() => setExpanded({ ...expanded, [p.id]: !expanded[p.id] })}
//                       style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#0052CC' }}
//                     >
//                       {expanded[p.id] ? <FiChevronUp /> : <FiChevronDown />}
//                     </button>
//                   </div>

//                   {expanded[p.id] && (
//                     <div style={{ marginTop: '0.5rem', fontSize: '13px', color: '#172B4D' }}>
//                       <p>{p.description || 'No description provided.'}</p>
//                       <p>
//                         <Link to={`/kanban/${p.id}`} style={{ color: '#0052CC' }}>
//                           Open {p.name} Board
//                         </Link>
//                       </p>
//                     </div>
//                   )}
//                 </>
//               )}

//               {/* Metadata */}
//               <div
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   marginTop: 'auto',
//                   marginTop: '1rem',
//                   paddingTop: '0.75rem',
//                   borderTop: '1px solid #EBECF0',
//                   fontSize: '12px',
//                   color: '#6B778C',
//                 }}
//               >
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
//                   <FiCalendar size={12} />
//                   {p.createdAt ? (
//                     <>Created {formatDistanceToNow(new Date(p.createdAt), { addSuffix: true })}</>
//                   ) : (
//                     <>Created just now</>
//                   )}
//                 </div>
//                 <div>
//                   {p.lastUpdated ? (
//                     <>Updated {formatDistanceToNow(new Date(p.lastUpdated), { addSuffix: true })}</>
//                   ) : (
//                     <>Updated just now</>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}

//           {projects.length === 0 && (
//             <div
//               style={{
//                 gridColumn: '1 / -1',
//                 textAlign: 'center',
//                 padding: '3rem 2rem',
//                 background: '#fff',
//                 borderRadius: '8px',
//                 border: '1px dashed #DFE1E6',
//                 color: '#6B778C',
//               }}
//             >
//               <p style={{ marginBottom: '1rem' }}>No projects yet.</p>
//               <p style={{ fontSize: '14px' }}>Create your first project using the form on the left.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



//================================================================================

