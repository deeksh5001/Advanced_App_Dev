package com.deeksha.corpify.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@AllArgsConstructor
@Data
public class LoginResponse {
    @Builder.Default
    private String accessToken="";

}
