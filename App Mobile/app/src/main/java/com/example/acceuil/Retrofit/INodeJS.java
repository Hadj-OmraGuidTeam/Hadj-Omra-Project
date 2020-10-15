package com.example.acceuil.Retrofit;

import io.reactivex.Observable;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.POST;

public interface INodeJS {
    @POST("/registerMob")
    @FormUrlEncoded
    Observable<String> registerUser (@Field("mail") String mail,
                                     @Field("name") String name,
                                     @Field("password") String password
                                     );
    @POST("/loginMob")
    @FormUrlEncoded
    Observable<String> loginUser (@Field("mail") String mail2,
                                     @Field("UserPassword") String password2
                                     );


}
