package com.example.acceuil;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ExpandableListAdapter;
import android.widget.ExpandableListView;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class k3 extends AppCompatActivity {
    private ExpandableListAdapter listAdapter;
    private ExpandableListView listView;
    private List<String> ListDataHeader;
    private HashMap<String, List<String>> ListDataChild;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_k3);
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
        exelem1.add(" فإذا أتممت الطواف سبعة أشواط فغط كتفيك برداء الإحرام، و توجه إلى مقام إبراهيم واقرأ:(وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلّىً ) لتصلي ركعتين خلف المقام ، واجعل المقام بينك وبين الكعبة المشرفة إن تيسر فهذه هي السنة، وإن لم يتيسر لك ذلك لزحام أو غيره فصلهما في أي موضع من المسجد الحرام، ويستحب أن تقرأ في الركعة الأولى بعد الفاتحة : {قل يا أيها الكافرون} وفي الأخرى بعد الفاتحة :  { قل هو الله أحد}  ولا تطِل في الركعتين .وإن قرأت بغيرهما فلا بأس. ");





        ListDataChild.put(ListDataHeader.get(0),exelem1);



    }
}
