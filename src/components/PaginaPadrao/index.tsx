import styles from './PaginaPadrao.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import React from 'react';

// outlet é o children do router-dom
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}