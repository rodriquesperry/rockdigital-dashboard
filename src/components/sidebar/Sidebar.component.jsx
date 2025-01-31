"use client"

import React, { useState } from 'react';
import styles from './sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul> 
        <label>HOME</label>
        <li>Dashboard</li>
        <label>CMS</label>
        <li>Posts</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Sidebar