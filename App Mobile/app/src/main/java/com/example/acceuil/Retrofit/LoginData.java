package com.example.acceuil.Retrofit;

import com.google.gson.annotations.SerializedName;

public class LoginData {
    @SerializedName("mail")
    public String mail2 ;
    @SerializedName("UserPassword")
    public String password2 ;
    @Override
    public String toString (){
        return "ConnectedUseData" + '/'+"Email:" + mail2;}
}
