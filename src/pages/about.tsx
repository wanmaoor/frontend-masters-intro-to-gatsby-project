import * as React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';

const About = () => {
  return (
    <>
      <Header title={'关于我们'} />
      <main> this is about page</main>
      <Link to={'/'} >返回首页</Link>
    </>
);
}

export default About

