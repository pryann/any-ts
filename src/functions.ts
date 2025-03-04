function addDiscount(price: number, discount: number): number {
  return price - price * discount
}

console.log(addDiscount(100, 0.1)) // 90;

function logCurrentDate(): void {
  console.log(new Date())
}

logCurrentDate() // 2021-09-01T12:00:00.000Z

function promiseReturner(): Promise<string> {
  return new Promise((resolve) => {
    resolve('Hello, World!')
  })
}

function logId(id: number | string): void {
  console.log(id)
}

function calculateGrossPrice(netPrice: number, taxPercent: number = 27, discountPercent?: number): number {
  return netPrice * (1 + taxPercent / 100) * (1 - (discountPercent ?? 0) / 100)
}

function operateWithCallback(a: number, b: number, callback: (result: number) => void): void {
  console.log(callback(a + b))
}
const callback = (result) => result * 2
operateWithCallback(1, 2, callback)
