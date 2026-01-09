// app/transactions/page.tsx

"use client";

import { Suspense } from "react";
import TransactionLoader from "@/src/loader/TransactionsLoader";
import TransactionsPageContent from "./TransactionsPageContent";

export default function TransactionsPage() {
  return (
    <Suspense fallback={<TransactionLoader />}>
      <TransactionsPageContent />
    </Suspense>
  );
}
