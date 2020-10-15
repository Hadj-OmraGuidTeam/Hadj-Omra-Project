package com.example.acceuil.Retrofit;

import com.example.acceuil.Login;
import com.example.acceuil.Register;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.POST;

public interface API {
    // For Registration Request
    @FormUrlEncoded
    @POST("registerMob")
    Call<Void> createUser(
            @Field("name") String name,
            @Field("mail") String mail,
            @Field("password") String password
    );

    // For Login Request
    @FormUrlEncoded
    @POST("loginMob")
    Call<Void> signupUser(
            @Field("mail") String mail2,
            @Field("UserPassword") String password2
    );
}
