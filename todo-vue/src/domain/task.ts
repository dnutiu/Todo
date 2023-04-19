export interface ITask {
  id: number
  title: string
  createdDateMs: number
  subtitle: string
  isDone: boolean
}

export class Task implements ITask {
  private _id: number
  private _title: string
  private _createdDateMs: number
  private _subtitle: string
  private _isDone: boolean

  constructor(title: string) {
    this._id = 0
    this._title = title
    this._isDone = false
    this._subtitle = ""
    this._createdDateMs = new Date().getTime()
  }

  public get id(): number {
    return this._id
  }

  public set id(value: number) {
    this._id = value
  }

  public get title(): string {
    return this._title
  }

  public set title(value: string) {
    this._title = value
  }

  public get createdDateMs(): number {
    return this._createdDateMs
  }

  public set createdDateMs(value: number) {
    this._createdDateMs = value
  }

  public get subtitle(): string {
    return this._subtitle
  }

  public set subtitle(value: string) {
    this._subtitle = value
  }

  public get isDone(): boolean {
    return this._isDone
  }

  public set isDone(value: boolean) {
    this._isDone = value
  }
}
