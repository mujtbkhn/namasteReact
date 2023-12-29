import { sum } from "../sum"

test("sum function should return the sum of two numbers", ()=> {
    const result = sum(5,3)

    //assertion
    expect(result).toBe(8)
})