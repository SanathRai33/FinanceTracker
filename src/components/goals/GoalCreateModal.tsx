// src/components/goals/GoalCreateModal.tsx
"use client";

import { useState } from "react";
import { useAddSavingsGoal } from "@/src/hooks/useSavingsGoals";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function GoalCreateModal({ isOpen, onClose }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    category: "personal",
    targetAmount: 0,
    deadline: "",
    notes: "",
    type: "minor goal"
  });
  const addGoal = useAddSavingsGoal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addGoal.mutate(formData, {
      onSuccess: () => {
        setFormData({ name: "", category: "personal", targetAmount: 0, deadline: "", notes: "", type: "minor goal" });
        onClose();
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 text-black bg-gray-50 dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="flex items-center justify-between">
            Create New Goal
            {/* <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button> */}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Goal Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., Emergency Fund, New Laptop"
              required
              className="text-gray-700 bg-white border-gray-300 dark:bg-[#1e1f20] dark:border-slate-600 dark:text-white/40"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
              <SelectTrigger className="text-gray-700 bg-white border-gray-300 dark:bg-[#1e1f20] dark:border-slate-600 dark:text-white/40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="personal">Personal</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="vehicle">Vehicle</SelectItem>
                <SelectItem value="investment">Investment</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 space-y-2">
          <Label htmlFor="type">Type</Label>
            <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
              <SelectTrigger className="text-gray-700 bg-white border-gray-300 dark:bg-[#1e1f20] dark:border-slate-600 dark:text-white/40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="minor goal">Minor Goal</SelectItem>
                <SelectItem value="major goal">Major Goal</SelectItem>
              </SelectContent>
            </Select>
          </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="targetAmount">Target Amount</Label>
              <Input
                id="targetAmount"
                type="number"
                value={formData.targetAmount}
                onChange={(e) => setFormData({ ...formData, targetAmount: Number(e.target.value) })}
                placeholder="₹50,000"
                required
                className="text-gray-700 bg-white border-gray-300 dark:bg-[#1e1f20] dark:border-slate-600 dark:text-white/40"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="deadline">Target Date</Label>
              <Input
                id="deadline"
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                required
                className="text-gray-700 bg-white border-gray-300 dark:bg-[#1e1f20] dark:border-slate-600 dark:text-white/40"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Input
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Additional notes..."
              className="text-gray-700 bg-white border-gray-300 dark:bg-[#1e1f20] dark:border-slate-600 dark:text-white/40"
            />
          </div>

          <Button type="submit" className="w-full cursor-pointer bg-emerald-600 hover:bg-emerald-700">
            Create Goal
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
