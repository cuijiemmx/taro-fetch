function fetch(url, { method, body, headers }) {
  return new Promise(resolve => {
    wx.request({
      url,
      method,
      header: headers,
      data: body,
      dataType: 'text',
      complete: ({ statusCode, data, errMsg, header }) => {
        resolve({
          ok: statusCode >= 200 && statusCode < 300,
          status: statusCode,
          statusText: errMsg,
          headers: header,
          text: () => Promise.resolve(data)
        })
      }
    })
  })
}

export default fetch
