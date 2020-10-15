package com.example.acceuil;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewpager.widget.ViewPager;

import android.Manifest;
import android.app.Activity;
import android.app.Dialog;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.os.Looper;
import android.util.Patterns;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;

import android.widget.AdapterView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.PopupMenu;
import android.widget.Toast;
import android.widget.Toolbar;

import com.example.acceuil.Retrofit.INodeJS;
import com.example.acceuil.Retrofit.RetrofitClient;
import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationCallback;
import com.google.android.gms.location.LocationRequest;
import com.google.android.gms.location.LocationServices;
import com.google.android.material.navigation.NavigationView;
import com.google.android.material.tabs.TabItem;
import com.google.android.material.tabs.TabLayout;
import com.schibstedspain.leku.LocationPickerActivity;

import java.io.IOException;

import io.reactivex.Scheduler;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.disposables.CompositeDisposable;
import io.reactivex.functions.Consumer;
import io.reactivex.schedulers.Schedulers;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;


public class MainActivity<call> extends AppCompatActivity {
    private DrawerLayout mDrawerLayout;
    private ActionBarDrawerToggle mToggle;
    private Button btn;
    private Button buttonq0;
    private Button buttonk1;
    private Button buttonk2;
    private Button buttonk3;
    private Button buttonk4;
    private Button buttonk5;
    private Button buttonk6;
    private TabLayout tabLayout;
    private ViewPager viewPager;
    private TabItem tab1, tab2, tab3;
    public PageAdapter pagerAdapter;
    public RecyclerView recyclerView;
    AdapterView adapter;
    Toolbar toolbar;
    DrawerLayout drawer;
    ActionBarDrawerToggle toggle;
    NavigationView navigationView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

//-----------------------------------------------

//menu

        setContentView(R.layout.activity_main);
        btn = findViewById(R.id.btn);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                PopupMenu popupMenu = new PopupMenu(getApplicationContext(), view);
                MenuInflater menuInflater = popupMenu.getMenuInflater();
                menuInflater.inflate(R.menu.menu, popupMenu.getMenu());

                popupMenu.show();
                popupMenu.setOnMenuItemClickListener(new PopupMenu.OnMenuItemClickListener() {
                    @Override
                    public boolean onMenuItemClick(MenuItem menuItem) {
                        switch (menuItem.getItemId()) {
                            case R.id.first:
                                Toast.makeText(MainActivity.this, "MainActivity", Toast.LENGTH_SHORT).show();

                                startActivity(new Intent(getApplicationContext(), MainActivity.class));

                                return true;

                            case R.id.SignIn:
                                Toast.makeText(MainActivity.this, menuItem.getTitle(), Toast.LENGTH_SHORT).show();
                                startActivity(new Intent(getApplicationContext(), Register.class));
                                return true;
                            case R.id.qst:
                                Toast.makeText(MainActivity.this, menuItem.getTitle(), Toast.LENGTH_SHORT).show();
                                startActivity(new Intent(getApplicationContext(), FormActivity.class));
                                return true;
                            case R.id.Login:
                                Toast.makeText(MainActivity.this, menuItem.getTitle(), Toast.LENGTH_SHORT).show();
                                startActivity(new Intent(getApplicationContext(), Login.class));
                                return true;

                        }
                        return true;
                    }
                });
            }


        });


        buttonq0 = (Button) findViewById(R.id.buttonq0);
        buttonq0.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                opennext0();
            }
        });

        buttonk1 = (Button) findViewById(R.id.buttonk1);
        buttonk1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                opennext1();
            }
        });

        buttonk2 = (Button) findViewById(R.id.buttonk2);
        buttonk2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                opennext2();
            }
        });

        buttonk3 = (Button) findViewById(R.id.buttonk3);
        buttonk3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                opennext3();
            }
        });
        buttonk4 = (Button) findViewById(R.id.buttonk4);
        buttonk4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                opennext4();
            }
        });
        buttonk5 = (Button) findViewById(R.id.buttonk5);
        buttonk5.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                opennext5();
            }
        });
        buttonk6 = (Button) findViewById(R.id.buttonk6);
        buttonk6.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                opennext6();
            }
        });

    }

    //--------------------------------------------------------------------------
    public void opennext0() {
        Intent intent = new Intent(this, manasik.class);
        startActivity(intent);
    }

    public void opennext1() {
        Intent intent = new Intent(this, Fiqh_lhajj.class);
        startActivity(intent);
    }

    public void opennext2() {
        Intent intent = new Intent(this, manasik2.class);
        startActivity(intent);
    }

    public void opennext3() {
        Intent intent = new Intent(this, doaa.class);
        startActivity(intent);
    }

    public void opennext4() {
        Intent intent = new Intent(this, salat.class);
        startActivity(intent);
    }

    public void opennext5() {
        Intent intent = new Intent(this, Money_conv.class);
        startActivity(intent);
    }

    public void opennext6() {

        FusedLocationProviderClient services = LocationServices.getFusedLocationProviderClient(this);
        LocationRequest request = LocationRequest.create();
        request.setInterval(1000);
        request.setFastestInterval(5000);
        request.setPriority(LocationRequest.PRIORITY_HIGH_ACCURACY);

        Intent intent = new LocationPickerActivity.Builder().
                withGooglePlacesApiKey(getString(R.string.google_map_api_key))
                .withDefaultLocaleSearchZone().withGoogleTimeZoneEnabled().build(this);
        startActivity(intent);


        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            return;
        }
        services.requestLocationUpdates(request, new LocationCallback() {
        }, Looper.myLooper());
    }


}
