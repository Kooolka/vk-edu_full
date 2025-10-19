/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Округление, максимум,
 * до 2 знаков после запятой, исключая нули.
 *  Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * `convertBytesToHuman(1610612736) === '1.5 GB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа).
 * В случае передачи неподходящего аргумента,
 * функция должна вернуть false.
 */

export default function convertBytesToHuman(bytes) {
  const b = bytes
  const kb = bytes/2 ** 10
  const mb = bytes/2 ** 20
  const gb = bytes/2 ** 30
  const tb = bytes/2 ** 40
  const pb = bytes/2 ** 50
  const eb = bytes/2 ** 60
  const ib = bytes/2 ** 70
  if (bytes >= 0 && bytes !== toString(bytes) && 0 == (bytes % 1) && bytes >= 0) {
    if (b < 1024) {
      return b + 'B'
    } else if (kb < 1024) {
      return (kb.toFixed(2)) + ' KB'
    } else if (mb < 1024){
      return (mb.toFixed(2)) + ' MB'
    } else if (gb < 1024) {
      return (gb.toFixed(2)) + ' GB'
    } else if (tb < 1024) {
      return (tb.toFixed(2)) + ' PB'
    } else if (pb < 1024) {
      return (pb.toFixed(2)) + ' PB'
    } else if (eb < 1024) {
      return (eb.toFixed(2)) + ' EB'
    }else if (ib < 1024) {
      return (ib.toFixed(2)) + ' IB'
    }
  } else {
    return false
  }
}
console.log(convertBytesToHuman("fvw"));