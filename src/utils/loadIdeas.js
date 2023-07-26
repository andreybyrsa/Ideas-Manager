const loadData = async () => {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 1000)

    // throw new Error()
  }).then((value) => value)

  return { data: '"new Data" - загруженная при загрузке странице' }
}

export default loadData
