
// //////////////////////////////////////////////////////////////////
// //for updated the ticket

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const mockIssues = [
//   { id: 'i1', epic: 'p1', epicName: 'Frontend', status: 'todo', type: 'Task', title: 'Setup repo', assignee: 'John Doe', storyPoints: 3, labels: [], dueDate: '2025-09-30', reporter: 'admin', priority: 'High', startDate: '2025-09-15', description: '', subtasks: '', comments: '' },
//   { id: 'i3', epic: 'p2', epicName: 'Middleware', status: 'todo', type: 'Subtask', title: 'API integration', assignee: 'Jane Smith', storyPoints: 2, labels: [], dueDate: '', reporter: 'lead-dev', priority: 'Low', startDate: '2025-09-18', description: '', subtasks: '', comments: '' }
// ];

// const defaultStatuses = ['backlog', 'todo', 'analysis', 'inprogress', 'blocked', 'code review', 'qa', 'milestone', 'done'];
// const mockEpics = [{ id: 'p1', name: 'Frontend' }, { id: 'p2', name: 'Middleware' }];

// const simulateApiDelay = () => new Promise(resolve => setTimeout(resolve, 200));
// const listIssues = async (projectId) => {
//   await simulateApiDelay();
//   return mockIssues.filter(i => !projectId || i.epic === projectId || i.projectId === projectId);
// };
// const listEpics = async () => { await simulateApiDelay(); return mockEpics; };
// const createEpicAPI = async (epicName) => {
//   await simulateApiDelay();
//   const newEpic = { id: 'p' + (mockEpics.length + 1), name: epicName };
//   mockEpics.push(newEpic);
//   return newEpic;
// };
// const deleteEpicAPI = async (epicId) => {
//   await simulateApiDelay();
//   const epicIndex = mockEpics.findIndex(epic => epic.id === epicId);
//   if (epicIndex > -1) mockEpics.splice(epicIndex, 1);
//   const issueIndices = [];
//   mockIssues.forEach((issue, index) => { if (issue.epic === epicId) issueIndices.push(index); });
//   issueIndices.sort((a, b) => b - a).forEach(index => { mockIssues.splice(index, 1); });
// };
// const moveIssue = async (issueId, status) => {
//   await simulateApiDelay();
//   const issue = mockIssues.find(i => i.id === issueId);
//   if (!issue) throw new Error('Issue not found');
//   issue.status = status;
// };
// const createIssueAPI = async (issue) => { await simulateApiDelay(); mockIssues.push(issue); };
// const deleteIssueAPI = async (issueId) => { await simulateApiDelay(); const idx = mockIssues.findIndex(i => i.id === issueId); if (idx > -1) mockIssues.splice(idx, 1); };
// const updateIssueAPI = async (updatedIssue) => { await simulateApiDelay(); const idx = mockIssues.findIndex(i => i.id === updatedIssue.id); if (idx > -1) mockIssues[idx] = { ...mockIssues[idx], ...updatedIssue }; };

// const getSwimlanes = (issues, epics) =>
//   epics.map(epic => {
//     const epicIssues = issues.filter(i => (i.epic || i.projectId) === epic.id);
//     return { id: epic.id, title: epic.name, issues: epicIssues };
//   });

// export default function KanbanBoard() {
//   const { projectId } = useParams();
//   const [issues, setIssues] = useState([]);
//   const [epics, setEpics] = useState([]);
//   const [openSwimlanes, setOpenSwimlanes] = useState({});
//   const [customTitles, setCustomTitles] = useState({});
//   const [createLaneId, setCreateLaneId] = useState(null);
//   const [newTaskText, setNewTaskText] = useState('');
//   const [newTaskType, setNewTaskType] = useState('Task');
//   const [selectedIssue, setSelectedIssue] = useState(null);
//   const [editIssue, setEditIssue] = useState(null);
//   const [showCreateEpic, setShowCreateEpic] = useState(false);
//   const [showDeleteEpic, setShowDeleteEpic] = useState(false);
//   const [newEpicName, setNewEpicName] = useState('');
//   const [epicToDelete, setEpicToDelete] = useState('');
//   const [columnsByLane, setColumnsByLane] = useState({});
//   const [columnModal, setColumnModal] = useState(null);
//   const [columnInput, setColumnInput] = useState('');
//   const [hoveredAssigneeId, setHoveredAssigneeId] = useState(null);
//   const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [issuesData, epicsData] = await Promise.all([listIssues(projectId), listEpics()]);
//         setIssues(issuesData);
//         setEpics(epicsData);
//         const lanes = getSwimlanes(issuesData, epicsData);
//         const initialOpen = {}, initialTitles = {}, initialCols = {};
//         lanes.forEach(lane => {
//           initialOpen[lane.id] = true;
//           initialTitles[lane.id] = lane.title;
//           initialCols[lane.id] = defaultStatuses.slice();
//         });
//         setOpenSwimlanes(initialOpen);
//         setCustomTitles(initialTitles);
//         setColumnsByLane(initialCols);
//       } catch (err) { console.error(err); }
//     };
//     fetchData();
//   }, [projectId]);

//   const openAddColumnModal = (e, laneId, colIndex) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setModalPosition({ top: rect.bottom + window.scrollY + 8, left: rect.left + window.scrollX });
//     setColumnModal({ laneId, colIndex, type: 'add' });
//     setColumnInput('');
//   };
//   const openEditColumnModal = (e, laneId, colIndex, status) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setModalPosition({ top: rect.bottom + window.scrollY + 8, left: rect.left + window.scrollX });
//     setColumnModal({ laneId, colIndex, type: 'menu' });
//     setColumnInput(status);
//   };
//   const handleAddColumn = () => {
//     const name = columnInput.trim();
//     if (!name) return alert('Column name is required');
//     setColumnsByLane(prev => {
//       const cols = [...prev[columnModal.laneId]];
//       if (cols.includes(name.toLowerCase())) alert('Column name already exists');
//       else cols.splice(columnModal.colIndex + 1, 0, name.toLowerCase());
//       return { ...prev, [columnModal.laneId]: cols };
//     });
//     setColumnModal(null);
//     setColumnInput('');
//   };
//   const handleEditColumn = () => {
//     const name = columnInput.trim();
//     if (!name) return alert('Column name is required');
//     const { laneId, colIndex } = columnModal;
//     const oldCol = columnsByLane[laneId][colIndex];
//     if (columnsByLane[laneId].includes(name.toLowerCase()) && name.toLowerCase() !== oldCol) {
//       alert('Column name already exists');
//       return;
//     }
//     setColumnsByLane(prev => {
//       const cols = [...prev[laneId]];
//       cols[colIndex] = name.toLowerCase();
//       return { ...prev, [laneId]: cols };
//     });
//     const updatedIssues = issues.map(issue =>
//       (issue.epic || issue.projectId) === laneId && issue.status === oldCol ? { ...issue, status: name.toLowerCase() } : issue
//     );
//     setIssues(updatedIssues);
//     setColumnModal(null);
//     setColumnInput('');
//   };
//   const handleDeleteColumn = () => {
//     const { laneId, colIndex } = columnModal;
//     const removedCol = columnsByLane[laneId][colIndex];
//     setColumnsByLane(prev => {
//       const cols = [...prev[laneId]];
//       cols.splice(colIndex, 1);
//       return { ...prev, [laneId]: cols };
//     });
//     const updatedIssues = issues.map(issue =>
//       (issue.epic || issue.projectId) === laneId && issue.status === removedCol ? { ...issue, status: 'backlog' } : issue
//     );
//     setIssues(updatedIssues);
//     setColumnModal(null);
//     setColumnInput('');
//   };
//   const toggleSwimlane = (id) => setOpenSwimlanes(prev => ({ ...prev, [id]: !prev[id] }));
//   const byStatus = (collection, status) => collection.filter(i => i.status === status);

//   const onDragStart = (e, issueId) => e.dataTransfer.setData('text/plain', issueId);
//   const onDrop = async (e, targetStatus, swimlaneId) => {
//     e.preventDefault();
//     try {
//       const issueId = e.dataTransfer.getData('text/plain');
//       const issue = issues.find(i => i.id === issueId);
//       const srcLaneId = issue.epic || issue.projectId;
//       if (srcLaneId === swimlaneId && issue.status !== targetStatus) {
//         await moveIssue(issueId, targetStatus);
//         const refreshed = await listIssues(projectId);
//         setIssues(refreshed);
//       }
//     } catch (err) { console.error(err); }
//   };
//   const onDragOver = e => e.preventDefault();

//   const handleCreateClick = laneId => { setCreateLaneId(laneId); setNewTaskText(''); setNewTaskType('Task'); };
//   const handleCreateSubmit = async lane => {
//     if (!newTaskText.trim()) { alert('Task title is required'); return; }
//     const newIssue = {
//       id: Math.random().toString(36).slice(2),
//       epic: lane.id,
//       projectId: lane.id,
//       epicName: lane.title,
//       title: newTaskText,
//       status: 'backlog',
//       assignee: '',
//       type: newTaskType,
//       storyPoints: '',
//       labels: [],
//       dueDate: '',
//       reporter: 'system',
//       priority: 'Medium',
//       startDate: new Date().toISOString().split('T')[0],
//       description: '',
//       subtasks: '',
//       comments: ''
//     };
//     try {
//       await createIssueAPI(newIssue);
//       const refreshed = await listIssues(projectId);
//       setIssues(refreshed);
//       setCreateLaneId(null);
//     } catch (err) { console.error(err); }
//   };

//   const handleOpenModal = (issue) => { setSelectedIssue(issue); setEditIssue({ ...issue }); };
//   const handleUpdateField = (field, value) => { setEditIssue(prev => ({ ...prev, [field]: value })); };
//   const handleSave = async () => { await updateIssueAPI(editIssue); const refreshed = await listIssues(projectId); setIssues(refreshed); setSelectedIssue(null); setEditIssue(null); };
//   const handleReset = () => { setEditIssue({ ...selectedIssue }); };

//   // Create Epic Modal Handlers
//   const handleCreateEpic = async () => {
//     if (!newEpicName.trim()) {
//       alert('Epic name is required');
//       return;
//     }
//     try {
//       await createEpicAPI(newEpicName);
//       const updatedEpics = await listEpics();
//       setEpics(updatedEpics);
//       setNewEpicName('');
//       setShowCreateEpic(false);
//       const newEpic = updatedEpics[updatedEpics.length - 1];
//       setOpenSwimlanes(prev => ({ ...prev, [newEpic.id]: true }));
//       setCustomTitles(prev => ({ ...prev, [newEpic.id]: newEpic.name }));
//       setColumnsByLane(prev => ({ ...prev, [newEpic.id]: defaultStatuses.slice() }));
//     } catch (error) {
//       console.error('Error creating epic:', error);
//     }
//   };

//   // Delete Epic Modal Handler
//   const handleDeleteEpic = async () => {
//     if (!epicToDelete) {
//       alert('Please select an epic to delete');
//       return;
//     }
//     if (!window.confirm(`Are you sure you want to delete the epic "${epics.find(e => e.id === epicToDelete)?.name}"? This will also delete all issues in this epic.`)) {
//       return;
//     }
//     try {
//       await deleteEpicAPI(epicToDelete);
//       const [refreshedIssues, refreshedEpics] = await Promise.all([
//         listIssues(projectId),
//         listEpics()
//       ]);
//       setIssues(refreshedIssues);
//       setEpics(refreshedEpics);
//       setEpicToDelete('');
//       setShowDeleteEpic(false);
//       setColumnsByLane(prev => {
//         const copy = { ...prev };
//         delete copy[epicToDelete];
//         return copy;
//       });
//       setOpenSwimlanes(prev => {
//         const copy = { ...prev };
//         delete copy[epicToDelete];
//         return copy;
//       });
//       setCustomTitles(prev => {
//         const copy = { ...prev };
//         delete copy[epicToDelete];
//         return copy;
//       });
//     } catch (error) {
//       console.error('Error deleting epic:', error);
//     }
//   };

//   const swimlanes = getSwimlanes(issues, epics);

//   return (
//     <div className="board-wrap">
//       {/* Epic management buttons */}
//       <div className="epic-management-section">
//         <div className="epic-buttons-container">
//           {/* <button className="create-epic-btn" onClick={() => { setShowCreateEpic(true); setShowDeleteEpic(false); }}>+ Create Epic</button>
//           <button className="delete-epic-btn" onClick={() => { setShowDeleteEpic(true); setShowCreateEpic(false); }}>🗑 Delete Epic</button> */}
//         </div>
        
//       </div>

//       {/* Swimlanes and columns */}
//       {swimlanes.map(lane => {
//         const isOpen = openSwimlanes[lane.id];
//         const statuses = columnsByLane[lane.id] || defaultStatuses;
//         return (
//           <section className="swimlane" key={lane.id}>
//             <header className="swimlane-header">
//               <button className="swimlane-toggle" onClick={() => toggleSwimlane(lane.id)}>{isOpen ? '▼' : '▶'}</button>
//               <span className="swimlane-icon">⚡</span>
//               <input className="swimlane-title-input" value={customTitles[lane.id] || ''} onChange={e => setCustomTitles(prev => ({ ...prev, [lane.id]: e.target.value }))} />
//               <span className="swimlane-count">{lane.issues.length} work items</span>
//             </header>
//             {isOpen && (
//               <div className="kanban-row">
//                 {statuses.map((status, idx) => {
//                   const issuesForStatus = byStatus(lane.issues, status);
//                   return (
//                     <div className="kanban-column" key={status} onDragOver={onDragOver} onDrop={e => onDrop(e, status, lane.id)}>
//                       <div className="col-header">
//                         <span className="col-title">{status.toUpperCase()}</span>
//                         <span className="col-icons">
//                           <button className="col-icon" title="Add Column" onClick={e => openAddColumnModal(e, lane.id, idx)}>＋</button>
//                           <button className="col-icon" title="Edit/Delete Column" onClick={e => openEditColumnModal(e, lane.id, idx, status)}>⋮</button>
//                         </span>
//                         {issuesForStatus.length > 0 && <span className="col-count">{issuesForStatus.length}</span>}
//                       </div>
//                       <div className="col-create">
//                         {status === 'backlog' && (
//                           createLaneId === lane.id ? (
//                             <div className="create-card">
//                               <textarea rows={2} className="create-input" placeholder="What needs to be done?" value={newTaskText} onChange={e => setNewTaskText(e.target.value)} />
//                               <div className="create-actions">
//                                 <select value={newTaskType} onChange={e => setNewTaskType(e.target.value)} className="create-select">
//                                   <option>Task</option><option>Subtask</option><option>Bug</option>
//                                 </select>
//                                 <button className="create-btn" onClick={() => handleCreateSubmit(lane)}>✔</button>
//                                 <button className="create-btn" onClick={() => setCreateLaneId(null)}>✖</button>
//                               </div>
//                             </div>
//                           ) : (<span className="create-link" onClick={() => handleCreateClick(lane.id)}>+ Create</span>)
//                         )}
//                       </div>
//                       {issuesForStatus.map(issue => {
//                         const isHovered = hoveredAssigneeId === issue.id;
//                         return (
//                           <div className="card-item" key={issue.id} draggable onDragStart={e => onDragStart(e, issue.id)} onClick={() => handleOpenModal(issue)}>
//                             <div className="card-top">
//                               <span className={`card-tag card-tag-${issue.type.toLowerCase()}`}>{issue.type}</span>
//                               <span className="card-id">{issue.id}</span>
//                             </div>
//                             <div className="card-title">{issue.title}</div>
//                             <div className="card-meta">
//                               {issue.dueDate && <span className="card-due">📅 {issue.dueDate}</span>}
//                               <span className={`card-priority ${issue.priority.toLowerCase()}`}>⚑ {issue.priority}</span>
//                               {issue.assignee && (
//                                 <span className="card-assignee" onMouseEnter={() => setHoveredAssigneeId(issue.id)} onMouseLeave={() => setHoveredAssigneeId(null)} style={{ position: 'relative', cursor: 'default', userSelect: 'none' }}>
//                                   👤
//                                   {isHovered && <div className="assignee-tooltip">{issue.assignee}</div>}
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </section>
//         );
//       })}

//       {/* Column Add/Edit modal */}
//       {columnModal && (columnModal.type === 'add' || columnModal.type === 'menu') && (
//         <div className="epic-modal-overlay" onClick={() => setColumnModal(null)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 }}>
//           <div className="epic-modal" onClick={e => e.stopPropagation()} style={{
//             position: 'absolute',
//             top: modalPosition.top,
//             left: modalPosition.left,
//             transform: 'translateX(-50%)',
//             minWidth: 280,
//             maxWidth: 320,
//             padding: 20,
//             borderRadius: 10,
//             background: 'white',
//             boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
//             zIndex: 1100
//           }}>
//             {columnModal.type === 'add' ? (
//               <>
//                 <h3 style={{ marginBottom: 15, fontWeight: 600, fontSize: 20, color: '#172b4d' }}>Add Column</h3>
//                 <input value={columnInput} onChange={e => setColumnInput(e.target.value)} placeholder="Column name" autoFocus className="epic-modal-input" style={{ width: '100%', padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #dfe1e5', marginBottom: 20, boxSizing: 'border-box' }} />
//                 <div className="epic-modal-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
//                   <button className="btn-cancel" onClick={() => setColumnModal(null)} style={btnStyle.cancel}>Cancel</button>
//                   <button className="btn-create" onClick={handleAddColumn} style={btnStyle.create}>Add</button>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <h3 style={{ marginBottom: 15, fontWeight: 600, fontSize: 20, color: '#172b4d' }}>Edit/Delete Column</h3>
//                 <input value={columnInput} onChange={e => setColumnInput(e.target.value)} placeholder="Column name" autoFocus className="epic-modal-input" style={{ width: '100%', padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #dfe1e5', marginBottom: 20, boxSizing: 'border-box' }} />
//                 <div className="epic-modal-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
//                   <button className="btn-save" onClick={handleEditColumn} style={btnStyle.create}>Rename</button>
//                   <button className="btn-delete" onClick={handleDeleteColumn} style={btnStyle.delete}>Delete</button>
//                   <button className="btn-cancel" onClick={() => setColumnModal(null)} style={btnStyle.cancel}>Cancel</button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Issue modal */}
//       {selectedIssue && editIssue && (
//         <div className="modal-overlay" onClick={() => setSelectedIssue(null)}>
//           <div className="modal" onClick={e => e.stopPropagation()}>
//             <div className="modal-header">
//               <h2>{editIssue.epicName}</h2>
//               <button className="modal-close-btn" onClick={() => setSelectedIssue(null)}>✖</button>
//             </div>
//             <div className="modal-field"><label>Title</label><input value={editIssue.title} onChange={e => handleUpdateField('title', e.target.value)} /></div>
//             <div className="modal-field"><label>Description</label><textarea value={editIssue.description} onChange={e => handleUpdateField('description', e.target.value)} /></div>
//             <div className="modal-field"><label>Subtasks</label><input value={editIssue.subtasks} onChange={e => handleUpdateField('subtasks', e.target.value)} /></div>
//             <div className="modal-field"><label>Comments</label><textarea value={editIssue.comments} onChange={e => handleUpdateField('comments', e.target.value)} /></div>
//             <div className="modal-field"><label>Status</label>
//               <select value={editIssue.status} onChange={e => handleUpdateField('status', e.target.value)}>
//                 {columnsByLane[editIssue.epic]?.map(st => <option key={st} value={st}>{st}</option>) || defaultStatuses.map(st => <option key={st} value={st}>{st}</option>)}
//               </select>
//             </div>
//             <div className="modal-field"><label>Assignee</label><input value={editIssue.assignee} onChange={e => handleUpdateField('assignee', e.target.value)} /></div>
//             <div className="modal-field"><label>Reporter</label><input disabled value={editIssue.reporter} /></div>
//             <div className="modal-field"><label>Priority</label>
//               <select value={editIssue.priority} onChange={e => handleUpdateField('priority', e.target.value)}>
//                 <option>Low</option><option>Medium</option><option>High</option>
//               </select>
//             </div>
//             <div className="modal-field"><label>Due Date</label><input type="date" value={editIssue.dueDate} onChange={e => handleUpdateField('dueDate', e.target.value)} /></div>
//             <div className="modal-field"><label>Start Date</label><input type="date" value={editIssue.startDate} onChange={e => handleUpdateField('startDate', e.target.value)} /></div>
//             <div className="modal-actions" style={{ gridColumn: "span 3", alignItems: 'center' }}>
//               <button className="btn-reset" onClick={handleReset}>Reset</button>
//               <button className="btn-save" onClick={handleSave}>Save</button>
//               <button className="modal-delete-btn" onClick={async () => {
//                 if (window.confirm('Delete this issue?')) {
//                   await deleteIssueAPI(selectedIssue.id);
//                   const refreshed = await listIssues(projectId);
//                   setIssues(refreshed);
//                   setSelectedIssue(null);
//                 }
//               }}>🗑</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Inline CSS styles */}
//       <style>{`
//         /* Include the full CSS from the previous answer - Kanban board styling, tooltip, modals, buttons */
//         body {
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//           background-color: #f5f6f8;
//           margin: 0;
//           padding: 16px;
//         }
//         .board-wrap {
//           max-width: 100%;
//           overflow-x: auto;
//         }
// body {
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//   background-color: #f5f6f8;
//   margin: 0;
//   padding: 16px;
// }
// .board-wrap {
//   max-width: 100%;
//   overflow-x: auto;
// }
// .swimlane {
//   background: white;
//   border-radius: 8px;
//   margin-bottom: 16px;
//   box-shadow: 0 1px 3px rgba(0,0,0,0.1);
//   overflow: hidden;
// }
// .swimlane-header {
//   display: flex;
//   align-items: center;
//   padding: 12px 16px;
//   background: #fafbfc;
//   border-bottom: 1px solid #dfe5e5;
//   font-weight: 600;
//   font-size: 14px;
//   color: #172b4d;
// }
// .swimlane-toggle, .swimlane-icon {
//   color: #5e6c84;
//   margin-right: 8px;
//   cursor: pointer;
// }
// .swimlane-toggle {
//   border: none;
//   background: transparent;
//   font-size: 14px;
// }
// .swimlane-icon {
//   font-size: 18px;
// }
// .swimlane-title-input {
//   border: 1px solid #dfe5e5;
//   border-radius: 4px;
//   padding: 4px 8px;
//   font-size: 14px;
//   font-weight: 600;
//   background: white;
//   margin-right: 8px;
//   min-width: 150px;
//   color: #172b4d;
// }
// .swimlane-title-input:focus {
//   outline: none;
//   border-color: #1976d2;
// }
// .swimlane-title-input::placeholder {
//   color: #a2adba;
// }
// .swimlane-title-input:hover {
//   border-color: #a2adba;
// }
// .swimlane-title-input:disabled {
//   background: #f5f6f8;
//   color: #a2adba;
// }
// .swimlane-count {
//   color: #5e6c84;
//   font-size: 12px;
//   font-weight: normal;
//   user-select: none;
// }
// .kanban-row {
//   display: flex;
//   padding: 16px;
//   gap: 12px;
//   overflow-x: auto;
// }
// .kanban-column {
//   flex: 0 0 260px;
//   background: #f5f6f8;
//   border-radius: 6px;
//   padding: 12px;
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
//   border: 1px solid #dfe5e5;
//   user-select: none;
// }
// .col-header {
//   display: flex;
//   align-items: center;
//   margin-bottom: 4px;
//   gap: 6px;
// }
// .col-title {
//   font-weight: 600;
//   font-size: 12px;
//   color: #5e6c84;
//   text-transform: uppercase;
//   letter-spacing: 0.5px;
//   flex-grow: 1;
//   user-select: none;
// }
// .col-title:empty {
//   height: 20px;
// }
// .col-count {
//   background: #dfe5e5;
//   color: #5e6c84;
//   border-radius: 12px;
//   padding: 2px 8px;
//   font-size: 11px;
//   font-weight: 600;
//   user-select: none;
//   min-width: 20px;
//   text-align: center;
// }
// .col-icons {
//   display: flex;
//   gap: 6px;
// }
// .col-icon {
//   cursor: pointer;
//   color: #5e6c84;
//   font-size: 18px;
//   background: none;
//   border: none;
//   padding: 0;
//   user-select: none;
// }
// .col-icon:hover {
//   color: #1976d2;
// }
// .create-card {
//   background: white;
//   padding: 10px;
//   border-radius: 6px;
//   box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// }
// .create-card textarea {
//   resize: vertical;
//   min-height: 50px;
//   font-size: 14px;
//   padding: 8px;
//   border-radius: 5px;
//   border: 1px solid #dfe5e5;
//   font-family: inherit;
// }
// .create-card textarea:focus {
//   outline: none;
//   border-color: #1976d2;
// }
// .create-card .create-actions {
//   display: flex;
//   align-items: center;
//   gap: 12px;
// }
// .create-card .create-actions select {
//   flex-grow: 1;
//   padding: 8px;
//   border: 1px solid #dfe5e5;
//   border-radius: 5px;
//   font-size: 14px;
// }
// .create-card button {
//   padding: 8px 12px;
//   font-size: 14px;
//   cursor: pointer;
//   border-radius: 5px;
//   border: 1px solid #dfe5e5;
//   background: #f5f6f8;
//   user-select: none;
//   transition: background-color 0.2s;
// }
// .create-card button:hover {
//   background: #e1e7f0;
// }
// .card-item {
//   background: white;
//   border-radius: 8px;
//   padding: 12px;
//   box-shadow: 0 0 2px rgba(0,0,0,0.1);
//   cursor: pointer;
//   user-select: none;
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
//   border: 1px solid #dfe5e5;
//   transition: box-shadow 0.2s ease, border-color 0.2s ease;
// }
// .card-item:hover {
//   box-shadow: 0px 2px 10px rgba(0,0,0,0.15);
//   border-color: #a2adba;
// }
// .card-item .card-top {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-size: 12px;
//   font-weight: 600;
//   color: #5e6c84;
//   gap: 10px;
// }
// .card-item .card-top .card-id {
//   font-family: monospace;
//   color: #a2adba;
//   user-select: text;
// }
// .card-item .card-tags .tag {
//   border-radius: 6px;
//   padding: 3px 7px;
//   font-size: 11px;
//   font-weight: 600;
//   text-transform: uppercase;
//   white-space: nowrap;
//   user-select: none;
//   margin-right: 6px;
// }
// .tag-task {
//   background: #e1efff;
//   color: #1976d2;
// }
// .tag-bug {
//   background: #ffebec;
//   color: #d62127;
// }
// .tag-subtask {
//   background: #f5e6ff;
//   color: #772da0;
// }
// .card-item .card-title {
//   font-weight: 600;
//   font-size: 14px;
//   color: #2b3a59;
// }
// .card-item .card-meta {
//   display: flex;
//   gap: 10px;
//   font-size: 12px;
//   color: #6b7c93;
//   align-items: center;
//   user-select: none;
// }
// .card-item .card-meta span {
//   background: #f5f7fa;
//   color: #6b7c93;
//   padding: 3px 8px;
//   border-radius: 12px;
// }
// .card-item .card-meta .card-priority.low {
//   background: #d4edda;
//   color: #155724;
// }
// .card-item .card-meta .card-priority.medium {
//   background: #fff3cd;
//   color: #856404;
// }
// .card-item .card-meta .card-priority.high {
//   background: #f8d7da;
//   color: #721c24;
// }
// .card-item .card-meta .card-assignee {
//   position: relative;
//   cursor: default;
//   padding-left: 18px;
// }
// .card-item .card-meta .card-assignee:hover .tooltip {
//   display: block;
// }
// .card-item .card-meta .tooltip {
//   position: absolute;
//   top: -30px;
//   left: 50%;
//   transform: translateX(-50%);
//   background: #222;
//   color: white;
//   border-radius: 4px;
//   padding: 4px 8px;
//   font-size: 11px;
//   white-space: nowrap;
//   z-index: 10;
//   display: none;
//   user-select: none;
// }
// .modal-overlay {
//   position: fixed;
//   top: 0; left: 0; right: 0; bottom: 0;
//   background: rgba(0,0,0,0.5);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1000;
// }
// .modal {
//   background: white;
//   border-radius: 8px;
//   padding: 24px;
//   width: 700px;
//   max-height: 80vh;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   gap: 16px;
//   overflow-y: auto;
//   position: relative;
// }
// .modal-header {
//   grid-column: 1 / -1;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-weight: 700;
//   font-size: 20px;
//   color: #2b3a59;
// }
// .modal-header button {
//   background: none;
//   border: none;
//   font-size: 22px;
//   cursor: pointer;
//   color: #a2adba;
// }
// .modal-header button:hover {
//   color: #485fc7;
// }
// .modal-field {
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
// }
// .modal-field label {
//   font-size: 12px;
//   font-weight: 600;
//   color: #6b7c93;
//   user-select: none;
// }
// .modal-field input, .modal-field textarea, .modal-field select {
//   padding: 8px 10px;
//   border-radius: 6px;
//   border: 1px solid #dfe5e5;
//   font-size: 14px;
//   color: #2b3a59;
//   font-family: inherit;
// }
// .modal-field input:focus, .modal-field textarea:focus, .modal-field select:focus {
//   outline: none;
//   border-color: #485fc7;
//   background: #f8fcff;
// }
// .modal-actions {
//   grid-column: 1 / -1;
//   display: flex;
//   justify-content: flex-end;
//   gap: 12px;
//   align-items: center;
//   margin-top: 12px;
// }
// button.btn-reset {
//   background: #5e6c84;
//   color: white;
//   font-weight: 600;
//   border: none;
//   padding: 8px 16px;
//   border-radius: 6px;
//   cursor: pointer;
// }
// button.btn-reset:hover {
//   background: #485fc7;
// }
// button.btn-save {
//   background: #485fc7;
//   color: white;
//   font-weight: 600;
//   border: none;
//   padding: 8px 16px;
//   border-radius: 6px;
//   cursor: pointer;
// }
// button.btn-save:hover {
//   background: #374cac;
// }
// button.btn-delete {
//   background: #d94343;
//   color: white;
//   font-weight: 600;
//   border: none;
//   padding: 8px 16px;
//   border-radius: 6px;
//   cursor: pointer;
// }
// button.btn-delete:hover {
//   background: #b83232;
// }
// input[disabled] {
//   background: #efeff1;
//   cursor: not-allowed;
//   color: #b3b3b3;
// }
// .epic-modal-overlay {
//   position: fixed;
//   top: 0; left: 0; right: 0; bottom: 0;
//   background: rgba(0,0,0,0.5);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1000;
// }
// .epic-modal {
//   background: white;
//   border-radius: 8px;
//   width: 350px;
//   padding: 20px;
//   box-shadow: 0 0 10px rgba(0,0,0,0.2);
//   position: relative;
// }
// .epic-modal-content h3 {
//   margin: 0 0 20px 0;
//   font-weight: 700;
//   font-size: 20px;
//   color: #2b3a59;
//   user-select: none;
// }
// .epic-modal-content p.delete-warning {
//   background: #ffe6e6;
//   padding: 10px;
//   color: #d94343;
//   font-size: 14px;
//   margin-bottom: 15px;
//   border-radius: 6px;
// }
// .epic-modal-input, .epic-modal-select {
//   width: 100%;
//   padding: 10px;
//   font-size: 14px;
//   margin-bottom: 20px;
//   border-radius: 6px;
//   border: 1px solid #dfe5e5;
//   box-sizing: border-box;
//   font-family: inherit;
// }
// .epic-modal-input:focus, .epic-modal-select:focus {
//   outline: none;
//   border-color: #485fc7;
// }
// .epic-modal-actions {
//   display: flex;
//   justify-content: space-between;
//   gap: 15px;
// }
// button.create-epic-btn, button.delete-epic-btn {
//   background: #485fc7;
//   color: white;
//   font-weight: 600;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 8px;
//   cursor: pointer;
//   font-size: 15px;
//   user-select: none;
// }
// button.create-epic-btn:hover, button.delete-epic-btn:hover {
//   background: #374cac;
// }
// button.delete-epic-btn {
//   background: #d94343;
// }
// button.delete-epic-btn:hover {
//   background: #b83232;
// }

//       `}</style>

//     </div>
//   );
// }

// const btnStyle = {
//   cancel: {
//     padding: '10px 18px',
//     borderRadius: '6px',
//     border: 'none',
//     backgroundColor: '#5e6c84',
//     color: 'white',
//     fontWeight: '600',
//     fontSize: '14px',
//     cursor: 'pointer'
//   },
//   // create: {
//   //   padding: '10px 18px',
//   //   borderRadius: '6px',
//   //   border: 'none',
//   //   backgroundColor: '#1976d2',
//   //   color: 'white',
//   //   fontWeight: '600',
//   //   fontSize: '14px',
//   //   cursor: 'pointer'
//   // },
//   delete: {
//     padding: '10px 18px',
//     borderRadius: '6px',
//     border: 'none',
//     backgroundColor: '#d32f2f',
//     color: 'white',
//     fontWeight: '600',
//     fontSize: '14px',
//     cursor: 'pointer'
//   }
// };







//======================================================================================
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const mockIssues = [
//   { id: 'i1', epic: 'p1', epicName: 'Frontend', status: 'todo', type: 'Task', title: 'Setup repo', assignee: 'John Doe', storyPoints: 3, labels: [], dueDate: '2025-09-30', reporter: 'admin', priority: 'High', startDate: '2025-09-15', description: '', subtasks: '', comments: '' },
//   { id: 'i3', epic: 'p2', epicName: 'Middleware', status: 'todo', type: 'Subtask', title: 'API integration', assignee: 'Jane Smith', storyPoints: 2, labels: [], dueDate: '', reporter: 'lead-dev', priority: 'Low', startDate: '2025-09-18', description: '', subtasks: '', comments: '' }
// ];

// const defaultStatuses = ['backlog', 'todo', 'analysis', 'inprogress', 'blocked', 'code review', 'qa', 'milestone', 'done'];
// const mockEpics = [{ id: 'p1', name: 'Frontend' }, { id: 'p2', name: 'Middleware' }];

// const simulateApiDelay = () => new Promise(resolve => setTimeout(resolve, 200));
// const listIssues = async (projectId) => {
//   await simulateApiDelay();
//   return mockIssues.filter(i => !projectId || i.epic === projectId || i.projectId === projectId);
// };
// const listEpics = async () => { await simulateApiDelay(); return mockEpics; };
// const createEpicAPI = async (epicName) => {
//   await simulateApiDelay();
//   const newEpic = { id: 'p' + (mockEpics.length + 1), name: epicName };
//   mockEpics.push(newEpic);
//   return newEpic;
// };
// const deleteEpicAPI = async (epicId) => {
//   await simulateApiDelay();
//   const epicIndex = mockEpics.findIndex(epic => epic.id === epicId);
//   if (epicIndex > -1) mockEpics.splice(epicIndex, 1);
//   const issueIndices = [];
//   mockIssues.forEach((issue, index) => { if (issue.epic === epicId) issueIndices.push(index); });
//   issueIndices.sort((a, b) => b - a).forEach(index => { mockIssues.splice(index, 1); });
// };
// const moveIssue = async (issueId, status) => {
//   await simulateApiDelay();
//   const issue = mockIssues.find(i => i.id === issueId);
//   if (!issue) throw new Error('Issue not found');
//   issue.status = status;
// };
// const createIssueAPI = async (issue) => { await simulateApiDelay(); mockIssues.push(issue); };
// const deleteIssueAPI = async (issueId) => { await simulateApiDelay(); const idx = mockIssues.findIndex(i => i.id === issueId); if (idx > -1) mockIssues.splice(idx, 1); };
// const updateIssueAPI = async (updatedIssue) => { await simulateApiDelay(); const idx = mockIssues.findIndex(i => i.id === updatedIssue.id); if (idx > -1) mockIssues[idx] = { ...mockIssues[idx], ...updatedIssue }; };

// const getSwimlanes = (issues, epics) =>
//   epics.map(epic => {
//     const epicIssues = issues.filter(i => (i.epic || i.projectId) === epic.id);
//     return { id: epic.id, title: epic.name, issues: epicIssues };
//   });

// export default function KanbanBoard() {
//   const { projectId } = useParams();
//   const [issues, setIssues] = useState([]);
//   const [epics, setEpics] = useState([]);
//   const [openSwimlanes, setOpenSwimlanes] = useState({});
//   const [customTitles, setCustomTitles] = useState({});
//   const [createLaneId, setCreateLaneId] = useState(null);
//   const [newTaskText, setNewTaskText] = useState('');
//   const [newTaskType, setNewTaskType] = useState('Task');
//   const [selectedIssue, setSelectedIssue] = useState(null);
//   const [editIssue, setEditIssue] = useState(null);
//   const [showCreateEpic, setShowCreateEpic] = useState(false);
//   const [showDeleteEpic, setShowDeleteEpic] = useState(false);
//   const [newEpicName, setNewEpicName] = useState('');
//   const [epicToDelete, setEpicToDelete] = useState('');
//   const [columnsByLane, setColumnsByLane] = useState({});
//   const [columnModal, setColumnModal] = useState(null);
//   const [columnInput, setColumnInput] = useState('');
//   const [hoveredAssigneeId, setHoveredAssigneeId] = useState(null);
//   const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
//   const [isMobile, setIsMobile] = useState(false);
//   const [activeSwimlane, setActiveSwimlane] = useState(null);

//   // Detect mobile screen size
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);
    
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [issuesData, epicsData] = await Promise.all([listIssues(projectId), listEpics()]);
//         setIssues(issuesData);
//         setEpics(epicsData);
//         const lanes = getSwimlanes(issuesData, epicsData);
//         const initialOpen = {}, initialTitles = {}, initialCols = {};
//         lanes.forEach(lane => {
//           initialOpen[lane.id] = true;
//           initialTitles[lane.id] = lane.title;
//           initialCols[lane.id] = defaultStatuses.slice();
//         });
//         setOpenSwimlanes(initialOpen);
//         setCustomTitles(initialTitles);
//         setColumnsByLane(initialCols);
//       } catch (err) { console.error(err); }
//     };
//     fetchData();
//   }, [projectId]);

//   const openAddColumnModal = (e, laneId, colIndex) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setModalPosition({ top: rect.bottom + window.scrollY + 8, left: rect.left + window.scrollX });
//     setColumnModal({ laneId, colIndex, type: 'add' });
//     setColumnInput('');
//   };
//   const openEditColumnModal = (e, laneId, colIndex, status) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setModalPosition({ top: rect.bottom + window.scrollY + 8, left: rect.left + window.scrollX });
//     setColumnModal({ laneId, colIndex, type: 'menu' });
//     setColumnInput(status);
//   };
//   const handleAddColumn = () => {
//     const name = columnInput.trim();
//     if (!name) return alert('Column name is required');
//     setColumnsByLane(prev => {
//       const cols = [...prev[columnModal.laneId]];
//       if (cols.includes(name.toLowerCase())) alert('Column name already exists');
//       else cols.splice(columnModal.colIndex + 1, 0, name.toLowerCase());
//       return { ...prev, [columnModal.laneId]: cols };
//     });
//     setColumnModal(null);
//     setColumnInput('');
//   };
//   const handleEditColumn = () => {
//     const name = columnInput.trim();
//     if (!name) return alert('Column name is required');
//     const { laneId, colIndex } = columnModal;
//     const oldCol = columnsByLane[laneId][colIndex];
//     if (columnsByLane[laneId].includes(name.toLowerCase()) && name.toLowerCase() !== oldCol) {
//       alert('Column name already exists');
//       return;
//     }
//     setColumnsByLane(prev => {
//       const cols = [...prev[laneId]];
//       cols[colIndex] = name.toLowerCase();
//       return { ...prev, [laneId]: cols };
//     });
//     const updatedIssues = issues.map(issue =>
//       (issue.epic || issue.projectId) === laneId && issue.status === oldCol ? { ...issue, status: name.toLowerCase() } : issue
//     );
//     setIssues(updatedIssues);
//     setColumnModal(null);
//     setColumnInput('');
//   };
//   const handleDeleteColumn = () => {
//     const { laneId, colIndex } = columnModal;
//     const removedCol = columnsByLane[laneId][colIndex];
//     setColumnsByLane(prev => {
//       const cols = [...prev[laneId]];
//       cols.splice(colIndex, 1);
//       return { ...prev, [laneId]: cols };
//     });
//     const updatedIssues = issues.map(issue =>
//       (issue.epic || issue.projectId) === laneId && issue.status === removedCol ? { ...issue, status: 'backlog' } : issue
//     );
//     setIssues(updatedIssues);
//     setColumnModal(null);
//     setColumnInput('');
//   };
//   const toggleSwimlane = (id) => setOpenSwimlanes(prev => ({ ...prev, [id]: !prev[id] }));
//   const byStatus = (collection, status) => collection.filter(i => i.status === status);

//   const onDragStart = (e, issueId) => e.dataTransfer.setData('text/plain', issueId);
//   const onDrop = async (e, targetStatus, swimlaneId) => {
//     e.preventDefault();
//     try {
//       const issueId = e.dataTransfer.getData('text/plain');
//       const issue = issues.find(i => i.id === issueId);
//       const srcLaneId = issue.epic || issue.projectId;
//       if (srcLaneId === swimlaneId && issue.status !== targetStatus) {
//         await moveIssue(issueId, targetStatus);
//         const refreshed = await listIssues(projectId);
//         setIssues(refreshed);
//       }
//     } catch (err) { console.error(err); }
//   };
//   const onDragOver = e => e.preventDefault();

//   const handleCreateClick = laneId => { setCreateLaneId(laneId); setNewTaskText(''); setNewTaskType('Task'); };
//   const handleCreateSubmit = async lane => {
//     if (!newTaskText.trim()) { alert('Task title is required'); return; }
//     const newIssue = {
//       id: Math.random().toString(36).slice(2),
//       epic: lane.id,
//       projectId: lane.id,
//       epicName: lane.title,
//       title: newTaskText,
//       status: 'backlog',
//       assignee: '',
//       type: newTaskType,
//       storyPoints: '',
//       labels: [],
//       dueDate: '',
//       reporter: 'system',
//       priority: 'Medium',
//       startDate: new Date().toISOString().split('T')[0],
//       description: '',
//       subtasks: '',
//       comments: ''
//     };
//     try {
//       await createIssueAPI(newIssue);
//       const refreshed = await listIssues(projectId);
//       setIssues(refreshed);
//       setCreateLaneId(null);
//     } catch (err) { console.error(err); }
//   };

//   const handleOpenModal = (issue) => { setSelectedIssue(issue); setEditIssue({ ...issue }); };
//   const handleUpdateField = (field, value) => { setEditIssue(prev => ({ ...prev, [field]: value })); };
//   const handleSave = async () => { await updateIssueAPI(editIssue); const refreshed = await listIssues(projectId); setIssues(refreshed); setSelectedIssue(null); setEditIssue(null); };
//   const handleReset = () => { setEditIssue({ ...selectedIssue }); };

//   // Create Epic Modal Handlers
//   const handleCreateEpic = async () => {
//     if (!newEpicName.trim()) {
//       alert('Epic name is required');
//       return;
//     }
//     try {
//       await createEpicAPI(newEpicName);
//       const updatedEpics = await listEpics();
//       setEpics(updatedEpics);
//       setNewEpicName('');
//       setShowCreateEpic(false);
//       const newEpic = updatedEpics[updatedEpics.length - 1];
//       setOpenSwimlanes(prev => ({ ...prev, [newEpic.id]: true }));
//       setCustomTitles(prev => ({ ...prev, [newEpic.id]: newEpic.name }));
//       setColumnsByLane(prev => ({ ...prev, [newEpic.id]: defaultStatuses.slice() }));
//     } catch (error) {
//       console.error('Error creating epic:', error);
//     }
//   };

//   // Delete Epic Modal Handler
//   const handleDeleteEpic = async () => {
//     if (!epicToDelete) {
//       alert('Please select an epic to delete');
//       return;
//     }
//     if (!window.confirm(`Are you sure you want to delete the epic "${epics.find(e => e.id === epicToDelete)?.name}"? This will also delete all issues in this epic.`)) {
//       return;
//     }
//     try {
//       await deleteEpicAPI(epicToDelete);
//       const [refreshedIssues, refreshedEpics] = await Promise.all([
//         listIssues(projectId),
//         listEpics()
//       ]);
//       setIssues(refreshedIssues);
//       setEpics(refreshedEpics);
//       setEpicToDelete('');
//       setShowDeleteEpic(false);
//       setColumnsByLane(prev => {
//         const copy = { ...prev };
//         delete copy[epicToDelete];
//         return copy;
//       });
//       setOpenSwimlanes(prev => {
//         const copy = { ...prev };
//         delete copy[epicToDelete];
//         return copy;
//       });
//       setCustomTitles(prev => {
//         const copy = { ...prev };
//         delete copy[epicToDelete];
//         return copy;
//       });
//     } catch (error) {
//       console.error('Error deleting epic:', error);
//     }
//   };

//   // Mobile-specific functions
//   const toggleMobileSwimlane = (laneId) => {
//     if (activeSwimlane === laneId) {
//       setActiveSwimlane(null);
//     } else {
//       setActiveSwimlane(laneId);
//     }
//   };

//   const swimlanes = getSwimlanes(issues, epics);

//   return (
//     <div className="board-wrap">
//       {/* Mobile swimlane selector */}
//       {isMobile && (
//         <div className="mobile-swimlane-selector">
//           <select 
//             value={activeSwimlane || ''} 
//             onChange={(e) => setActiveSwimlane(e.target.value || null)}
//             className="mobile-select"
//           >
//             <option value="">All Swimlanes</option>
//             {swimlanes.map(lane => (
//               <option key={lane.id} value={lane.id}>{customTitles[lane.id] || lane.title}</option>
//             ))}
//           </select>
//         </div>
//       )}

//       {/* Swimlanes and columns */}
//       {swimlanes.map(lane => {
//         const isOpen = isMobile ? (activeSwimlane === null || activeSwimlane === lane.id) : openSwimlanes[lane.id];
//         const statuses = columnsByLane[lane.id] || defaultStatuses;
        
//         // Skip rendering if mobile and this isn't the active swimlane
//         if (isMobile && activeSwimlane && activeSwimlane !== lane.id) {
//           return null;
//         }

//         return (
//           <section className="swimlane" key={lane.id}>
//             <header className="swimlane-header">
//               {!isMobile && (
//                 <button className="swimlane-toggle" onClick={() => toggleSwimlane(lane.id)}>
//                   {isOpen ? '▼' : '▶'}
//                 </button>
//               )}
//               <span className="swimlane-icon">⚡</span>
//               <input 
//                 className="swimlane-title-input" 
//                 value={customTitles[lane.id] || ''} 
//                 onChange={e => setCustomTitles(prev => ({ ...prev, [lane.id]: e.target.value }))} 
//               />
//               <span className="swimlane-count">{lane.issues.length} work items</span>
//               {isMobile && (
//                 <button 
//                   className="mobile-swimlane-toggle"
//                   onClick={() => toggleMobileSwimlane(lane.id)}
//                 >
//                   {activeSwimlane === lane.id ? '▲' : '▼'}
//                 </button>
//               )}
//             </header>
//             {isOpen && (
//               <div className={`kanban-row ${isMobile ? 'mobile-view' : ''}`}>
//                 {statuses.map((status, idx) => {
//                   const issuesForStatus = byStatus(lane.issues, status);
//                   return (
//                     <div 
//                       className={`kanban-column ${isMobile ? 'mobile-column' : ''}`} 
//                       key={status} 
//                       onDragOver={onDragOver} 
//                       onDrop={e => onDrop(e, status, lane.id)}
//                     >
//                       <div className="col-header">
//                         <span className="col-title">{status.toUpperCase()}</span>
//                         {!isMobile && (
//                           <span className="col-icons">
//                             <button className="col-icon" title="Add Column" onClick={e => openAddColumnModal(e, lane.id, idx)}>＋</button>
//                             <button className="col-icon" title="Edit/Delete Column" onClick={e => openEditColumnModal(e, lane.id, idx, status)}>⋮</button>
//                           </span>
//                         )}
//                         {issuesForStatus.length > 0 && <span className="col-count">{issuesForStatus.length}</span>}
//                       </div>
//                       <div className="col-create">
//                         {status === 'backlog' && (
//                           createLaneId === lane.id ? (
//                             <div className="create-card">
//                               <textarea rows={2} className="create-input" placeholder="What needs to be done?" value={newTaskText} onChange={e => setNewTaskText(e.target.value)} />
//                               <div className="create-actions">
//                                 <select value={newTaskType} onChange={e => setNewTaskType(e.target.value)} className="create-select">
//                                   <option>Task</option><option>Subtask</option><option>Bug</option>
//                                 </select>
//                                 <button className="create-btn" onClick={() => handleCreateSubmit(lane)}>✔</button>
//                                 <button className="create-btn" onClick={() => setCreateLaneId(null)}>✖</button>
//                               </div>
//                             </div>
//                           ) : (<span className="create-link" onClick={() => handleCreateClick(lane.id)}>+ Create</span>)
//                         )}
//                       </div>
//                       {issuesForStatus.map(issue => {
//                         const isHovered = hoveredAssigneeId === issue.id;
//                         return (
//                           <div className="card-item" key={issue.id} draggable onDragStart={e => onDragStart(e, issue.id)} onClick={() => handleOpenModal(issue)}>
//                             <div className="card-top">
//                               <span className={`card-tag card-tag-${issue.type.toLowerCase()}`}>{issue.type}</span>
//                               <span className="card-id">{issue.id}</span>
//                             </div>
//                             <div className="card-title">{issue.title}</div>
//                             <div className="card-meta">
//                               {issue.dueDate && <span className="card-due">📅 {issue.dueDate}</span>}
//                               <span className={`card-priority ${issue.priority.toLowerCase()}`}>⚑ {issue.priority}</span>
//                               {issue.assignee && (
//                                 <span className="card-assignee" onMouseEnter={() => setHoveredAssigneeId(issue.id)} onMouseLeave={() => setHoveredAssigneeId(null)} style={{ position: 'relative', cursor: 'default', userSelect: 'none' }}>
//                                   👤
//                                   {isHovered && <div className="assignee-tooltip">{issue.assignee}</div>}
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </section>
//         );
//       })}

//       {/* Column Add/Edit modal */}
//       {columnModal && (columnModal.type === 'add' || columnModal.type === 'menu') && (
//         <div className="epic-modal-overlay" onClick={() => setColumnModal(null)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 }}>
//           <div className="epic-modal" onClick={e => e.stopPropagation()} style={{
//             position: isMobile ? 'fixed' : 'absolute',
//             top: isMobile ? '50%' : modalPosition.top,
//             left: isMobile ? '50%' : modalPosition.left,
//             transform: isMobile ? 'translate(-50%, -50%)' : 'translateX(-50%)',
//             minWidth: isMobile ? '90vw' : 280,
//             maxWidth: isMobile ? '95vw' : 320,
//             padding: 20,
//             borderRadius: 10,
//             background: 'white',
//             boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
//             zIndex: 1100
//           }}>
//             {columnModal.type === 'add' ? (
//               <>
//                 <h3 style={{ marginBottom: 15, fontWeight: 600, fontSize: 20, color: '#172b4d' }}>Add Column</h3>
//                 <input value={columnInput} onChange={e => setColumnInput(e.target.value)} placeholder="Column name" autoFocus className="epic-modal-input" style={{ width: '100%', padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #dfe1e5', marginBottom: 20, boxSizing: 'border-box' }} />
//                 <div className="epic-modal-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
//                   <button className="btn-cancel" onClick={() => setColumnModal(null)} style={btnStyle.cancel}>Cancel</button>
//                   <button className="btn-create" onClick={handleAddColumn} style={btnStyle.create}>Add</button>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <h3 style={{ marginBottom: 15, fontWeight: 600, fontSize: 20, color: '#172b4d' }}>Edit/Delete Column</h3>
//                 <input value={columnInput} onChange={e => setColumnInput(e.target.value)} placeholder="Column name" autoFocus className="epic-modal-input" style={{ width: '100%', padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #dfe1e5', marginBottom: 20, boxSizing: 'border-box' }} />
//                 <div className="epic-modal-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
//                   <button className="btn-save" onClick={handleEditColumn} style={btnStyle.create}>Rename</button>
//                   <button className="btn-delete" onClick={handleDeleteColumn} style={btnStyle.delete}>Delete</button>
//                   <button className="btn-cancel" onClick={() => setColumnModal(null)} style={btnStyle.cancel}>Cancel</button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Issue modal */}
//       {selectedIssue && editIssue && (
//         <div className="modal-overlay" onClick={() => setSelectedIssue(null)}>
//           <div className={`modal ${isMobile ? 'mobile-modal' : ''}`} onClick={e => e.stopPropagation()}>
//             <div className="modal-header">
//               <h2>{editIssue.epicName}</h2>
//               <button className="modal-close-btn" onClick={() => setSelectedIssue(null)}>✖</button>
//             </div>
//             <div className={`modal-content ${isMobile ? 'mobile-modal-content' : ''}`}>
//               <div className="modal-field"><label>Title</label><input value={editIssue.title} onChange={e => handleUpdateField('title', e.target.value)} /></div>
//               <div className="modal-field"><label>Description</label><textarea value={editIssue.description} onChange={e => handleUpdateField('description', e.target.value)} /></div>
//               <div className="modal-field"><label>Subtasks</label><input value={editIssue.subtasks} onChange={e => handleUpdateField('subtasks', e.target.value)} /></div>
//               <div className="modal-field"><label>Comments</label><textarea value={editIssue.comments} onChange={e => handleUpdateField('comments', e.target.value)} /></div>
//               <div className="modal-field"><label>Status</label>
//                 <select value={editIssue.status} onChange={e => handleUpdateField('status', e.target.value)}>
//                   {columnsByLane[editIssue.epic]?.map(st => <option key={st} value={st}>{st}</option>) || defaultStatuses.map(st => <option key={st} value={st}>{st}</option>)}
//                 </select>
//               </div>
//               <div className="modal-field"><label>Assignee</label><input value={editIssue.assignee} onChange={e => handleUpdateField('assignee', e.target.value)} /></div>
//               <div className="modal-field"><label>Reporter</label><input disabled value={editIssue.reporter} /></div>
//               <div className="modal-field"><label>Priority</label>
//                 <select value={editIssue.priority} onChange={e => handleUpdateField('priority', e.target.value)}>
//                   <option>Low</option><option>Medium</option><option>High</option>
//                 </select>
//               </div>
//               <div className="modal-field"><label>Due Date</label><input type="date" value={editIssue.dueDate} onChange={e => handleUpdateField('dueDate', e.target.value)} /></div>
//               <div className="modal-field"><label>Start Date</label><input type="date" value={editIssue.startDate} onChange={e => handleUpdateField('startDate', e.target.value)} /></div>
//             </div>
//             <div className="modal-actions" style={{ gridColumn: "span 3", alignItems: 'center' }}>
//               <button className="btn-reset" onClick={handleReset}>Reset</button>
//               <button className="btn-save" onClick={handleSave}>Save</button>
//               <button className="modal-delete-btn" onClick={async () => {
//                 if (window.confirm('Delete this issue?')) {
//                   await deleteIssueAPI(selectedIssue.id);
//                   const refreshed = await listIssues(projectId);
//                   setIssues(refreshed);
//                   setSelectedIssue(null);
//                 }
//               }}>🗑</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Inline CSS styles */}
//       <style>{`
//         /* Base styles */
//         body {
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//           background-color: #f5f6f8;
//           margin: 0;
//           padding: 16px;
//         }
//         .board-wrap {
//           max-width: 100%;
//           overflow-x: auto;
//         }

//         /* Desktop styles */
//         @media (min-width: 768px) {
//           .swimlane {
//             background: white;
//             border-radius: 8px;
//             margin-bottom: 16px;
//             box-shadow: 0 1px 3px rgba(0,0,0,0.1);
//             overflow: hidden;
//           }
          
//           .kanban-row {
//             display: flex;
//             padding: 16px;
//             gap: 12px;
//             overflow-x: auto;
//           }
          
//           .kanban-column {
//             flex: 0 0 260px;
//             background: #f5f6f8;
//             border-radius: 6px;
//             padding: 12px;
//             display: flex;
//             flex-direction: column;
//             gap: 12px;
//             border: 1px solid #dfe5e5;
//             user-select: none;
//             min-height: 400px;
//           }
          
//           .modal {
//             background: white;
//             border-radius: 8px;
//             padding: 24px;
//             width: 700px;
//             max-height: 80vh;
//             display: grid;
//             grid-template-columns: 1fr 1fr 1fr;
//             gap: 16px;
//             overflow-y: auto;
//             position: relative;
//           }
//         }

//         /* Mobile styles */
//         @media (max-width: 767px) {
//           body {
//             padding: 8px;
//           }
          
//           .mobile-swimlane-selector {
//             margin-bottom: 16px;
//             position: sticky;
//             top: 0;
//             background: white;
//             padding: 12px;
//             border-radius: 8px;
//             box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//             z-index: 100;
//           }
          
//           .mobile-select {
//             width: 100%;
//             padding: 12px;
//             border: 1px solid #dfe5e5;
//             border-radius: 6px;
//             font-size: 16px;
//             background: white;
//           }
          
//           .swimlane {
//             background: white;
//             border-radius: 8px;
//             margin-bottom: 12px;
//             box-shadow: 0 1px 3px rgba(0,0,0,0.1);
//             overflow: hidden;
//           }
          
//           .swimlane-header {
//             display: flex;
//             align-items: center;
//             padding: 12px;
//             background: #fafbfc;
//             border-bottom: 1px solid #dfe5e5;
//             font-weight: 600;
//             font-size: 14px;
//             color: #172b4d;
//             position: relative;
//           }
          
//           .mobile-swimlane-toggle {
//             background: none;
//             border: none;
//             font-size: 16px;
//             color: #5e6c84;
//             margin-left: auto;
//             padding: 4px 8px;
//           }
          
//           .kanban-row.mobile-view {
//             display: block;
//             padding: 8px;
//             overflow-x: auto;
//             white-space: nowrap;
//           }
          
//           .kanban-column.mobile-column {
//             display: inline-block;
//             vertical-align: top;
//             width: 280px;
//             margin-right: 8px;
//             background: #f5f6f8;
//             border-radius: 6px;
//             padding: 8px;
//             border: 1px solid #dfe5e5;
//             user-select: none;
//             min-height: 300px;
//           }
          
//           .col-header {
//             display: flex;
//             align-items: center;
//             margin-bottom: 8px;
//             gap: 6px;
//           }
          
//           .col-title {
//             font-weight: 600;
//             font-size: 11px;
//             color: #5e6c84;
//             text-transform: uppercase;
//             letter-spacing: 0.5px;
//             flex-grow: 1;
//           }
          
//           .card-item {
//             background: white;
//             border-radius: 6px;
//             padding: 10px;
//             box-shadow: 0 0 2px rgba(0,0,0,0.1);
//             cursor: pointer;
//             user-select: none;
//             display: flex;
//             flex-direction: column;
//             gap: 6px;
//             border: 1px solid #dfe5e5;
//             margin-bottom: 8px;
//           }
          
//           .card-title {
//             font-weight: 600;
//             font-size: 13px;
//             color: #2b3a59;
//             line-height: 1.3;
//           }
          
//           .card-meta {
//             display: flex;
//             gap: 6px;
//             font-size: 10px;
//             color: #6b7c93;
//             align-items: center;
//             flex-wrap: wrap;
//           }
          
//           .modal.mobile-modal {
//             width: 95vw;
//             max-height: 90vh;
//             padding: 16px;
//             display: flex;
//             flex-direction: column;
//           }
          
//           .modal-content.mobile-modal-content {
//             display: flex;
//             flex-direction: column;
//             gap: 12px;
//             overflow-y: auto;
//           }
          
//           .modal-field {
//             display: flex;
//             flex-direction: column;
//             gap: 4px;
//           }
          
//           .modal-field input, .modal-field textarea, .modal-field select {
//             padding: 10px;
//             font-size: 16px; /* Better for mobile touch */
//           }
          
//           .modal-actions {
//             display: flex;
//             gap: 8px;
//             justify-content: space-between;
//             margin-top: 16px;
//           }
          
//           .modal-actions button {
//             flex: 1;
//             padding: 12px;
//             font-size: 16px;
//           }
//         }

//         /* Common styles (applied to both desktop and mobile) */
//         .swimlane-header {
//           display: flex;
//           align-items: center;
//           padding: 12px 16px;
//           background: #fafbfc;
//           border-bottom: 1px solid #dfe5e5;
//           font-weight: 600;
//           font-size: 14px;
//           color: #172b4d;
//         }
        
//         .swimlane-toggle, .swimlane-icon {
//           color: #5e6c84;
//           margin-right: 8px;
//           cursor: pointer;
//         }
        
//         .swimlane-toggle {
//           border: none;
//           background: transparent;
//           font-size: 14px;
//         }
        
//         .swimlane-icon {
//           font-size: 18px;
//         }
        
//         .swimlane-title-input {
//           border: 1px solid #dfe5e5;
//           border-radius: 4px;
//           padding: 4px 8px;
//           font-size: 14px;
//           font-weight: 600;
//           background: white;
//           margin-right: 8px;
//           min-width: 150px;
//           color: #172b4d;
//         }
        
//         .swimlane-title-input:focus {
//           outline: none;
//           border-color: #1976d2;
//         }
        
//         .swimlane-count {
//           color: #5e6c84;
//           font-size: 12px;
//           font-weight: normal;
//         }
        
//         .col-header {
//           display: flex;
//           align-items: center;
//           margin-bottom: 4px;
//           gap: 6px;
//         }
        
//         .col-title {
//           font-weight: 600;
//           font-size: 12px;
//           color: #5e6c84;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//           flex-grow: 1;
//         }
        
//         .col-count {
//           background: #dfe5e5;
//           color: #5e6c84;
//           border-radius: 12px;
//           padding: 2px 8px;
//           font-size: 11px;
//           font-weight: 600;
//           min-width: 20px;
//           text-align: center;
//         }
        
//         .col-icons {
//           display: flex;
//           gap: 6px;
//         }
        
//         .col-icon {
//           cursor: pointer;
//           color: #5e6c84;
//           font-size: 18px;
//           background: none;
//           border: none;
//           padding: 0;
//         }
        
//         .create-card {
//           background: white;
//           padding: 10px;
//           border-radius: 6px;
//           box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//         }
        
//         .card-item {
//           background: white;
//           border-radius: 8px;
//           padding: 12px;
//           box-shadow: 0 0 2px rgba(0,0,0,0.1);
//           cursor: pointer;
//           user-select: none;
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//           border: 1px solid #dfe5e5;
//           transition: box-shadow 0.2s ease, border-color 0.2s ease;
//         }
        
//         .card-item:hover {
//           box-shadow: 0px 2px 10px rgba(0,0,0,0.15);
//           border-color: #a2adba;
//         }
        
//         .modal-overlay {
//           position: fixed;
//           top: 0; left: 0; right: 0; bottom: 0;
//           background: rgba(0,0,0,0.5);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 1000;
//         }
        
//         /* Button styles */
//         button {
//           cursor: pointer;
//           transition: background-color 0.2s;
//         }
        
//         button:hover {
//           opacity: 0.9;
//         }

//         /* Touch improvements for mobile */
//         @media (max-width: 767px) {
//           button, .card-item, .col-icon {
//             min-height: 44px;
//             min-width: 44px;
//           }
          
//           .card-item {
//             touch-action: manipulation;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// const btnStyle = {
//   cancel: {
//     padding: '10px 18px',
//     borderRadius: '6px',
//     border: 'none',
//     backgroundColor: '#5e6c84',
//     color: 'white',
//     fontWeight: '600',
//     fontSize: '14px',
//     cursor: 'pointer'
//   },
//   create: {
//     padding: '10px 18px',
//     borderRadius: '6px',
//     border: 'none',
//     backgroundColor: '#1976d2',
//     color: 'white',
//     fontWeight: '600',
//     fontSize: '14px',
//     cursor: 'pointer'
//   },
//   delete: {
//     padding: '10px 18px',
//     borderRadius: '6px',
//     border: 'none',
//     backgroundColor: '#d32f2f',
//     color: 'white',
//     fontWeight: '600',
//     fontSize: '14px',
//     cursor: 'pointer'
//   }
// };










// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const mockIssues = [
//   { id: 'i1', epic: 'p1', epicName: 'Frontend', status: 'todo', type: 'Task', title: 'Setup repo', assignee: 'John Doe', storyPoints: 3, labels: [], dueDate: '2025-09-30', reporter: 'admin', priority: 'High', startDate: '2025-09-15', description: '', subtasks: '', comments: '' },
//   { id: 'i3', epic: 'p2', epicName: 'Middleware', status: 'todo', type: 'Subtask', title: 'API integration', assignee: 'Jane Smith', storyPoints: 2, labels: [], dueDate: '', reporter: 'lead-dev', priority: 'Low', startDate: '2025-09-18', description: '', subtasks: '', comments: '' }
// ];

// const defaultStatuses = ['backlog', 'todo', 'analysis', 'inprogress', 'blocked', 'code review', 'qa', 'milestone', 'done'];
// const mockEpics = [{ id: 'p1', name: 'Frontend' }, { id: 'p2', name: 'Middleware' }];
// const mockProjects = [
//   { id: 'p1', name: 'E-Commerce Platform' },
//   { id: 'p2', name: 'API Gateway Service' },
//   { id: 'p3', name: 'Mobile App Development' }
// ];

// const simulateApiDelay = () => new Promise(resolve => setTimeout(resolve, 200));
// const listIssues = async (projectId) => {
//   await simulateApiDelay();
//   return mockIssues.filter(i => !projectId || i.epic === projectId || i.projectId === projectId);
// };
// const listEpics = async () => { await simulateApiDelay(); return mockEpics; };
// const getProjectName = async (projectId) => {
//   await simulateApiDelay();
//   const project = mockProjects.find(p => p.id === projectId);
//   return project ? project.name : 'Untitled Project';
// };
// const createEpicAPI = async (epicName) => {
//   await simulateApiDelay();
//   const newEpic = { id: 'p' + (mockEpics.length + 1), name: epicName };
//   mockEpics.push(newEpic);
//   return newEpic;
// };
// const deleteEpicAPI = async (epicId) => {
//   await simulateApiDelay();
//   const epicIndex = mockEpics.findIndex(epic => epic.id === epicId);
//   if (epicIndex > -1) mockEpics.splice(epicIndex, 1);
//   const issueIndices = [];
//   mockIssues.forEach((issue, index) => { if (issue.epic === epicId) issueIndices.push(index); });
//   issueIndices.sort((a, b) => b - a).forEach(index => { mockIssues.splice(index, 1); });
// };
// const moveIssue = async (issueId, status) => {
//   await simulateApiDelay();
//   const issue = mockIssues.find(i => i.id === issueId);
//   if (!issue) throw new Error('Issue not found');
//   issue.status = status;
// };
// const createIssueAPI = async (issue) => { await simulateApiDelay(); mockIssues.push(issue); };
// const deleteIssueAPI = async (issueId) => { await simulateApiDelay(); const idx = mockIssues.findIndex(i => i.id === issueId); if (idx > -1) mockIssues.splice(idx, 1); };
// const updateIssueAPI = async (updatedIssue) => { await simulateApiDelay(); const idx = mockIssues.findIndex(i => i.id === updatedIssue.id); if (idx > -1) mockIssues[idx] = { ...mockIssues[idx], ...updatedIssue }; };

// const getSwimlanes = (issues, epics) =>
//   epics.map(epic => {
//     const epicIssues = issues.filter(i => (i.epic || i.projectId) === epic.id);
//     return { id: epic.id, title: epic.name, issues: epicIssues };
//   });

// export default function KanbanBoard() {
//   const { projectId } = useParams();
//   const [issues, setIssues] = useState([]);
//   const [epics, setEpics] = useState([]);
//   const [projectName, setProjectName] = useState('');
//   const [openSwimlanes, setOpenSwimlanes] = useState({});
//   const [customTitles, setCustomTitles] = useState({});
//   const [createLaneId, setCreateLaneId] = useState(null);
//   const [newTaskText, setNewTaskText] = useState('');
//   const [newTaskType, setNewTaskType] = useState('Task');
//   const [selectedIssue, setSelectedIssue] = useState(null);
//   const [editIssue, setEditIssue] = useState(null);
//   const [showCreateEpic, setShowCreateEpic] = useState(false);
//   const [showDeleteEpic, setShowDeleteEpic] = useState(false);
//   const [newEpicName, setNewEpicName] = useState('');
//   const [epicToDelete, setEpicToDelete] = useState('');
//   const [columnsByLane, setColumnsByLane] = useState({});
//   const [columnModal, setColumnModal] = useState(null);
//   const [columnInput, setColumnInput] = useState('');
//   const [hoveredAssigneeId, setHoveredAssigneeId] = useState(null);
//   const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
//   const [isMobile, setIsMobile] = useState(false);
//   const [activeSwimlane, setActiveSwimlane] = useState(null);

//   // Detect mobile screen size
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);
    
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [issuesData, epicsData, projectNameData] = await Promise.all([
//           listIssues(projectId), 
//           listEpics(), 
//           projectId ? getProjectName(projectId) : Promise.resolve('All Projects')
//         ]);
//         setIssues(issuesData);
//         setEpics(epicsData);
//         setProjectName(projectNameData);
//         const lanes = getSwimlanes(issuesData, epicsData);
//         const initialOpen = {}, initialTitles = {}, initialCols = {};
//         lanes.forEach(lane => {
//           initialOpen[lane.id] = true;
//           initialTitles[lane.id] = lane.title;
//           initialCols[lane.id] = defaultStatuses.slice();
//         });
//         setOpenSwimlanes(initialOpen);
//         setCustomTitles(initialTitles);
//         setColumnsByLane(initialCols);
//       } catch (err) { console.error(err); }
//     };
//     fetchData();
//   }, [projectId]);

//   const openAddColumnModal = (e, laneId, colIndex) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setModalPosition({ top: rect.bottom + window.scrollY + 8, left: rect.left + window.scrollX });
//     setColumnModal({ laneId, colIndex, type: 'add' });
//     setColumnInput('');
//   };
//   const openEditColumnModal = (e, laneId, colIndex, status) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setModalPosition({ top: rect.bottom + window.scrollY + 8, left: rect.left + window.scrollX });
//     setColumnModal({ laneId, colIndex, type: 'menu' });
//     setColumnInput(status);
//   };
//   const handleAddColumn = () => {
//     const name = columnInput.trim();
//     if (!name) return alert('Column name is required');
//     setColumnsByLane(prev => {
//       const cols = [...prev[columnModal.laneId]];
//       if (cols.includes(name.toLowerCase())) alert('Column name already exists');
//       else cols.splice(columnModal.colIndex + 1, 0, name.toLowerCase());
//       return { ...prev, [columnModal.laneId]: cols };
//     });
//     setColumnModal(null);
//     setColumnInput('');
//   };
//   const handleEditColumn = () => {
//     const name = columnInput.trim();
//     if (!name) return alert('Column name is required');
//     const { laneId, colIndex } = columnModal;
//     const oldCol = columnsByLane[laneId][colIndex];
//     if (columnsByLane[laneId].includes(name.toLowerCase()) && name.toLowerCase() !== oldCol) {
//       alert('Column name already exists');
//       return;
//     }
//     setColumnsByLane(prev => {
//       const cols = [...prev[laneId]];
//       cols[colIndex] = name.toLowerCase();
//       return { ...prev, [laneId]: cols };
//     });
//     const updatedIssues = issues.map(issue =>
//       (issue.epic || issue.projectId) === laneId && issue.status === oldCol ? { ...issue, status: name.toLowerCase() } : issue
//     );
//     setIssues(updatedIssues);
//     setColumnModal(null);
//     setColumnInput('');
//   };
//   const handleDeleteColumn = () => {
//     const { laneId, colIndex } = columnModal;
//     const removedCol = columnsByLane[laneId][colIndex];
//     setColumnsByLane(prev => {
//       const cols = [...prev[laneId]];
//       cols.splice(colIndex, 1);
//       return { ...prev, [laneId]: cols };
//     });
//     const updatedIssues = issues.map(issue =>
//       (issue.epic || issue.projectId) === laneId && issue.status === removedCol ? { ...issue, status: 'backlog' } : issue
//     );
//     setIssues(updatedIssues);
//     setColumnModal(null);
//     setColumnInput('');
//   };
//   const toggleSwimlane = (id) => setOpenSwimlanes(prev => ({ ...prev, [id]: !prev[id] }));
//   const byStatus = (collection, status) => collection.filter(i => i.status === status);

//   const onDragStart = (e, issueId) => e.dataTransfer.setData('text/plain', issueId);
//   const onDrop = async (e, targetStatus, swimlaneId) => {
//     e.preventDefault();
//     try {
//       const issueId = e.dataTransfer.getData('text/plain');
//       const issue = issues.find(i => i.id === issueId);
//       const srcLaneId = issue.epic || issue.projectId;
//       if (srcLaneId === swimlaneId && issue.status !== targetStatus) {
//         await moveIssue(issueId, targetStatus);
//         const refreshed = await listIssues(projectId);
//         setIssues(refreshed);
//       }
//     } catch (err) { console.error(err); }
//   };
//   const onDragOver = e => e.preventDefault();

//   const handleCreateClick = laneId => { setCreateLaneId(laneId); setNewTaskText(''); setNewTaskType('Task'); };
//   const handleCreateSubmit = async lane => {
//     if (!newTaskText.trim()) { alert('Task title is required'); return; }
//     const newIssue = {
//       id: Math.random().toString(36).slice(2),
//       epic: lane.id,
//       projectId: lane.id,
//       epicName: lane.title,
//       title: newTaskText,
//       status: 'backlog',
//       assignee: '',
//       type: newTaskType,
//       storyPoints: '',
//       labels: [],
//       dueDate: '',
//       reporter: 'system',
//       priority: 'Medium',
//       startDate: new Date().toISOString().split('T')[0],
//       description: '',
//       subtasks: '',
//       comments: ''
//     };
//     try {
//       await createIssueAPI(newIssue);
//       const refreshed = await listIssues(projectId);
//       setIssues(refreshed);
//       setCreateLaneId(null);
//     } catch (err) { console.error(err); }
//   };

//   const handleOpenModal = (issue) => { setSelectedIssue(issue); setEditIssue({ ...issue }); };
//   const handleUpdateField = (field, value) => { setEditIssue(prev => ({ ...prev, [field]: value })); };
//   const handleSave = async () => { await updateIssueAPI(editIssue); const refreshed = await listIssues(projectId); setIssues(refreshed); setSelectedIssue(null); setEditIssue(null); };
//   const handleReset = () => { setEditIssue({ ...selectedIssue }); };

//   // Create Epic Modal Handlers
//   const handleCreateEpic = async () => {
//     if (!newEpicName.trim()) {
//       alert('Epic name is required');
//       return;
//     }
//     try {
//       await createEpicAPI(newEpicName);
//       const updatedEpics = await listEpics();
//       setEpics(updatedEpics);
//       setNewEpicName('');
//       setShowCreateEpic(false);
//       const newEpic = updatedEpics[updatedEpics.length - 1];
//       setOpenSwimlanes(prev => ({ ...prev, [newEpic.id]: true }));
//       setCustomTitles(prev => ({ ...prev, [newEpic.id]: newEpic.name }));
//       setColumnsByLane(prev => ({ ...prev, [newEpic.id]: defaultStatuses.slice() }));
//     } catch (error) {
//       console.error('Error creating epic:', error);
//     }
//   };

//   // Delete Epic Modal Handler
//   const handleDeleteEpic = async () => {
//     if (!epicToDelete) {
//       alert('Please select an epic to delete');
//       return;
//     }
//     if (!window.confirm(`Are you sure you want to delete the epic "${epics.find(e => e.id === epicToDelete)?.name}"? This will also delete all issues in this epic.`)) {
//       return;
//     }
//     try {
//       await deleteEpicAPI(epicToDelete);
//       const [refreshedIssues, refreshedEpics] = await Promise.all([
//         listIssues(projectId),
//         listEpics()
//       ]);
//       setIssues(refreshedIssues);
//       setEpics(refreshedEpics);
//       setEpicToDelete('');
//       setShowDeleteEpic(false);
//       setColumnsByLane(prev => {
//         const copy = { ...prev };
//         delete copy[epicToDelete];
//         return copy;
//       });
//       setOpenSwimlanes(prev => {
//         const copy = { ...prev };
//         delete copy[epicToDelete];
//         return copy;
//       });
//       setCustomTitles(prev => {
//         const copy = { ...prev };
//         delete copy[epicToDelete];
//         return copy;
//       });
//     } catch (error) {
//       console.error('Error deleting epic:', error);
//     }
//   };

//   // Mobile-specific functions
//   const toggleMobileSwimlane = (laneId) => {
//     if (activeSwimlane === laneId) {
//       setActiveSwimlane(null);
//     } else {
//       setActiveSwimlane(laneId);
//     }
//   };

//   const swimlanes = getSwimlanes(issues, epics);

//   return (
//     <div className="board-wrap">
//       {/* Project Name Header */}
//       <div className="project-header">
//         <h1 className="project-title">{projectName}</h1>
//         <div className="project-stats">
//           <span className="project-stat">{epics.length} Epics</span>
//           <span className="project-stat">{issues.length} Issues</span>
//           <span className="project-stat">
//             {issues.filter(issue => issue.status === 'done').length} Completed
//           </span>
//         </div>
//       </div>

//       {/* Mobile swimlane selector */}
//       {isMobile && (
//         <div className="mobile-swimlane-selector">
//           <select 
//             value={activeSwimlane || ''} 
//             onChange={(e) => setActiveSwimlane(e.target.value || null)}
//             className="mobile-select"
//           >
//             <option value="">All Swimlanes</option>
//             {swimlanes.map(lane => (
//               <option key={lane.id} value={lane.id}>{customTitles[lane.id] || lane.title}</option>
//             ))}
//           </select>
//         </div>
//       )}

//       {/* Swimlanes and columns */}
//       {swimlanes.map(lane => {
//         const isOpen = isMobile ? (activeSwimlane === null || activeSwimlane === lane.id) : openSwimlanes[lane.id];
//         const statuses = columnsByLane[lane.id] || defaultStatuses;
        
//         // Skip rendering if mobile and this isn't the active swimlane
//         if (isMobile && activeSwimlane && activeSwimlane !== lane.id) {
//           return null;
//         }

//         return (
//           <section className="swimlane" key={lane.id}>
//             <header className="swimlane-header">
//               {!isMobile && (
//                 <button className="swimlane-toggle" onClick={() => toggleSwimlane(lane.id)}>
//                   {isOpen ? '▼' : '▶'}
//                 </button>
//               )}
//               <span className="swimlane-icon">⚡</span>
//               <input 
//                 className="swimlane-title-input" 
//                 value={customTitles[lane.id] || ''} 
//                 onChange={e => setCustomTitles(prev => ({ ...prev, [lane.id]: e.target.value }))} 
//               />
//               <span className="swimlane-count">{lane.issues.length} work items</span>
//               {isMobile && (
//                 <button 
//                   className="mobile-swimlane-toggle"
//                   onClick={() => toggleMobileSwimlane(lane.id)}
//                 >
//                   {activeSwimlane === lane.id ? '▲' : '▼'}
//                 </button>
//               )}
//             </header>
//             {isOpen && (
//               <div className={`kanban-row ${isMobile ? 'mobile-view' : ''}`}>
//                 {statuses.map((status, idx) => {
//                   const issuesForStatus = byStatus(lane.issues, status);
//                   return (
//                     <div 
//                       className={`kanban-column ${isMobile ? 'mobile-column' : ''}`} 
//                       key={status} 
//                       onDragOver={onDragOver} 
//                       onDrop={e => onDrop(e, status, lane.id)}
//                     >
//                       <div className="col-header">
//                         <span className="col-title">{status.toUpperCase()}</span>
//                         {!isMobile && (
//                           <span className="col-icons">
//                             <button className="col-icon" title="Add Column" onClick={e => openAddColumnModal(e, lane.id, idx)}>＋</button>
//                             <button className="col-icon" title="Edit/Delete Column" onClick={e => openEditColumnModal(e, lane.id, idx, status)}>⋮</button>
//                           </span>
//                         )}
//                         {issuesForStatus.length > 0 && <span className="col-count">{issuesForStatus.length}</span>}
//                       </div>
//                       <div className="col-create">
//                         {status === 'backlog' && (
//                           createLaneId === lane.id ? (
//                             <div className="create-card">
//                               <textarea rows={2} className="create-input" placeholder="What needs to be done?" value={newTaskText} onChange={e => setNewTaskText(e.target.value)} />
//                               <div className="create-actions">
//                                 <select value={newTaskType} onChange={e => setNewTaskType(e.target.value)} className="create-select">
//                                   <option>Task</option><option>Subtask</option><option>Bug</option>
//                                 </select>
//                                 <button className="create-btn" onClick={() => handleCreateSubmit(lane)}>✔</button>
//                                 <button className="create-btn" onClick={() => setCreateLaneId(null)}>✖</button>
//                               </div>
//                             </div>
//                           ) : (<span className="create-link" onClick={() => handleCreateClick(lane.id)}>+ Create</span>)
//                         )}
//                       </div>
//                       {issuesForStatus.map(issue => {
//                         const isHovered = hoveredAssigneeId === issue.id;
//                         return (
//                           <div className="card-item" key={issue.id} draggable onDragStart={e => onDragStart(e, issue.id)} onClick={() => handleOpenModal(issue)}>
//                             <div className="card-top">
//                               <span className={`card-tag card-tag-${issue.type.toLowerCase()}`}>{issue.type}</span>
//                               <span className="card-id">{issue.id}</span>
//                             </div>
//                             <div className="card-title">{issue.title}</div>
//                             <div className="card-meta">
//                               {issue.dueDate && <span className="card-due">📅 {issue.dueDate}</span>}
//                               <span className={`card-priority ${issue.priority.toLowerCase()}`}>⚑ {issue.priority}</span>
//                               {issue.assignee && (
//                                 <span className="card-assignee" onMouseEnter={() => setHoveredAssigneeId(issue.id)} onMouseLeave={() => setHoveredAssigneeId(null)} style={{ position: 'relative', cursor: 'default', userSelect: 'none' }}>
//                                   👤
//                                   {isHovered && <div className="assignee-tooltip">{issue.assignee}</div>}
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </section>
//         );
//       })}

//       {/* Column Add/Edit modal */}
//       {columnModal && (columnModal.type === 'add' || columnModal.type === 'menu') && (
//         <div className="epic-modal-overlay" onClick={() => setColumnModal(null)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 }}>
//           <div className="epic-modal" onClick={e => e.stopPropagation()} style={{
//             position: isMobile ? 'fixed' : 'absolute',
//             top: isMobile ? '50%' : modalPosition.top,
//             left: isMobile ? '50%' : modalPosition.left,
//             transform: isMobile ? 'translate(-50%, -50%)' : 'translateX(-50%)',
//             minWidth: isMobile ? '90vw' : 280,
//             maxWidth: isMobile ? '95vw' : 320,
//             padding: 20,
//             borderRadius: 10,
//             background: 'white',
//             boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
//             zIndex: 1100
//           }}>
//             {columnModal.type === 'add' ? (
//               <>
//                 <h3 style={{ marginBottom: 15, fontWeight: 600, fontSize: 20, color: '#172b4d' }}>Add Column</h3>
//                 <input value={columnInput} onChange={e => setColumnInput(e.target.value)} placeholder="Column name" autoFocus className="epic-modal-input" style={{ width: '100%', padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #dfe1e5', marginBottom: 20, boxSizing: 'border-box' }} />
//                 <div className="epic-modal-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
//                   <button className="btn-cancel" onClick={() => setColumnModal(null)} style={btnStyle.cancel}>Cancel</button>
//                   <button className="btn-create" onClick={handleAddColumn} style={btnStyle.create}>Add</button>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <h3 style={{ marginBottom: 15, fontWeight: 600, fontSize: 20, color: '#172b4d' }}>Edit/Delete Column</h3>
//                 <input value={columnInput} onChange={e => setColumnInput(e.target.value)} placeholder="Column name" autoFocus className="epic-modal-input" style={{ width: '100%', padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #dfe1e5', marginBottom: 20, boxSizing: 'border-box' }} />
//                 <div className="epic-modal-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
//                   <button className="btn-save" onClick={handleEditColumn} style={btnStyle.create}>Rename</button>
//                   <button className="btn-delete" onClick={handleDeleteColumn} style={btnStyle.delete}>Delete</button>
//                   <button className="btn-cancel" onClick={() => setColumnModal(null)} style={btnStyle.cancel}>Cancel</button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Issue modal */}
//       {selectedIssue && editIssue && (
//         <div className="modal-overlay" onClick={() => setSelectedIssue(null)}>
//           <div className={`modal ${isMobile ? 'mobile-modal' : ''}`} onClick={e => e.stopPropagation()}>
//             <div className="modal-header">
//               <h2>{editIssue.epicName}</h2>
//               <button className="modal-close-btn" onClick={() => setSelectedIssue(null)}>✖</button>
//             </div>
//             <div className={`modal-content ${isMobile ? 'mobile-modal-content' : ''}`}>
//               <div className="modal-field"><label>Title</label><input value={editIssue.title} onChange={e => handleUpdateField('title', e.target.value)} /></div>
//               <div className="modal-field"><label>Description</label><textarea value={editIssue.description} onChange={e => handleUpdateField('description', e.target.value)} /></div>
//               <div className="modal-field"><label>Subtasks</label><input value={editIssue.subtasks} onChange={e => handleUpdateField('subtasks', e.target.value)} /></div>
//               <div className="modal-field"><label>Comments</label><textarea value={editIssue.comments} onChange={e => handleUpdateField('comments', e.target.value)} /></div>
//               <div className="modal-field"><label>Status</label>
//                 <select value={editIssue.status} onChange={e => handleUpdateField('status', e.target.value)}>
//                   {columnsByLane[editIssue.epic]?.map(st => <option key={st} value={st}>{st}</option>) || defaultStatuses.map(st => <option key={st} value={st}>{st}</option>)}
//                 </select>
//               </div>
//               <div className="modal-field"><label>Assignee</label><input value={editIssue.assignee} onChange={e => handleUpdateField('assignee', e.target.value)} /></div>
//               <div className="modal-field"><label>Reporter</label><input disabled value={editIssue.reporter} /></div>
//               <div className="modal-field"><label>Priority</label>
//                 <select value={editIssue.priority} onChange={e => handleUpdateField('priority', e.target.value)}>
//                   <option>Low</option><option>Medium</option><option>High</option>
//                 </select>
//               </div>
//               <div className="modal-field"><label>Due Date</label><input type="date" value={editIssue.dueDate} onChange={e => handleUpdateField('dueDate', e.target.value)} /></div>
//               <div className="modal-field"><label>Start Date</label><input type="date" value={editIssue.startDate} onChange={e => handleUpdateField('startDate', e.target.value)} /></div>
//             </div>
//             <div className="modal-actions" style={{ gridColumn: "span 3", alignItems: 'center' }}>
//               <button className="btn-reset" onClick={handleReset}>Reset</button>
//               <button className="btn-save" onClick={handleSave}>Save</button>
//               <button className="modal-delete-btn" onClick={async () => {
//                 if (window.confirm('Delete this issue?')) {
//                   await deleteIssueAPI(selectedIssue.id);
//                   const refreshed = await listIssues(projectId);
//                   setIssues(refreshed);
//                   setSelectedIssue(null);
//                 }
//               }}>🗑</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Inline CSS styles */}
//       <style>{`
//         /* Base styles */
//         body {
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//           background-color: #f5f6f8;
//           margin: 0;
//           padding: 16px;
//         }
//         .board-wrap {
//           max-width: 100%;
//           overflow-x: auto;
//         }

//         /* Project Header Styles */
//         .project-header {
//           background: white;
//           border-radius: 8px;
//           padding: 20px 24px;
//           margin-bottom: 20px;
//           box-shadow: 0 1px 3px rgba(0,0,0,0.1);
//           border-left: 4px solid #1976d2;
//         }
        
//         .project-title {
//           margin: 0 0 12px 0;
//           font-size: 28px;
//           font-weight: 700;
//           color: #172b4d;
//           line-height: 1.2;
//         }
        
//         .project-stats {
//           display: flex;
//           gap: 20px;
//           flex-wrap: wrap;
//         }
        
//         .project-stat {
//           background: #f5f6f8;
//           padding: 6px 12px;
//           border-radius: 16px;
//           font-size: 14px;
//           font-weight: 600;
//           color: #5e6c84;
//           display: flex;
//           align-items: center;
//           gap: 4px;
//         }
        
//         .project-stat:before {
//           content: "•";
//           color: #1976d2;
//           font-weight: bold;
//         }

//         /* Desktop styles */
//         @media (min-width: 768px) {
//           .swimlane {
//             background: white;
//             border-radius: 8px;
//             margin-bottom: 16px;
//             box-shadow: 0 1px 3px rgba(0,0,0,0.1);
//             overflow: hidden;
//           }
          
//           .kanban-row {
//             display: flex;
//             padding: 16px;
//             gap: 12px;
//             overflow-x: auto;
//           }
          
//           .kanban-column {
//             flex: 0 0 260px;
//             background: #f5f6f8;
//             border-radius: 6px;
//             padding: 12px;
//             display: flex;
//             flex-direction: column;
//             gap: 12px;
//             border: 1px solid #dfe5e5;
//             user-select: none;
//             min-height: 400px;
//           }
          
//           .modal {
//             background: white;
//             border-radius: 8px;
//             padding: 24px;
//             width: 700px;
//             max-height: 80vh;
//             display: grid;
//             grid-template-columns: 1fr 1fr 1fr;
//             gap: 16px;
//             overflow-y: auto;
//             position: relative;
//           }
//         }

//         /* Mobile styles */
//         @media (max-width: 767px) {
//           body {
//             padding: 8px;
//           }
          
//           .project-header {
//             padding: 16px;
//             margin-bottom: 16px;
//             border-left-width: 3px;
//           }
          
//           .project-title {
//             font-size: 22px;
//             margin-bottom: 10px;
//           }
          
//           .project-stats {
//             gap: 12px;
//           }
          
//           .project-stat {
//             font-size: 12px;
//             padding: 4px 10px;
//           }
          
//           .mobile-swimlane-selector {
//             margin-bottom: 16px;
//             position: sticky;
//             top: 0;
//             background: white;
//             padding: 12px;
//             border-radius: 8px;
//             box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//             z-index: 100;
//           }
          
//           .mobile-select {
//             width: 100%;
//             padding: 12px;
//             border: 1px solid #dfe5e5;
//             border-radius: 6px;
//             font-size: 16px;
//             background: white;
//           }
          
//           .swimlane {
//             background: white;
//             border-radius: 8px;
//             margin-bottom: 12px;
//             box-shadow: 0 1px 3px rgba(0,0,0,0.1);
//             overflow: hidden;
//           }
          
//           .swimlane-header {
//             display: flex;
//             align-items: center;
//             padding: 12px;
//             background: #fafbfc;
//             border-bottom: 1px solid #dfe5e5;
//             font-weight: 600;
//             font-size: 14px;
//             color: #172b4d;
//             position: relative;
//           }
          
//           .mobile-swimlane-toggle {
//             background: none;
//             border: none;
//             font-size: 16px;
//             color: #5e6c84;
//             margin-left: auto;
//             padding: 4px 8px;
//           }
          
//           .kanban-row.mobile-view {
//             display: block;
//             padding: 8px;
//             overflow-x: auto;
//             white-space: nowrap;
//           }
          
//           .kanban-column.mobile-column {
//             display: inline-block;
//             vertical-align: top;
//             width: 280px;
//             margin-right: 8px;
//             background: #f5f6f8;
//             border-radius: 6px;
//             padding: 8px;
//             border: 1px solid #dfe5e5;
//             user-select: none;
//             min-height: 300px;
//           }
          
//           .col-header {
//             display: flex;
//             align-items: center;
//             margin-bottom: 8px;
//             gap: 6px;
//           }
          
//           .col-title {
//             font-weight: 600;
//             font-size: 11px;
//             color: #5e6c84;
//             text-transform: uppercase;
//             letter-spacing: 0.5px;
//             flex-grow: 1;
//           }
          
//           .card-item {
//             background: white;
//             border-radius: 6px;
//             padding: 10px;
//             box-shadow: 0 0 2px rgba(0,0,0,0.1);
//             cursor: pointer;
//             user-select: none;
//             display: flex;
//             flex-direction: column;
//             gap: 6px;
//             border: 1px solid #dfe5e5;
//             margin-bottom: 8px;
//           }
          
//           .card-title {
//             font-weight: 600;
//             font-size: 13px;
//             color: #2b3a59;
//             line-height: 1.3;
//           }
          
//           .card-meta {
//             display: flex;
//             gap: 6px;
//             font-size: 10px;
//             color: #6b7c93;
//             align-items: center;
//             flex-wrap: wrap;
//           }
          
//           .modal.mobile-modal {
//             width: 95vw;
//             max-height: 90vh;
//             padding: 16px;
//             display: flex;
//             flex-direction: column;
//           }
          
//           .modal-content.mobile-modal-content {
//             display: flex;
//             flex-direction: column;
//             gap: 12px;
//             overflow-y: auto;
//           }
          
//           .modal-field {
//             display: flex;
//             flex-direction: column;
//             gap: 4px;
//           }
          
//           .modal-field input, .modal-field textarea, .modal-field select {
//             padding: 10px;
//             font-size: 16px; /* Better for mobile touch */
//           }
          
//           .modal-actions {
//             display: flex;
//             gap: 8px;
//             justify-content: space-between;
//             margin-top: 16px;
//           }
          
//           .modal-actions button {
//             flex: 1;
//             padding: 12px;
//             font-size: 16px;
//           }
//         }

//         /* Common styles (applied to both desktop and mobile) */
//         .swimlane-header {
//           display: flex;
//           align-items: center;
//           padding: 12px 16px;
//           background: #fafbfc;
//           border-bottom: 1px solid #dfe5e5;
//           font-weight: 600;
//           font-size: 14px;
//           color: #172b4d;
//         }
        
//         .swimlane-toggle, .swimlane-icon {
//           color: #5e6c84;
//           margin-right: 8px;
//           cursor: pointer;
//         }
        
//         .swimlane-toggle {
//           border: none;
//           background: transparent;
//           font-size: 14px;
//         }
        
//         .swimlane-icon {
//           font-size: 18px;
//         }
        
//         .swimlane-title-input {
//           border: 1px solid #dfe5e5;
//           border-radius: 4px;
//           padding: 4px 8px;
//           font-size: 14px;
//           font-weight: 600;
//           background: white;
//           margin-right: 8px;
//           min-width: 150px;
//           color: #172b4d;
//         }
        
//         .swimlane-title-input:focus {
//           outline: none;
//           border-color: #1976d2;
//         }
        
//         .swimlane-count {
//           color: #5e6c84;
//           font-size: 12px;
//           font-weight: normal;
//         }
        
//         .col-header {
//           display: flex;
//           align-items: center;
//           margin-bottom: 4px;
//           gap: 6px;
//         }
        
//         .col-title {
//           font-weight: 600;
//           font-size: 12px;
//           color: #5e6c84;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//           flex-grow: 1;
//         }
        
//         .col-count {
//           background: #dfe5e5;
//           color: #5e6c84;
//           border-radius: 12px;
//           padding: 2px 8px;
//           font-size: 11px;
//           font-weight: 600;
//           min-width: 20px;
//           text-align: center;
//         }
        
//         .col-icons {
//           display: flex;
//           gap: 6px;
//         }
        
//         .col-icon {
//           cursor: pointer;
//           color: #5e6c84;
//           font-size: 18px;
//           background: none;
//           border: none;
//           padding: 0;
//         }
        
//         .create-card {
//           background: white;
//           padding: 10px;
//           border-radius: 6px;
//           box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//         }
        
//         .card-item {
//           background: white;
//           border-radius: 8px;
//           padding: 12px;
//           box-shadow: 0 0 2px rgba(0,0,0,0.1);
//           cursor: pointer;
//           user-select: none;
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//           border: 1px solid #dfe5e5;
//           transition: box-shadow 0.2s ease, border-color 0.2s ease;
//         }
        
//         .card-item:hover {
//           box-shadow: 0px 2px 10px rgba(0,0,0,0.15);
//           border-color: #a2adba;
//         }
        
//         .modal-overlay {
//           position: fixed;
//           top: 0; left: 0; right: 0; bottom: 0;
//           background: rgba(0,0,0,0.5);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 1000;
//         }
        
//         /* Button styles */
//         button {
//           cursor: pointer;
//           transition: background-color 0.2s;
//         }
        
//         button:hover {
//           opacity: 0.9;
//         }

//         /* Touch improvements for mobile */
//         @media (max-width: 767px) {
//           button, .card-item, .col-icon {
//             min-height: 44px;
//             min-width: 44px;
//           }
          
//           .card-item {
//             touch-action: manipulation;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// const btnStyle = {
//   cancel: {
//     padding: '10px 18px',
//     borderRadius: '6px',
//     border: 'none',
//     backgroundColor: '#5e6c84',
//     color: 'white',
//     fontWeight: '600',
//     fontSize: '14px',
//     cursor: 'pointer'
//   },
//   create: {
//     padding: '10px 18px',
//     borderRadius: '6px',
//     border: 'none',
//     backgroundColor: '#1976d2',
//     color: 'white',
//     fontWeight: '600',
//     fontSize: '14px',
//     cursor: 'pointer'
//   },
//   delete: {
//     padding: '10px 18px',
//     borderRadius: '6px',
//     border: 'none',
//     backgroundColor: '#d32f2f',
//     color: 'white',
//     fontWeight: '600',
//     fontSize: '14px',
//     cursor: 'pointer'
//   }
// };















// for board name once test after backend is ready




import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const mockIssues = [
  { id: 'i1', epic: 'p1', epicName: 'Frontend', status: 'todo', type: 'Task', title: 'Setup repo', assignee: 'John Doe', storyPoints: 3, labels: [], dueDate: '2025-09-30', reporter: 'admin', priority: 'High', startDate: '2025-09-15', description: '', subtasks: '', comments: '' },
  { id: 'i3', epic: 'p2', epicName: 'Middleware', status: 'todo', type: 'Subtask', title: 'API integration', assignee: 'Jane Smith', storyPoints: 2, labels: [], dueDate: '', reporter: 'lead-dev', priority: 'Low', startDate: '2025-09-18', description: '', subtasks: '', comments: '' }
];

const defaultStatuses = ['backlog', 'todo', 'analysis', 'inprogress', 'blocked', 'code review', 'qa', 'milestone', 'done'];
const mockEpics = [{ id: 'p1', name: 'Frontend' }, { id: 'p2', name: 'Middleware' }];
const mockProjects = [
  { id: 'p1', name: 'E-Commerce Platform' },
  { id: 'p2', name: 'API Gateway Service' },
  { id: 'p3', name: 'Mobile App Development' }
];

const simulateApiDelay = () => new Promise(resolve => setTimeout(resolve, 200));
const listIssues = async (projectId) => {
  await simulateApiDelay();
  return mockIssues.filter(i => !projectId || i.epic === projectId || i.projectId === projectId);
};
const listEpics = async () => { await simulateApiDelay(); return mockEpics; };
const getProjectName = async (projectId) => {
  await simulateApiDelay();
  const project = mockProjects.find(p => p.id === projectId);
  return project ? project.name : 'Untitled Project';
};
const createEpicAPI = async (epicName) => {
  await simulateApiDelay();
  const newEpic = { id: 'p' + (mockEpics.length + 1), name: epicName };
  mockEpics.push(newEpic);
  return newEpic;
};
const deleteEpicAPI = async (epicId) => {
  await simulateApiDelay();
  const epicIndex = mockEpics.findIndex(epic => epic.id === epicId);
  if (epicIndex > -1) mockEpics.splice(epicIndex, 1);
  const issueIndices = [];
  mockIssues.forEach((issue, index) => { if (issue.epic === epicId) issueIndices.push(index); });
  issueIndices.sort((a, b) => b - a).forEach(index => { mockIssues.splice(index, 1); });
};
const moveIssue = async (issueId, status) => {
  await simulateApiDelay();
  const issue = mockIssues.find(i => i.id === issueId);
  if (!issue) throw new Error('Issue not found');
  issue.status = status;
};
const createIssueAPI = async (issue) => { await simulateApiDelay(); mockIssues.push(issue); };
const deleteIssueAPI = async (issueId) => { await simulateApiDelay(); const idx = mockIssues.findIndex(i => i.id === issueId); if (idx > -1) mockIssues.splice(idx, 1); };
const updateIssueAPI = async (updatedIssue) => { await simulateApiDelay(); const idx = mockIssues.findIndex(i => i.id === updatedIssue.id); if (idx > -1) mockIssues[idx] = { ...mockIssues[idx], ...updatedIssue }; };

const getSwimlanes = (issues, epics) =>
  epics.map(epic => {
    const epicIssues = issues.filter(i => (i.epic || i.projectId) === epic.id);
    return { id: epic.id, title: epic.name, issues: epicIssues };
  });

export default function KanbanBoard() {
  const { projectId } = useParams();
  const [issues, setIssues] = useState([]);
  const [epics, setEpics] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [openSwimlanes, setOpenSwimlanes] = useState({});
  const [customTitles, setCustomTitles] = useState({});
  const [createLaneId, setCreateLaneId] = useState(null);
  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskType, setNewTaskType] = useState('Task');
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [editIssue, setEditIssue] = useState(null);
  const [showCreateEpic, setShowCreateEpic] = useState(false);
  const [showDeleteEpic, setShowDeleteEpic] = useState(false);
  const [newEpicName, setNewEpicName] = useState('');
  const [epicToDelete, setEpicToDelete] = useState('');
  const [columnsByLane, setColumnsByLane] = useState({});
  const [columnModal, setColumnModal] = useState(null);
  const [columnInput, setColumnInput] = useState('');
  const [hoveredAssigneeId, setHoveredAssigneeId] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [activeSwimlane, setActiveSwimlane] = useState(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectNameData = projectId ? await getProjectName(projectId) : 'All Projects';
        const [issuesData, epicsData] = await Promise.all([
          listIssues(projectId),
          listEpics()
        ]);
        setIssues(issuesData);
        setEpics(epicsData);
        setProjectName(projectNameData);
        const lanes = getSwimlanes(issuesData, epicsData);
        const initialOpen = {}, initialTitles = {}, initialCols = {};
        lanes.forEach(lane => {
          initialOpen[lane.id] = true;
          initialTitles[lane.id] = lane.title;
          initialCols[lane.id] = defaultStatuses.slice();
        });
        setOpenSwimlanes(initialOpen);
        setCustomTitles(initialTitles);
        setColumnsByLane(initialCols);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [projectId]);

  const openAddColumnModal = (e, laneId, colIndex) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setModalPosition({ top: rect.bottom + window.scrollY + 8, left: rect.left + window.scrollX });
    setColumnModal({ laneId, colIndex, type: 'add' });
    setColumnInput('');
  };
  const openEditColumnModal = (e, laneId, colIndex, status) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setModalPosition({ top: rect.bottom + window.scrollY + 8, left: rect.left + window.scrollX });
    setColumnModal({ laneId, colIndex, type: 'menu' });
    setColumnInput(status);
  };
  const handleAddColumn = () => {
    const name = columnInput.trim();
    if (!name) return alert('Column name is required');
    setColumnsByLane(prev => {
      const cols = [...prev[columnModal.laneId]];
      if (cols.includes(name.toLowerCase())) alert('Column name already exists');
      else cols.splice(columnModal.colIndex + 1, 0, name.toLowerCase());
      return { ...prev, [columnModal.laneId]: cols };
    });
    setColumnModal(null);
    setColumnInput('');
  };
  const handleEditColumn = () => {
    const name = columnInput.trim();
    if (!name) return alert('Column name is required');
    const { laneId, colIndex } = columnModal;
    const oldCol = columnsByLane[laneId][colIndex];
    if (columnsByLane[laneId].includes(name.toLowerCase()) && name.toLowerCase() !== oldCol) {
      alert('Column name already exists');
      return;
    }
    setColumnsByLane(prev => {
      const cols = [...prev[laneId]];
      cols[colIndex] = name.toLowerCase();
      return { ...prev, [laneId]: cols };
    });
    const updatedIssues = issues.map(issue =>
      (issue.epic || issue.projectId) === laneId && issue.status === oldCol ? { ...issue, status: name.toLowerCase() } : issue
    );
    setIssues(updatedIssues);
    setColumnModal(null);
    setColumnInput('');
  };
  const handleDeleteColumn = () => {
    const { laneId, colIndex } = columnModal;
    const removedCol = columnsByLane[laneId][colIndex];
    setColumnsByLane(prev => {
      const cols = [...prev[laneId]];
      cols.splice(colIndex, 1);
      return { ...prev, [laneId]: cols };
    });
    const updatedIssues = issues.map(issue =>
      (issue.epic || issue.projectId) === laneId && issue.status === removedCol ? { ...issue, status: 'backlog' } : issue
    );
    setIssues(updatedIssues);
    setColumnModal(null);
    setColumnInput('');
  };
  const toggleSwimlane = (id) => setOpenSwimlanes(prev => ({ ...prev, [id]: !prev[id] }));
  const byStatus = (collection, status) => collection.filter(i => i.status === status);

  const onDragStart = (e, issueId) => e.dataTransfer.setData('text/plain', issueId);
  const onDrop = async (e, targetStatus, swimlaneId) => {
    e.preventDefault();
    try {
      const issueId = e.dataTransfer.getData('text/plain');
      const issue = issues.find(i => i.id === issueId);
      const srcLaneId = issue.epic || issue.projectId;
      if (srcLaneId === swimlaneId && issue.status !== targetStatus) {
        await moveIssue(issueId, targetStatus);
        const refreshed = await listIssues(projectId);
        setIssues(refreshed);
      }
    } catch (err) { console.error(err); }
  };
  const onDragOver = e => e.preventDefault();

  const handleCreateClick = laneId => { setCreateLaneId(laneId); setNewTaskText(''); setNewTaskType('Task'); };
  const handleCreateSubmit = async lane => {
    if (!newTaskText.trim()) { alert('Task title is required'); return; }
    const newIssue = {
      id: Math.random().toString(36).slice(2),
      epic: lane.id,
      projectId: lane.id,
      epicName: lane.title,
      title: newTaskText,
      status: 'backlog',
      assignee: '',
      type: newTaskType,
      storyPoints: '',
      labels: [],
      dueDate: '',
      reporter: 'system',
      priority: 'Medium',
      startDate: new Date().toISOString().split('T')[0],
      description: '',
      subtasks: '',
      comments: ''
    };
    try {
      await createIssueAPI(newIssue);
      const refreshed = await listIssues(projectId);
      setIssues(refreshed);
      setCreateLaneId(null);
    } catch (err) { console.error(err); }
  };

  const handleOpenModal = (issue) => { setSelectedIssue(issue); setEditIssue({ ...issue }); };
  const handleUpdateField = (field, value) => { setEditIssue(prev => ({ ...prev, [field]: value })); };
  const handleSave = async () => { await updateIssueAPI(editIssue); const refreshed = await listIssues(projectId); setIssues(refreshed); setSelectedIssue(null); setEditIssue(null); };
  const handleReset = () => { setEditIssue({ ...selectedIssue }); };

  const handleCreateEpic = async () => {
    if (!newEpicName.trim()) {
      alert('Epic name is required');
      return;
    }
    try {
      await createEpicAPI(newEpicName);
      const updatedEpics = await listEpics();
      setEpics(updatedEpics);
      setNewEpicName('');
      setShowCreateEpic(false);
      const newEpic = updatedEpics[updatedEpics.length - 1];
      setOpenSwimlanes(prev => ({ ...prev, [newEpic.id]: true }));
      setCustomTitles(prev => ({ ...prev, [newEpic.id]: newEpic.name }));
      setColumnsByLane(prev => ({ ...prev, [newEpic.id]: defaultStatuses.slice() }));
    } catch (error) {
      console.error('Error creating epic:', error);
    }
  };

  const handleDeleteEpic = async () => {
    if (!epicToDelete) {
      alert('Please select an epic to delete');
      return;
    }
    if (!window.confirm(`Are you sure you want to delete the epic "${epics.find(e => e.id === epicToDelete)?.name}"? This will also delete all issues in this epic.`)) {
      return;
    }
    try {
      await deleteEpicAPI(epicToDelete);
      const [refreshedIssues, refreshedEpics] = await Promise.all([
        listIssues(projectId),
        listEpics()
      ]);
      setIssues(refreshedIssues);
      setEpics(refreshedEpics);
      setEpicToDelete('');
      setShowDeleteEpic(false);
      setColumnsByLane(prev => {
        const copy = { ...prev };
        delete copy[epicToDelete];
        return copy;
      });
      setOpenSwimlanes(prev => {
        const copy = { ...prev };
        delete copy[epicToDelete];
        return copy;
      });
      setCustomTitles(prev => {
        const copy = { ...prev };
        delete copy[epicToDelete];
        return copy;
      });
    } catch (error) {
      console.error('Error deleting epic:', error);
    }
  };

  const toggleMobileSwimlane = (laneId) => {
    if (activeSwimlane === laneId) {
      setActiveSwimlane(null);
    } else {
      setActiveSwimlane(laneId);
    }
  };

  const swimlanes = getSwimlanes(issues, epics);

  return (
    <div className="board-wrap">
      {/* Project Name Header */}
      <div className="project-header">
        <h1 className="project-title">{projectName}</h1>
        <div className="project-stats">
          <span className="project-stat">{epics.length} Epics</span>
          <span className="project-stat">{issues.length} Issues</span>
          <span className="project-stat">
            {issues.filter(issue => issue.status === 'done').length} Completed
          </span>
        </div>
      </div>

      {isMobile && (
        <div className="mobile-swimlane-selector">
          <select
            value={activeSwimlane || ''}
            onChange={(e) => setActiveSwimlane(e.target.value || null)}
            className="mobile-select"
          >
            <option value="">All Swimlanes</option>
            {swimlanes.map(lane => (
              <option key={lane.id} value={lane.id}>{customTitles[lane.id] || lane.title}</option>
            ))}
          </select>
        </div>
      )}

      {swimlanes.map(lane => {
        const isOpen = isMobile ? (activeSwimlane === null || activeSwimlane === lane.id) : openSwimlanes[lane.id];
        const statuses = columnsByLane[lane.id] || defaultStatuses;

        if (isMobile && activeSwimlane && activeSwimlane !== lane.id) {
          return null;
        }

        return (
          <section className="swimlane" key={lane.id}>
            <header className="swimlane-header">
              {!isMobile && (
                <button className="swimlane-toggle" onClick={() => toggleSwimlane(lane.id)}>
                  {isOpen ? '▼' : '▶'}
                </button>
              )}
              <span className="swimlane-icon">⚡</span>
              <input
                className="swimlane-title-input"
                value={customTitles[lane.id] || ''}
                onChange={e => setCustomTitles(prev => ({ ...prev, [lane.id]: e.target.value }))}
              />
              <span className="swimlane-count">{lane.issues.length} work items</span>
              {isMobile && (
                <button
                  className="mobile-swimlane-toggle"
                  onClick={() => toggleMobileSwimlane(lane.id)}
                >
                  {activeSwimlane === lane.id ? '▲' : '▼'}
                </button>
              )}
            </header>
            {isOpen && (
              <div className={`kanban-row ${isMobile ? 'mobile-view' : ''}`}>
                {statuses.map((status, idx) => {
                  const issuesForStatus = byStatus(lane.issues, status);
                  return (
                    <div
                      className={`kanban-column ${isMobile ? 'mobile-column' : ''}`}
                      key={status}
                      onDragOver={onDragOver}
                      onDrop={e => onDrop(e, status, lane.id)}
                    >
                      <div className="col-header">
                        <span className="col-title">{status.toUpperCase()}</span>
                        {!isMobile && (
                          <span className="col-icons">
                            <button className="col-icon" title="Add Column" onClick={e => openAddColumnModal(e, lane.id, idx)}>＋</button>
                            <button className="col-icon" title="Edit/Delete Column" onClick={e => openEditColumnModal(e, lane.id, idx, status)}>⋮</button>
                          </span>
                        )}
                        {issuesForStatus.length > 0 && <span className="col-count">{issuesForStatus.length}</span>}
                      </div>
                      <div className="col-create">
                        {status === 'backlog' && (
                          createLaneId === lane.id ? (
                            <div className="create-card">
                              <textarea rows={2} className="create-input" placeholder="What needs to be done?" value={newTaskText} onChange={e => setNewTaskText(e.target.value)} />
                              <div className="create-actions">
                                <select value={newTaskType} onChange={e => setNewTaskType(e.target.value)} className="create-select">
                                  <option>Task</option><option>Subtask</option><option>Bug</option>
                                </select>
                                <button className="create-btn" onClick={() => handleCreateSubmit(lane)}>✔</button>
                                <button className="create-btn" onClick={() => setCreateLaneId(null)}>✖</button>
                              </div>
                            </div>
                          ) : (<span className="create-link" onClick={() => handleCreateClick(lane.id)}>+ Create</span>)
                        )}
                      </div>
                      {issuesForStatus.map(issue => {
                        const isHovered = hoveredAssigneeId === issue.id;
                        return (
                          <div className="card-item" key={issue.id} draggable onDragStart={e => onDragStart(e, issue.id)} onClick={() => handleOpenModal(issue)}>
                            <div className="card-top">
                              <span className={`card-tag card-tag-${issue.type.toLowerCase()}`}>{issue.type}</span>
                              <span className="card-id">{issue.id}</span>
                            </div>
                            <div className="card-title">{issue.title}</div>
                            <div className="card-meta">
                              {issue.dueDate && <span className="card-due">📅 {issue.dueDate}</span>}
                              <span className={`card-priority ${issue.priority.toLowerCase()}`}>⚑ {issue.priority}</span>
                              {issue.assignee && (
                                <span className="card-assignee" onMouseEnter={() => setHoveredAssigneeId(issue.id)} onMouseLeave={() => setHoveredAssigneeId(null)} style={{ position: 'relative', cursor: 'default', userSelect: 'none' }}>
                                  👤
                                  {isHovered && <div className="assignee-tooltip">{issue.assignee}</div>}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        );
      })}
      {/* Column Add/Edit modal */}
      {columnModal && (columnModal.type === 'add' || columnModal.type === 'menu') && (
        <div className="epic-modal-overlay" onClick={() => setColumnModal(null)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 }}>
          <div className="epic-modal" onClick={e => e.stopPropagation()} style={{
            position: isMobile ? 'fixed' : 'absolute',
            top: isMobile ? '50%' : modalPosition.top,
            left: isMobile ? '50%' : modalPosition.left,
            transform: isMobile ? 'translate(-50%, -50%)' : 'translateX(-50%)',
            minWidth: isMobile ? '90vw' : 280,
            maxWidth: isMobile ? '95vw' : 320,
            padding: 20,
            borderRadius: 10,
            background: 'white',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
            zIndex: 1100
          }}>
            {columnModal.type === 'add' ? (
              <>
                <h3 style={{ marginBottom: 15, fontWeight: 600, fontSize: 20, color: '#172b4d' }}>Add Column</h3>
                <input value={columnInput} onChange={e => setColumnInput(e.target.value)} placeholder="Column name" autoFocus className="epic-modal-input" style={{ width: '100%', padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #dfe1e5', marginBottom: 20, boxSizing: 'border-box' }} />
                <div className="epic-modal-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                  <button className="btn-cancel" onClick={() => setColumnModal(null)} style={btnStyle.cancel}>Cancel</button>
                  <button className="btn-create" onClick={handleAddColumn} style={btnStyle.create}>Add</button>
                </div>
              </>
            ) : (
              <>
                <h3 style={{ marginBottom: 15, fontWeight: 600, fontSize: 20, color: '#172b4d' }}>Edit/Delete Column</h3>
                <input value={columnInput} onChange={e => setColumnInput(e.target.value)} placeholder="Column name" autoFocus className="epic-modal-input" style={{ width: '100%', padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #dfe1e5', marginBottom: 20, boxSizing: 'border-box' }} />
                <div className="epic-modal-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                  <button className="btn-save" onClick={handleEditColumn} style={btnStyle.create}>Rename</button>
                  <button className="btn-delete" onClick={handleDeleteColumn} style={btnStyle.delete}>Delete</button>
                  <button className="btn-cancel" onClick={() => setColumnModal(null)} style={btnStyle.cancel}>Cancel</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {/* Issue modal */}
      {selectedIssue && editIssue && (
        <div className="modal-overlay" onClick={() => setSelectedIssue(null)}>
          <div className={`modal ${isMobile ? 'mobile-modal' : ''}`} onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editIssue.epicName}</h2>
              <button className="modal-close-btn" onClick={() => setSelectedIssue(null)}>✖</button>
            </div>
            <div className={`modal-content ${isMobile ? 'mobile-modal-content' : ''}`}>
              <div className="modal-field"><label>Title</label><input value={editIssue.title} onChange={e => handleUpdateField('title', e.target.value)} /></div>
              <div className="modal-field"><label>Description</label><textarea value={editIssue.description} onChange={e => handleUpdateField('description', e.target.value)} /></div>
              <div className="modal-field"><label>Subtasks</label><input value={editIssue.subtasks} onChange={e => handleUpdateField('subtasks', e.target.value)} /></div>
              <div className="modal-field"><label>Comments</label><textarea value={editIssue.comments} onChange={e => handleUpdateField('comments', e.target.value)} /></div>
              <div className="modal-field"><label>Status</label>
                <select value={editIssue.status} onChange={e => handleUpdateField('status', e.target.value)}>
                  {columnsByLane[editIssue.epic]?.map(st => <option key={st} value={st}>{st}</option>) || defaultStatuses.map(st => <option key={st} value={st}>{st}</option>)}
                </select>
              </div>
              <div className="modal-field"><label>Assignee</label><input value={editIssue.assignee} onChange={e => handleUpdateField('assignee', e.target.value)} /></div>
              <div className="modal-field"><label>Reporter</label><input disabled value={editIssue.reporter} /></div>
              <div className="modal-field"><label>Priority</label>
                <select value={editIssue.priority} onChange={e => handleUpdateField('priority', e.target.value)}>
                  <option>Low</option><option>Medium</option><option>High</option>
                </select>
              </div>
              <div className="modal-field"><label>Due Date</label><input type="date" value={editIssue.dueDate} onChange={e => handleUpdateField('dueDate', e.target.value)} /></div>
              <div className="modal-field"><label>Start Date</label><input type="date" value={editIssue.startDate} onChange={e => handleUpdateField('startDate', e.target.value)} /></div>
            </div>
            <div className="modal-actions" style={{ gridColumn: "span 3", alignItems: 'center' }}>
              <button className="btn-reset" onClick={handleReset}>Reset</button>
              <button className="btn-save" onClick={handleSave}>Save</button>
              <button className="modal-delete-btn" onClick={async () => {
                if (window.confirm('Delete this issue?')) {
                  await deleteIssueAPI(selectedIssue.id);
                  const refreshed = await listIssues(projectId);
                  setIssues(refreshed);
                  setSelectedIssue(null);
                }
              }}>🗑</button>
            </div>
          </div>
        </div>
      )}

      {/* Inline CSS styles */}
<style>{`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f5f6f8;
    margin: 0;
    padding: 16px;
  }
  .board-wrap {
    max-width: 100%;
    overflow-x: auto;
  }
  .project-header {
    background: white;
    border-radius: 8px;
    padding: 20px 24px;
    margin-bottom: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    border-left: 4px solid #1976d2;
  }
  .project-title {
    margin: 0 0 12px 0;
    font-size: 28px;
    font-weight: 700;
    color: #172b4d;
    line-height: 1.2;
  }
  .project-stats {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  .project-stat {
    background: #f5f6f8;
    padding: 6px 12px;
    border-radius: 16px;
    font-size: 14px;
    font-weight: 600;
    color: #5e6c84;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .project-stat:before {
    content: "•";
    color: #1976d2;
    font-weight: bold;
  }
  @media (min-width: 768px) {
    .swimlane {
      background: white;
      border-radius: 8px;
      margin-bottom: 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    .kanban-row {
      display: flex;
      padding: 16px;
      gap: 12px;
      overflow-x: auto;
    }
    .kanban-column {
      flex: 0 0 260px;
      background: #f5f6f8;
      border-radius: 6px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      border: 1px solid #dfe5e5;
      user-select: none;
      min-height: 400px;
    }
    .modal {
      background: white;
      border-radius: 8px;
      padding: 24px;
      width: 700px;
      max-height: 80vh;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 16px;
      overflow-y: auto;
      position: relative;
    }
  }
  @media (max-width: 767px) {
    body {
      padding: 8px;
    }
    .project-header {
      padding: 16px;
      margin-bottom: 16px;
      border-left-width: 3px;
    }
    .project-title {
      font-size: 22px;
      margin-bottom: 10px;
    }
    .project-stats {
      gap: 12px;
    }
    .project-stat {
      font-size: 12px;
      padding: 4px 10px;
    }
    .mobile-swimlane-selector {
      margin-bottom: 16px;
      position: sticky;
      top: 0;
      background: white;
      padding: 12px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      z-index: 100;
    }
    .mobile-select {
      width: 100%;
      padding: 12px;
      border: 1px solid #dfe5e5;
      border-radius: 6px;
      font-size: 16px;
      background: white;
    }
    .swimlane {
      background: white;
      border-radius: 8px;
      margin-bottom: 12px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    .swimlane-header {
      display: flex;
      align-items: center;
      padding: 12px;
      background: #fafbfc;
      border-bottom: 1px solid #dfe5e5;
      font-weight: 600;
      font-size: 14px;
      color: #172b4d;
      position: relative;
    }
    .mobile-swimlane-toggle {
      background: none;
      border: none;
      font-size: 16px;
      color: #5e6c84;
      margin-left: auto;
      padding: 4px 8px;
    }
    .kanban-row.mobile-view {
      display: block;
      padding: 8px;
      overflow-x: auto;
      white-space: nowrap;
    }
    .kanban-column.mobile-column {
      display: inline-block;
      vertical-align: top;
      width: 280px;
      margin-right: 8px;
      background: #f5f6f8;
      border-radius: 6px;
      padding: 8px;
      border: 1px solid #dfe5e5;
      user-select: none;
      min-height: 300px;
    }
    .col-header {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      gap: 6px;
    }
    .col-title {
      font-weight: 600;
      font-size: 11px;
      color: #5e6c84;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      flex-grow: 1;
    }
    .card-item {
      background: white;
      border-radius: 6px;
      padding: 10px;
      box-shadow: 0 0 2px rgba(0,0,0,0.1);
      cursor: pointer;
      user-select: none;
      display: flex;
      flex-direction: column;
      gap: 6px;
      border: 1px solid #dfe5e5;
      margin-bottom: 8px;
    }
    .card-title {
      font-weight: 600;
      font-size: 13px;
      color: #2b3a59;
      line-height: 1.3;
    }
    .card-meta {
      display: flex;
      gap: 6px;
      font-size: 10px;
      color: #6b7c93;
      align-items: center;
      flex-wrap: wrap;
    }
    .modal.mobile-modal {
      width: 95vw;
      max-height: 90vh;
      padding: 16px;
      display: flex;
      flex-direction: column;
    }
    .modal-content.mobile-modal-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
      overflow-y: auto;
    }
    .modal-field {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .modal-field input, .modal-field textarea, .modal-field select {
      padding: 10px;
      font-size: 16px;
    }
    .modal-actions {
      display: flex;
      gap: 8px;
      justify-content: space-between;
      margin-top: 16px;
    }
    .modal-actions button {
      flex: 1;
      padding: 12px;
      font-size: 16px;
    }
  }
  .swimlane-header {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    background: #fafbfc;
    border-bottom: 1px solid #dfe5e5;
    font-weight: 600;
    font-size: 14px;
    color: #172b4d;
  }
  .swimlane-toggle, .swimlane-icon {
    color: #5e6c84;
    margin-right: 8px;
    cursor: pointer;
  }
  .swimlane-toggle {
    border: none;
    background: transparent;
    font-size: 14px;
  }
  .swimlane-icon {
    font-size: 18px;
  }
  .swimlane-title-input {
    border: 1px solid #dfe5e5;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 14px;
    font-weight: 600;
    background: white;
    margin-right: 8px;
    min-width: 150px;
    color: #172b4d;
  }
  .swimlane-title-input:focus {
    outline: none;
    border-color: #1976d2;
  }
  .swimlane-count {
    color: #5e6c84;
    font-size: 12px;
    font-weight: normal;
  }
  .col-header {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    gap: 6px;
  }
  .col-title {
    font-weight: 600;
    font-size: 12px;
    color: #5e6c84;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    flex-grow: 1;
  }
  .col-count {
    background: #dfe5e5;
    color: #5e6c84;
    border-radius: 12px;
    padding: 2px 8px;
    font-size: 11px;
    font-weight: 600;
    min-width: 20px;
    text-align: center;
  }
  .col-icons {
    display: flex;
    gap: 6px;
  }
  .col-icon {
    cursor: pointer;
    color: #5e6c84;
    font-size: 18px;
    background: none;
    border: none;
    padding: 0;
  }
  .create-card {
    background: white;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .card-item {
    background: white;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 0 2px rgba(0,0,0,0.1);
    cursor: pointer;
    user-select: none;
    display: flex;
    flex-direction: column;
    gap: 6px;
    border: 1px solid #dfe5e5;
    transition: box-shadow 0.2s ease, border-color 0.2s ease;
  }
  .card-item:hover {
    box-shadow: 0px 2px 10px rgba(0,0,0,0.15);
    border-color: #a2adba;
  }
  .modal-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  button {
    cursor: pointer;
    transition: background-color 0.2s;
  }
  button:hover {
    opacity: 0.9;
  }
  @media (max-width: 767px) {
    button, .card-item, .col-icon {
      min-height: 44px;
      min-width: 44px;
    }
    .card-item {
      touch-action: manipulation;
    }
  }
`}</style>

    </div>
  );
}

const btnStyle = {
  cancel: {
    padding: '10px 18px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#5e6c84',
    color: 'white',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer'
  },
  create: {
    padding: '10px 18px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#1976d2',
    color: 'white',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer'
  },
  delete: {
    padding: '10px 18px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#d32f2f',
    color: 'white',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer'
  }
};









