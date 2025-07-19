import React from 'react'
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { styles } from "./styles";

export default function Header({ email, onSignOut }) {
  return (
    <>
      <header style={styles.header}>
      <div style={styles.headerContent}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <h1>S3 File Uploader</h1>
        </div>
        <div style={styles.userInfo}>
          <span
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <FaUserCircle />
            {email}
          </span>
          <button
            onClick={onSignOut}
            style={{
              ...styles.button,
              ...styles.dangerButton,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <FaSignOutAlt />
            <span>Sign out</span>
          </button>
        </div>
      </div>
    </header>
    </>
  )
}
