export async function getAudioFromPostId(postId: string) {
    return await fetch(`https://api.wavetech.ai/v1/post/${postId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }).then(res => res.json())
}


export async function getAudioChunks(key: string) {
  return await fetch(`https://api.wavetech.ai/v1/bucket/${key}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }).then(res => res.json())
}