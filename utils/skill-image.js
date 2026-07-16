import aws from '../app/assets/svg/skills/aws.svg';
import css from '../app/assets/svg/skills/css.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import firebase from '../app/assets/svg/skills/firebase.svg';
import git from '../app/assets/svg/skills/git.svg';
import html from '../app/assets/svg/skills/html.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import materialui from '../app/assets/svg/skills/materialui.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import nginx from '../app/assets/svg/skills/nginx.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import python from '../app/assets/svg/skills/python.svg';
import react from '../app/assets/svg/skills/react.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import linux from '../app/assets/svg/skills/linux.svg';
import nodeJS from '../app/assets/svg/skills/nodeJS.svg';
import jenkins from '../app/assets/svg/skills/jenkins.svg';
import terraform from '../app/assets/svg/skills/terraform.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'docker':
      return docker;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'python':
      return python;
    case 'aws':
      return aws;
    case 'firebase':
      return firebase;
    case 'git':
      return git;
    case 'materialui':
      return materialui;
    case 'nginx':
      return nginx;
    case 'linux':
      return linux;
    case 'node js':
      return nodeJS;
    case 'jenkins':
      return jenkins;
    case 'terraform':
      return terraform;
    default:
      break;
  }
}
