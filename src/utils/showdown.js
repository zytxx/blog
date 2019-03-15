import showdown from 'showdown'
const converter = new showdown.Converter()

function handleMakToHtm (md) {
  const html = converter.makeHtml(md)
  return html
}
export default handleMakToHtm
