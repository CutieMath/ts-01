// declare interface
interface User {
    readonly dbId: number
    userId: number
    googleId?: string
    email: string
    // startTrail: () => string // alt way
    startTrail(): string
    getCoupon(couponName: string, value: number): number
}

// use interface
const cutie: User = {
    dbId: 1,
    userId: 1,
    email: "test@email.com",
    startTrail: () => { 
        return "trail started"
    },
    getCoupon:(name: "coupon1", off: 2) => {
        return 1
    },
    // add the expanded version
    githubToken: "123"
}

// extend existing interface
interface User {
    githubToken: string
}

// inherit interface
interface Admin extends User {
    role: string
}
const cutie2: Admin = {
    dbId: 1,
    userId: 1,
    email: "123",
    startTrail: () => {
        return "123"
    },
    getCoupon: (name: "123", off: 1) => {
        return 1
    },
    role: "123",
    githubToken: "123"
}