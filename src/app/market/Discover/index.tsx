'use client';

import { createStyles } from 'antd-style';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import TopBanner from '@/components/TopBanner';

import DiscoverList from './List';
import MarketInfo from './MarketInfo';

const useStyles = createStyles(({ css }) => ({
  container: css`
    overflow-y: auto;

    width: 100%;
    height: 100%;
    min-height: 500px;
    padding: 0 32px;

    @media screen and (max-width: 768px) {
      padding: 0 16px;
    }
  `,
  content: css`
    max-width: 1280px;
    margin: 0 auto;
  `,
  title: css`
    z-index: 2;
    margin-top: 24px;
    font-size: 36px;
    font-weight: 800;
  `,
}));

const Agent = () => {
  const { styles } = useStyles();
  const { t } = useTranslation('market');

  return (
    <Flexbox flex={1} height={'100%'} width={'100%'} horizontal>
      <div className={styles.container}>
        <div className={styles.content}>
          <TopBanner title={t('findVidol')} />
          <DiscoverList />
        </div>
      </div>
      <MarketInfo />
    </Flexbox>
  );
};

export default Agent;
