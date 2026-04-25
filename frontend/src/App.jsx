import React, { useState } from 'react';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const mockItems = [
    { id: 1, type: 'lost', title: 'Blue iPhone 14', category: 'Electronics', location: 'Main Library', date: 'Oct 24, 2023', status: 'open' },
    { id: 2, type: 'found', title: 'Leather Wallet', category: 'Accessories', location: 'Cafeteria', date: 'Oct 23, 2023', status: 'open' },
  ];

  return (
    <div className="App">
      <header>
        <div className="logo" style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Outfit' }}>
          Campus Lost & Found
        </div>
        <nav className="nav-links">
          <a href="#" onClick={() => setActiveTab('home')}>Home</a>
          <a href="#" onClick={() => setActiveTab('feed')}>Browse Items</a>
          <a href="#" onClick={() => setActiveTab('create')}>Report Item</a>
          <a href="#" onClick={() => setActiveTab('login')}>Login</a>
        </nav>
      </header>

      {activeTab === 'home' && (
        <>
          <section className="hero">
            <div className="container hero-content">
              <h1>Lost Something On Campus?<br/>Let's Help You Find It</h1>
              <p>
                Searched every corner of campus? Don't stress! Post, search, or report lost and found items in minutes. Reconnect with what matters.
              </p>
              <div className="hero-actions">
                <button className="btn btn-secondary" onClick={() => setActiveTab('create')}>Report an Item</button>
                <button className="btn btn-primary" onClick={() => setActiveTab('feed')}>Browse Lost Items</button>
              </div>
            </div>
          </section>

          <section className="container" style={{ padding: '60px 20px' }}>
            <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Recent Activity</h2>
            <div className="items-grid">
              {mockItems.map(item => (
                <div key={item.id} className="card">
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
           <h2 style={{ marginBottom: '20px' }}>Browse Lost & Found</h2>
           <div className="card" style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
              <input type="text" className="input-field" placeholder="Search items..." style={{ margin: 0 }} />
              <button className="btn btn-primary">Search</button>
           </div>
           <div className="items-grid">
              {mockItems.map(item => (
                <div key={item.id} className="card">
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
            <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem' }}>
              Don't have an account? <a href="#" style={{ color: 'var(--secondary-color)' }}>SignUp</a>
            </p>
          </div>
        </section>
      )}

      {activeTab === 'create' && (
        <section className="container" style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto' }}>
          <div className="card" style={{ padding: '30px' }}>
            <h2 style={{ marginBottom: '20px' }}>Report an Item</h2>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <button className="btn btn-secondary" style={{ flex: 1, backgroundColor: '#ffe0e0', color: '#d32f2f' }}>I Lost Something</button>
              <button className="btn btn-secondary" style={{ flex: 1, backgroundColor: '#e0f7fa', color: '#00838f' }}>I Found Something</button>
            </div>
            <form>
              <label style={{ fontWeight: '500', marginBottom: '5px', display: 'block' }}>Item Name</label>
              <input type="text" placeholder="E.g., Black iPhone 14" className="input-field" />
              
              <label style={{ fontWeight: '500', marginBottom: '5px', display: 'block' }}>Description</label>
              <textarea placeholder="Provide a brief description..." className="input-field" style={{ minHeight: '100px', borderRadius: '15px' }}></textarea>
              
              <label style={{ fontWeight: '500', marginBottom: '5px', display: 'block' }}>Location</label>
              <input type="text" placeholder="Where was it lost/found?" className="input-field" />
              
              <button className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>Submit Report</button>
            </form>
          </div>
        </section>
      )}

    </div>
  );
}

export default App;
