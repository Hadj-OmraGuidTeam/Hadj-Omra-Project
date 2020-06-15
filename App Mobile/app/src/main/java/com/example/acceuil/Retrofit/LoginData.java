package com.example.acceuil.Retrofit;

import com.google.gson.annotations.SerializedName;

public class LoginData {
    @SerializedName("mail2")
    public String mail2 ;
    @SerializedName("password2")
    public String password2 ;
    @Override
    public String toString (){
        return "ConnectedUseData" + '/'+"Email:" + mail2;}
}
