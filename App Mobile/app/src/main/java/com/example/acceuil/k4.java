package com.example.acceuil;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ExpandableListAdapter;
import android.widget.ExpandableListView;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class k4 extends AppCompatActivity {
    private ExpandableListAdapter listAdapter;
    private ExpandableListView listView;
    private List<String> ListDataHeader;
    private HashMap<String, List<String>> ListDataChild;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_k4);
        listView =(ExpandableListView)findViewById(R.id.IvExp);
        initData();//create function to initiate data
        listAdapter = new ExpAdapter(this,ListDataHeader,ListDataChild);
        listView.setAdapter(listAdapter);
    }
    private void initData() {
        ListDataHeader = new ArrayList<>();
        ListDataChild = new HashMap<>();

        ListDataHeader.add(" شرح المنسك");



        List <String> exelem1= new ArrayList<>();
        exelem1.add(" بعد انتهائك من الركعتين يستحب لك أن تذهب لتشرب من ماء زمزم وتصب على رأسك لفعله صلى الله عليه و سلم، ولقوله صلى الله عليه و سلم عن ماء زمزم : « إنه طعام طُعْم وشفاء سُقم »     وتنوي عند شربها ما شئت من خيرى الدنيا والآخرة فقد صح عنه صلى الله عليه وسلم أنه قال: ماء  زمزم لما شرب له ." +
                "");


        
        ListDataChild.put(ListDataHeader.get(0),exelem1);


    }
}

