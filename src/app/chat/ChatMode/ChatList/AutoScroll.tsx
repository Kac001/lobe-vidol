import { memo, useEffect } from 'react';

import { sessionSelectors, useSessionStore } from '@/store/session';

import BackBottom from './BackBottom';

interface AutoScrollProps {
  atBottom: boolean;
  isScrolling: boolean;
  onScrollToBottom: (type: 'auto' | 'click') => void;
}
const AutoScroll = memo<AutoScrollProps>(({ atBottom, isScrolling, onScrollToBottom }) => {
  const trackVisibility = useSessionStore((s) => !!s.chatLoadingId);
  const str = useSessionStore(sessionSelectors.currentChatsString);

  useEffect(() => {
    if (atBottom && trackVisibility && !isScrolling) {
      onScrollToBottom?.('auto');
    }
  }, [atBottom, trackVisibility, str]);

  return <BackBottom onScrollToBottom={() => onScrollToBottom('click')} visible={!atBottom} />;
});

export default AutoScroll;
