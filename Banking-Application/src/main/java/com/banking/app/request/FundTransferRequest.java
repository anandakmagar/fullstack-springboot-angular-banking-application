package com.banking.app.request;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.Date;
@NoArgsConstructor
@AllArgsConstructor
@Data
public class FundTransferRequest {
    private Long fromAccount;
    private Long toAccount;
    private int amount;
}
