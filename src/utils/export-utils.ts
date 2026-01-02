// src/utils/exports/export-utils.ts

import { format } from "date-fns";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";

export interface Transaction {
    _id?: string;
    date: string;
    type: "income" | "expense" | "transfer";
    description: string;
    amount: number;
    category?: string;
    paymentMethod: string;
    recurring: boolean;
    needOrWant?: string;
    notes?: string;
    runningBalance?: number;
}

// 📊 EXPORT TO EXCEL
export const exportToExcel = (
    transactions: Transaction[],
    filename: string = "transactions"
) => {
    try {
        const formattedData = transactions.map((tx) => ({
            Date: format(new Date(tx.date), "MMM dd, yyyy"),
            Type: tx.type.charAt(0).toUpperCase() + tx.type.slice(1),
            Description: tx.description,
            Amount: `₹${tx.amount.toLocaleString()}`,
            "Payment Method": tx.paymentMethod,
            "Recurring?": tx.recurring ? "Yes" : "No",
            "Need/Want": tx.needOrWant && tx.needOrWant !== "n/a" ? tx.needOrWant : "-",
            Notes: tx.notes || "-",
            "Running Balance": tx.runningBalance
                ? `₹${tx.runningBalance.toLocaleString()}`
                : "-",
        }));

        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");

        // ✨ Auto-fit columns
        const columnWidths = [
            { wch: 15 }, // Date
            { wch: 12 }, // Type
            { wch: 20 }, // Description
            { wch: 15 }, // Amount
            { wch: 18 }, // Payment Method
            { wch: 12 }, // Recurring
            { wch: 12 }, // Need/Want
            { wch: 20 }, // Notes
            { wch: 18 }, // Running Balance
        ];
        worksheet["!cols"] = columnWidths;

        // 📥 Download file
        XLSX.writeFile(
            workbook,
            `${filename}_${format(new Date(), "yyyy-MM-dd_HHmmss")}.xlsx`
        );

        return true;
    } catch (error) {
        console.error("Excel export error:", error);
        return false;
    }
};

// 📄 EXPORT TO PDF
export const exportToPDF = (
    transactions: Transaction[],
    filename: string = "transactions"
) => {
    try {
        const doc = new jsPDF({
            orientation: "landscape",
            unit: "mm",
            format: "a4",
        });

        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 10;

        // Title
        doc.setFontSize(16);
        doc.setTextColor(25, 118, 210); // Blue color
        doc.text("Transaction Report", margin, margin + 5);

        // Summary info
        doc.setFontSize(10);
        doc.setTextColor(80, 80, 80);
        doc.text(
            `Generated on: ${format(new Date(), "MMM dd, yyyy HH:mm:ss")}`,
            margin,
            margin + 12
        );
        doc.text(
            `Total Transactions: ${transactions.length}`,
            margin,
            margin + 17
        );

        // Calculate totals
        const income = transactions
            .filter((tx) => tx.type === "income")
            .reduce((sum, tx) => sum + tx.amount, 0);
        const expense = transactions
            .filter((tx) => tx.type === "expense")
            .reduce((sum, tx) => sum + tx.amount, 0);
        const balance = income - expense;

        doc.text(`Total Income: ₹${income.toLocaleString()}`, pageWidth - margin - 60, margin + 12);
        doc.text(`Total Expenses: ₹${expense.toLocaleString()}`, pageWidth - margin - 60, margin + 17);
        doc.text(
            `Balance: ₹${balance.toLocaleString()}`,
            pageWidth - margin - 60,
            margin + 22
        );

        // Table headers
        const headers = [
            "Date",
            "Type",
            "Description",
            "Amount",
            "Method",
            "Recurring",
            "Need/Want",
            "Notes",
            "Balance",
        ];

        const tableData = transactions.map((tx) => [
            format(new Date(tx.date), "MMM dd"),
            tx.type.charAt(0).toUpperCase() + tx.type.slice(1),
            tx.description.substring(0, 15),
            `₹${tx.amount.toLocaleString()}`,
            tx.paymentMethod,
            tx.recurring ? "Yes" : "No",
            tx.needOrWant && tx.needOrWant !== "n/a" ? tx.needOrWant : "-",
            (tx.notes || "-").substring(0, 10),
            tx.runningBalance ? `₹${tx.runningBalance.toLocaleString()}` : "-",
        ]);

        // Using autoTable for better PDF tables
        const autoTable = require("jspdf-autotable");
        autoTable.default(doc, {
            head: [headers],
            body: tableData,
            startY: margin + 30,
            margin: margin,
            didDrawPage: function (data: any) {
                // Footer with page number
                const pageSize = doc.internal.pageSize;
                const pageHeight = pageSize.getHeight();
                const pageCount = doc.internal.pages.length - 1;
                doc.setFontSize(8);
                doc.setTextColor(150, 150, 150);
                doc.text(
                    `Page ${data.pageNumber} of ${pageCount}`,
                    pageWidth / 2,
                    pageHeight - margin
                );
            },
            styles: {
                fontSize: 9,
                cellPadding: 3,
            },
            headStyles: {
                fillColor: [25, 118, 210],
                textColor: [255, 255, 255],
                fontStyle: "bold",
            },
            alternateRowStyles: {
                fillColor: [245, 245, 245],
            },
        });

        // 📥 Download PDF
        doc.save(
            `${filename}_${format(new Date(), "yyyy-MM-dd_HHmmss")}.pdf`
        );

        return true;
    } catch (error) {
        console.error("PDF export error:", error);
        return false;
    }
};

// 📋 EXPORT SUMMARY
export const generateExportSummary = (transactions: Transaction[]) => {
    const income = transactions
        .filter((tx) => tx.type === "income")
        .reduce((sum, tx) => sum + tx.amount, 0);
    const expense = transactions
        .filter((tx) => tx.type === "expense")
        .reduce((sum, tx) => sum + tx.amount, 0);

    return {
        totalTransactions: transactions.length,
        totalIncome: income,
        totalExpenses: expense,
        balance: income - expense,
        exportDate: new Date().toISOString(),
    };
};