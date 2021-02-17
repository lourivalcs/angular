export interface IUser {
    id: string,
    name: string,
    age: number,
    gender: string,
    email: string,
    address: {
        streetAddress: string,
        city: string,
        state: string
    }
}
