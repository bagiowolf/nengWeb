export default function Time(time) {
  const originalDateString = time
  const originalDate = new Date(originalDateString)

  // 获取年、月、日
  const year = originalDate.getFullYear()
  const month = String(originalDate.getMonth() + 1).padStart(2, '0') // 月份是从0开始的，需要加1
  const day = String(originalDate.getDate()).padStart(2, '0')

  // 组合成新的日期字符串
  const newDateString = `${year}/${month}/${day}`

  // console.log(newDateString) // 输出 '2024/01/14'
  return newDateString
}
