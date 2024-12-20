'use client';

import { ActionIcon, Header as LobeHeader, TabsNav } from '@lobehub/ui';
import { ConfigProvider, Drawer, Menu, Space, theme } from 'antd';
import { useResponsive } from 'antd-style';
import { Menu as MenuIcon, MessageSquare, Settings, ShoppingBag, User, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import Logo from '@/components/Logo';
import { HeaderNavKey } from '@/layout/type';

import Avatar from './Actions/Avatar';
import CreateRole from './Actions/CreateRole';
import Documentation from './Actions/Documentation';
import Github from './Actions/Github';
import Support from './Actions/Support';

interface Props {
  headerKey?: HeaderNavKey;
}

const MobileNav = memo(
  ({
    headerKey,
    navigationItems,
    router,
    drawerVisible,
    setDrawerVisible,
  }: {
    drawerVisible: boolean;
    headerKey: HeaderNavKey;
    navigationItems: any[];
    router: any;
    setDrawerVisible: (visible: boolean) => void;
  }) => {
    const { token } = theme.useToken();

    return (
      <>
        <ActionIcon icon={MenuIcon} onClick={() => setDrawerVisible(true)} />
        <Drawer
          title={
            <Flexbox horizontal justify="space-between" align="center">
              <Logo extra={'Lobe Vidol'} size={28} />
              <ActionIcon icon={X} onClick={() => setDrawerVisible(false)} />
            </Flexbox>
          }
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          width={320}
          closeIcon={null}
          styles={{
            body: {
              padding: 0,
              backgroundColor: token.colorBgContainer,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            },
            content: { backgroundColor: token.colorBgContainer },
            header: {
              padding: '16px 24px',
              borderBottom: 'none',
              backgroundColor: token.colorBgContainer,
            },
            footer: {
              backgroundColor: token.colorBgContainer,
              padding: 16,
              borderTop: `1px solid ${token.colorBorder}`,
            },
          }}
          footer={
            <Flexbox gap={8} direction="horizontal" justify="space-between" align="center">
              <Space>
                <Documentation key="doc" />
                <Github key="github" />
                <Support key="support" />
              </Space>
              <CreateRole />
              <Avatar key="avatar" />
            </Flexbox>
          }
        >
          <ConfigProvider
            theme={{
              components: {
                Menu: {
                  itemSelectedBg: token.colorBgElevated,
                  itemSelectedColor: token.colorText,
                },
              },
            }}
          >
            <Menu
              mode="inline"
              selectedKeys={[headerKey]}
              style={{
                border: 'none',
                backgroundColor: token.colorBgContainer,
                flex: 1,
              }}
              items={navigationItems.map((item) => ({
                key: item.key,
                icon: item.icon,
                label: (
                  <Link
                    href={`/${item.key}`}
                    style={{ color: 'inherit' }}
                    onClick={() => setDrawerVisible(false)}
                  >
                    {item.component}
                  </Link>
                ),
              }))}
              onClick={({ key }) => {
                if (Object.values(HeaderNavKey).includes(key as HeaderNavKey)) {
                  router.push(`/${key}`);
                  setDrawerVisible(false);
                }
              }}
            />
          </ConfigProvider>
        </Drawer>
      </>
    );
  },
);

const Header = (props: Props) => {
  const { headerKey: propHeaderKey } = props;
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useTranslation('common');
  const { mobile } = useResponsive();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const headerKey = useMemo(() => {
    if (propHeaderKey) return propHeaderKey;
    const path = pathname.split('/')[1];
    return Object.values(HeaderNavKey).includes(path as HeaderNavKey)
      ? (path as HeaderNavKey)
      : HeaderNavKey.Chat;
  }, [propHeaderKey, pathname]);

  const navigationItems = useMemo(() => {
    return [
      {
        key: HeaderNavKey.Chat,
        icon: <MessageSquare size={18} />,
        component: t('header.chat'),
        title: t('header.chat'),
      },
      {
        key: HeaderNavKey.Role,
        icon: <User size={18} />,
        component: t('header.role'),
        title: t('header.role'),
      },
      {
        key: HeaderNavKey.Discover,
        icon: <ShoppingBag size={18} />,
        component: t('header.discover'),
        title: t('header.discover'),
      },
      {
        key: HeaderNavKey.Settings,
        icon: <Settings size={18} />,
        component: t('header.settings'),
        title: t('header.settings'),
      },
    ];
  }, [t]);

  const DesktopNav = useMemo(() => {
    return (
      <TabsNav
        activeKey={headerKey}
        items={navigationItems.map((item) => ({
          key: item.key,
          label: (
            <Link href={`/${item.key}`} style={{ color: 'inherit' }}>
              {item.component}
            </Link>
          ),
        }))}
        onChange={(key) => {
          router.push(`/${key}`);
        }}
      />
    );
  }, [headerKey, navigationItems, router]);

  return (
    <LobeHeader
      actions={[
        <Flexbox key="actions" gap={8} direction="horizontal">
          {!mobile && (
            <>
              <CreateRole key="create" />
              <Documentation key="doc" />
              <Github key="github" />
              <Support key="support" />
              <Avatar key="avatar" />
            </>
          )}
          {mobile ? (
            <MobileNav
              headerKey={headerKey}
              navigationItems={navigationItems}
              router={router}
              drawerVisible={drawerVisible}
              setDrawerVisible={setDrawerVisible}
            />
          ) : null}
        </Flexbox>,
      ]}
      logo={
        <Space>
          <Link href="/" style={{ color: 'inherit' }}>
            <Logo extra={'Lobe Vidol'} size={36} />
          </Link>
        </Space>
      }
      nav={mobile ? null : DesktopNav}
    />
  );
};

export default memo(Header);
