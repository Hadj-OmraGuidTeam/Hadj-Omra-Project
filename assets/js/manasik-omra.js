/*-------------kabl rihla*/
$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);
/////
$(document).ready(function () {
    $('#sub').on('show.bs.collapse', function () {
        $('#sub .collapse').collapse('hide')
    })
});
///////
$(document).ready(function () {
    $('#sub2').on('show.bs.collapse', function () {
        $('#sub2 .collapse').collapse('hide')
    })
});
/////
$(document).ready(function () {
    $('#sub3').on('show.bs.collapse', function () {
        $('#sub3 .collapse').collapse('hide')
    })
});
/////
$(document).ready(function () {
    $('#sub4').on('show.bs.collapse', function () {
        $('#sub4 .collapse').collapse('hide')
    })
});
/////
$(document).ready(function () {
    $('#sub5').on('show.bs.collapse', function () {
        $('#sub5 .collapse').collapse('hide')
    })
});
/////
$(document).ready(function () {
    $('#sub6').on('show.bs.collapse', function () {
        $('#sub6 .collapse').collapse('hide')
    })
});
/////
var acc = document
    .getElementsByClassName("accordion");

var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
//"active2"
        this.classList.toggle("active2");
        this.nextElementSibling.classList
            .toggle("show");
    }
};
//----nav manasikomra

//--------nav mobil
function myFunction2() {
    var x = document.getElementById("div-nav2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//
//------manasik----
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");



    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active2", "");

    }

    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " active2";

}

/* Demo purposes only */
$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);

//Traduction
/*$(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');

      $('.lang').each(function(index, item) {
         /* if(lang==='ar')
    {
      $("html").children().css("direction","rtl");
    }else
    {
      $("html").children().css("direction","ltr");
    }*/
/*        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });
 var arrLang = {
   ar : {
     //####### Ihram
     ih1:"تجاوز الميقات دون إحرام.",
     ih2:"  الاعتقاد بأن الإحرام هو ارتداء ملابس الإحرام التي هي الرداء والإزار، وهذا غير صحيح، بل
       لابد لصحة الإحرام من نية
       الدخول في النسك.",
     ih3:"  وضع الطِّيب على الرداء أو الإزار قبل الإحرام، وهذا من الأخطاء؛ إذ السُّنَّة في ذلك وضع
       الطِّيب على البدن قبل
       الإحرام، أما ملابس الإحرام فلا يطيِّبها.",
     ih4:"  اعتقاد أن الغسل أو الوضوء عند الإحرام واجب، وإنما هو سنة مستحبة، فلو أحرم من غيرهما فإن
       إحرامه صحيح.",
     ih5:"  كشف المحرم كتفه الأيمن دائمًا من حين إحرامه من الميقات، وهو ما يسمى بـ ‘الاضطباع’ وهو
                                خلاف السُّنَّة، وإنما فعل
                                النبي صلى الله عليه وسلم ذلك في طواف القدوم وطواف العمرة فحسب، فإذا انتهى المحرم من
                                طوافه أعاد رداءه على كتفيه في
                                بقية المناسك. وكذلك يغطي كتفيه إذا كان في صلاة أثناء طوافه ثم يكشفه بعدها فيما بقي من
                                طوافه.
",
     ih6:"  اعتقاد المرأة الحائض أنه لا يجوز لها الإحرام، وأن لها أن تتجاوز الميقات من غير إحرام،
       فيجب عليها أن تحرم قبل
       الميقات، ولكنها لا تطوف بالبيت حتى تطهر.",
     ih7:"  اعتقاد بعض النساء أن للإحرام ثيابًا خاصة بهن، والصحيح أن المرأة يجوز لها أن تُحرم
       بثيابها المعتادة، لكنها تتجنب لبس
       النقاب والقفازين.",
     ih8:"  الدخول في النسك ثم تركه قبل إتمامه، وهذا من الأخطاء؛ لمخالفته قول الله تعالى: { وأتموا
       الحج والعمرة لله }.",
     ih9:"عند الميقات – أو قبله - تنظف و اغتسل كما تغتسل من الجنابة و تطيب إن تيسر لك ذلك، ثم البس
                                ملابس الإحرام، و هو إزار و
                                رداء.

أما المرأة فلها أن تحرم فيما شاءت من الثياب مع الحذر من التشبه بالرجال ، لكن ليس لها
                                    أن تلبس النقاب والقفازين حال
                                    إحرامها، لكن عليها ستر وجهها وكفيها بحائل غير النقاب والقفازين عند خوف الفتنة ووجود
                                    الرجال الأجانب.

",
     ih10:" فإن كان وقت فريضة صليت، وإلا فتصلي ركعتين تنوي بهما سنة الوضوء، إلا الحائض والنفساء فلا
         تصليا.",
     ih11:"                                فإذا فرغت من الصلاة فانو العمرة بقلبك- عند الميقات- ، وتلفظ بالنسك الذي تريده بقول :
                                     لبيك عمرة ،فإن كنت خائفاً من
                                     عائق يعوقك عن إتمام النسك فينبغي لك أن تشترط عند الإحرام قائلاً: إن حبسني حابس فمحلي حيث
                                     حبستني، وإن كنت لا تخاف
                                     شيئًا فلا تشترط.",
     ih12:"          بعدها يحرم عليك لبس المخيط و إزالة الشعر ، و تقليم الأظافر ، و تغطية الرأس والوجه بملاصق
               ؛ كالطاقية والغترة والعمامة
               أو نحو ذلك .",
     ih13:"  كما يحرم استعمال الطيب , و الصيد , و عقد النكاح و الجماع.",
     ih14:"  ويحرم على المسلم – محرما كان أم غير محرم ذكرا كان أم أنثى- قتل صيد الحرم والمعاونة في
       قتله ، ويحرم تنفيره من مكانه ،
       ويحرم قطع شجر الحرم ونباته الأخضر.",
     ih15:"                                ارفع صوتك بالتلبية قائلا


                                     لبيك اللهم لبيك , لبيك لا شريك لك لبيك , إن الحمد و النعمة لك و الملك , لا شريك لك.


                                     و المرأة تقول بقدر ما يسمع نفسها ومن بجنبها من النساء أو محارمها."
   // tawaf

     tf1:"الأخطاء الشائعة في الطواف",
     tf2:"  النطق بالنية عند الشروع في الطواف، والصواب أن النية محلها القلب فلا يتلفظ بها.",
     tf3:"  اعتقاد أن الطواف لا يصح دون استلام الحجر الأسود، والصواب أن تقبيل الحجر سنة فقط ، فإذا
       لم يتمكن الطائف من الوصول
       إليه إلاَّ بالمزاحمة الشديدة وإيذاء الناس، فالواجب ترك الاستلام والتقبيل والاكتفاء
       بالإشارة.",
     tf4:"  الرَّمَلُ في جميع الأشواط، والمشروع أن يكون الرمل في الأشواط الثلاثة الأولى من طواف
       القدوم وطواف العمرة دون غيره من
       الطواف. والرمل هو الإسراع في المشي مع مقاربة الخطا.",
     tf5:"  مزاحمة النساء للرجال في الطواف والعكس، والواجب على كل من المرأة والرجل أن يحترزا من ذلك.",
     tf6:"  تخصيص كل شوط من الطواف بدعاء معين، ولم يرد عنه صلى الله عليه وسلم سوى دعائه بقوله تعالى
       :


       { ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار} ( البقرة:201 )


       بين الركن اليماني والحجر الأسود.",
     tf7:"  رفع الصوت بالدعاء رفعاً مزعجاً، يُذهب الخشوع ويشوش على الطائفين.",
     tf8:"  انصراف البعض من الطواف قبل خطوات يسيرة من الوصول إلى الحجر الأسود، والواجب عليه التيقن
       من إتمام الطواف، لأن ترك جزء
       من الشوط يبطله.",
     tf9:"طواف القدوم",
     tf10:"  يستحب للمفرد إذا قدم مكة إذا وجد وقتا أن يطوف طواف القدوم، ولايغني طواف القدوم عن طواف
       الإفاضة.",
     tf11:"  إذا دخلت المسجد الحرام فقدم رجلك اليمنى وقل: "بسم الله والصلاة والسلام على رسول الله،
       اللهم اغفر لي ذنبي وافتح لي
       أبواب رحمتك،أعوذ بالله العظيم وبوجهه الكريم وبسلطانه القديم من الشيطان الرجيم".ولا تصلِّ
       تحية المسجد.",
     tf12:"  توقف عن التلبية ثم طُف حول الكعبة سبع مرات كاشفاً كتفك الأيمن، مُسرعاً في الثلاثة الأول
       منه في طواف القدوم فقط،
       مبتدئًا بالحجر الأسود؛ فإن استطعت أن تقبله فهو خير عظيم بلا مزاحمة لأحد أو أذية وتقول
       عند استلامه:


       "بسم الله والله أكبر "، أو تقول: "الله أكبر" فإن لم تستطع تقبيله، استلمه بيدك وقبلها،
       فإن لم تستطع استلامه فأشر إليه
       بيدك اليمنى ولا تقبلها وقل: الله أكبر.",
     tf13:"فإذا حاذيت الركن اليماني استلمه بيمينك، وقل :


         " بسم الله والله أكبر"


         ولا تقبله، فإن شق عليك استلامه بسبب الزحام أو غيره اتركه وامض في طوافك، ولا تشر إليه ولا
         تكبر عند محاذاته؛ لأن ذلك
         لم يثبت عن النبي صلى الله عليه وسلم.",
     tf14:"  ويستحب لك أن تقول بين الركن اليماني والحجر الأسود: ربنا آتنا في الدنيا حسنة وفي الآخرة
       حسنة وقنا عذاب النار.",
     tf15:"  وكلما مررت بالحجر الأسود كبِّر.",
     tf16:"                            وفي أثناء الطواف يستحب الإكثار من ذكر الله وقراءة القرآن، و الإكثار من الدعاء، ولا يوجد
                                 دعاء معين لكل شوط في الطواف،
                                 ولكن كل دعاء حسن ليس بإثم ولا قطيعة رحم فهو مستحب مشروع لا سيما الأدعية الواردة في
                                 القرآن والسنة. - ولا ترفع صوتك
                                 بالذكر والدعاء أثناء الطواف",
     tf17:"اللهُمَّ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ
         حَسَنَةً وَقِنَا عَذَابَ
         النَّارِ". [الطبراني (857)، والبيهقي (5/ 84)],
     tf18:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ، لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ
         وَلَهُ الْحَمْدُ، بِيَدِهِ
         الْخَيْرُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
     tf19:"  اللَّهُمَّ اعْصِمْنِي بِدِينِكَ، وَطَاعَةِ رَسُولِكَ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ."

   },
   fr : {
     //#####Ihram
     ih1:"  Interdictions:",
     ih2:"-Pour l’homme de porter encore quelque chose de cousu (comme précisé auparavant) tels que des habilles, des sous-vêtements, des chaussettes… et aussi de se couvrir la tête avec un chapeau, une écharpe et les pieds en utilisant des souliers (mettre plutôt des sandales découvrant la majeur partie des pieds)
",
     ih3:"-Pour la femme d’avoir le visage et les mains couverts
",
     ih4:"-Pour la femme d’avoir le visage et les mains couverts
",
     ih5:"-Se couper les ongles ou les cheveux volontairement, sauf si un ongle se casse par inadvertance
",
     ih6:"-Chasser des bêtes, leur faire peur, ou aider à le faire par n’importe quel moyen (sauf par crainte de morsures) ou encore de couper des plantes
",
     ih7:"-Conclure tout acte de mariage ou une simple demande en mariage ainsi que toute relation sexuelle entre époux (et ce qui pourrait entrainer à cela : baisers, caresses)
",
     ih8:"-Se disputer avec des compagnons de route ou d’autres musulmans
",
     ih9:"Les règles à suivre durant l’Ihram:",
     ih10:"-Se laver, se couper les ongles, la moustache et s’épiler les aisselles et le pubis",
     ih11:"-Faire ses grandes ablutions (ghusl y compris pour la femme indisposée ou en couche)",
     ih12:"-Se parfumer légèrement (musc), pour la femme l’odeur ne doit pas être forte",
     ih13:"-Faire une prière de deux unités en récitant pour la première sourate al-kafirun et pour la seconde sourate al-ikhlas avant de formuler l’intention de l’Ihram",
     ih14:" L’homme doit retirer tous les habits cousus ou découpés pour épouser la forme du corps ou d’un de ses membres (chemises, pantalons, qamis ou autres). Il devra alors se couvrir d’un pagne et d’un autre morceau d’étoffe sur les épaules tous les deux non cousus et de préférence de couleur blanche. Les chaussures que portera l’homme lors de son Ihram devront être des sandales qui laissent la plus grande partie du pied à l’air (notamment l’os de la cheville astragale).
",
     ih15:"-La femme doit garder son habit habituel (hijab) de sortie sans se faire coquette et se découvrir les mains et le visage. Aucune couleur particulière ne lui est assignée, cependant elle doit éviter les couleurs attirantes et le blanc à cause de la ressemblance avec l’homme.",

     // tawaf

     tf1:"Les erreurs à ne pas commettre durant le Tawaf",
     tf2:"-Il n’existe pas d’invocations particulières à faire durant le Tawaf, les pèlerins qui s’en tiennent donc à des invocations qu’ils auraient appris par cœur d’un livre ou autre, cet acte n’a pas de fondement",
     tf3:"-Les invocations collectives sont une erreur et peuvent déranger les autres pèlerins. Le mieux est d’invoquer Allah à voix basse et individuellement",
     tf4:"-Le pèlerin ne doit pas embrasser le coin yéménite (comme on embrasse La Pierre Noire) et ne doit pas lui faire de signe s’il n’arrive pas à le toucher (comme on fait un signe à la Pierre Noire dans le même cas). Les autres coins ne doivent pas être touchés.
",
     tf5:"-Il est vivement recommandé de se diriger vers la Pierre Noire pour l’embrasser, cependant s’il y a beaucoup de monde et si le fait de devoir forcer le passage peut porter préjudice aux musulmans et risque d’entrainer une tentation en raison de la mixité présente, alors il est plus bénéfique de faire uniquement un signe en sa direction
",
     tf6:"",
     tf7:"",
     tf8:"",
     tf9:"Ce qui est permis durant le Tawaf",
     tf10:"-Durant le Tawaf, il faut effectuer 7 fois le tour de la Kaaba à l’intérieur de la Mosquée, en passant à l’extérieur du Hijr Ismâ’îl (muret qui forme un demi-cercle dans l’un des côtés de la Kaaba)
",
     tf11:"-De lire le Coran
",
     tf12:"-De bousculer légèrement pour atteindre et embrasser la Pierre Noire tout en veillant à ne gêner ou ne faire mal à personne. Dans le cas où l’atteindre est difficile, faire un signe vers elle de la main suffira
",
     tf13:"-De se reposer un moment entre les tours en cas de nécessité (maladie, fatigue…) ou d’être porté ou assis sur une chaise roulante…
",
     tf14:"-Il est permis aux gens faisant le Tawaf de circuler devant ceux faisant la prière dans l’enceinte de la Mosquée
",
     tf15:"-De discuter en cas d’extrême nécessité (pour ne dire que du bien)
",
     tf16:"«BISMILLAHI WA LLÄHU AKBAR. ALLAHUMMA IMÂNAN BIKA WA TASDIQAN BI-KITABIKA WA WAFAAN BI-AHDIKA WA T-TIBAAN LI -SUNNATI NABIYYIKA MOHAMMADIN SALLA LLÄHU ALAYHI WA
SALLAM.»",
     tf17:"«BISMILLAH, ALLAHOU AKBAR»",
     tf18:"«RABANA ATINAFI DOUNYA HASSANAH, WA FI-L-AKHIRATI HASSANAH, WA QINA ADHABAN-NAR»",
     tf19:""
   }*/
