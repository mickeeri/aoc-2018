const testInput = `
abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz
`;

const input = `
evsialkqydurohxqpwbcugtjmh
evsialkqydurohxzssbcngtjmv
fvlialkqydurohxzpwbcngujmf
nvsialkqydorohxzpwpcngtjmf
evsialjqydnrohxypwbcngtjmf
vvsialyqxdurohxzpwbcngtjmf
yvsialksydurowxzpwbcngtjmf
evsillkqydurbhxzpmbcngtjmf
ivsialkqyxurshxzpwbcngtjmf
ejsiagkqyduhohxzpwbcngtjmf
evsialkqldurohxzpcbcngtjmi
evsialkqydurohxzpsbyngtkmf
ersialkeydurohxzpwbcngtpmf
evsialuqzdkrohxzpwbcngtjmf
evswulkpydurohxzpwbcngtjmf
evsialkqyiurohxzpwucngttmf
evtialkqydurphxzywbcngtjmf
evsialkzyiurohxzpwbcxgtjmf
evsiaykqydurohxzpwbcggtjuf
evxqalkqydurohmzpwbcngtjmf
eisralkqydurohxzpdbcngtjmf
evsfalkqydurohxzpwbangtjwf
evbialkqydurohxzawbcngtjmg
evsialkqydrrohxrpcbcngtjmf
evsialkqycurohxzpvbcngtjkf
evsialkqsdudohxzpwbcnotjmf
evsiackqydurohxzpmbsngtjmf
evsialmqykurohxzpwbfngtjmf
evsialsqydurohxzpwucngtjxf
tvsialkqyeurohxzpwbcrgtjmf
zvsialkqydbrohxzpwbcnltjmf
evsmbskqydurohxzpwbcngtjmf
evsialkqydurohxzpwbcngpgmt
evsialkqydurlyezpwbcngtjmf
evoialkqyturohxzpwbcnjtjmf
evsialkqydurohxspkfcngtjmf
evsiaikqydurohxjpwbcngtjmd
evsialkyydurohxzvwbcngtjmc
svsialkqyduhohxzpwbhngtjmf
eysillkqydurohxzhwbcngtjmf
evsialkqyduetaxzpwbcngtjmf
evsialkqxdurshxzpwbcngtjmb
evsiadkqydwrovxzpwbcngtjmf
evsialkqydurokxzpwbcngjjef
evskalkqymurohxzpybcngtjmf
cvsialkqydurohxzpwbcnbtjma
evsialkqydurohxzawhcngtjuf
evsiahkqfduroixzpwbcngtjmf
evsivlkqyduroqxzpwbctgtjmf
evsiarkqyduroixzywbcngtjmf
evspalkqydurohxzpwlcngxjmf
eesialkqydurohxzpalcngtjmf
gvsualkqydurohxzpwbmngtjmf
evsialkqydurlhxzpwbcngsjmq
evsialhqydfrohxopwbcngtjmf
evzialkqydsrohxzpwbcngtjmw
evbpalkqydurbhxzpwbcngtjmf
mvsialkqydurohxzpwbcnghjmr
evsialkqsdurohxzpkbcngtjxf
ejkialktydurohxzpwbcngtjmf
evsialkqyauoohxzpwbqngtjmf
evsiklkyyduroqxzpwbcngtjmf
evgialkqydurohxzpwocngthmf
ebsialkqydcrohxzpwbcngtbmf
evsialkqysurohxzpwfingtjmf
evsialkqddurmhxzpwbnngtjmf
evsialkqydurohxoiwwcngtjmf
evsialkqydurohpzkzbcngtjmf
vvsealkqydurorxzpwbcngtjmf
evsialkqyduroqxzpwlungtjmf
eviialkqiyurohxzpwbcngtjmf
evzsalkqyaurohxzpwbcngtjmf
exsialkqydurohfzpwbwngtjmf
evsialkqyduruhxkpwbcnytjmf
essiatkqydurohxzpwbxngtjmf
evsialkqyduroamzpwbcngtjcf
wvsialkqyduruhxzpwbcnxtjmf
evsialkqydurohxgpwbcngtjeh
evsialfqxdurohxzpwbcngtomf
evsialkqyourghxzpwbcngtbmf
evsoaokqydurohxzpwbcngtamf
evsialpqydurohxzpwccxgtjmf
evsialkqzdurxhxgpwbcngtjmf
ezsialkqmdurohxzpwbcngtjmi
cvsialjeydurohxzpwbcngtjmf
evsialkqydurocxupwbcvgtjmf
evscalkqydtrohxzpebcngtjmf
evjialkqyduiohxzpabcngtjmf
evsialjqyduruhxzppbcngtjmf
evsialkqydurfhxzpwbcuqtjmf
evsialkqyiurohizpwucngttmf
evsialiqydurrhxzpwbcngdjmf
evbialkqywurohxzpwhcngtjmf
evsialkqyduloyxzpwbqngtjmf
evsialxqyduzohxzpwbqngtjmf
vvsialkqydurohxzpwbcnqpjmf
evsialksydurohxzcwbmngtjmf
pvsialkqydurohxzpwucngtjvf
evsialkqydurohmkpwbcngtfmf
mvsialkqydurphyzpwbcngtjmf
evsialkqydyrohxzhwbcnitjmf
evsialokydurozxzpwbcngtjmf
evsialkqyduroexfcwbcngtjmf
evsiavkqydurohxzpwbcnmtjme
evsiawkqydurohxzpwbcngojjf
evsialkaydurohxzpwfcngtjff
evsialkaydurohxzpwbcngtjpb
gvsialkqyburorxzpwbcngtjmf
evszalkqydurphxzpwocngtjmf
evsualkqyduropxzpwbcngejmf
evsitlkqydurshxzpwbcngtkmf
evbixlkqydrrohxzpwbcngtjmf
elsialkqydprohxzpwbcngtrmf
evsialkqydurohbzpwbcggtjmc
evtoalqqydurohxzpwbcngtjmf
evsralhqydurohxzowbcngtjmf
evsialkhydurohxzlsbcngtjmf
evsialkqydurohxvpwbcnuujmf
evsialkqydurocxzuwbcngtjmi
evsialkqndyrokxzpwbcngtjmf
evsialkqydurywfzpwbcngtjmf
evsialkqydurohxzwwbcngthms
eqsiahkqydurohxzpwbyngtjmf
evsdalkqydurohxzpwbcnjkjmf
evsialkqyddrohplpwbcngtjmf
evshalkqydurohxzpfxcngtjmf
evvialkqydurohxapwbcngtjmh
evsialkqyduvohxzpwbcnnvjmf
evsiblkqedurohxzpwbkngtjmf
evsvalkqfdutohxzpwbcngtjmf
evsialjqydurohxzpwbcnctjsf
evsialkxywurohxdpwbcngtjmf
evsiagkqydurohxzpwzcjgtjmf
ebsialkqydurohxzpxfcngtjmf
evsialkqysfrohxzpwbcngtjlf
evvialkqyqurwhxzpwbcngtjmf
evxialkqydurohxzpwgcnrtjmf
vvsillkqydurohxzpwbcvgtjmf
evsiwlkqyduoohxzpwbcngtjxf
evsialkqypurohezpwbcngtjwf
evbialkqydurohxipwbcnftjmf
evsiakkqyduyohxzpwbcngtjmu
evsialkqydurohzzpwxqngtjmf
evsialkqykurkhxzpwocngtjmf
dvriplkqydurohxzpwbcngtjmf
evsialkqgdurohxzpwbmnctjmf
evsialkqyuurohxzpwtcngtjmj
wvsialkqydurohxzpwbchgejmf
eusimlsqydurohxzpwbcngtjmf
evsialkqydqrohxzhwbcngtjmh
wvswalkqydurohxzpwbcngjjmf
evsialkqyourohxzkwbcngttmf
evaialkqydurohxzbubcngtjmf
evfialkqydueohxzpwbclgtjmf
evrialkqydurohxzpwbcnctjmh
evsiaojqydxrohxzpwbcngtjmf
evsualkqywuxohxzpwbcngtjmf
evsialkdydrzohxzpwbcngtjmf
evlialkqyfurohxzpwbcnotjmf
epsialkqydujohxzpwbcngtjif
evsialkqyaucohxgpwbcngtjmf
lvsialaqydurohxzpwbcngtjzf
evsialkgydurohezpwbcngtjmo
lvsialkqydurosxwpwbcngtjmf
evsiaekqyqurohxzpvbcngtjmf
evsiapkqydirohxzpwbzngtjmf
zvsixlkwydurohxzpwbcngtjmf
evaialkqyduoohxzpwbcngtjkf
evsialcqedurohxzpwbcngtjmc
evjialkgydurohxzpwbwngtjmf
evsialkqcdurohxzpwbcpgojmf
evsialkqkdurohxzlwbcngtrmf
eosiylkzydurohxzpwbcngtjmf
evsialkqydurohhzpwscnmtjmf
evsiallqydurobxzpwbxngtjmf
evsialkqydurohwztwhcngtjmf
evsiallqydurohxzpwbcygjjmf
evsiabkqywurohxzpwbcngtjmy
evsiackqydzrohxznwbcngtjmf
evsiazkqzdurooxzpwbcngtjmf
evsialcqydurghxzpwbcngtjmc
yvsiaxkqydurohxzpwbcxgtjmf
evsiylkqgdhrohxzpwbcngtjmf
lvsialkqydurohxgcwbcngtjmf
evsiglkqydurohxzpwbvngzjmf
evsialkqyvurohxzpwbcngtjnz
evsialkgydueohxzpwbcpgtjmf
cvsiavkqyddrohxzpwbcngtjmf
evsialklyrurohxzpwbcngtjff
eisialkqyduwohxzpwbcngcjmf
evsialkqydrrihwzpwbcngtjmf
easialkqydurohxzpwbcnltrmf
evsialfqydurohxzpybcnytjmf
eqsialkqycurohxzywbcngtjmf
evsitlkqmdurohxzpwbcngtjmx
evsiclsqyduroixzpwbcngtjmf
elsialrqydurohxzpwmcngtjmf
evsiapkqodurohxzpwbcogtjmf
evstalkeydurohxzpibcngtjmf
evsihlkqyqurohxzpwblngtjmf
euszalkqydurohxipwbcngtjmf
ezsialksydurohxzpwbcngfjmf
eisialkdydurohxzpwbcngtumf
evsirlkaydprohxzpwbcngtjmf
evsiklkqydnrohxzpwbcngtjmu
evsialkqydnuohxzpwbcngtjmu
eksialkqydurohxztwfcngtjmf
evlialkqedurohxzpwbhngtjmf
evqialkqydurohxzpubcngtjpf
evsialkwydurohwzpwbcnmtjmf
evsiaokqcdurohxzpwbcngtjcf
evsialkkyfurohxzpvbcngtjmf
evsialkqyduromxzpwqcngtimf
evsialkqydumohxzpwbcnmtjsf
evsialddydurehxzpwbcngtjmf
evsialkqydurohxzpobcnptjmk
evsiagkqydurohhzpwbcxgtjmf
evsfalkqydurohszpwbangtjmf
evgialkzyduqohxzpwbcngtjmf
evaialkqzdurohxzpwbcngtjmo
evsialkqyqurohxjpwbcnntjmf
evsialkjydybohxzpwbcngtjmf
evskalgqydurohxzrwbcngtjmf
evsialkqydurohxzpjbcymtjmf
evsialkqqdurohxzpybcngtjyf
evsialkqydqrbhxzpwbcngtjmj
evssalaqrdurohxzpwbcngtjmf
mvsialkfydurohxzpwbcngtjmk
evsialkqwdurohxzpwgcngtjdf
evqkalkqydurohxzpwbcngajmf
evbialkqydurohxzpibcngejmf
evszalkqydurbhxzpwbcngtjsf
evsialkqydurohxepwbcngtjjo
evsialkqcdubmhxzpwbcngtjmf
evsiarkqyduroaxzpwbcngtjmp
evsiakkqyduzohczpwbcngtjmf
evtualkqydurofxzpwbcngtjmf
ejsialkqvdurohzzpwbcngtjmf
evsialkqydurohczpwbcngqvmf
svsianfqydurohxzpwbcngtjmf
evsialiqydurohxzpwbcngzqmf
ejsialhqydurohxzpwjcngtjmf
evpialkqydurohxzpwbcnbtjff
evsialkuyvurohxzpwbcngtjkf
eqsialkqydurohxzpwbcnwtcmf
evsiatkqydkrohxzpwkcngtjmf
evsialkqydurohxzpebciytjmf
evsialkqydrrohxzpwtcngtfmf
evsialkqjducohxzpwycngtjmf
evsialkqydurohxzpwicnxtjnf
`;

function getResult(input) {
  const ids = input.trim().split('\n');
  let commonLetters = '';

  ids.forEach(currentId => {
    ids.forEach(compareId => {
      const currentIdChars = [...currentId];
      const compareIdChars = [...compareId];

      let diff = 0;
      let diffIndex = '';

      compareIdChars.forEach((char, i) => {
        if (char !== currentIdChars[i]) {
          diffIndex = i;
          diff++;
        }
      });

      if (diff === 1) {
        commonLetters = [
          ...[...currentId].splice(0, diffIndex),
          ...[...currentId].splice(diffIndex + 1),
        ].join('');
      }
    });
  });

  return commonLetters;
}

console.log(getResult(input));
