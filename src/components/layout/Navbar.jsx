import styles from "./Navbar.module.css";

const navItems = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <span>Akshay</span>.OS
      </div>

      <nav>
        <ul className={styles.menu}>
          {navItems.map((item) => (
            <li key={item.title}>
              <a href={item.href}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button className={styles.resumeBtn}>
        Resume
      </button>
    </header>
  );
}

export default Navbar;