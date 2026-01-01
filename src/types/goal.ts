export interface Goal {
  _id: string;
  name: string;
  category: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  notes?: string;
  type: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}
