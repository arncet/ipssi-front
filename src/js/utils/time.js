export function Timer(callback, delay){
  let start = delay
  let remaining = delay
  let timerId = delay

  this.pause = () => {
    window.clearTimeout(timerId)
    remaining -= new Date() - start
  }

  this.resume = () => {
    start = new Date()
    window.clearTimeout(timerId)
    timerId = window.setTimeout(callback, remaining)
  }

  this.resume()
}
