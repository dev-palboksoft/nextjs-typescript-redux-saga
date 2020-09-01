import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';

import Layout from '../components/layout/Layout';

import { startClock, tickClock } from '../actions/actExample';
import Page from '../components/page';
import { wrapper } from '../store';

const Other: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startClock());
  });

  return (
    <Layout title="Other Page">
      <Page title="Other Page" />
    </Layout>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(tickClock(true));
});

export default Other;
