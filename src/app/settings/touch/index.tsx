import { createStyles } from 'antd-style';
import classNames from 'classnames';
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useIsMobile } from '@/hooks/useIsMobile';
import { TouchAreaEnum } from '@/types/touch';

import ActionList from './ActionList';
import SideBar from './SideBar';

const useStyles = createStyles(({ css, token, responsive }) => ({
  container: css`
    position: relative;

    display: flex;

    width: 100%;
    min-height: 480px;
    padding: 0 16px;

    background-color: rgba(255, 255, 255, 2%);
    border-radius: ${token.borderRadius}px;

    ${responsive.mobile} {
      flex-direction: column;
      min-height: auto;
    }
  `,
}));

interface TouchProps {
  className?: string;
  style?: React.CSSProperties;
}

const Touch = (props: TouchProps) => {
  const { style, className } = props;
  const { styles } = useStyles();
  const [currentTouchArea, setCurrentTouchArea] = useState<TouchAreaEnum>(TouchAreaEnum.Head);

  const { t } = useTranslation('role');

  const TOUCH_AREA_OPTIONS = [
    {
      label: t('touch.area.head', { ns: 'role' }),
      value: TouchAreaEnum.Head,
    },
    {
      label: t('touch.area.arm', { ns: 'role' }),
      value: TouchAreaEnum.Arm,
    },
    {
      label: t('touch.area.leg', { ns: 'role' }),
      value: TouchAreaEnum.Leg,
    },
    {
      label: t('touch.area.chest', { ns: 'role' }),
      value: TouchAreaEnum.Chest,
    },
    {
      label: t('touch.area.belly', { ns: 'role' }),
      value: TouchAreaEnum.Belly,
    },
    {
      label: t('touch.area.buttocks', { ns: 'role' }),
      value: TouchAreaEnum.Buttocks,
    },
  ];

  const isMobile = useIsMobile();

  return (
    <div className={classNames(className, styles.container)} style={style}>
      <SideBar
        currentTouchArea={currentTouchArea}
        setCurrentTouchArea={setCurrentTouchArea}
        areaOptions={TOUCH_AREA_OPTIONS}
      />
      <ActionList
        currentTouchArea={currentTouchArea}
        style={{ marginLeft: isMobile ? 0 : 12, marginTop: isMobile ? 12 : 0 }}
        areaOptions={TOUCH_AREA_OPTIONS}
      />
    </div>
  );
};

export default memo(Touch);
