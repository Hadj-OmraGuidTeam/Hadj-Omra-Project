package com.example.acceuil;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class salat extends AppCompatActivity {
    private WebView mWebView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_salat);
        mWebView = (WebView) findViewById(R.id.activity_main_webview);
        loadpajes();
    }
    private void loadpajes(){

        WebSettings webSettings = mWebView.getSettings();

        webSettings.setDefaultTextEncodingName("utf-8");
        String page = new String();
        mWebView.loadDataWithBaseURL(null, page, "text/html", "utf-8", null);
         webSettings.setJavaScriptEnabled(true);

        mWebView.loadUrl("file:///android_asset/index.html");


    }

}
