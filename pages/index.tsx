import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';
import { END } from 'redux-saga';

import Layout from '../components/layout/Layout';

import { loadData, startClock, tickClock } from '../actions/actExample';
import Page from '../components/page';
import { wrapper } from '../store';

const Index: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startClock());
  });

  return (
    <Layout title="Index Page">
      <Page title="Index Page" />
    </Layout>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(tickClock(true));

  if (!store.getState().rdcExample.placeholderData) {
    store.dispatch(loadData());
    store.dispatch(END);
  }
  await store.sagaTask?.toPromise();
});

export default Index;
