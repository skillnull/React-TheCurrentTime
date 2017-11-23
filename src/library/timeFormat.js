const REGEX = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/
export default (val, format) => {
    if (val != undefined) {
        // 如果不是时间戳格式，且含有字符 '-' 则将 '-' 替换成 '/'
        // 将 '-' 替换成 '/' 的原因是safari浏览器仅支持 '/' 隔开的时间格式
        if (val.toString().indexOf('-') > 0) {
            val = val.toString().replace(/-/g, '/')
        }
    }
    let date = new Date(val)
    if (!date.getTime()) return '--'
    date.setHours(date.getHours() + 8)
    const [whole, YYYY, MM, DD, hh, mm, ss] = date.toISOString().match(REGEX)
    return format
        .replace('whole', whole)
        .replace('YYYY', YYYY)
        .replace('MM', MM)
        .replace('DD', DD)
        .replace('hh', hh)
        .replace('mm', mm)
        .replace('ss', ss)
}