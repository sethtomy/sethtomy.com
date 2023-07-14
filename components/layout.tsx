import LayoutHeader from "./layout-header";
import LayoutBody from "./layout-body";
import styles from '../styles/utils.module.css';
import Link from "next/link";

export default function Layout({ children, home }) {
  return (
    <div>
      <LayoutHeader />
      <div className={styles.sidebar}>
        <Link href="/"> About Me </Link>
        <Link href="/posts/first-post"> Blog </Link>
        <Link href="/"> Projects </Link>
      </div>
      <LayoutBody children={children} home={home} />
    </div>
  );
}
