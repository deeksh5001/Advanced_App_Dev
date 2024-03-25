package com.deeksha.corpify.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EventResponse {
    private Long eid;
    private String eventType;
    private String description;
    private int count;
    private String mode;
    private int price;
}
