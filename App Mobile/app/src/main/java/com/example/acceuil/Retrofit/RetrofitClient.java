package com.example.acceuil.Retrofit;

import android.app.Service;

import com.google.gson.Gson;

import retrofit2.Retrofit;
import retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.converter.scalars.ScalarsConverterFactory;

public class RetrofitClient {
    private static Service REST_CLIENT;

    static {
        setupRestClient();
    }

    public static void setupRestClient() {

        // Define gson
        Gson gson = new Gson();

        // Define our client
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.1.42:8080")
                .addConverterFactory(GsonConverterFactory.create(gson))
                .build();

        REST_CLIENT = retrofit.create(Service.class);
    }

    public static Service getRestClient() {
        return REST_CLIENT;
    }
    /* private  static Retrofit retrofit;

    public static synchronized Retrofit getInstance(){
        if (retrofit ==null)
            retrofit = new Retrofit.Builder()
                    .baseUrl("https://192.168.1.42:8080")// In Emulator , 127.0.0.1 will changed to 10/0/2/2
                    .addConverterFactory(ScalarsConverterFactory.create())
                    .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
                    .build();
             return retrofit;
    }
  /*
  private   Retrofit retrofit;
  private static RetrofitClient mInstance;

    private  RetrofitClient (){

            retrofit = new Retrofit.Builder()
                    .baseUrl("http://10.0.2.2:8080/")// In Emulator ,
                    .addConverterFactory(GsonConverterFactory.create())
                    .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
                    .build();

    }
    public static synchronized RetrofitClient getInstance(){
        if(mInstance == null)
            {mInstance = new RetrofitClient();}
        return mInstance;
    }
    public API getApi(){
        return retrofit.create(API.class);
    }*/

}
