package com.deeksha.corpify.dto.request;
import com.deeksha.corpify.enums.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRequest {
  private String name;
    private String email;
    private String password;
    private String phone;
    private Role role;
}
