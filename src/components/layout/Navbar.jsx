import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <span>Akshay</span>.OS
      </div>

      <nav>
        <ul className={styles.menu}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Experience</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <button className={styles.resumeBtn}>
        Resume
      </button>
    </header>
  );
}

export default Navbar;