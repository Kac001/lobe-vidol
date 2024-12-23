import { ReactNode, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import AppLayout from '@/layout/AppLayout';

export interface LayoutProps {
  children?: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <AppLayout>
      <Flexbox flex={1} height={'100%'} width={'100%'} style={{ position: 'relative' }} horizontal>
        <Flexbox align={'center'} flex={1} style={{ overflow: 'scroll' }}>
          {children}
        </Flexbox>
      </Flexbox>
    </AppLayout>
  );
};

export default memo(Layout);
