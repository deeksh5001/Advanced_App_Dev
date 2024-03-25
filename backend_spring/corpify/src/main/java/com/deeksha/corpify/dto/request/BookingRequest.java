package com.deeksha.corpify.dto.request;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequest {
  private Date submissionDate;
    private Date eventDate;
    private String status;
    private int headCount;
}
