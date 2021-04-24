import axios from 'axios';

export async function getAudioFromPostId(postId: string) {
    return await axios.get(`https://api.wavetech.ai/v1/post/${postId}`)
}


export async function getAudioChunks(key: string) {
  return await axios.get(`https://api.wavetech.ai/v1/bucket/${key}`)
}