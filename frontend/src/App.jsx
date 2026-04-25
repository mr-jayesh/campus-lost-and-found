import React, { useState } from 'react';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [reportType, setReportType] = useState('lost');
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mockItems = [
    { id: 1, type: 'lost', title: 'Blue iPhone 14', category: 'Electronics', location: 'Main Library', date: 'Oct 24, 2023', status: 'open', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=300&q=80' },
    { id: 2, type: 'found', title: 'Leather Wallet', category: 'Accessories', location: 'Cafeteria', date: 'Oct 23, 2023', status: 'open', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <div className="App">
      <header>
        <div className="logo" style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Outfit' }}>
          Campus Lost & Found
        </div>
        <nav className="desktop-nav">
          <a href="#" className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>Home</a>
          <a href="#" className={activeTab === 'feed' ? 'active' : ''} onClick={() => setActiveTab('feed')}>Browse</a>
          <a href="#" className={activeTab === 'reportSelection' || activeTab === 'reportLost' || activeTab === 'reportFound' ? 'active' : ''} onClick={() => setActiveTab('reportSelection')}>Report</a>
          <a href="#" className={activeTab === 'activity' ? 'active' : ''} onClick={() => setActiveTab('activity')}>Activity</a>
          <a href="#" className={activeTab === 'login' || activeTab === 'signup' ? 'active' : ''} onClick={() => setActiveTab('login')}>Login</a>
        </nav>
      </header>

      {/* Mobile Navigation Bottom Bar */}
      <nav className="mobile-nav">
        <a href="#" className={activeTab === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}>
          <span style={{ fontSize: '1.2rem', marginBottom: '2px' }}>🏠</span>
          <span>Home</span>
        </a>
        <a href="#" className={activeTab === 'feed' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('feed'); }}>
          <span style={{ fontSize: '1.2rem', marginBottom: '2px' }}>🔍</span>
          <span>Browse</span>
        </a>
        <a href="#" className={activeTab === 'reportSelection' || activeTab === 'reportLost' || activeTab === 'reportFound' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('reportSelection'); }}>
          <span style={{ fontSize: '1.5rem', marginBottom: '0px', color: 'var(--secondary-color)' }}>➕</span>
          <span>Report</span>
        </a>
        <a href="#" className={activeTab === 'activity' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('activity'); }}>
          <span style={{ fontSize: '1.2rem', marginBottom: '2px' }}>📊</span>
          <span>Activity</span>
        </a>
        <a href="#" className={activeTab === 'login' || activeTab === 'signup' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('login'); }}>
          <span style={{ fontSize: '1.2rem', marginBottom: '2px' }}>👤</span>
          <span>Login</span>
        </a>
      </nav>

      {activeTab === 'home' && (
        <>
          <section className="hero">
            <div className="container hero-content">
              <h1>Lost Something On Campus?<br/>Let's Help You Find It</h1>
              <p>
                Searched every corner of campus? Don't stress! Post, search, or report lost and found items in minutes. Reconnect with what matters.
              </p>
              <div className="hero-actions">
                <button className="btn btn-secondary" onClick={() => setActiveTab('reportSelection')}>Report an Item</button>
                <button className="btn btn-primary" onClick={() => setActiveTab('feed')}>Browse Lost Items</button>
              </div>
            </div>
          </section>

          <section className="container" style={{ padding: '60px 20px' }}>
            <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Recent Activity</h2>
            <div className="items-grid">
              {mockItems.map(item => (
                <div key={item.id} className="card">
                  {item.image && <img src={item.image} alt={item.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px', marginBottom: '15px' }} />}
                  <span className={`badge ${item.type}`}>{item.type}</span>
                  <h3 style={{ margin: '15px 0 10px 0' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '15px' }}>
                    📍 {item.location} <br/>
                    📅 {item.date}
                  </p>
                  <button className="btn btn-primary" style={{ width: '100%' }}>View Details</button>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {activeTab === 'feed' && (
        <section className="container" style={{ padding: '40px 20px' }}>
           <h2 style={{ marginBottom: '20px' }}>Browse Items</h2>
           <div className="card" style={{ marginBottom: '20px' }}>
             <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '15px' }}>
                <input type="text" className="input-field" placeholder="What are you looking for?" style={{ margin: 0, flex: 2, minWidth: '200px' }} />
                <button className="btn btn-primary" style={{ flex: '1', minWidth: '100px', padding: '14px 20px', borderRadius: '30px' }}>Search</button>
             </div>
             <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '150px' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '500', marginBottom: '5px', display: 'block', color: 'var(--text-light)' }}>Location</label>
                  <input type="text" className="input-field" placeholder="e.g. Main Library" style={{ margin: 0, padding: '10px 15px' }} />
                </div>
                <div style={{ flex: 1, minWidth: '150px' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '500', marginBottom: '5px', display: 'block', color: 'var(--text-light)' }}>Date</label>
                  <input type="date" className="input-field" style={{ margin: 0, padding: '10px 15px', fontFamily: 'inherit' }} />
                </div>
                <div style={{ flex: 1, minWidth: '150px' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '500', marginBottom: '5px', display: 'block', color: 'var(--text-light)' }}>Time</label>
                  <input type="time" className="input-field" style={{ margin: 0, padding: '10px 15px', fontFamily: 'inherit' }} />
                </div>
             </div>
           </div>
           
           <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
             <button className="btn btn-secondary" style={{ backgroundColor: filter === 'all' ? 'var(--primary-color)' : 'transparent', color: filter === 'all' ? 'white' : 'var(--text-color)', border: '1px solid #ccc' }} onClick={() => setFilter('all')}>All Items</button>
             <button className="btn btn-secondary" style={{ backgroundColor: filter === 'lost' ? '#ffe0e0' : 'transparent', color: filter === 'lost' ? '#d32f2f' : 'var(--text-color)', border: '1px solid #ccc' }} onClick={() => setFilter('lost')}>Lost Items</button>
             <button className="btn btn-secondary" style={{ backgroundColor: filter === 'found' ? '#e0f7fa' : 'transparent', color: filter === 'found' ? '#00838f' : 'var(--text-color)', border: '1px solid #ccc' }} onClick={() => setFilter('found')}>Found Items</button>
           </div>

           <div className="items-grid">
              {mockItems.filter(item => filter === 'all' || item.type === filter).map(item => (
                <div key={item.id} className="card">
                  {item.image && <img src={item.image} alt={item.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px', marginBottom: '15px' }} />}
                  <span className={`badge ${item.type}`}>{item.type}</span>
                  <h3 style={{ margin: '15px 0 10px 0' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '15px' }}>
                    📍 {item.location} <br/>
                    📅 {item.date}
                  </p>
                  <button className="btn btn-primary" style={{ width: '100%' }}>View Details</button>
                  {item.type === 'found' && (
                    <button className="btn btn-secondary" style={{ width: '100%', marginTop: '10px', border: '1px solid #ccc' }} onClick={() => { setSelectedItem(item); setActiveTab('claimItem'); }}>Claim This Item</button>
                  )}
                </div>
              ))}
            </div>
        </section>
      )}

      {activeTab === 'login' && (
        <section className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
          <div className="card" style={{ width: '100%', maxWidth: '400px', padding: '40px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>WELCOME BACK!</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '30px' }}>Let's help you find your things</p>
            <form>
              <input type="email" placeholder="Email" className="input-field" />
              <input type="password" placeholder="Password" className="input-field" />
              <button className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>LOGIN</button>
            </form>
            <div style={{ textAlign: 'center', margin: '20px 0', position: 'relative' }}>
              <hr style={{ border: 'none', borderTop: '1px solid #ccc' }} />
              <span style={{ backgroundColor: 'white', padding: '0 10px', color: '#666', position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.9rem' }}>OR</span>
            </div>
            <button className="btn btn-secondary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', border: '1px solid #ccc' }}>
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: '20px', height: '20px' }} />
              Continue with Google
            </button>
            <button className="btn btn-secondary" style={{ width: '100%', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', border: '1px solid #ccc' }}>
              <img src="https://www.svgrepo.com/show/512008/apple-173.svg" alt="Apple" style={{ width: '20px', height: '20px' }} />
              Continue with Apple
            </button>
            <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem' }}>
              Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('signup'); }} style={{ color: 'var(--secondary-color)' }}>SignUp</a>
            </p>
          </div>
        </section>
      )}

      {activeTab === 'signup' && (
        <section className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
          <div className="card" style={{ width: '100%', maxWidth: '400px', padding: '40px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>CREATE ACCOUNT</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '30px' }}>Join the community today</p>
            <form>
              <input type="text" placeholder="Full Name" className="input-field" />
              <input type="email" placeholder="Email" className="input-field" />
              <input type="text" placeholder="Phone Number" className="input-field" />
              <input type="password" placeholder="Password" className="input-field" />
              <button className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>SIGN UP</button>
            </form>
            <div style={{ textAlign: 'center', margin: '20px 0', position: 'relative' }}>
              <hr style={{ border: 'none', borderTop: '1px solid #ccc' }} />
              <span style={{ backgroundColor: 'white', padding: '0 10px', color: '#666', position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.9rem' }}>OR</span>
            </div>
            <button className="btn btn-secondary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', border: '1px solid #ccc' }}>
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: '20px', height: '20px' }} />
              Sign up with Google
            </button>
            <button className="btn btn-secondary" style={{ width: '100%', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', border: '1px solid #ccc' }}>
              <img src="https://www.svgrepo.com/show/512008/apple-173.svg" alt="Apple" style={{ width: '20px', height: '20px' }} />
              Sign up with Apple
            </button>
            <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem' }}>
              Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('login'); }} style={{ color: 'var(--secondary-color)' }}>Login</a>
            </p>
          </div>
        </section>
      )}

      {activeTab === 'reportSelection' && (
        <section className="container" style={{ padding: '60px 20px', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>LOST & FOUND</h2>
          <p style={{ color: 'var(--text-light)', marginBottom: '40px' }}>What do you need help with today?</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div className="card" style={{ width: '100%', maxWidth: '300px', padding: '40px 20px', cursor: 'pointer', backgroundColor: '#ffe0e0', color: '#d32f2f' }} onClick={() => { setActiveTab('reportLost'); setIsSubmitted(false); }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>I Lost Something</h3>
              <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>Report a lost item and let the community help you find it.</p>
            </div>
            <div className="card" style={{ width: '100%', maxWidth: '300px', padding: '40px 20px', cursor: 'pointer', backgroundColor: '#e0f7fa', color: '#00838f' }} onClick={() => { setActiveTab('reportFound'); setIsSubmitted(false); }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>I Found Something</h3>
              <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>Help reunite a found item with its rightful owner.</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'reportLost' && (
        <section className="container" style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto' }}>
          <div className="card" style={{ padding: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <button onClick={() => setActiveTab('reportSelection')} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', marginRight: '10px' }}>←</button>
              <h2 style={{ margin: 0 }}>Report Lost Item</h2>
            </div>
            
            {isSubmitted ? (
              <div className="success-box">
                <h3 style={{ marginBottom: '10px' }}>✅ Report Submitted!</h3>
                <p>Your lost item has been successfully reported. We'll notify you if someone finds it.</p>
                <button className="btn btn-secondary" style={{ marginTop: '20px' }} onClick={() => setActiveTab('activity')}>View My Reports</button>
              </div>
            ) : (
            <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
              <label style={{ fontWeight: '500', marginBottom: '5px', display: 'block' }}>Item Name</label>
              <input type="text" placeholder="E.g., Black iPhone 14" className="input-field" required />
              
              <label style={{ fontWeight: '500', marginBottom: '5px', display: 'block' }}>Description</label>
              <textarea placeholder="Provide a brief description..." className="input-field" style={{ minHeight: '100px', borderRadius: '15px', resize: 'vertical', maxWidth: '100%' }} required></textarea>
              
              <label style={{ fontWeight: '500', marginBottom: '5px', display: 'block' }}>Location</label>
              <input type="text" placeholder="Where was it lost?" className="input-field" required />
              
              <label style={{ fontWeight: '500', marginBottom: '5px', display: 'block' }}>Upload Image (Required)</label>
              <input type="file" className="input-field" accept="image/*" style={{ padding: '10px' }} required />
              
              <label style={{ fontWeight: '500', marginBottom: '5px', display: 'block' }}>Reward (Optional)</label>
              <input type="text" placeholder="E.g., $50, Coffee, etc." className="input-field" />
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px', backgroundColor: '#d32f2f' }}>Submit Lost Report</button>
            </form>
            )}
          </div>
        </section>
      )}

      {activeTab === 'reportFound' && (
        <section className="container" style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto' }}>
          <div className="card" style={{ padding: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <button onClick={() => setActiveTab('reportSelection')} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', marginRight: '10px' }}>←</button>
              <h2 style={{ margin: 0 }}>Report Found Item</h2>
            </div>
            
            {isSubmitted ? (
              <div className="success-box">
                <h3 style={{ marginBottom: '10px' }}>✅ Report Submitted!</h3>
                <p>Thank you for reporting this found item. You're helping make the campus a better place!</p>
                <button className="btn btn-secondary" style={{ marginTop: '20px' }} onClick={() => setActiveTab('activity')}>View My Reports</button>
              </div>
            ) : (
            <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
              <label style={{ fontWeight: '500', marginBottom: '5px', display: 'block' }}>Item Name</label>
              <input type="text" placeholder="E.g., Leather Wallet" className="input-field" required />
              
              <label style={{ fontWeight: '500', marginBottom: '5px', display: 'block' }}>Description</label>
              <textarea placeholder="Provide a brief description..." className="input-field" style={{ minHeight: '100px', borderRadius: '15px', resize: 'vertical', maxWidth: '100%' }} required></textarea>
              
              <label style={{ fontWeight: '500', marginBottom: '5px', display: 'block' }}>Location</label>
              <input type="text" placeholder="Where did you find it?" className="input-field" required />
              
              <label style={{ fontWeight: '500', marginBottom: '5px', display: 'block' }}>Upload Image (Required)</label>
              <input type="file" className="input-field" accept="image/*" style={{ padding: '10px' }} required />
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px', backgroundColor: '#00838f' }}>Submit Found Report</button>
            </form>
            )}
          </div>
        </section>
      )}

      {activeTab === 'activity' && (
        <section className="container" style={{ padding: '40px 20px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>My Activity</h2>
          <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>Track your lost/found reports and claims.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>My Reports</h3>
              <div style={{ padding: '10px 0', borderBottom: '1px solid #f5f5f5' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong style={{ color: '#d32f2f' }}>Lost: Blue iPhone 14</strong>
                  <span style={{ fontSize: '0.8rem', backgroundColor: '#e0e0e0', padding: '2px 8px', borderRadius: '10px' }}>Open</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '5px' }}>Reported on Oct 24, 2023</p>
              </div>
              <div style={{ padding: '10px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong style={{ color: '#00838f' }}>Found: Keyring with Honda Key</strong>
                  <span style={{ fontSize: '0.8rem', backgroundColor: '#c8e6c9', color: '#2e7d32', padding: '2px 8px', borderRadius: '10px' }}>Resolved</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '5px' }}>Reported on Oct 10, 2023</p>
              </div>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>My Claims</h3>
              <div style={{ padding: '10px 0', borderBottom: '1px solid #f5f5f5' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong>Leather Wallet</strong>
                  <span style={{ fontSize: '0.8rem', backgroundColor: '#fff9c4', color: '#f57f17', padding: '2px 8px', borderRadius: '10px' }}>Pending Approval</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '5px' }}>Claim submitted on Oct 25, 2023</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'claimItem' && selectedItem && (
        <section className="container" style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto' }}>
          <div className="card" style={{ padding: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <button onClick={() => setActiveTab('feed')} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', marginRight: '10px' }}>←</button>
              <h2 style={{ margin: 0 }}>Claim "{selectedItem.title}"</h2>
            </div>
            
            <div style={{ backgroundColor: '#fff9c4', padding: '15px', borderRadius: '10px', marginBottom: '20px', fontSize: '0.95rem' }}>
              <strong style={{ color: '#f57f17' }}>⚠️ Verification Required</strong><br/>
              To prevent theft, please provide details only the true owner would know.
            </div>

            <form>
              <label style={{ fontWeight: '500', marginBottom: '5px', display: 'block' }}>Describe a Unique Identifier</label>
              <textarea placeholder="E.g., Lock screen wallpaper, scratches, serial number, what's inside..." className="input-field" style={{ minHeight: '100px', borderRadius: '15px', resize: 'vertical', maxWidth: '100%' }}></textarea>
              
              <label style={{ fontWeight: '500', marginBottom: '5px', display: 'block' }}>Upload Proof of Ownership (Optional)</label>
              <input type="file" className="input-field" accept="image/*" style={{ padding: '10px', marginBottom: '5px' }} />
              <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '0', marginBottom: '15px' }}>E.g., purchase receipt, original box, old photo of you with the item.</p>

              <button className="btn btn-primary" style={{ width: '100%', marginTop: '10px', backgroundColor: '#f57f17' }}>Submit Claim Request</button>
            </form>
          </div>
        </section>
      )}

    </div>
  );
}

export default App;
