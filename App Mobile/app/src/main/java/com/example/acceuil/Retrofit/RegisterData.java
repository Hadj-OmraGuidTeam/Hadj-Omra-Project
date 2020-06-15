package com.example.acceuil.Retrofit;

import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;

public class RegisterData {
    @SerializedName("name")
    public String name;
    @SerializedName("mail")
    public String mail ;
    @SerializedName("password")
    public String password ;
    @Override
    public String toString (){
        return "ConnectedUseData" + "Name:"+name+'/'+"Email:" +mail;
    }

}
