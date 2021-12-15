import axios from 'axios';
import { baseURL } from '../../utils';

export const getMentionlyticsApi = async (commtracks: string) => {
  const res = await axios.post(`${baseURL}/social-media`, {
    commtracks,
    targetAmount: 100000
  });

  let success = res?.data.success;

  if (success) {
    const data = res?.data.data;

    return data;
  } else {
    return null;
  }
};
