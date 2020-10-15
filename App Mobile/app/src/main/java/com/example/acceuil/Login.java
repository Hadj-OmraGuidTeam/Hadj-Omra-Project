package com.example.acceuil;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.util.Patterns;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.acceuil.Retrofit.API;
import com.example.acceuil.Retrofit.INodeJS;
import com.example.acceuil.Retrofit.LoginData;
import com.example.acceuil.Retrofit.RegisterData;
import com.example.acceuil.Retrofit.RetrofitClient;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import org.jetbrains.annotations.NotNull;

import java.io.IOException;

import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.disposables.CompositeDisposable;
import io.reactivex.functions.Consumer;
import io.reactivex.schedulers.Schedulers;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class Login extends AppCompatActivity {
    // ==== Init Interface
    private API api;
    // ===== Init EditText var
    private EditText text_Mail;
    private EditText text_Password;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
//--------------------------------------------------------------------------------------------------
        Toast.makeText(Login.this,"in declaration part",Toast.LENGTH_LONG).show();

        //------------  Connect Button (Submit) -------------------------
        setContentView(R.layout.activity_login);
        final Button joinus = findViewById(R.id.joinus);
        joinus.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                //====== Convertion Input To String =======
                text_Mail = findViewById(R.id.Mail);
                text_Password = findViewById(R.id.Password);
                final String mail = text_Mail.getText().toString().trim();
                final String password = text_Password.getText().toString().trim();

                Toast.makeText(Login.this,"In onClick",Toast.LENGTH_LONG).show();

                Gson gson = new GsonBuilder()
                        .setLenient()
                        .create();

                //======== Init Retrofit
                Retrofit retrofit = new Retrofit.Builder()
                        //========Drop your Ip Adress=====================
                        .baseUrl("http://192.168.43.83:8080/")
                        .addConverterFactory(GsonConverterFactory.create(gson))
                        .build() ;

                api = retrofit.create(API.class);

                //====== Send Request
                Call<Void> call = api.signupUser(mail,password) ;
                Toast.makeText(Login.this,"After call enqueue",Toast.LENGTH_LONG).show();
                call.enqueue(new Callback<Void>() {
                    @Override
                    public void onResponse(@NotNull Call<Void> call, @NotNull Response<Void> response) {
                        Toast.makeText(Login.this,"before test onres",Toast.LENGTH_LONG).show();

                        if (response.isSuccessful()) {
                            // tasks available
                            Toast.makeText(Login.this,"In onResponse",Toast.LENGTH_LONG).show();

                                Toast.makeText(Login.this, "Login Success", Toast.LENGTH_LONG).show();
                                startActivity(new Intent(getApplicationContext(), MainActivity.class));

                        } else {
                            // error response, no access to resource?
                            Toast.makeText(Login.this,"In onResponse error response",Toast.LENGTH_LONG).show();
                        }

                    }

                    @Override
                    public void onFailure(@NotNull Call<Void> call, Throwable t) {
                        Log.v("testbbbbb","request "+t);
                        Toast.makeText(Login.this,"In onFailure",Toast.LENGTH_LONG).show();
                        Toast.makeText(Login.this,t.getMessage(),Toast.LENGTH_LONG).show();
                    }
                });
            }
        });
        // ------------- Button to go to Register Page -------------
        TextView signup = findViewById(R.id.SignInbtn);
        signup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(Login.this,"SignInbtn",Toast.LENGTH_SHORT).show();
                startActivity(new Intent(getApplicationContext(),Register.class));
                openregister();
            }
        });
    }
    //------------------- To go to Login Page ----------------------
    public void openregister(){
        Intent intent = new Intent(this,Register.class);
        startActivity(intent);
    }

//---------------------------------------------------------------------------------------------------
}
