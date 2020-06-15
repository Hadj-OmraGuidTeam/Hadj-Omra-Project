package com.example.acceuil;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ExpandableListAdapter;
import android.widget.ExpandableListView;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Fiqh_lhajj extends AppCompatActivity {
    private ExpandableListAdapter listAdapter;
    private ExpandableListView listView;
    private List<String> ListDataHeader;
    private HashMap<String, List<String>> ListDataChild;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_fiqh_lhajj);
       listView = (ExpandableListView) findViewById(R.id.IvExp);
       initData();//create function to initiate data
        listAdapter = new ExpAdapter(this, ListDataHeader, ListDataChild);
        listView.setAdapter(listAdapter);

        Button more = (Button) findViewById(R.id.more);
        more.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                openmore();
            }
        });
    }

   public void openmore() {
        Intent intent = new Intent(this, manasik1.class);
        startActivity(intent);
    }


   private void initData() {
        ListDataHeader = new ArrayList<>();
        ListDataChild = new HashMap<>();
        ListDataHeader.add("الأركان");
        ListDataHeader.add("واجبات الحج");
       ListDataHeader.add("صفة الحج");



        List<String> exelem1 = new ArrayList<>();
        exelem1.add("الوقوف بعرفة.");
        exelem1.add("الإحرام (وهو نية البدء في مناسك الحج ).");
        exelem1.add("طواف الإفاضة.");
        exelem1.add("السعي بين الصفا والمروة.");

        List<String> exelem2 = new ArrayList<>();
        exelem2.add("الإحرام من الميقات.");
        exelem2.add("الوقوف بعرفة إلى غروب الشمس.");
        exelem2.add("المبيت بمزدلفة.");
        exelem2.add(" و المبيت بمني ليالي أيام التشريق.");
        exelem2.add("رمي الجمرات.");
        exelem2.add(" الحلق أو التقصير.");
        exelem2.add("  طواف الوداع.");
       exelem2.add("و وباقي أفعال الحج كلها سن .. مثل : طواف القدوم - المبيت بمني يوم الثامن من ذي الحجة - جميع الأذكار الواردة في الحج");

       List<String> exelem3 = new ArrayList<>();
       exelem3.add("قبل يوم الثامن من ذي الحجة : الإحرام من الميقات .. طواف القدوم .. السعي .. والحلق أو التقصير للمتمتع.");
       exelem3.add("  يوم الثامن من ذي الحجة : التوجه إلى مني الإحرام بالحج منها للمتمتع أما والقارن والمفرد فقد أحرما من الميقات. ويصلي الحاج بمنى الصلوات قضرا في موعدها.");
       exelem3.add("و يوم التاسع من ذي الحجة : التوجه إلى عرفات وأداء صلاة الظهر والعصر جمعا وقصرا والمكوث بعرفة للدعاء حتى تغيب الشمس ثم يتحرك باتجاه مزدلفة ويصلي بها المغرب والعشاء جمعة وقصرة يبيت ليلته بمزدلفة.");
       exelem3.add("\n" +
               "و يوم العاشر من ذي الحجة : يتحرك الحاج من مزدلفة بعد شروق الشمس متجهة إلى مني يرمي جمرة العقبة الكبرى ثم يحلق أو يقصر شعره .. ويخلع ملابس الإحرام ويتوجه إلى مكة فيطوف طواف الإفاضة وسعي الحج، ثم يعود إلى مخيم من ليبيت فيها .. وذبح الهدي يكون في هذا اليوم، فيوكل الحاج أحد المؤسسات بمكة تذبح عنه الهدي .. ويمكنه دفع قيمة سند الذبح قبل هذا اليوم");
       exelem3.add("و يوم الحادي عشر من ذي الحجة : يصلي الحاج كل الصلوات قصرا في وقتها . ويذهب بعد وقت الظهر اليرمي الجمرات .. في رمي الجمرة الأولى بسبع حصيات ويدعو بعدها والثانية بسبع حصيات ويدعو بعدها والثالثة بسبع حصيات ثم يعود إلى مخيم بمني ليبيت ليلته بمني.");
       exelem3.add("و يوم الثاني عشر من ذي الحجة : يفعل مثلما فعل " +
               "في اليوم الحادي عشر من قصر الصلوات ورمي الجمار ولكن إذا أراد أن يتعجل فيغادر مني قبل المغرب . وإذا تأخر لبعد المغرب لزمة المبيت وري الجمرات اليوم التالي.");
       exelem3.add("و يوم الثالث عشر من ذي الحجة : يفعل ما فعل اليومين الماضيين ويكون رميه ل لجمرات قبل المغرب.");
       exelem3.add("ويطوف طواف الوداع قبل مغادرته لمكة مباشرة.");



       ListDataChild.put(ListDataHeader.get(0),exelem1);
        ListDataChild.put(ListDataHeader.get(1),exelem2);
       ListDataChild.put(ListDataHeader.get(2),exelem3);
    }
}