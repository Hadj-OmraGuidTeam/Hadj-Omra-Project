package com.example.acceuil;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import android.app.ProgressDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import android.widget.Toast;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
public class Qst_Res extends AppCompatActivity{
    ListView list;
    private ProgressDialog progressDialog;
    private ArrayList<String>names=new ArrayList<>();
    private ArrayList<String> comments=new ArrayList<>();
    private ArrayList<Integer> likes=new ArrayList<>() ;
    public static final String BASE_URL = "https://192.168.1.38:8080";
    private GetInfos getInfos;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_qst);

        progressDialog = new ProgressDialog(this);
        final HashMap<String,String> map=new HashMap<>();
        // Trailing slash is needed

        Gson gson = new GsonBuilder()
                .setLenient()
                .create();
        Retrofit retrofit = new Retrofit.Builder()
                //========Drop your Ip Adress=====================
                .baseUrl("http://192.168.1.38:8080/").addConverterFactory(GsonConverterFactory.create(gson)).build() ;


        getInfos = retrofit.create(com.example.acceuil.GetInfos.class);

        Call<ConnectedUseData> login_call = getInfos.executeQuestion(map) ;
        login_call.enqueue(new Callback<ConnectedUseData>() {
            @Override
            public void onResponse(Call<ConnectedUseData> call, Response<ConnectedUseData> response) {
                if(response.code() == 200){
                    try {
                        JSONObject jsonObject = new JSONObject(String.valueOf(response));
                        if (jsonObject.getBoolean("res") == true) {

                            JSONObject jsonObject1 = jsonObject.getJSONObject("data");
                            map.put("username", String.valueOf(jsonObject1.getJSONObject("username")));
                            map.put("queation", String.valueOf(jsonObject1.getJSONObject("question")));
                            list=(ListView)findViewById(R.id.list) ;
                            comments.add(map.get("question"));
                            names.add(map.get("username"));
                        }
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }

                    Toast.makeText(Qst_Res.this,response.body().toString(),Toast.LENGTH_LONG).show();

//-----------------------------you sholud edit this
                    likes.add(40)  ;
                    likes.add(66) ;
                    //comments.add(response.body().question.toString()) ;
                    comments.add("Yonko")  ;
                    comments.add("hello")  ;
                    names.add("ismail");
                    final QuestionAdapter adapter=new QuestionAdapter(this,names,comments);
                    list.setAdapter(adapter);
                    list.setOnItemLongClickListener(new AdapterView.OnItemLongClickListener() {
                        @Override
                        public boolean onItemLongClick(AdapterView<?> parent, View view, final int position, long id) {
                            if(position==0)  {
                                Toast.makeText(getApplicationContext(),"Place Your First option code",Toast.LENGTH_SHORT).show();
                            }
                            else if(position==1){
                                Toast.makeText(getApplicationContext(),"Place Your First option code",Toast.LENGTH_SHORT).show();
                            }
                            AlertDialog.Builder alertDialogBuilder=new AlertDialog.Builder(Qst_Res.this) ;
                            alertDialogBuilder.setPositiveButton("delete", new DialogInterface.OnClickListener() {
                                @Override
                                public void onClick(DialogInterface dialogInterface, int which) {
                                    adapter.names.remove(position) ;
                                    adapter.likes.remove(position) ;
                                    adapter.comments.remove(position) ;
                                    adapter.notifyDataSetChanged();
                                    dialogInterface.dismiss();
                                    Toast.makeText(Qst_Res.this,"delete",Toast.LENGTH_SHORT).show();
                                }
                            }) ;
                            alertDialogBuilder.setNegativeButton("close", new DialogInterface.OnClickListener() {
                                @Override
                                public void onClick(DialogInterface dialogInterface, int i) {
                                    dialogInterface.dismiss();
                                }
                            }) ;
                            alertDialogBuilder.setTitle("Supression") ;
                            alertDialogBuilder.setMessage("Are you sure to delete");
                            alertDialogBuilder.show();
                            return true;

                        }
                    });
                }
                else

                if (response.code() == 404)
                    Toast.makeText(Qst_Res.this,"try again",Toast.LENGTH_LONG).show();
                progressDialog.dismiss();
            }

            @Override
            public void onFailure(Call<ConnectedUseData> call, Throwable throwable ) {
                Toast.makeText(Qst_Res.this,throwable.getMessage(),Toast.LENGTH_LONG).show();
                progressDialog.dismiss();
            }
        });




    }

}
