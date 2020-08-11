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
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
$(function() {
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
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });
 var arrLang = {
   ar : {
     //Ad3iya mina l Quran
     1:"ِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ * الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ * الرَّحْمَنِ الرَّحِيمِ * مَالِكِ يَوْمِ الدِّينِ * إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ * اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ * صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ
  وَلَا الضَّالِّينَ - الفاتحة: 1 - 7 ",
     2:" -رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ *رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِنْ ذُرِّيَّتِنَا أُمَّةً مُسْلِمَةً لَكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَا إِنَّكَ  أَنْتَ التَّوَّابُ الرَّحِيمُ - البقرة: 127، 128
-فَسَيَكْفِيكَهُمُ اللَّهُ وَهُوَ السَّمِيعُ الْعَلِيمُ - البقرة: 137
-الَّذِينَ إِذَا أَصَابَتْهُمْ مُصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ -البقرة: 15
-رَبَّنَا آَتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآَخِرَة حَسَنَةً وَقِنَا عَذَابَ النَّارِ - البقرة: 201
-رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ - البقرة: 25
-رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا
  كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا الْكَافِرِينَ - البقرة: 286 ",
     3:"-رَبَّنَا إِنَّنَا آَمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ - آل عمران:16
-قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ وَتُعِزُّ مَنْ تَشَاءُ وَتُذِلُّ مَنْ تَشَاءُ بِيَدِكَ الْخَيْرُ إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ آل عمران: 26
-رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ الدُّعَاءِ - آل عمران: 38
-رَبَّنَا آَمَنَّا بِمَا أَنْزَلْتَ وَاتَّبَعْنَا الرَّسُولَ فَاكْتُبْنَا مَعَ الشَّاهِدِينَ – آل عمران: 53
",
     4:"-وَاجْعَلْ لَنَا مِنْ لَدُنْكَ وَلِيًّا وَاجْعَلْ لَنَا مِنْ لَدُنْكَ نَصِيرًا - النساء: 75                    ",
     5:"-رَبَّنَا آَمَنَّا فَاكْتُبْنَا مَعَ الشَّاهِدِينَ - المائدة: 83",
     6:"-إِنِّي وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ
                    الْمُشْرِكِينَ - الأنعام: 79
-قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ * لَا شَرِيكَ لَهُ
                    - الأنعام: 162، 163
",
     7:"-الْحَمْدُ لِلَّهِ الَّذِي هَدَانَا لِهَذَا وَمَا كُنَّا لِنَهْتَدِيَ لَوْلَا أَنْ هَدَانَا اللَّهُ -الأعراف: 43",
     8:"-رَبِّ إِنِّي أَعُوذُ بِكَ أَنْ أَسْأَلَكَ مَا لَيْسَ لِي بِهِ عِلْمٌ وَإِلَّا تَغْفِرْ لِي  وَتَرْحَمْنِي أَكُنْ مِنَ الْخَاسِرِينَ - هود: 47
-إِنِّي تَوَكَّلْتُ عَلَى اللَّهِ رَبِّي وَرَبِّكُمْ مَا مِنْ دَابَّةٍ إِلَّا هُوَ آَخِذ  بِنَاصِيَتِهَا إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ - هود: 56
-وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ - هود: 88
",
     9:"-رَبِّ اجْعَلْ هَذَا الْبَلَدَ آَمِنًا وَاجْنُبْنِي وَبَنِيَّ أَنْ نَعْبُدَ الْأَصْنَامَ - إبراهيم:   35",
     10:"-سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُونَ * وَسَلَامٌ عَلَى الْمُرْسَلِينَ * وَالْحَمْدُ
                    لِلَّهِ رَبِّ الْعَالَمِينَ الصافات: 180 – 182
",
     11:"-اللَّهُمَّ فَاطِرَ السَّمَوَاتِ وَالْأَرْضِ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ أَنْتَ تَحْكُمُ بَيْنَ
         عِبَادِكَ فِي مَا كَانُوا فِيهِ يَخْتَلِفُونَ - الزمر: 46",
     12:"-غَافِرِ الذَّنْبِ وَقَابِلِ التَّوْبِ شَدِيدِ الْعِقَابِ ذِي الطَّوْلِ لَا إِلَهَ إِلَّا هُو  إِلَيْهِ الْمَصِيرُ - غافر: 3
-وَأُفَوِّضُ أَمْرِي إِلَى اللَّهِ إِنَّ اللَّهَ بَصِيرٌ بِالْعِبَادِ - غافر: 44
",
     13:"-سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ - الزخرف: 13
-سُبْحَانَ رَبِّ السَّمَوَاتِ وَالْأَرْضِ رَبِّ الْعَرْشِ عَمَّا يَصِفُونَ - الزخرف: 82
-رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ وَأَنْ
                    أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَصْلِحْ لِي فِي ذُرِّيَّتِي إِنِّي تُبْتُ إِلَيْكَ وَإِنِّي مِنَ
                    الْمُسْلِمِينَ - الأحقاف: 15
",
     14:"-فَاعْلَمْ أَنَّهُ لَا إِلَهَ إِلَّا اللَّهُ وَاسْتَغْفِرْ لِذَنْبِكَ وَلِلْمُؤْمِنِينَ
         وَالْمُؤْمِنَاتِ - محمد: 19",
     15:"-رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي
         قُلُوبِنَا غِلًّا لِلَّذِينَ آَمَنُوا رَبَّنَا إِنَّكَ رَءُوفٌ رَحِيمٌ - الحشر: 10",
     16:"-رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ - الممتحنة: 4",
     17:"-رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ - التحريم: 8",
     18:"-رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَنْ دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ
         وَالْمُؤْمِنَاتِ وَلَا تَزِدِ الظَّالِمِينَ إِلَّا تَبَارًا - نوح: 28",
     19:"-قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ * لَمْ يَلِدْ وَلَمْ يُولَدْ * وَلَمْ يَكُنْ لَهُ
         كُفُوًا أَحَدٌ - الإخلاص: 1 – 4",
     20:"-قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ * مِنْ شَرِّ مَا خَلَقَ * وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ * وَمِنْ
         شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ * وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ - الفلق: 1 – 5",
     21:" -قُلْ أَعُوذُ بِرَبِّ النَّاسِ * مَلِكِ النَّاسِ * إِلَهِ النَّاسِ * مِنْ شَرِّ الْوَسْوَاسِ
         الْخَنَّاسِ * الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ * مِنَ الْجِنَّةِ وَالنَّاسِ - الناس: 1 – 6"
         ,
    //##################Ad3iya mina Sona########################################
      s1:"-اللهم إني ظلمت نفسي ظلمًا كثيرًا، ولا يغفر الذنوب إلاَّ أنت، فاغفر لي من عندك مغفرةً، إنك أنت الغفور
          الرحيم.",
      s2:"- اللهم إني أعوذ بك من جهد البلاء، ودرك الشقاء، وسوء القضاء، وشماتة الأعداء.
",
      s3:"- لا إله إلاَّ الله وحده، أعزَّ جنده، ونصر عبده، وغلب الأحزاب وحده، فلا شيء بعده.",
      s4:"- اللهم إني أعوذ بك من الكسل والهَرَم، والمأثم والمغرم، ومن فتنة القبر، وعذاب القبر، ومن فتنة النار،
          وعذاب النار، ومن شرِّ فتنة الغنى، وأعوذ بك من فتنة الفقر، وأعوذ بك من فتنة المسيح الدجال، اللهم اغسل
          عني خطايايَ بماء الثلج والبرد، ونقِّ قلبي من الخطايا كما نقيتَ الثوب الأبيض من الدنس، وباعِد بيني
          وبين خطاياي كما باعدت بين المشرق والمغرب.",
      s5:"- اللهم اجعل في قلبي نورًا، وفي بصري نورًا، وفي سمعي نورًا، وعن يميني نورًا، وعن يساري نورًا، وفوقي
          نورًا، وتحتي نورًا، وأمامي نورًا، وخلفي نورًا، واجعل لي نورًا.",
      s6:"- اللهم لك الحمد أنت نور السماوات والأرض ومَن فيهن، ولك الحمد أنت قيم السماوات والأرض ومن فيهن، ولك
          الحمد أنت الحق، ووعدك حقٌّ، وقولك حق، ولقاؤك حق، والجنة حق، والنار حق، والساعة حق، والنبيون حق،
          ومحمدٌ حق، اللهم لك أسلمتُ، وعليك توكلت، وبك آمنت، وإليك أنبت، وبك خاصمت، وإليك حاكمت، فاغفر لي ما
          قدمت وما أخرت، وما أسررت وما أعلنت، أنت المقدِّم وأنت المؤخر، لا إله إلا أنت.",
      s7:"- لا إله إلا الله وحده لا شريك له، له الملك، وله الحمد، وهو على كل شيءٍ قديرٌ، اللهم لا مانع لما
          أعطيت، ولا معطي لما منعت، ولا ينفع ذا الجد منك الجدُّ.",
      s8:"- لا إله إلا الله العظيم الحليم، لا إله إلا الله رب العرش العظيم، لا إله إلا الله رب السماوات ورب
          الأرض، ورب العرش الكريم.",
      s9:"- اللهم أحيني ما كانت الحياة خيرًا لي، وتوفني إذا كانت الوفاة خيرًا لي.",
      s10:"- اللهم إني أعوذ بك من الهمِّ والحزن، والعجز والكسل، والبخل والجبن، وضَلَع الدَّين، وغلبة الرجال.",
      s11:"- اللهم إني أعوذ بك من العجز والكسل، والجبن والهرم، وأعوذ بك من عذاب القبر، وأعوذ بك من فتنة المحيا",
      s12:"- لا إله إلا الله وحده لا شريك له، له الملك، وله الحمد، وهو على كل شيءٍ قدير.",
      s13:"اللهم صلِّ على محمدٍ، وعلى آل محمدٍ، كما صليت على آل إبراهيم، إنك حميد مجيدٌ، اللهم بارك على محمدٍ،
          وعلى آل محمدٍ، كما باركت على آل إبراهيم، إنك حميدٌ مجيدٌ.",
      s14:"- سَمَّع سامعٌ بحمدِ الله وحسنِ بلائه علينا، ربَّنا صاحِبْنا وأفضِلْ علينا، عائذًا بالله من النار.",
      s15:"- اللهم أصلح لي ديني الذي هو عصمة أمري، وأصلح لي دنياي التي فيها معاشي، وأصلح لي آخرتي التي فيها
          معادي، واجعل الحياة زيادةً لي في كل خيرٍ، واجعل الموت راحةً لي من كل شر.",
      s16:"  - اللهم احفظني بالإسلام قائمًا، واحفظني بالإسلام قاعدًا، واحفظني بالإسلام راقدًا، ولا تُشْمِتْ بي
        عدوًّا ولا حاسدًا، اللهم إني أسألك من كل خيرٍ خزائنُه بيدك، وأعوذ بك من كل شرٍّ خزائنُه بيدك."
 },
   fr : {
     //Ad"iya mina Quran
     1:"'Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux Louange à Allah, Seigneur de l'univers Le Tout Miséricordieux, le Très Miséricordieux,Maître du Jour de la rétribution
C\'est Toi [Seul] que nous adorons, et c'est Toi [Seul] dont nous implorons secours Guide-nous dans le droit chemin le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés",
     2:" 'Ô notre Seigneur, accepte ceci de notre part ! Car c\'est Toi l\'Audient,' l\'Omniscient 128 \'Notre Seigneur ! Fais de nous Tes Soumis, et de notre descendance une communauté soumise à Toi. Et montre nous nos rites et accepte de nous le repentir. Car c\'est Toi certes l\'Accueillant au repentir, le Miséricordieux \'

 \'Allah te suffira contre eux. Il est l\'Audient, l\'Omniscient'

\'qui disent, quand un malheur les atteint: « Certes nous sommes à Allah, et c\'est à Lui que nous retournerons'


\'Et il est des gens qui disent: « Seigneur ! Accorde nous belle part ici-bas, et belle part aussi dans l\'au-delà; et protège-nous du châtiment du Feu ! '

\'Et quand ils affrontèrent Goliath et ses troupes, ils dirent: « Seigneur ! Déverse sur nous l\'endurance, affermis nos pas et donne-nous la victoire sur ce peuple infidèle. '

\'L\'un de vous aimerait-il avoir un jardin de dattiers et de vignes sous lequel coulent les ruisseaux, et qui lui donne toutes espèces de fruits, que la vieillesse le rattrape, tandis que ses enfants sont encore petits, et qu\'un tourbillon contenant du feu s\'abatte sur son jardin et le brûle ? Ainsi Allah vous explique les signes afin que vous méditiez !'
",
     3:"\'qui disent: \' Ô notre Seigneur, nous avons la foi; pardonne-nous donc nos péchés, et protège-nous du châtiment du Feu \'
\'Dis: \' Ô Allah, Maître de l\'autorité absolue. Tu donnes l\'autorité à qui Tu veux, et Tu arraches l\'autorité à qui Tu veux; et Tu donnes la puissance à qui Tu veux, et Tu humilies qui Tu veux. Le bien est en Ta main et Tu es Omnipotent.\'

\'Alors, Zakariyya (Zacharie) pria son Seigneur, et dit: \' Ô mon Seigneur, donne-moi, venant de Toi, une excellente descendance. Car Tu es Celui qui entend bien la prière. \'

\'Seigneur ! Nous avons cru à ce que Tu as fait descendre et suivi le messager. Inscris-nous donc parmi ceux qui témoignent .\'
",
     4:"\' et assigne-nous de Ta part un allié, et assigne-nous de Ta part un secoureur.\'",
     5:"\'Ô notre Seigneur ! Nous croyons: inscris-nous donc parmi ceux qui témoignent\'",
     6:"\'Je tourne mon visage exclusivement vers Celui qui a créé (à partir du néant) les cieux et la terre; et je ne suis point de ceux qui Lui donnent des associés. \'
",
     7:"\'Dis:  En vérité, ma Salat, mes actes de dévotion, ma vie et ma mort appartiennent à Allah, Seigneur de l\'Univers.\'\n\'À Lui nul associé ! Et voilà ce qu\'il m\'a été ordonné, et je suis le premier à me soumettre. \'
",
     8:"\'Louange à Allah qui nous a guidés à ceci. Nous n\'aurions pas été guidés, si Allah ne nous avait pas guidés\'
",
     9:"\'Il dit: \' Ô Nuh (Noé), il n\'est pas de ta famille car il a commis un acte infâme. Ne me demande pas ce dont tu n\'as aucune connaissance. Je t\'exhorte afin que tu ne sois pas du nombre des ignorants. \'

\'Je place ma confiance en Allah, mon Seigneur et le vôtre. Il n\'y a pas d'être vivant qu\'Il ne tienne par son toupet. Mon Seigneur, certes, est sur un droit chemin\'

\'Et ma réussite ne dépend que d\'Allah. En Lui je place ma confiance, et c\'est vers Lui que je reviens repentant.\'
",
     10:"\' Ô mon Seigneur, fais de cette cité un lieu sûr, et préserve-moi ainsi que mes enfants de l\'adoration des idoles.\'
",
     11:"\' Gloire à ton Seigneur, le Seigneur de la puissance. Il est au-dessus de ce qu\'ils décrivent !\'
\' Et paix sur les Messagers,\'
\' et louange à Allah, Seigneur de l\'univers !\'",
     12:"
\'Ô Allah, Créateur des cieux et de la terre, Connaisseur de tout ce que le monde ignore comme de ce qu\'il perçoit, c\'est Toi qui jugeras entre Tes serviteurs ce sur quoi ils divergeaient.\'
",
     13:"\'Le Pardonneur des péchés, l\'Accueillant au repentir, le Dur en punition, le Détenteur des faveurs. Point de divinité à part Lui et vers Lui est la destination.\'

\'Bientôt vous vous rappellerez ce que je vous dis; et je confie mon sort à Allah. Allah est, certes, Clairvoyant sur les serviteurs.\'
",
     14:"\'afin que vous vous installiez sur leurs dos, et qu'ensuite, après vous y être installés, vous vous rappeliez le bienfait de votre Seigneur et que vous disiez: \' Gloire à Celui qui nous a soumis tout cela alors que nous n\'étions pas capables de les dominer.\'

\' Gloire au Seigneur des cieux et de la terre, Seigneur du Trône; Il transcende de ce qu\'ils décrivent.\'
",
     15:"\'Sache donc qu'en vérité il n\'y a point de divinité à part Allah et implore le pardon pour ton péché, ainsi que pour les croyants et les croyantes. Allah connaît vos activités (sur terre) et votre lieu de repos (dans l\'au-delà).\'
",
     16:"\'Seigneur, pardonne-nous, ainsi qu\'à nos frères qui nous ont précédés dans la foi; et ne mets dans nos cœurs aucune rancœur pour ceux qui ont cru. Seigneur, Tu es Compatissant et Très Miséricordieux. \'
",
     17:"\'Seigneur, c\'est en Toi que nous mettons notre confiance et à Toi nous revenons [repentants]. Et vers Toi est le Devenir.\'

\'Seigneur, ne fais pas de nous [un sujet] de tentation pour ceux qui ont mécru; et pardonne-nous, Seigneur, car c\'est Toi le Puissant, le Sage.\'
",
     18:"\'Seigneur, parfais-nous notre lumière et pardonne-nous. Car Tu es Omnipotent\'

\' Seigneur, construis-moi auprès de Toi une maison dans le Paradis\'
",
     19:"
\'Seigneur ! Pardonne-moi, et à mes père et mère et à celui qui entre dans ma demeure croyant, ainsi qu\'aux croyants et croyantes; et ne fais croître les injustes qu\'en perdition. \'
",
     20:"\' Dis: \' Il est Allah, Unique.
 Allah, Le Seul à être imploré pour ce que nous désirons.
 Il n\'a jamais engendré, n\'a pas été engendré non plus.
 Et nul n'est égal à Lui.  \'",
     21:"\' Dis: « Je cherche protection auprès du Seigneur de l\'aube naissante,
 contre le mal des êtres qu\'Il a créés,
 contre le mal de l\'obscurité quand elle s'approfondit,
 contre le mal de celles qui soufflent [les sorcières] sur les nœuds,
 et contre le mal de l'envieux quand il envie. »\'",
 //Ad3iya mina Sona
   s1:"Labbaik Allahoumma bi Omra Seigneur, Suite à ton appel, me voici voulant accomplir la Omra",
   s2:"Allahoumma mahilli haithou habastani O Allah, je serai là où Vous m’aurez retenu.
",
   s3:"Allahumma hadhihi Omra, laa riyaa'a feehaa wa laa sum'a Oh Allah, Il n’y a ni prétention ni réputation dans
cette Omra.",
   s4:"“labayqa Allahouma labayq, labayqa lâ charîk lak labayq, 'ina al-hamda wal ni`mata laka wal-moulk, lâ charîka lak” Me voici Oh Allah, (en réponse à Votre appel), me
voici. Me voici, Vous n’avez point d’associé, me
voici. Au fait tout Remerciement, Grâce et
Souveraineté sont à Vous. Vous n’avez point
d’associé",
   s5:"Labbaika ilaahal haqq Me voici Oh Maitre de la Vérité.",
   s6:"Allahoumma salli `alaa Mohamed wa sallim Allahoumma aftah lee abwaaba rahmatika Oh Allah, Prières et paix sur Mohammed, Oh Allah, ouvre moi les portes de Votre Miséricorde",
   s7:"Allahou Akbar (Allah est le plus Grand)
",
   s8:"Rabbanaa aatinaa fid-dunyaa hasanatan wa fil aakhirati hasanatan wa qinaa 'adhaaban naar Oh Seigneur! Donne-nous dans ce monde ce qui est
bien et dans l’autre monde ce qui est bien et sauvenous du tourment de l’enfer! ",
   s9:"Wattakhidhou mine-maqaami Ibrahima musalla
Et faire de la demeure d’Ibrahim une place de prière.",
   s10:"Allahou 'akbar, Allahou 'akbar, Allahou 'akbar, lâ 'ilaha 'ilâ Allah wahdahu lâ charîka lah, lahoulmoulkou wa lahoul-hamdou yuhy wa yumît, wa huwha `ala kulî chay'în qadîr, lâ 'ilaha 'ilâ Allah wahdahou lâ charîka lah, sadaqa wa`dah, wa nasara `abdah, wa hazama al-'ahzâb wahdah.
Allah est le plus Grand. Allah est le plus Grand. Allah
est le plus Grand. Il n’y a point d’autre divinité
qu’Allah, l’Unique qui n’a point d’associé. A Lui la
royauté et à Lui les louanges. C’est Lui qui donne la
vie et la mort, et Il a pouvoir sur toute chose. Il n’y a
point d’autre divinité qu’Allah, l’Unique qui n’a point
d’associé. Il a tenu Sa promesse, a accordé la
victoire à Son serviteur (Mohamed) et a défait tout
Seul les Coalisés",
   s11:"Oh Seigneur, Pardonne-moi et Sois Miséricordieux Certainement Vous etes le plus Noble et le plus
Généreux. ",
   s12:"Allahoumma salli 'ala Mohamed wa sallim. Allahoumma inni 'as'alouka mine fadhlika Oh Allah, Prière et Paix sur Mohamed,
Oh Allah, certainement je vous demande de Votre
Faveur
",
   s13:"Labbaik Allahoumma bi -hajjah Me voici Oh Allah, (En réponse a Votre appel) pour
faire le Hajj. ",
   s14:"“Labbak Allahouma Labbayk, Labbayk la sharika laka Labbayk Inna-l-hamda wa-anni’-mata laka walmoulk La sharika lak” Me voici Oh Allah, (en réponse à ton appel), me voici.
Me voici, Vous n’avez point d’associé, me voici. Au
fait toute Gratitude, Grâce et Souveraineté Vous
appartiennent. Vous n’avez point d’associé. ",
   s15:"Laa ilaha illAllahou wahdahou laa shareeka lahou lahoul moulk wa lahoul hamdou wa huwa 'alaa koulli
shay'in qadir ",
   s16:"Bismillaahi WAllahou Akbar Allahouma Inna Hadha Minka Wa Laka Allahouma Taqabbal Minni Au nom d’Allah et Allah est le plus Grand. Oh Allah,
 ceci est de Vous et à Vous. O Allah, Accepte le de
moi.
"
 }
 };
