package com.example.acceuil;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ExpandableListAdapter;
import android.widget.ExpandableListView;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class k1 extends AppCompatActivity {
    private ExpandableListAdapter listAdapter;
    private ExpandableListView listView;
    private List<String> ListDataHeader;
    private HashMap<String, List<String>> ListDataChild;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_k1);
        listView =(ExpandableListView)findViewById(R.id.IvExp);
        initData();//create function to initiate data
        listAdapter = new ExpAdapter(this,ListDataHeader,ListDataChild);
        listView.setAdapter(listAdapter);
    }
    private void initData() {
        ListDataHeader = new ArrayList<>();
        ListDataChild = new HashMap<>();
        ListDataHeader.add("أخطاء المنسك");
        ListDataHeader.add("شرح المنسك");



        List <String> exelem1= new ArrayList<>();
        exelem1.add("تجاوز الميقات دون إحرام.");


        exelem1.add("الاعتقاد بأن الإحرام هو ارتداء ملابس الإحرام التي هي الرداء والإزار، وهذا غير صحيح، بل لابد لصحة الإحرام من نية الدخول في النسك.");



        exelem1.add(" وضع الطِّيب على الرداء أو الإزار قبل الإحرام، وهذا من الأخطاء؛ إذ السُّنَّة في ذلك وضع الطِّيب على البدن قبل الإحرام، أما ملابس الإحرام فلا يطيِّبها.");
        exelem1.add("اعتقاد أن الغسل أو الوضوء عند الإحرام واجب، وإنما هو سنة مستحبة، فلو أحرم من غيرهما فإن   إحرامه صحيح");
        exelem1.add("كشف المحرم كتفه الأيمن دائمًا من حين إحرامه من الميقات، وهو ما يسمى بـ \"الاضطباع\" وهو خلاف السُّنَّة، وإنما فعل النبي صلى الله عليه وسلم ذلك في طواف القدوم وطواف العمرة فحسب، فإذا انتهى المحرم من طوافه أعاد رداءه على كتفيه في بقية المناسك. وكذلك يغطي كتفيه إذا كان في صلاة أثناء طوافه ثم يكشفه بعدها فيما بقي من  طوافه.");
        exelem1.add("اعتقاد المرأة الحائض أنه لا يجوز لها الإحرام، وأن لها أن تتجاوز الميقات من غير إحرام، فيجب عليها أن تحرم قبل الميقات، ولكنها لا تطوف بالبيت حتى تطهر."  );
        exelem1.add("اعتقاد بعض النساء أن للإحرام ثيابًا خاصة بهن، والصحيح أن المرأة يجوز لها أن تُحرم بثيابها المعتادة، لكنها تتجنب لبس النقاب والقفازين"  );
        exelem1.add("الدخول في النسك ثم تركه قبل إتمامه، وهذا من الأخطاء؛ لمخالفته قول الله تعالى: { وأتموا الحج والعمرة لله }. "  );

        List <String> exelem2= new ArrayList<>();
        exelem2.add("عند الميقات – أو قبله - تنظف و اغتسل كما تغتسل من الجنابة و تطيب إن تيسر لك ذلك، ثم البس ملابس الإحرام، و هو إزار و رداء." );
        exelem2.add("أما المرأة فلها أن تحرم فيما شاءت من الثياب مع الحذر من التشبه بالرجال ، لكن ليس لها أن تلبس النقاب والقفازين حال إحرامها، لكن عليها ستر وجهها وكفيها بحائل غير النقاب والقفازين عند خوف الفتنة ووجود  الرجال الأجانب." ) ;
        exelem2.add("فإن كان وقت فريضة صليت، وإلا فتصلي ركعتين تنوي بهما سنة الوضوء، إلا الحائض والنفساء فلا تصليا.");
        exelem2.add("فإذا فرغت من الصلاة فانو العمرة بقلبك- عند الميقات- ، وتلفظ بالنسك الذي تريده بقول : لبيك عمرة ،فإن كنت خائفاً من عائق يعوقك عن إتمام النسك فينبغي لك أن تشترط عند الإحرام قائلاً: إن حبسني حابس فمحلي حيث حبستني، وإن كنت لا تخاف شيئًا فلا تشترط.");
        exelem2.add("بعدها يحرم عليك لبس المخيط و إزالة الشعر ، و تقليم الأظافر ، و تغطية الرأس والوجه بملاصق ؛ كالطاقية والغترة والعمامة أو نحو ذلك .");
        exelem2.add("كما يحرم استعمال الطيب , و الصيد , و عقد النكاح و الجماع.");
        exelem2.add("  ويحرم على المسلم – محرما كان أم غير محرم ذكرا كان أم أنثى- قتل صيد الحرم والمعاونة في قتله ، ويحرم تنفيره من مكانه ، ويحرم قطع شجر الحرم ونباته الأخضر.");
        exelem2.add("ارفع صوتك بالتلبية قائلا لبيك اللهم لبيك , لبيك لا شريك لك لبيك , إن الحمد و النعمة لك و الملك , لا شريك لك. و المرأة تقول بقدر ما يسمع نفسها ومن بجنبها من النساء أو محارمها.");




        ListDataChild.put(ListDataHeader.get(0),exelem1);
        ListDataChild.put(ListDataHeader.get(1),exelem2);
       
    }
}
