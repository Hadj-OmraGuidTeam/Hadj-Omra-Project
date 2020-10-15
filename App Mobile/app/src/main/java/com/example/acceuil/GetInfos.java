package com.example.acceuil;


import java.util.HashMap;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.Field;
import retrofit2.http.GET;

import retrofit2.http.POST;

public interface GetInfos {
    @POST("/question")
    Call<com.example.acceuil.ConnectedUseData> executeQuestion(@Body HashMap<String, String> map);
}
