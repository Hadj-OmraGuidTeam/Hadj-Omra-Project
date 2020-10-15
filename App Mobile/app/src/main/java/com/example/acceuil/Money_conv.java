package com.example.acceuil;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Button;

public class Money_conv extends AppCompatActivity {
    private WebView mWebView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_money_conv);
        mWebView = (WebView) findViewById(R.id.activity_main_webview);
        loadpajes();

    }
    private void loadpajes(){
        WebSettings webSettings = mWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        mWebView.getSettings().setDisplayZoomControls(false);

        mWebView.loadUrl("file:///android_asset/money.html");


    }
}
