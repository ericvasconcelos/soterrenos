import axios from 'axios';

import { API_URL } from '@/envs';

export const uploadImages = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);

    const { data } = await axios.post(
      API_URL + '/upload-images/new',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
