/* ===================================================== */
export type tables = 'todos' 
export type fileTbls = 'images' 
/* ===================================================== */
export type firestorageFile = {
    bucket: string,/*  "asd.appspot.com", */
    contentDisposition: string,/*  "inline", */
    contentEncoding: string,/*  "identity", */
    contentType: string,/*  "image/png", */
    crc32c: string,/*  "3120007082", */
    downloadTokens: string,/*  "4c349e00-cbeb-4301-ac1d-0casda8453279a8", */
    etag: string,/*  "someETag", */
    generation: string,/*  "1629812323838542", */
    md5Hash: string,/*  "k0ht2iasdKqpCc19dADasduE8wiw==", */
    metadata: string,/*  {}, */
    metageneration: string,/*  "1", */
    name: string,/*  "images/nbahHhCG6fQMzqszWasdBYCi4ugQgpogL.jpg", */
    size: string,/*  "46055", */
    storageClass: string,/*  "STANDARD", */
    timeCreated: string /* "2021-08-24T21:20:38.541Z", */
    updated: string/* "2021-08-24T21:20:38.542Z", */
  }
  /* ===================================================== */
  export type firestoreAuthServerErr = {
    'code': 400,
    'message': 'EMAIL_NOT_FOUND',
    'errors': [
      {
        'message': 'EMAIL_NOT_FOUND',
        'reason': 'invalid',
        'domain': 'global'
      }
    ]
  }
  export type firestoreServerErr = {
    // error: {
    code: number, /* 400 | 403 */
    message: string,
    /* "Error compiling rules:↵L7:1 Unexpected 'asd232w'." 
    false for 'create' @ L16, false for 'create' @ L5
    */
    status: string,/* "INVALID_ARGUMENT" | "PERMISSION_DENIED" */
    // }
  }
  /* -------------- */
  export type fsDoc = {
    createTime: string,
    name: string,
    updateTime: string,
    fields: { [x: string]: any }
  }
  
