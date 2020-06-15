package com.example.acceuil;

import androidx.appcompat.app.AppCompatActivity;
import androidx.viewpager.widget.ViewPager;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.google.android.material.tabs.TabItem;
import com.google.android.material.tabs.TabLayout;

public class manasik2 extends AppCompatActivity {
    private Button ii1,ii2,ii3,ii4,ii5,ii6;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_manasik2);  ;
       ii1=(Button) findViewById(R.id.ii1) ;
        ii1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                opennext1();
            }
        });
        ii2=(Button) findViewById(R.id.ii2) ;
        ii2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                opennext2();
            }
        });
        ii3=(Button) findViewById(R.id.ii3) ;
        ii3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                opennext3();
            }
        });
        ii4=(Button) findViewById(R.id.ii4) ;
        ii4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                opennext4();
            }
        });
        ii5=(Button) findViewById(R.id.ii5) ;
        ii5.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                opennext5();
            }
        });
        ii6=(Button) findViewById(R.id.ii6) ;
        ii6.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                opennext6();
            }
        });


                }

    public void opennext1(){
        Intent intent = new Intent(this,k1.class);
        startActivity(intent);
    }
    public void opennext2(){
        Intent intent = new Intent(this,k2.class);
        startActivity(intent);
    }
    public void opennext3(){
        Intent intent = new Intent(this,k3.class);
        startActivity(intent);
    }
    public void opennext4(){
        Intent intent = new Intent(this,k4.class);
        startActivity(intent);
    }
    public void opennext5(){
        Intent intent = new Intent(this,i5.class);//il falait la nommer k5 j fait i au lieu de k
        startActivity(intent);
    }
    public void opennext6(){
        Intent intent = new Intent(this,k6.class);
        startActivity(intent);
    }



}
