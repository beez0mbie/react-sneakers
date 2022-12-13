import { useContext } from 'react';

import AppContext from '../context';

export const useEmojis = () => {
  const { emojis } = useContext(AppContext);
  if (emojis.length === 0) return;
  const emojiIndex = Math.floor(Math.random() * emojis.length);
  return emojis[emojiIndex].character;
};
