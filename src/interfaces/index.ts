export interface IProducts {
  id?: number,
  name: string,
  amount: string,
}

export interface IUser {
  id?: number,
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface IOrder {
  id?: number,
  userId: number,
}

export interface ILogin {
  id?: number,
  username: string,
  password: string,
}
