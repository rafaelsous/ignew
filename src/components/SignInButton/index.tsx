import { useState } from 'react';
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss';

export function SignInButton() {
  const [isLogged, setIsLogged] = useState(true);

  return isLogged ? (
    <button className={styles.signInButton}>
      <FaGithub color="#04D361" />
      Rafael Sousa
      <FiX color="#737380" />
    </button>
  ) : (
    <button className={styles.signInButton}>
      <FaGithub color="#EBA417" />
      Sign in with Github
    </button>
  );
};
