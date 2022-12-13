import { useContext } from 'react';

import AppContext from '../context';

export const useEmojis = () => {
  const { emojis } = useContext(AppContext);
  console.log(emojis);
  const emojiIndex = Math.floor(Math.random() * emojis.length);
  return emojis[emojiIndex].character;
};
