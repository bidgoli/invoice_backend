type Status = "Open" | "Paid" | "Outstanding";

export type Invoice = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  price: number;
  description: string;
  creationDate: Date;
  dueDate: Date;
  status: Status;
};
