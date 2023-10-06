export interface IEvent {
  id: string;
  title: string;
  date: string;
  completed: boolean;
}

export type TPartialEvent = Partial<IEvent>;

export interface IEventCreate {
  id: string;
  title: string;
  date: string;
  completed: boolean;
}
