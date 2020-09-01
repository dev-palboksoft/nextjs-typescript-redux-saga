import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { RootStateInterface } from '../interfaces/ifRootState';
import stylesExample from './css/example.module.css';
import Counter from './counter';
import Clock from './clock';
import List from './list';
import ApiCall from './apiCall';

interface PageProps {
  title: string;
}

const selectData = createSelector(
  (state: RootStateInterface) => state.rdcExample.error,
  (state: RootStateInterface) => state.rdcExample.lastUpdate,
  (state: RootStateInterface) => state.rdcExample.light,
  (state: RootStateInterface) => state.rdcExample.placeholderData,
  (error, lastUpdate, light, placeholderData) => ({ error, lastUpdate, light, placeholderData }),
);

const Page: React.FC<PageProps> = ({ title }: PageProps) => {
  const { error, lastUpdate, light, placeholderData } = useSelector(selectData);

  return (
    <div>
      <h1>{title}</h1>
      <div className={stylesExample.exampleBox}>
        <h3># redux를 이용한 카운트 샘플</h3>
        <Counter />
      </div>
      <div className={stylesExample.exampleBox}>
        <h3># redux-saga delay 1 초 샘플</h3>
        <Clock lastUpdate={lastUpdate} light={light} />
      </div>
      <div className={stylesExample.exampleBox}>
        <h3># API Requst 샘플</h3>
        <ApiCall />
      </div>
      <div className={stylesExample.exampleBox}>
        <h3># getStaticProps 에서 API Requst 샘플</h3>
        {placeholderData &&
          placeholderData.map((v, k) => {
            return <List key={`list-${k}`} data={v} />;
          })}
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      </div>
    </div>
  );
};

export default Page;
