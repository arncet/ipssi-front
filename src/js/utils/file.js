export const dowloadCSV = (data, fileName) => {
  let csvContent = 'data:text/csv;charset=utf-8,'
  data.forEach((infoArray, index) => {
    const dataString = infoArray.join(",")
    csvContent += index < data.length ? dataString + '\n' : dataString
  })

  var encodedUri = encodeURI(csvContent)
  var link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', `${fileName}.csv`)
  document.body.appendChild(link) // Required for FF
  link.click()
}
