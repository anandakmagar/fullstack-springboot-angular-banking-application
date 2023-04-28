package com.banking.app.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class FundDepositRequest {
    private Long inAccount;
    private int amount;
}
