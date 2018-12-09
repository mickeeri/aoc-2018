const testInput = `
#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2
`;

const input = `
#1 @ 661,227: 29x11
#2 @ 391,45: 27x20
#3 @ 467,241: 23x12
#4 @ 120,334: 18x28
#5 @ 671,406: 28x16
#6 @ 422,790: 23x12
#7 @ 321,868: 13x17
#8 @ 509,931: 11x20
#9 @ 362,833: 26x20
#10 @ 968,503: 27x16
#11 @ 479,146: 26x25
#12 @ 269,129: 25x14
#13 @ 78,880: 25x17
#14 @ 141,545: 11x16
#15 @ 765,139: 21x29
#16 @ 609,202: 13x16
#17 @ 582,471: 22x21
#18 @ 587,65: 10x17
#19 @ 979,416: 18x23
#20 @ 904,488: 16x26
#21 @ 601,930: 12x23
#22 @ 561,647: 24x26
#23 @ 814,263: 18x27
#24 @ 576,362: 20x18
#25 @ 153,177: 11x18
#26 @ 128,252: 25x18
#27 @ 522,934: 20x13
#28 @ 781,779: 11x25
#29 @ 668,723: 22x28
#30 @ 486,100: 16x13
#31 @ 591,470: 27x16
#32 @ 142,531: 18x15
#33 @ 732,362: 24x10
#34 @ 951,773: 28x27
#35 @ 383,901: 15x23
#36 @ 269,710: 20x10
#37 @ 395,572: 17x18
#38 @ 840,314: 19x14
#39 @ 586,939: 20x15
#40 @ 252,876: 16x29
#41 @ 405,303: 10x11
#42 @ 688,462: 27x20
#43 @ 18,345: 24x22
#44 @ 837,439: 24x22
#45 @ 916,32: 27x11
#46 @ 629,237: 24x10
#47 @ 527,477: 20x15
#48 @ 264,798: 29x14
#49 @ 368,236: 29x26
#50 @ 913,643: 13x18
#51 @ 547,923: 24x10
#52 @ 873,690: 22x20
#53 @ 535,506: 3x10
#54 @ 632,282: 10x13
#55 @ 103,669: 26x24
#56 @ 271,317: 3x3
#57 @ 391,863: 22x16
#58 @ 511,164: 17x20
#59 @ 936,259: 26x24
#60 @ 844,927: 23x29
#61 @ 968,814: 16x24
#62 @ 650,478: 13x16
#63 @ 226,896: 22x15
#64 @ 930,165: 26x23
#65 @ 287,885: 25x24
#66 @ 948,620: 22x21
#67 @ 726,843: 20x27
#68 @ 10,425: 14x16
#69 @ 318,574: 11x26
#70 @ 623,639: 14x23
#71 @ 449,426: 28x15
#72 @ 727,691: 23x22
#73 @ 535,120: 16x21
#74 @ 490,348: 13x29
#75 @ 588,653: 5x7
#76 @ 345,588: 13x26
#77 @ 637,523: 21x22
#78 @ 749,374: 25x20
#79 @ 523,256: 14x19
#80 @ 72,395: 15x26
#81 @ 580,845: 12x26
#82 @ 377,462: 10x19
#83 @ 686,21: 21x11
#84 @ 882,745: 20x10
#85 @ 525,162: 13x18
#86 @ 355,27: 11x29
#87 @ 818,943: 17x26
#88 @ 863,143: 16x27
#89 @ 980,632: 10x16
#90 @ 376,804: 17x28
#91 @ 584,548: 10x18
#92 @ 273,455: 11x25
#93 @ 13,347: 11x15
#94 @ 167,34: 29x23
#95 @ 405,203: 14x22
#96 @ 214,395: 14x29
#97 @ 513,356: 22x25
#98 @ 406,802: 24x12
#99 @ 506,941: 10x27
#100 @ 737,6: 10x24
#101 @ 217,478: 26x11
#102 @ 912,86: 25x26
#103 @ 388,495: 15x12
#104 @ 924,804: 10x11
#105 @ 335,646: 28x27
#106 @ 739,71: 12x16
#107 @ 600,87: 15x13
#108 @ 93,360: 22x22
#109 @ 656,616: 23x18
#110 @ 9,457: 29x14
#111 @ 965,620: 19x14
#112 @ 343,26: 23x13
#113 @ 279,72: 17x16
#114 @ 789,653: 13x20
#115 @ 199,211: 16x23
#116 @ 529,849: 24x23
#117 @ 975,605: 13x16
#118 @ 749,907: 24x24
#119 @ 641,318: 26x12
#120 @ 299,356: 16x5
#121 @ 745,897: 20x27
#122 @ 308,476: 10x28
#123 @ 838,835: 28x14
#124 @ 315,697: 17x17
#125 @ 896,654: 26x29
#126 @ 83,115: 19x14
#127 @ 872,71: 16x15
#128 @ 722,846: 27x14
#129 @ 34,807: 22x28
#130 @ 718,523: 12x24
#131 @ 852,276: 10x25
#132 @ 823,716: 22x15
#133 @ 297,352: 23x13
#134 @ 348,818: 21x29
#135 @ 444,538: 13x21
#136 @ 670,588: 25x28
#137 @ 669,391: 20x12
#138 @ 416,799: 22x11
#139 @ 126,931: 25x10
#140 @ 667,310: 26x26
#141 @ 770,497: 18x27
#142 @ 718,575: 10x28
#143 @ 734,793: 16x24
#144 @ 190,687: 28x29
#145 @ 155,917: 13x29
#146 @ 479,336: 22x23
#147 @ 476,28: 22x16
#148 @ 902,551: 17x17
#149 @ 173,711: 22x18
#150 @ 268,468: 19x20
#151 @ 89,73: 11x18
#152 @ 122,400: 10x10
#153 @ 684,306: 18x10
#154 @ 537,83: 4x20
#155 @ 512,638: 27x16
#156 @ 184,753: 24x26
#157 @ 844,376: 27x14
#158 @ 423,741: 21x19
#159 @ 47,171: 17x23
#160 @ 153,362: 20x28
#161 @ 437,744: 12x29
#162 @ 329,325: 14x18
#163 @ 736,80: 24x23
#164 @ 892,397: 19x12
#165 @ 287,735: 18x18
#166 @ 341,592: 26x29
#167 @ 814,843: 15x24
#168 @ 599,99: 21x21
#169 @ 907,356: 11x13
#170 @ 389,581: 17x13
#171 @ 760,314: 22x13
#172 @ 201,830: 26x16
#173 @ 974,456: 24x27
#174 @ 734,8: 29x23
#175 @ 365,716: 21x29
#176 @ 979,525: 17x21
#177 @ 375,143: 24x11
#178 @ 607,79: 23x14
#179 @ 345,343: 19x11
#180 @ 695,816: 10x29
#181 @ 600,24: 10x22
#182 @ 321,769: 26x23
#183 @ 749,677: 20x26
#184 @ 589,400: 19x24
#185 @ 129,685: 18x11
#186 @ 181,961: 22x19
#187 @ 631,260: 11x23
#188 @ 910,766: 21x27
#189 @ 270,690: 10x18
#190 @ 299,74: 19x25
#191 @ 97,340: 23x29
#192 @ 361,595: 23x19
#193 @ 483,514: 12x11
#194 @ 428,941: 27x19
#195 @ 56,213: 28x25
#196 @ 166,786: 28x29
#197 @ 773,503: 15x13
#198 @ 370,10: 18x26
#199 @ 319,551: 28x20
#200 @ 677,596: 10x22
#201 @ 651,26: 24x21
#202 @ 71,536: 25x21
#203 @ 220,48: 23x16
#204 @ 104,38: 16x14
#205 @ 503,388: 10x19
#206 @ 610,829: 16x12
#207 @ 926,772: 23x14
#208 @ 548,69: 26x13
#209 @ 535,293: 26x12
#210 @ 411,767: 23x25
#211 @ 306,230: 24x25
#212 @ 338,429: 26x18
#213 @ 781,134: 22x20
#214 @ 834,968: 28x19
#215 @ 578,182: 21x11
#216 @ 851,158: 23x10
#217 @ 536,506: 5x5
#218 @ 229,804: 16x19
#219 @ 766,398: 14x13
#220 @ 342,185: 13x15
#221 @ 62,83: 10x11
#222 @ 31,433: 29x26
#223 @ 526,160: 21x17
#224 @ 18,574: 16x26
#225 @ 625,411: 21x17
#226 @ 406,15: 20x29
#227 @ 643,864: 11x15
#228 @ 472,148: 5x5
#229 @ 67,749: 18x27
#230 @ 860,389: 24x20
#231 @ 261,140: 19x28
#232 @ 699,562: 28x12
#233 @ 344,131: 16x21
#234 @ 363,443: 20x21
#235 @ 857,4: 29x19
#236 @ 378,845: 21x19
#237 @ 151,546: 25x18
#238 @ 568,483: 22x10
#239 @ 833,799: 23x16
#240 @ 623,219: 19x29
#241 @ 776,663: 12x24
#242 @ 604,247: 15x17
#243 @ 933,589: 11x10
#244 @ 237,793: 18x25
#245 @ 780,661: 23x12
#246 @ 881,684: 18x20
#247 @ 287,363: 24x13
#248 @ 302,558: 11x14
#249 @ 691,378: 19x27
#250 @ 698,400: 27x24
#251 @ 818,773: 10x25
#252 @ 94,694: 24x20
#253 @ 869,623: 24x12
#254 @ 951,529: 19x27
#255 @ 468,86: 18x18
#256 @ 303,818: 11x22
#257 @ 905,923: 21x14
#258 @ 901,720: 15x13
#259 @ 40,911: 11x27
#260 @ 434,790: 14x17
#261 @ 373,229: 17x20
#262 @ 751,345: 14x14
#263 @ 562,199: 25x11
#264 @ 133,279: 17x17
#265 @ 261,109: 22x22
#266 @ 36,831: 20x10
#267 @ 512,603: 16x23
#268 @ 972,785: 24x21
#269 @ 472,627: 22x20
#270 @ 576,454: 16x23
#271 @ 521,87: 16x18
#272 @ 386,911: 13x24
#273 @ 201,699: 14x15
#274 @ 33,898: 13x28
#275 @ 459,33: 15x11
#276 @ 362,863: 24x20
#277 @ 599,570: 16x16
#278 @ 385,299: 15x18
#279 @ 676,408: 18x14
#280 @ 680,298: 28x23
#281 @ 267,66: 15x18
#282 @ 635,207: 11x18
#283 @ 398,318: 18x28
#284 @ 356,111: 16x13
#285 @ 137,416: 16x12
#286 @ 758,68: 12x29
#287 @ 709,701: 19x22
#288 @ 862,189: 20x28
#289 @ 18,855: 13x18
#290 @ 526,81: 24x25
#291 @ 740,8: 3x8
#292 @ 670,298: 14x21
#293 @ 588,755: 14x14
#294 @ 414,786: 4x8
#295 @ 103,22: 20x17
#296 @ 665,82: 20x20
#297 @ 957,786: 13x11
#298 @ 200,926: 14x26
#299 @ 348,694: 29x19
#300 @ 461,371: 25x12
#301 @ 631,24: 13x25
#302 @ 286,380: 24x23
#303 @ 331,391: 12x14
#304 @ 408,19: 5x20
#305 @ 280,448: 16x25
#306 @ 408,281: 15x24
#307 @ 835,43: 14x22
#308 @ 886,340: 27x23
#309 @ 308,276: 17x15
#310 @ 893,498: 21x24
#311 @ 139,132: 20x27
#312 @ 138,203: 24x14
#313 @ 531,114: 13x25
#314 @ 633,543: 29x15
#315 @ 550,208: 27x14
#316 @ 294,362: 21x17
#317 @ 140,702: 9x11
#318 @ 929,771: 26x10
#319 @ 822,727: 25x13
#320 @ 461,227: 23x26
#321 @ 324,669: 24x17
#322 @ 169,858: 19x17
#323 @ 490,942: 17x19
#324 @ 537,884: 25x21
#325 @ 709,266: 26x25
#326 @ 265,867: 24x13
#327 @ 269,79: 24x27
#328 @ 922,878: 18x17
#329 @ 694,319: 11x17
#330 @ 524,864: 11x17
#331 @ 886,823: 20x10
#332 @ 479,153: 7x11
#333 @ 161,788: 27x14
#334 @ 948,558: 28x25
#335 @ 886,592: 12x25
#336 @ 779,23: 29x14
#337 @ 795,367: 10x15
#338 @ 101,532: 4x20
#339 @ 671,528: 29x29
#340 @ 651,607: 27x20
#341 @ 88,833: 17x11
#342 @ 346,560: 24x27
#343 @ 378,654: 23x10
#344 @ 262,506: 29x14
#345 @ 108,71: 24x16
#346 @ 703,275: 25x29
#347 @ 48,86: 28x24
#348 @ 399,14: 12x24
#349 @ 150,121: 26x24
#350 @ 548,709: 28x16
#351 @ 65,850: 28x18
#352 @ 361,590: 14x13
#353 @ 307,400: 23x11
#354 @ 656,705: 16x24
#355 @ 823,894: 13x16
#356 @ 96,367: 21x29
#357 @ 653,316: 13x12
#358 @ 702,966: 12x18
#359 @ 734,84: 21x25
#360 @ 511,288: 18x28
#361 @ 722,131: 28x16
#362 @ 646,701: 24x27
#363 @ 633,333: 12x11
#364 @ 312,379: 25x15
#365 @ 513,364: 16x18
#366 @ 661,229: 22x21
#367 @ 801,132: 29x12
#368 @ 383,902: 14x29
#369 @ 817,437: 27x12
#370 @ 342,625: 16x28
#371 @ 575,858: 26x11
#372 @ 671,315: 29x22
#373 @ 635,409: 27x17
#374 @ 65,5: 23x12
#375 @ 2,590: 23x13
#376 @ 452,345: 11x22
#377 @ 104,967: 19x28
#378 @ 470,150: 15x18
#379 @ 728,730: 29x21
#380 @ 900,125: 13x29
#381 @ 283,848: 26x13
#382 @ 379,245: 16x17
#383 @ 42,754: 26x11
#384 @ 292,460: 28x19
#385 @ 46,228: 16x14
#386 @ 534,291: 11x24
#387 @ 407,2: 29x22
#388 @ 443,736: 12x20
#389 @ 852,869: 19x10
#390 @ 607,309: 16x29
#391 @ 496,42: 13x10
#392 @ 250,689: 21x14
#393 @ 296,564: 24x17
#394 @ 566,456: 20x29
#395 @ 293,743: 27x24
#396 @ 180,48: 17x16
#397 @ 972,531: 16x17
#398 @ 623,775: 23x17
#399 @ 611,777: 14x13
#400 @ 303,147: 23x20
#401 @ 680,707: 28x24
#402 @ 384,29: 17x21
#403 @ 280,261: 24x15
#404 @ 784,633: 11x27
#405 @ 366,250: 16x17
#406 @ 141,228: 27x19
#407 @ 381,872: 12x24
#408 @ 633,851: 26x28
#409 @ 441,825: 27x29
#410 @ 214,255: 17x22
#411 @ 213,393: 27x28
#412 @ 899,103: 23x23
#413 @ 382,48: 28x22
#414 @ 508,241: 19x29
#415 @ 730,864: 13x17
#416 @ 252,73: 29x19
#417 @ 481,38: 19x16
#418 @ 486,642: 20x10
#419 @ 146,680: 15x27
#420 @ 548,218: 24x17
#421 @ 902,561: 27x13
#422 @ 531,434: 22x18
#423 @ 595,242: 17x18
#424 @ 601,506: 27x14
#425 @ 181,869: 15x20
#426 @ 93,903: 12x20
#427 @ 554,138: 11x26
#428 @ 444,835: 15x23
#429 @ 117,391: 11x27
#430 @ 64,127: 7x5
#431 @ 25,75: 24x28
#432 @ 19,728: 23x16
#433 @ 114,844: 29x18
#434 @ 272,134: 3x5
#435 @ 970,666: 25x10
#436 @ 6,981: 25x10
#437 @ 933,15: 14x20
#438 @ 829,147: 18x24
#439 @ 670,395: 29x25
#440 @ 67,296: 26x11
#441 @ 308,872: 6x3
#442 @ 752,394: 13x12
#443 @ 673,904: 16x15
#444 @ 234,114: 10x27
#445 @ 262,867: 21x18
#446 @ 495,49: 13x14
#447 @ 370,635: 27x27
#448 @ 275,632: 28x13
#449 @ 953,556: 27x10
#450 @ 771,360: 20x26
#451 @ 814,133: 19x23
#452 @ 694,800: 28x23
#453 @ 885,506: 29x26
#454 @ 41,799: 23x20
#455 @ 358,267: 21x17
#456 @ 386,653: 18x16
#457 @ 529,342: 28x21
#458 @ 687,483: 10x25
#459 @ 774,660: 12x19
#460 @ 713,704: 10x17
#461 @ 757,366: 11x16
#462 @ 479,34: 18x20
#463 @ 315,700: 22x18
#464 @ 149,366: 12x25
#465 @ 57,730: 22x21
#466 @ 773,495: 13x18
#467 @ 951,618: 10x22
#468 @ 367,772: 25x26
#469 @ 700,380: 23x14
#470 @ 873,807: 19x11
#471 @ 282,152: 19x24
#472 @ 866,705: 22x29
#473 @ 464,54: 11x21
#474 @ 164,131: 19x24
#475 @ 789,575: 20x16
#476 @ 310,86: 28x17
#477 @ 768,325: 12x10
#478 @ 790,274: 18x27
#479 @ 19,430: 22x14
#480 @ 42,813: 11x19
#481 @ 961,815: 18x23
#482 @ 288,947: 16x17
#483 @ 958,779: 10x29
#484 @ 91,114: 12x24
#485 @ 580,471: 14x22
#486 @ 399,908: 29x24
#487 @ 322,140: 27x16
#488 @ 288,914: 4x8
#489 @ 377,715: 10x25
#490 @ 136,697: 18x24
#491 @ 887,810: 16x24
#492 @ 941,762: 29x26
#493 @ 42,210: 29x24
#494 @ 182,332: 14x22
#495 @ 123,847: 27x10
#496 @ 178,309: 24x23
#497 @ 917,668: 28x16
#498 @ 521,926: 15x20
#499 @ 148,128: 11x23
#500 @ 589,76: 13x11
#501 @ 783,575: 4x13
#502 @ 520,88: 29x10
#503 @ 300,827: 29x22
#504 @ 641,537: 25x29
#505 @ 876,693: 15x13
#506 @ 515,879: 28x17
#507 @ 485,515: 24x12
#508 @ 100,886: 19x10
#509 @ 261,851: 23x17
#510 @ 678,735: 17x26
#511 @ 740,144: 27x12
#512 @ 300,609: 25x15
#513 @ 924,625: 21x11
#514 @ 599,43: 23x16
#515 @ 630,17: 25x18
#516 @ 366,743: 10x28
#517 @ 496,319: 16x13
#518 @ 745,667: 24x13
#519 @ 494,387: 26x12
#520 @ 200,359: 20x16
#521 @ 853,373: 21x19
#522 @ 329,311: 24x25
#523 @ 959,531: 23x22
#524 @ 78,358: 23x14
#525 @ 223,266: 28x19
#526 @ 916,338: 13x20
#527 @ 672,331: 19x17
#528 @ 750,346: 18x24
#529 @ 212,387: 19x20
#530 @ 245,804: 11x15
#531 @ 867,849: 23x14
#532 @ 182,808: 12x22
#533 @ 718,719: 29x22
#534 @ 120,965: 14x11
#535 @ 644,406: 16x23
#536 @ 879,575: 14x23
#537 @ 529,409: 19x18
#538 @ 824,315: 16x23
#539 @ 531,502: 18x16
#540 @ 657,478: 18x23
#541 @ 943,790: 14x15
#542 @ 77,741: 25x17
#543 @ 665,518: 18x16
#544 @ 253,882: 13x6
#545 @ 517,735: 18x21
#546 @ 123,711: 16x11
#547 @ 902,865: 27x28
#548 @ 304,383: 19x27
#549 @ 790,556: 18x18
#550 @ 291,509: 22x29
#551 @ 801,452: 10x18
#552 @ 188,239: 29x15
#553 @ 103,979: 6x4
#554 @ 973,98: 27x28
#555 @ 948,811: 25x24
#556 @ 496,644: 24x26
#557 @ 508,326: 10x22
#558 @ 764,396: 26x19
#559 @ 442,428: 12x14
#560 @ 883,976: 10x24
#561 @ 168,556: 19x23
#562 @ 965,569: 26x19
#563 @ 640,800: 16x28
#564 @ 471,535: 11x18
#565 @ 595,444: 5x5
#566 @ 629,455: 23x17
#567 @ 639,870: 17x5
#568 @ 204,781: 25x22
#569 @ 313,812: 11x25
#570 @ 246,591: 25x26
#571 @ 388,879: 13x16
#572 @ 408,854: 18x22
#573 @ 497,933: 17x28
#574 @ 224,278: 26x22
#575 @ 35,812: 10x23
#576 @ 347,631: 28x27
#577 @ 854,145: 14x22
#578 @ 171,515: 29x11
#579 @ 413,872: 5x7
#580 @ 740,8: 24x11
#581 @ 700,571: 12x24
#582 @ 64,694: 21x25
#583 @ 648,327: 12x25
#584 @ 546,318: 26x18
#585 @ 959,432: 28x29
#586 @ 853,580: 17x29
#587 @ 11,353: 15x14
#588 @ 152,901: 24x22
#589 @ 584,394: 15x14
#590 @ 291,741: 19x18
#591 @ 11,451: 24x13
#592 @ 395,40: 11x21
#593 @ 107,278: 22x26
#594 @ 437,853: 26x25
#595 @ 793,125: 23x26
#596 @ 521,153: 10x29
#597 @ 566,627: 18x19
#598 @ 492,101: 19x17
#599 @ 239,506: 11x21
#600 @ 25,433: 11x4
#601 @ 977,488: 12x24
#602 @ 537,669: 29x13
#603 @ 368,503: 6x11
#604 @ 789,516: 19x12
#605 @ 247,318: 18x28
#606 @ 20,186: 27x25
#607 @ 882,732: 21x11
#608 @ 26,633: 10x12
#609 @ 101,826: 26x24
#610 @ 17,644: 27x19
#611 @ 727,881: 23x19
#612 @ 955,436: 24x24
#613 @ 545,429: 19x13
#614 @ 438,304: 16x11
#615 @ 587,567: 14x18
#616 @ 108,862: 11x29
#617 @ 307,270: 18x14
#618 @ 242,255: 25x13
#619 @ 490,365: 25x23
#620 @ 752,94: 11x12
#621 @ 844,848: 26x11
#622 @ 846,436: 17x15
#623 @ 185,30: 14x23
#624 @ 668,232: 21x13
#625 @ 294,329: 23x15
#626 @ 492,35: 13x18
#627 @ 232,909: 4x8
#628 @ 278,169: 29x10
#629 @ 829,885: 22x21
#630 @ 961,608: 27x13
#631 @ 375,227: 19x19
#632 @ 131,235: 20x10
#633 @ 621,891: 12x10
#634 @ 141,684: 14x22
#635 @ 450,846: 29x13
#636 @ 403,579: 12x23
#637 @ 900,549: 22x22
#638 @ 858,369: 17x11
#639 @ 166,116: 24x29
#640 @ 640,539: 12x12
#641 @ 461,821: 18x11
#642 @ 692,744: 27x29
#643 @ 521,286: 24x21
#644 @ 920,554: 29x14
#645 @ 625,876: 24x23
#646 @ 568,902: 28x10
#647 @ 270,695: 18x15
#648 @ 466,929: 23x19
#649 @ 566,852: 15x18
#650 @ 97,913: 22x16
#651 @ 598,111: 17x17
#652 @ 681,22: 16x19
#653 @ 350,822: 12x17
#654 @ 314,676: 13x11
#655 @ 211,115: 12x16
#656 @ 854,290: 18x11
#657 @ 890,566: 27x14
#658 @ 465,220: 15x11
#659 @ 814,838: 14x11
#660 @ 297,278: 15x26
#661 @ 479,544: 15x29
#662 @ 251,880: 20x13
#663 @ 728,250: 24x17
#664 @ 768,867: 10x28
#665 @ 964,79: 22x20
#666 @ 194,56: 10x29
#667 @ 523,403: 27x28
#668 @ 104,409: 27x22
#669 @ 786,631: 10x16
#670 @ 514,859: 22x20
#671 @ 357,134: 19x17
#672 @ 160,504: 26x25
#673 @ 80,548: 28x17
#674 @ 617,628: 19x13
#675 @ 849,317: 23x19
#676 @ 889,569: 10x10
#677 @ 238,156: 29x12
#678 @ 292,954: 24x11
#679 @ 875,909: 23x15
#680 @ 722,592: 23x27
#681 @ 375,287: 29x24
#682 @ 690,417: 15x12
#683 @ 766,67: 18x20
#684 @ 686,895: 14x21
#685 @ 616,89: 13x23
#686 @ 395,105: 20x24
#687 @ 624,541: 12x20
#688 @ 663,413: 14x25
#689 @ 226,804: 29x29
#690 @ 724,219: 29x28
#691 @ 245,609: 22x18
#692 @ 402,207: 27x26
#693 @ 640,441: 24x24
#694 @ 529,951: 28x29
#695 @ 402,941: 26x12
#696 @ 719,599: 13x27
#697 @ 125,367: 14x13
#698 @ 740,226: 19x20
#699 @ 559,466: 21x10
#700 @ 899,167: 13x14
#701 @ 616,514: 14x29
#702 @ 787,556: 17x6
#703 @ 336,170: 16x23
#704 @ 444,115: 26x24
#705 @ 908,767: 19x24
#706 @ 411,937: 17x23
#707 @ 601,463: 19x13
#708 @ 105,305: 26x13
#709 @ 711,736: 11x24
#710 @ 2,463: 13x28
#711 @ 878,829: 27x16
#712 @ 385,448: 27x15
#713 @ 203,393: 24x23
#714 @ 274,325: 10x24
#715 @ 198,975: 16x11
#716 @ 52,660: 10x16
#717 @ 239,583: 12x26
#718 @ 299,277: 21x22
#719 @ 121,287: 27x10
#720 @ 578,464: 24x23
#721 @ 57,149: 14x23
#722 @ 808,150: 26x10
#723 @ 249,476: 27x25
#724 @ 933,76: 12x29
#725 @ 156,913: 12x19
#726 @ 950,778: 27x17
#727 @ 963,863: 27x12
#728 @ 115,809: 14x17
#729 @ 263,636: 18x25
#730 @ 281,278: 22x17
#731 @ 598,151: 29x28
#732 @ 948,678: 19x16
#733 @ 343,779: 10x19
#734 @ 40,65: 16x11
#735 @ 968,207: 12x28
#736 @ 852,919: 24x17
#737 @ 288,793: 11x10
#738 @ 591,720: 13x11
#739 @ 700,419: 17x28
#740 @ 98,718: 15x27
#741 @ 330,555: 20x28
#742 @ 198,636: 27x14
#743 @ 134,234: 10x12
#744 @ 648,687: 11x13
#745 @ 585,571: 12x14
#746 @ 715,784: 24x21
#747 @ 334,17: 18x14
#748 @ 880,610: 11x18
#749 @ 290,504: 22x25
#750 @ 168,273: 28x13
#751 @ 672,395: 11x3
#752 @ 293,810: 12x23
#753 @ 642,437: 23x27
#754 @ 708,955: 15x28
#755 @ 601,82: 22x10
#756 @ 381,202: 25x25
#757 @ 319,148: 13x12
#758 @ 398,312: 19x27
#759 @ 80,398: 15x15
#760 @ 406,381: 15x23
#761 @ 949,354: 28x13
#762 @ 900,88: 18x11
#763 @ 812,123: 24x15
#764 @ 793,287: 26x13
#765 @ 195,755: 23x18
#766 @ 791,653: 22x13
#767 @ 622,825: 13x11
#768 @ 328,230: 14x22
#769 @ 788,766: 10x14
#770 @ 4,121: 20x18
#771 @ 168,248: 25x10
#772 @ 661,602: 10x11
#773 @ 338,576: 27x25
#774 @ 357,595: 14x26
#775 @ 565,66: 15x23
#776 @ 941,447: 28x12
#777 @ 866,416: 13x24
#778 @ 855,373: 10x17
#779 @ 765,501: 23x12
#780 @ 276,922: 13x10
#781 @ 276,95: 16x18
#782 @ 617,193: 13x18
#783 @ 920,772: 28x14
#784 @ 34,654: 15x16
#785 @ 223,836: 20x17
#786 @ 620,232: 25x28
#787 @ 785,426: 12x15
#788 @ 556,758: 25x18
#789 @ 859,937: 10x16
#790 @ 328,93: 14x26
#791 @ 486,671: 12x23
#792 @ 120,299: 26x18
#793 @ 214,266: 17x24
#794 @ 357,263: 11x24
#795 @ 413,403: 21x11
#796 @ 678,948: 11x28
#797 @ 887,967: 11x16
#798 @ 140,833: 11x22
#799 @ 476,823: 15x13
#800 @ 27,66: 20x24
#801 @ 943,449: 18x15
#802 @ 838,165: 29x17
#803 @ 811,951: 23x13
#804 @ 625,32: 18x15
#805 @ 469,30: 13x19
#806 @ 287,601: 26x17
#807 @ 370,919: 23x17
#808 @ 251,740: 28x12
#809 @ 566,93: 26x11
#810 @ 101,976: 11x12
#811 @ 443,932: 25x11
#812 @ 163,291: 21x14
#813 @ 837,268: 18x11
#814 @ 395,464: 17x12
#815 @ 549,851: 17x28
#816 @ 645,803: 25x19
#817 @ 928,807: 21x10
#818 @ 831,869: 26x16
#819 @ 882,366: 17x20
#820 @ 752,313: 17x14
#821 @ 640,318: 11x23
#822 @ 201,302: 14x19
#823 @ 40,358: 26x27
#824 @ 574,370: 18x22
#825 @ 90,42: 27x12
#826 @ 824,905: 21x21
#827 @ 663,473: 17x28
#828 @ 893,432: 28x26
#829 @ 287,131: 26x26
#830 @ 792,572: 25x14
#831 @ 722,966: 17x14
#832 @ 542,927: 20x26
#833 @ 626,619: 11x21
#834 @ 370,758: 29x21
#835 @ 488,671: 18x14
#836 @ 220,98: 22x25
#837 @ 11,894: 12x24
#838 @ 406,868: 22x21
#839 @ 474,240: 20x13
#840 @ 656,526: 20x18
#841 @ 258,487: 25x28
#842 @ 469,143: 23x16
#843 @ 276,701: 11x20
#844 @ 620,698: 11x11
#845 @ 302,516: 15x25
#846 @ 584,651: 22x13
#847 @ 666,371: 13x20
#848 @ 636,315: 25x23
#849 @ 882,689: 15x16
#850 @ 337,568: 16x18
#851 @ 932,590: 13x19
#852 @ 622,419: 18x12
#853 @ 144,741: 20x19
#854 @ 263,640: 24x14
#855 @ 398,307: 20x11
#856 @ 232,513: 13x13
#857 @ 648,631: 10x11
#858 @ 879,831: 10x23
#859 @ 553,473: 24x27
#860 @ 15,592: 20x10
#861 @ 852,363: 12x16
#862 @ 676,386: 20x13
#863 @ 8,740: 26x25
#864 @ 52,80: 11x25
#865 @ 190,815: 14x26
#866 @ 724,342: 14x26
#867 @ 93,13: 20x23
#868 @ 541,88: 29x16
#869 @ 693,283: 20x10
#870 @ 779,658: 10x23
#871 @ 527,155: 20x15
#872 @ 273,302: 22x24
#873 @ 307,884: 29x13
#874 @ 188,377: 28x17
#875 @ 393,870: 16x28
#876 @ 18,431: 16x15
#877 @ 525,170: 11x13
#878 @ 528,175: 15x14
#879 @ 955,425: 19x23
#880 @ 239,802: 25x28
#881 @ 255,70: 20x11
#882 @ 356,653: 20x20
#883 @ 943,189: 25x20
#884 @ 912,41: 13x28
#885 @ 882,628: 17x15
#886 @ 34,894: 20x24
#887 @ 969,845: 24x21
#888 @ 429,777: 21x27
#889 @ 981,3: 13x10
#890 @ 436,134: 25x10
#891 @ 218,612: 29x15
#892 @ 816,65: 21x14
#893 @ 24,602: 10x14
#894 @ 868,971: 14x24
#895 @ 974,610: 18x14
#896 @ 569,559: 25x22
#897 @ 321,591: 14x12
#898 @ 486,32: 12x26
#899 @ 328,575: 10x10
#900 @ 883,667: 16x18
#901 @ 893,739: 10x11
#902 @ 845,135: 17x18
#903 @ 737,78: 11x16
#904 @ 329,702: 20x21
#905 @ 463,51: 26x15
#906 @ 109,295: 12x23
#907 @ 947,219: 28x11
#908 @ 642,511: 17x19
#909 @ 636,366: 26x10
#910 @ 719,388: 14x13
#911 @ 915,185: 29x17
#912 @ 952,166: 14x28
#913 @ 97,72: 22x14
#914 @ 83,711: 26x13
#915 @ 129,359: 29x16
#916 @ 914,100: 22x23
#917 @ 395,244: 20x21
#918 @ 524,755: 18x26
#919 @ 602,422: 16x26
#920 @ 181,104: 29x16
#921 @ 725,849: 19x7
#922 @ 154,630: 13x20
#923 @ 791,280: 18x14
#924 @ 825,118: 17x21
#925 @ 476,151: 14x18
#926 @ 17,913: 12x23
#927 @ 698,957: 22x13
#928 @ 278,843: 23x11
#929 @ 968,10: 14x11
#930 @ 271,638: 20x11
#931 @ 52,667: 26x15
#932 @ 142,716: 12x26
#933 @ 91,78: 27x19
#934 @ 179,797: 27x12
#935 @ 493,530: 11x24
#936 @ 250,645: 9x10
#937 @ 377,907: 15x11
#938 @ 945,789: 11x15
#939 @ 782,628: 15x12
#940 @ 450,65: 24x27
#941 @ 32,796: 16x10
#942 @ 959,623: 25x24
#943 @ 612,441: 11x25
#944 @ 233,785: 17x29
#945 @ 263,315: 17x10
#946 @ 284,581: 10x17
#947 @ 298,262: 18x29
#948 @ 901,68: 23x11
#949 @ 383,566: 18x15
#950 @ 367,174: 22x14
#951 @ 667,881: 26x10
#952 @ 641,643: 26x10
#953 @ 598,37: 10x12
#954 @ 717,667: 13x16
#955 @ 375,557: 10x23
#956 @ 836,405: 26x15
#957 @ 913,651: 15x10
#958 @ 257,861: 27x15
#959 @ 844,802: 17x19
#960 @ 872,138: 27x18
#961 @ 524,892: 27x16
#962 @ 771,114: 17x25
#963 @ 737,729: 11x18
#964 @ 509,24: 20x14
#965 @ 95,503: 28x15
#966 @ 56,575: 11x25
#967 @ 633,26: 8x20
#968 @ 661,390: 10x16
#969 @ 176,336: 21x16
#970 @ 909,91: 14x27
#971 @ 867,73: 14x15
#972 @ 142,559: 23x23
#973 @ 545,341: 27x26
#974 @ 46,53: 16x17
#975 @ 124,856: 27x22
#976 @ 354,308: 22x19
#977 @ 202,639: 12x7
#978 @ 616,419: 26x26
#979 @ 741,602: 25x11
#980 @ 689,474: 26x23
#981 @ 975,580: 10x22
#982 @ 859,812: 24x20
#983 @ 119,469: 18x18
#984 @ 720,656: 27x22
#985 @ 508,402: 19x19
#986 @ 700,717: 25x24
#987 @ 877,973: 10x15
#988 @ 329,85: 29x15
#989 @ 845,572: 25x14
#990 @ 529,964: 10x13
#991 @ 199,758: 23x20
#992 @ 631,691: 24x10
#993 @ 770,570: 22x24
#994 @ 916,627: 21x16
#995 @ 315,479: 11x28
#996 @ 203,520: 17x22
#997 @ 519,349: 14x20
#998 @ 130,719: 12x17
#999 @ 836,304: 26x17
#1000 @ 809,321: 28x19
#1001 @ 206,912: 23x21
#1002 @ 24,854: 26x24
#1003 @ 180,672: 26x23
#1004 @ 265,831: 29x25
#1005 @ 577,767: 22x19
#1006 @ 660,327: 28x25
#1007 @ 167,310: 16x29
#1008 @ 907,212: 29x29
#1009 @ 618,323: 28x12
#1010 @ 692,448: 27x27
#1011 @ 682,232: 23x19
#1012 @ 305,328: 22x25
#1013 @ 408,476: 23x12
#1014 @ 269,478: 19x19
#1015 @ 460,59: 17x21
#1016 @ 722,739: 29x14
#1017 @ 768,645: 29x11
#1018 @ 406,951: 27x14
#1019 @ 776,557: 21x23
#1020 @ 729,952: 23x23
#1021 @ 499,31: 11x23
#1022 @ 210,781: 15x16
#1023 @ 503,308: 12x26
#1024 @ 665,651: 12x22
#1025 @ 650,375: 17x13
#1026 @ 288,687: 23x18
#1027 @ 740,221: 20x17
#1028 @ 266,699: 11x25
#1029 @ 163,796: 15x10
#1030 @ 542,730: 13x29
#1031 @ 365,120: 16x17
#1032 @ 368,643: 29x18
#1033 @ 941,821: 20x21
#1034 @ 384,123: 12x21
#1035 @ 935,338: 19x19
#1036 @ 664,882: 13x17
#1037 @ 414,2: 10x11
#1038 @ 768,632: 20x14
#1039 @ 189,349: 12x14
#1040 @ 168,282: 29x26
#1041 @ 913,98: 6x13
#1042 @ 642,40: 21x23
#1043 @ 504,0: 17x28
#1044 @ 87,847: 24x20
#1045 @ 893,638: 21x12
#1046 @ 509,175: 26x10
#1047 @ 462,354: 15x28
#1048 @ 851,315: 14x16
#1049 @ 468,821: 20x12
#1050 @ 114,470: 13x28
#1051 @ 213,546: 14x11
#1052 @ 240,341: 20x15
#1053 @ 196,249: 28x14
#1054 @ 268,112: 17x23
#1055 @ 120,610: 27x22
#1056 @ 179,367: 14x15
#1057 @ 523,639: 11x25
#1058 @ 332,616: 22x25
#1059 @ 143,646: 25x12
#1060 @ 529,718: 27x13
#1061 @ 44,903: 21x27
#1062 @ 65,738: 14x12
#1063 @ 92,179: 13x26
#1064 @ 276,267: 29x18
#1065 @ 797,518: 25x11
#1066 @ 368,905: 29x22
#1067 @ 785,554: 26x11
#1068 @ 768,651: 20x19
#1069 @ 749,350: 13x12
#1070 @ 484,818: 13x15
#1071 @ 213,198: 16x16
#1072 @ 466,72: 15x26
#1073 @ 599,700: 28x21
#1074 @ 9,980: 15x14
#1075 @ 385,783: 25x21
#1076 @ 461,629: 25x25
#1077 @ 787,19: 11x11
#1078 @ 774,359: 28x18
#1079 @ 157,930: 17x18
#1080 @ 283,700: 16x25
#1081 @ 177,674: 16x13
#1082 @ 358,165: 14x13
#1083 @ 560,272: 28x28
#1084 @ 142,349: 29x27
#1085 @ 539,890: 14x29
#1086 @ 921,651: 14x25
#1087 @ 876,151: 14x16
#1088 @ 637,867: 23x13
#1089 @ 699,294: 26x24
#1090 @ 199,525: 20x15
#1091 @ 372,14: 13x18
#1092 @ 958,533: 22x29
#1093 @ 607,12: 19x16
#1094 @ 61,288: 23x14
#1095 @ 200,231: 22x24
#1096 @ 845,972: 27x23
#1097 @ 847,508: 13x16
#1098 @ 203,417: 13x14
#1099 @ 413,291: 13x15
#1100 @ 435,921: 20x16
#1101 @ 403,888: 13x26
#1102 @ 145,677: 18x10
#1103 @ 18,594: 12x10
#1104 @ 536,123: 16x14
#1105 @ 719,278: 14x17
#1106 @ 616,652: 15x25
#1107 @ 529,445: 27x13
#1108 @ 516,600: 12x19
#1109 @ 403,45: 27x29
#1110 @ 23,173: 17x17
#1111 @ 763,604: 27x14
#1112 @ 33,77: 28x10
#1113 @ 265,596: 27x19
#1114 @ 44,671: 25x11
#1115 @ 619,162: 25x24
#1116 @ 318,14: 20x12
#1117 @ 477,249: 27x28
#1118 @ 369,787: 21x29
#1119 @ 146,389: 23x29
#1120 @ 767,643: 12x26
#1121 @ 674,299: 27x11
#1122 @ 585,606: 21x16
#1123 @ 196,624: 14x10
#1124 @ 304,700: 12x28
#1125 @ 385,635: 14x23
#1126 @ 114,682: 12x17
#1127 @ 213,272: 28x22
#1128 @ 523,116: 20x14
#1129 @ 622,332: 14x10
#1130 @ 387,491: 18x23
#1131 @ 334,903: 18x12
#1132 @ 412,784: 16x13
#1133 @ 508,939: 29x14
#1134 @ 275,741: 25x25
#1135 @ 535,414: 9x3
#1136 @ 928,438: 22x20
#1137 @ 581,439: 23x26
#1138 @ 826,318: 28x22
#1139 @ 120,798: 13x15
#1140 @ 842,505: 27x28
#1141 @ 758,386: 14x24
#1142 @ 851,334: 18x27
#1143 @ 358,421: 25x24
#1144 @ 90,878: 27x15
#1145 @ 281,631: 21x13
#1146 @ 741,92: 24x22
#1147 @ 114,493: 27x29
#1148 @ 856,412: 16x14
#1149 @ 111,866: 19x20
#1150 @ 31,647: 28x26
#1151 @ 52,211: 23x28
#1152 @ 496,643: 26x20
#1153 @ 973,296: 16x20
#1154 @ 962,575: 23x11
#1155 @ 157,382: 27x16
#1156 @ 123,801: 15x26
#1157 @ 115,884: 17x27
#1158 @ 102,857: 12x12
#1159 @ 237,280: 10x13
#1160 @ 404,448: 22x28
#1161 @ 50,590: 25x25
#1162 @ 848,364: 26x13
#1163 @ 850,439: 7x8
#1164 @ 676,610: 23x13
#1165 @ 394,475: 19x27
#1166 @ 297,684: 23x18
#1167 @ 314,494: 19x24
#1168 @ 542,464: 11x19
#1169 @ 732,238: 10x19
#1170 @ 242,634: 26x27
#1171 @ 549,845: 20x25
#1172 @ 208,608: 14x25
#1173 @ 494,650: 17x11
#1174 @ 550,194: 13x16
#1175 @ 957,792: 18x10
#1176 @ 836,65: 11x20
#1177 @ 910,417: 22x26
#1178 @ 479,367: 19x11
#1179 @ 344,257: 27x26
#1180 @ 477,236: 19x15
#1181 @ 414,458: 27x28
#1182 @ 738,10: 26x17
#1183 @ 401,618: 12x23
#1184 @ 390,301: 6x13
#1185 @ 174,768: 27x14
#1186 @ 378,139: 28x18
#1187 @ 542,160: 18x23
#1188 @ 675,408: 27x15
#1189 @ 532,660: 26x19
#1190 @ 62,125: 14x15
#1191 @ 301,495: 23x17
#1192 @ 286,907: 10x24
#1193 @ 267,688: 10x28
#1194 @ 567,464: 27x26
#1195 @ 724,514: 24x19
#1196 @ 269,962: 20x21
#1197 @ 192,925: 28x26
#1198 @ 190,600: 14x10
#1199 @ 66,823: 25x12
#1200 @ 648,490: 18x11
#1201 @ 692,814: 12x18
#1202 @ 850,191: 13x11
#1203 @ 592,705: 15x18
#1204 @ 169,127: 16x18
#1205 @ 284,79: 16x28
#1206 @ 839,61: 25x18
#1207 @ 220,904: 25x18
#1208 @ 114,251: 24x14
#1209 @ 108,918: 23x19
#1210 @ 589,891: 19x23
#1211 @ 137,313: 10x17
#1212 @ 335,907: 15x19
#1213 @ 438,297: 29x19
#1214 @ 268,845: 16x29
#1215 @ 756,319: 13x22
#1216 @ 649,505: 12x19
#1217 @ 858,274: 21x21
#1218 @ 228,104: 26x20
#1219 @ 383,473: 22x15
#1220 @ 653,426: 10x10
#1221 @ 434,744: 27x15
#1222 @ 548,578: 25x27
#1223 @ 534,438: 11x29
#1224 @ 503,647: 27x20
#1225 @ 99,528: 18x29
#1226 @ 167,569: 22x26
#1227 @ 894,557: 14x19
#1228 @ 208,522: 10x25
#1229 @ 62,0: 25x20
#1230 @ 741,4: 12x21
#1231 @ 78,197: 25x15
#1232 @ 278,614: 18x22
#1233 @ 984,301: 10x19
#1234 @ 915,337: 29x11
#1235 @ 598,187: 24x16
#1236 @ 946,539: 21x13
#1237 @ 137,281: 3x12
#1238 @ 813,328: 21x26
#1239 @ 453,531: 25x11
#1240 @ 432,428: 23x17
#1241 @ 813,907: 26x23
#1242 @ 585,560: 15x13
#1243 @ 827,151: 10x19
#1244 @ 520,363: 12x26
#1245 @ 757,894: 23x22
#1246 @ 787,436: 22x19
#1247 @ 278,685: 14x29
#1248 @ 358,347: 23x16
#1249 @ 181,722: 15x13
#1250 @ 820,143: 18x12
#1251 @ 587,611: 26x12
#1252 @ 684,809: 15x13
#1253 @ 496,530: 10x12
#1254 @ 303,500: 16x7
#1255 @ 263,925: 22x24
#1256 @ 656,624: 18x23
#1257 @ 239,42: 19x27
#1258 @ 695,557: 13x16
#1259 @ 55,689: 27x15
#1260 @ 228,478: 19x16
#1261 @ 650,76: 17x10
#1262 @ 212,899: 17x17
#1263 @ 501,362: 11x22
#1264 @ 711,419: 11x12
#1265 @ 262,691: 19x21
#1266 @ 1,118: 29x25
#1267 @ 545,599: 19x13
#1268 @ 379,219: 29x20
#1269 @ 542,669: 12x22
#1270 @ 481,85: 14x12
#1271 @ 318,844: 12x27
#1272 @ 261,236: 14x29
#1273 @ 256,745: 10x14
#1274 @ 562,618: 21x21
#1275 @ 391,246: 14x10
#1276 @ 695,586: 20x17
#1277 @ 123,601: 15x17
#1278 @ 770,883: 27x14
#1279 @ 841,150: 27x18
#1280 @ 788,430: 5x7
#1281 @ 708,978: 29x13
#1282 @ 150,185: 26x19
#1283 @ 110,383: 11x21
#1284 @ 306,864: 11x18
#1285 @ 954,569: 23x10
#1286 @ 650,417: 14x28
#1287 @ 450,420: 15x13
#1288 @ 380,455: 29x17
#1289 @ 486,338: 14x11
#1290 @ 852,142: 26x26
#1291 @ 114,494: 12x15
#1292 @ 242,621: 11x17
#1293 @ 717,586: 10x10
#1294 @ 281,832: 16x19
#1295 @ 898,511: 18x12
#1296 @ 894,703: 11x19
#1297 @ 508,414: 16x17
#1298 @ 788,777: 10x18
#1299 @ 919,278: 19x12
#1300 @ 964,659: 28x10
#1301 @ 62,670: 20x20
#1302 @ 677,947: 11x12
#1303 @ 259,693: 23x29
#1304 @ 460,349: 15x27
#1305 @ 905,235: 23x16
#1306 @ 174,586: 20x20
#1307 @ 909,910: 23x19
#1308 @ 1,594: 28x10
#1309 @ 553,308: 10x29
#1310 @ 363,497: 23x26
#1311 @ 132,175: 28x29
#1312 @ 854,10: 26x28
#1313 @ 816,768: 20x15
#1314 @ 142,242: 20x23
#1315 @ 169,104: 14x14
#1316 @ 732,125: 22x12
#1317 @ 296,391: 22x10
#1318 @ 259,75: 24x17
#1319 @ 510,922: 21x11
#1320 @ 172,266: 11x13
#1321 @ 895,566: 18x25
#1322 @ 841,826: 22x12
#1323 @ 205,384: 14x10
#1324 @ 567,662: 12x20
#1325 @ 253,971: 21x21
#1326 @ 887,154: 23x17
#1327 @ 29,830: 10x24
#1328 @ 532,504: 12x17
#1329 @ 445,930: 16x10
#1330 @ 642,351: 22x14
#1331 @ 584,753: 13x21
#1332 @ 113,893: 13x24
#1333 @ 109,350: 18x25
#1334 @ 699,400: 15x20
#1335 @ 963,664: 13x18
#1336 @ 376,566: 20x29
#1337 @ 775,762: 10x18
#1338 @ 136,486: 13x10
#1339 @ 638,333: 27x28
#1340 @ 228,568: 27x19
#1341 @ 334,600: 26x26
#1342 @ 537,701: 25x12
#1343 @ 40,800: 26x20
#1344 @ 693,318: 11x24
#1345 @ 883,392: 16x12
#1346 @ 470,78: 12x13
#1347 @ 209,900: 11x28
#1348 @ 204,364: 24x12
#1349 @ 533,414: 11x10
#1350 @ 853,314: 22x25
#1351 @ 543,467: 29x25
#1352 @ 406,632: 11x27
#1353 @ 743,209: 14x21
`;

function getResult(input) {
  const claims = {};
  const ids = new Set();

  input
    .trim()
    .split('\n')
    .forEach(claim => {
      const id = +claim.substring(
        claim.indexOf('#') + 1,
        claim.indexOf('@') - 1,
      );

      ids.add(id);

      const [left, top] = claim
        .substring(claim.indexOf('@') + 2, claim.indexOf(':'))
        .split(',')
        .map(Number);

      const [width, height] = claim
        .substring(claim.indexOf(':') + 2)
        .split('x')
        .map(Number);

      for (let x = left; x < left + width; x++) {
        for (let y = top; y < top + height; y++) {
          const tile = `${x},${y}`;
          claims[tile] = claims[tile] ? [...claims[tile], id] : [id];
        }
      }
    });

  const overlapping = Object.values(claims).filter(val => val.length > 1);
  const flat = overlapping.flat();

  return {
    nonOverLappingId: [...ids].find(id => !flat.includes(id)),
    overlappingTiles: overlapping.length,
  };
}

const getTestResult = getResult(testInput);
console.log(getTestResult);
const result = getResult(input);
console.log(result);
