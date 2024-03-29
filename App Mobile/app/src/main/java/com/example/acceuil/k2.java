package com.example.acceuil;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ExpandableListAdapter;
import android.widget.ExpandableListView;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class k2 extends AppCompatActivity {
    private ExpandableListAdapter listAdapter;
    private ExpandableListView listView;
    private List<String> ListDataHeader;
    private HashMap<String, List<String>> ListDataChild;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_k2);
        listView =(ExpandableListView)findViewById(R.id.IvExp);
        initData();//create function to initiate data
        listAdapter = new ExpAdapter(this,ListDataHeader,ListDataChild);
        listView.setAdapter(listAdapter);
    }
    private void initData() {
        ListDataHeader = new ArrayList<>();
        ListDataChild = new HashMap<>();
        ListDataHeader.add("أخطاء المنسك");
        ListDataHeader.add(" شرح المنسك( طواف القدوم)");
       // ListDataHeader.add("شرح المنسك");
        ListDataHeader.add("أدعية المنسك");



        List <String> exelem1= new ArrayList<>();
        exelem1.add("النطق بالنية عند الشروع في الطواف، والصواب أن النية محلها القلب فلا يتلفظ بها.");


        exelem1.add("ااعتقاد أن الطواف لا يصح دون استلام الحجر الأسود، والصواب أن تقبيل الحجر سنة فقط ، فإذا لم يتمكن الطائف من الوصول  إليه إلاَّ بالمزاحمة الشديدة وإيذاء الناس، فالواجب ترك الاستلام والتقبيل والاكتفاء بالإشارة. ");
        exelem1.add("الرَّمَلُ في جميع الأشواط، والمشروع أن يكون الرمل في الأشواط الثلاثة الأولى من طواف القدوم وطواف العمرة دون غيره من الطواف. والرمل هو الإسراع في المشي مع مقاربة الخطا.");
        exelem1.add("مزاحمة النساء للرجال في الطواف والعكس، والواجب على كل من المرأة والرجل أن يحترزا من ذلك.");
        exelem1.add("تخصيص كل شوط من الطواف بدعاء معين، ولم يرد عنه صلى الله عليه وسلم سوى دعائه بقوله تعالى { ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار} ( البقرة:201 ) بين الركن اليماني والحجر الأسود.");
        exelem1.add(" رفع الصوت بالدعاء رفعاً مزعجاً، يُذهب الخشوع ويشوش على الطائفين."  );
        exelem1.add(" انصراف البعض من الطواف قبل خطوات يسيرة من الوصول إلى الحجر الأسود، والواجب عليه التيقن من إتمام الطواف، لأن ترك جزء من الشوط يبطله."  );


        List <String> exelem2= new ArrayList<>();
        exelem2.add("يستحب للمفرد إذا قدم مكة إذا وجد وقتا أن يطوف طواف القدوم، ولايغني طواف القدوم عن طواف   الإفاضة." );
        exelem2.add("إذا دخلت المسجد الحرام فقدم رجلك اليمنى وقل: \"بسم الله والصلاة والسلام على رسول الله، اللهم اغفر لي ذنبي وافتح لي أبواب رحمتك،أعوذ بالله العظيم وبوجهه الكريم وبسلطانه القديم من الشيطان الرجيم\".ولا تصلِّ  تحية المسجد.");
        exelem2.add("توقف عن التلبية ثم طُف حول الكعبة سبع مرات كاشفاً كتفك الأيمن، مُسرعاً في الثلاثة الأول منه في طواف القدوم فقط،   مبتدئًا بالحجر الأسود؛ فإن استطعت أن تقبله فهو خير عظيم بلا مزاحمة لأحد أو أذية وتقول   عند استلامه: \"بسم الله والله أكبر \"، أو تقول: \"الله أكبر\" فإن لم تستطع تقبيله، استلمه بيدك وقبلها   فإن لم تستطع استلامه فأشر إليه بيدك اليمنى ولا تقبلها وقل: الله أكبر.");
        exelem2.add("فإذا حاذيت الركن اليماني استلمه بيمينك، وقل :\n  \" بسم الله والله أكبر\" ولا تقبله، فإن شق عليك استلامه بسبب الزحام أو غيره اتركه وامض في طوافك، ولا تشر إليه ولا تكبر عند محاذاته؛ لأن ذلك لم يثبت عن النبي صلى الله عليه وسلم.");
        exelem2.add("ويستحب لك أن تقول بين الركن اليماني والحجر الأسود: ربنا آتنا في الدنيا حسنة وفي الآخرة   حسنة وقنا عذاب النار.  وكلما مررت بالحجر الأسود كبِّر.");
        exelem2.add("وفي أثناء الطواف يستحب الإكثار من ذكر الله وقراءة القرآن، و الإكثار من الدعاء، ولا يوجد دعاء معين لكل شوط في الطواف، ولكن كل دعاء حسن ليس بإثم ولا قطيعة رحم فهو مستحب مشروع لا سيما الأدعية الواردة في القرآن والسنة. - ولا ترفع صوتك بالذكر والدعاء أثناء الطواف .");

        List <String> exelem3= new ArrayList<>();
        exelem3.add("\"اللهُمَّ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ   النَّارِ\". [الطبراني (857)، والبيهقي (5/ 84)]  ");
        exelem3.add("\"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ، لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، بِيَدِهِ الْخَيْرُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ\".");
        exelem3.add("مزاحمة النساء للرجال في الطواف والعكس، والواجب على كل من المرأة والرجل أن يحترزا من ذلك.");
        exelem3.add("اللَّهُمَّ اعْصِمْنِي بِدِينِكَ، وَطَاعَةِ رَسُولِكَ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ.");
        exelem3.add("اللَّهُمَّ اجْعَلْنِي مِمَّنْ يُحِبُّكَ، وَيُحِبُّ مَلَائِكَتَكَ، وَرُسُلَكَ،  وَعِبَادَكَ الصَّالِحِينَ اللَّهُمَّ  حَبِّبْنِي إِلَيْكَ، وَإِلَى مَلَائِكَتِكَ، وَرُسُلِكَ، وَعِبَادَكَ الصَّالِحِينَ. "  );
        exelem3.add("اللَّهُمَّ آتِنِي مِنْ خَيْرِ مَا تُؤْتِي عِبَادَكَ الصَّالِحِينَ فِي الدُّنْيَا   وَالْآخِرَةِ."  );

        ListDataChild.put(ListDataHeader.get(0),exelem1);
        ListDataChild.put(ListDataHeader.get(1),exelem2);
        ListDataChild.put(ListDataHeader.get(2),exelem3);


    }

}
