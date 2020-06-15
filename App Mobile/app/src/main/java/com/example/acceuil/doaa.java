package com.example.acceuil;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class doaa extends AppCompatActivity {
    private Button b1;
    private Button b2;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_doaa);
        b1 = (Button) findViewById(R.id.b1);
        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                opennext();
            }
        });
        b2 = (Button) findViewById(R.id.b2);
        b2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                opennext2();
            }
        });
    }


    public void opennext() {
        Intent intent = new Intent(this, doaa1.class);
        startActivity(intent);

    }
    public void opennext2() {
        Intent intent = new Intent(this, doaa2.class);
        startActivity(intent);

    }

}