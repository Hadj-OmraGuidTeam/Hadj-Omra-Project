package com.example.acceuil;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ExpandableListAdapter;
import android.widget.ExpandableListView;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class k6 extends AppCompatActivity {
    private ExpandableListAdapter listAdapter;
    private ExpandableListView listView;
    private List<String> ListDataHeader;
    private HashMap<String, List<String>> ListDataChild;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_k6);
        listView =(ExpandableListView)findViewById(R.id.IvExp);
        initData();//create function to initiate data
        listAdapter = new ExpAdapter(this,ListDataHeader,ListDataChild);
        listView.setAdapter(listAdapter);
    }
    private void initData() {
        ListDataHeader = new ArrayList<>();
        ListDataChild = new HashMap<>();
        ListDataHeader.add(" الأخطاء الشائعة");
        ListDataHeader.add(" شرح المنسك");



        List <String> exelem1= new ArrayList<>();
        exelem1.add( "اعتقاد البعض أن من السنة استقبال القبلة عند الحلق. ");
        exelem1.add( " حلق بعض الرأس، وترك بعضه على هيئة القزع المنهي عنه. ");
        exelem1.add( "   قيام بعض النسوة بإظهار شعورهن أمام الرجال أثناء الحلق. ");
        exelem1.add(" اعتقاد البعض أنه لا يجوز للمحرم أن يحلق أو يقصّر شعر محرم آخر يريد التحلل. ");


        List <String> exelem2= new ArrayList<>();
        exelem2.add("تحلق شعرك أو تقصره، والمستحب أكثر هو حلق جميع الرأس، فقد دعا النبي صلى الله عليه وسلم  للمحلّقين ثلاثًا ودعا للمقصرين مرة. ");
        exelem2.add("وإذا اخترت تقصير الشعر فيجب أن يستوعب التقصير جميع أنحاء رأسك، فلا يكفي أن تقصر جهة وتترك أخرى.");
        exelem2.add(" المرأة لا تحلق شعر رأسها ولكن تقصره ، وذلك بأن تقص من كل ضفيرة من شعرها قدر أنملة من    أنامل الأصابع .\n ");
        exelem2.add("لابأس أن تحلق لنفسك أو غيرك ولو قبل أن تتحلل. ");
        exelem2.add("  بعد رمي جمرة العقبة، وحلق رأسك أو تقصيره تكون قد تحللت التحلل الأول فيحل لك كل شيء حرم عليك بالإحرام من الطيب  واللباس وغير ذلك إلا النساء.  ");
        exelem2.add("  يرى بعض أهل العلم أن التحلل الأول يحصل بمجرد الانتهاء من رمي جمرة العقبة ولو لم تنحر أو  تحلق .");



        ListDataChild.put(ListDataHeader.get(0),exelem1);
        ListDataChild.put(ListDataHeader.get(1),exelem2);



    }
}
