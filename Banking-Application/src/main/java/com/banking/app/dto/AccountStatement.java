package com.banking.app.dto;

import com.banking.app.model.Transaction;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AccountStatement {
    private int currentBalance;
    private String customerName;
    private List<Transaction> transactions;
}
