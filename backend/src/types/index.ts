export interface Event {
  id: number;
  title: string;
  date: string;
  completed: boolean;
}

export interface CreateEvent {
  title: string;
  date: string;
}

export interface Task {
  tasks: Event[];
}
