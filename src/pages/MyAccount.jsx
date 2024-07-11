import React from 'react'
import Header from '../components/Header';
import { Footer } from '../components/Footer';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    flex: '0 0 auto',
  },
  content: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  footer: {
    flex: '0 0 auto',
  },
};

export const MyAccount = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Header />
      </div>
      <div style={styles.content}>
        
      </div>
      <div style={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

