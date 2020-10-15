package com.example.acceuil;

import androidx.appcompat.app.AppCompatActivity;
import android.webkit.WebView;
import android.os.Bundle;

public class FormActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.form);
        WebView mywebview = (WebView) findViewById(R.id.webView);
        mywebview.loadUrl("http://192.168.43.83:8080/question");
    }
}