package com.example.acceuil;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;


public class doaa2 extends AppCompatActivity {
    ListView Ivmont;

    //
    String [] monts={
            "-اللهم إني ظلمت نفسي ظلمًا كثيرًا، ولا يغفر الذنوب إلاَّ أنت، فاغفر لي من عندك مغفرةً، إنك أنت الغفور الرحيم."
            ,"- اللهم إني أعوذ بك من جهد البلاء، ودرك الشقاء، وسوء القضاء، وشماتة الأعداء."
            ,"- لا إله إلاَّ الله وحده، أعزَّ جنده، ونصر عبده، وغلب الأحزاب وحده، فلا شيء بعده."
            ,"- اللهم إني أعوذ بك من الكسل والهَرَم، والمأثم والمغرم، ومن فتنة القبر، وعذاب القبر، ومن فتنة النار، وعذاب النار، ومن شرِّ فتنة الغنى، وأعوذ بك من فتنة الفقر، وأعوذ بك من فتنة المسيح الدجال، اللهم اغسل عني خطايايَ بماء الثلج والبرد، ونقِّ قلبي من الخطايا كما نقيتَ الثوب الأبيض من الدنس، وباعِد بيني وبين خطاياي كما باعدت بين المشرق والمغرب."
            ,"- اللهم اجعل في قلبي نورًا، وفي بصري نورًا، وفي سمعي نورًا، وعن يميني نورًا، وعن يساري نورًا، وفوقي نورًا، وتحتي نورًا، وأمامي نورًا، وخلفي نورًا، واجعل لي نورًا."
            ,"- اللهم لك الحمد أنت نور السماوات والأرض ومَن فيهن، ولك الحمد أنت قيم السماوات والأرض ومن فيهن، ولك الحمد أنت الحق، ووعدك حقٌّ، وقولك حق، ولقاؤك حق، والجنة حق، والنار حق، والساعة حق، والنبيون حق، ومحمدٌ حق، اللهم لك أسلمتُ، وعليك توكلت، وبك آمنت، وإليك أنبت، وبك خاصمت، وإليك حاكمت، فاغفر لي ما قدمت وما أخرت، وما أسررت وما أعلنت، أنت المقدِّم وأنت المؤخر، لا إله إلا أنت."

            ," لا إله إلا الله وحده لا شريك له، له الملك، وله الحمد، وهو على كل شيءٍ قديرٌ، اللهم لا مانع لما أعطيت، ولا معطي لما منعت، ولا ينفع ذا الجد منك الجدُّ."
            ,"- لا إله إلا الله العظيم الحليم، لا إله إلا الله رب العرش العظيم، لا إله إلا الله رب السماوات ورب الأرض، ورب العرش الكريم."
            ,"- اللهم أحيني ما كانت الحياة خيرًا لي، وتوفني إذا كانت الوفاة خيرًا لي."
            ,"- اللهم إني أعوذ بك من الهمِّ والحزن، والعجز والكسل، والبخل والجبن، وضَلَع الدَّين، وغلبة الرجال."
            ,"- اللهم إني أعوذ بك من العجز والكسل، والجبن والهرم، وأعوذ بك من عذاب القبر، وأعوذ بك من فتنة المحيا والممات."
            ,"- لا إله إلا الله وحده لا شريك له، له الملك، وله الحمد، وهو على كل شيءٍ قدير."
            ," اللهم صلِّ على محمدٍ، وعلى آل محمدٍ، كما صليت على آل إبراهيم، إنك حميد مجيدٌ، اللهم بارك على محمدٍ، وعلى آل محمدٍ، كما باركت على آل إبراهيم، إنك حميدٌ مجيدٌ."
            ,"- سَمَّع سامعٌ بحمدِ الله وحسنِ بلائه علينا، ربَّنا صاحِبْنا وأفضِلْ علينا، عائذًا بالله من النار."
            ,"- اللهم أصلح لي ديني الذي هو عصمة أمري، وأصلح لي دنياي التي فيها معاشي، وأصلح لي آخرتي التي فيها معادي، واجعل الحياة زيادةً لي في كل خيرٍ، واجعل الموت راحةً لي من كل شر."
            ,"- اللهم احفظني بالإسلام قائمًا، واحفظني بالإسلام قاعدًا، واحفظني بالإسلام راقدًا، ولا تُشْمِتْ بي عدوًّا ولا حاسدًا، اللهم إني أسألك من كل خيرٍ خزائنُه بيدك، وأعوذ بك من كل شرٍّ خزائنُه بيدك."

    };


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_doaa2);
        Ivmont = findViewById(R.id.Ivmont);
        //monts = new DateFormatSymbols().getMonths();
        ArrayAdapter <String> montAdapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1,monts);
        Ivmont.setAdapter(montAdapter);


    }




}
