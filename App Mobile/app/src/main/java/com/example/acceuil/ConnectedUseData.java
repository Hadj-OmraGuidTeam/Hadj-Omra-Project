package com.example.acceuil;

import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;

public class ConnectedUseData {
    @SerializedName("username")
    public  ArrayList<String> username;
    @SerializedName("question")
    public ArrayList<String> question ;
    @Override
    public String toString (){
        return "ConnectedUseData" + "username:"+username+'/'+"question:" +question;
    }

}
