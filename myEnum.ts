// normal declaration
const AISLE = 0
const MIDDLE = 1
const WINDOW = 2

// note: Use const to declare enums to avoid generating extra code
// enum declaration
const enum SeatType {
    AISLE,
    MIDDLE,
    WINDOW
}
const chooseSeat = SeatType.AISLE


// enum can define values
const enum type2 {
    testType = 1,
    testType2 = "testType2",
    testType3 = "123",
    testType4 = 123
}
const testType = type2.testType

