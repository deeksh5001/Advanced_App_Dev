package com.deeksha.corpify.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EventRequest {
    private String eventType;
    private String description;
    private int count;
    private String mode;
    private int price;
}
