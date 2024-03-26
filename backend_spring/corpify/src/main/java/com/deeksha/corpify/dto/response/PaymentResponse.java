package com.deeksha.corpify.dto.response;
import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;


@Data
@Builder
@AllArgsConstructor

public class PaymentResponse {
    private Long pid;
    private String pStatus;
    private Date pDate;
    private String pMode;
}
