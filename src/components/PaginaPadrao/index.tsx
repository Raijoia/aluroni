import styles from './PaginaPadrao.module.scss';

// outlet é o children do router-dom
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}