package com.example.acceuil;

import android.content.Intent;
import android.os.Bundle;
import android.util.Patterns;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.example.acceuil.Retrofit.API;
import com.example.acceuil.Retrofit.RegisterData;
import com.example.acceuil.Retrofit.RetrofitClient;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import org.jetbrains.annotations.NotNull;
import org.json.JSONException;
import org.json.JSONObject;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class Register extends AppCompatActivity{

    //--------------------------------------------------------------------------------------------------
        //---------  Init Interface --------------------------
        private API api;

        //---------- Init Edit Text var ---------------------------

        private EditText text_Name ;
        private EditText text_RMail ;
        private EditText text_RPassword ;

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_register);

            Toast.makeText(Register.this,"in declaration",Toast.LENGTH_LONG).show();

            //------------------ Submit Button ---------------------
            setContentView(R.layout.activity_register);
            final Button welcome = findViewById(R.id.welcomewithus);
            welcome.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {

                    //====== Declaration Var
                    text_Name = findViewById(R.id.Name);
                    text_RMail = findViewById(R.id.RMail);
                    text_RPassword = findViewById(R.id.RPassword);
                    final String mail = text_RMail.getText().toString().trim();
                    final String password = text_RPassword.getText().toString().trim();
                    final String name = text_Name.getText().toString().trim();
                    //Test Data
                    /*if (mail.isEmpty()) {
                        text_RMail.setError("Email is required");
                        text_RMail.requestFocus();
                        return;
                    }
                    if (!Patterns.EMAIL_ADDRESS.matcher(mail).matches()) {
                        text_RMail.setError("Enter a valid Email");
                        text_RMail.requestFocus();
                        return ;
                    }

                    if (password.isEmpty()) {
                        text_RPassword.setError("Password is required");
                        text_RPassword.requestFocus();
                        return;
                    }

                    if (name.isEmpty()) {
                        text_Name.setError("Name is required");
                        text_Name.requestFocus();
                        return;
                    }*/

                    //==== Init Retrofit =====
                    Gson gson = new GsonBuilder()
                            .setLenient()
                            .create();
                    Retrofit retrofit = new Retrofit.Builder()
                            //========Drop your Ip Adress=====================
                            .baseUrl("http://192.168.1.42:8080")
                            .addConverterFactory(GsonConverterFactory.create(gson))
                            .build() ;

                    api = retrofit.create(API.class);

                    //Toast.makeText(Register.this,"OnClick",Toast.LENGTH_LONG).show();
                    Toast.makeText(Register.this,name,Toast.LENGTH_LONG).show();
                    Toast.makeText(Register.this,mail,Toast.LENGTH_LONG).show();
                    Toast.makeText(Register.this,password,Toast.LENGTH_LONG).show();

                    //========= Send Request ===========
                    Call<RegisterData> call = api.createUser(name,mail,password) ;
                    call.enqueue(new Callback<RegisterData>() {

                        @Override
                        public void onResponse(@NotNull Call<RegisterData> call, @NotNull Response<RegisterData> response) {
                            Toast.makeText(Register.this,"OnResponse",Toast.LENGTH_LONG).show();
                            if(response.message().contains("Register Succes")){
                                String s = response.body().toString();
                                Toast.makeText(Register.this,s,Toast.LENGTH_LONG).show();

                            }
                        }

                        @Override
                        public void onFailure(@NotNull Call<RegisterData> call, Throwable t) {
                            Toast.makeText(Register.this,"OnFailure",Toast.LENGTH_LONG).show();
                            Toast.makeText(Register.this,t.getMessage(),Toast.LENGTH_LONG).show();
                        }
                    });

                }
            });
            
            // ----------------- Button To GO to Login Page ------------
            TextView signin = findViewById(R.id.Signupbtn);
            signin.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Toast.makeText(Register.this,"Signupbtn",Toast.LENGTH_SHORT).show();
                    startActivity(new Intent(getApplicationContext(),Login.class));
                    opensignup();
                }
            });

        }
        // --------------- Go To Login Page --------------
        public void opensignup(){
            Intent intent = new Intent(this,Login.class);
            startActivity(intent);
        }

//--------------------------------------------------------------------------------------------------

}
