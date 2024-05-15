"use client";

import React from "react";
import ReactEcharts from "echarts-for-react";

const ClusterDemoChart = () => {
    const option = {
        animation: true,
        animationThreshold: 2000,
        animationDuration: 1000,
        animationEasing: "cubicOut",
        animationDelay: 0,
        animationDurationUpdate: 300,
        animationEasingUpdate: "cubicOut",
        animationDelayUpdate: 0,
        aria: {
            enabled: false,
        },
        color: [
            "#5470c6",
            "#91cc75",
            "#fac858",
            "#ee6666",
            "#73c0de",
            "#3ba272",
            "#fc8452",
            "#9a60b4",
            "#ea7ccc",
        ],
        series: [
            {
                type: "scatter",
                name: "class-0",
                symbolSize: 10,
                data: [
                    [
                        -0.6309558608447835,
                        -0.41925786886184624,
                        '<img src=\'/app/static/1015248-96-0.png \' alt="1015248-96-0" scale="0.2">',
                    ],
                    [
                        -0.7492530457023959,
                        0.3331981006012139,
                        '<img src=\'/app/static/1040274-10-9.png \' alt="1040274-10-9" scale="0.2">',
                    ],
                    [
                        -0.18183300189250626,
                        0.5989596477506987,
                        '<img src=\'/app/static/1040274-18-7.png \' alt="1040274-18-7" scale="0.2">',
                    ],
                    [
                        -0.5795941108574781,
                        -0.5562266477461965,
                        '<img src=\'/app/static/1044256-04-3.png \' alt="1044256-04-3" scale="0.2">',
                    ],
                    [
                        -0.2339325778560058,
                        0.6706645485161441,
                        '<img src=\'/app/static/1067631-36-0.png \' alt="1067631-36-0" scale="0.2">',
                    ],
                    [
                        -0.46577666109471155,
                        -0.25748237743213453,
                        '<img src=\'/app/static/1091606-69-7.png \' alt="1091606-69-7" scale="0.2">',
                    ],
                    [
                        -0.9545624867715298,
                        0.06211900023160256,
                        '<img src=\'/app/static/1092582-89-2.png \' alt="1092582-89-2" scale="0.2">',
                    ],
                    [
                        0.0003329728832955507,
                        0.037034885849601434,
                        '<img src=\'/app/static/1103533-85-2.png \' alt="1103533-85-2" scale="0.2">',
                    ],
                    [
                        0.05630075135293142,
                        0.49567142037290896,
                        '<img src=\'/app/static/112068-01-6.png \' alt="112068-01-6" scale="0.2">',
                    ],
                    [
                        -0.31148788782888764,
                        -0.037094949803036556,
                        '<img src=\'/app/static/1121-22-8.png \' alt="1121-22-8" scale="0.2">',
                    ],
                    [
                        -0.9895893559429225,
                        0.08957569721314694,
                        '<img src=\'/app/static/1137063-15-0.png \' alt="1137063-15-0" scale="0.2">',
                    ],
                    [
                        -0.3104301174979775,
                        0.13810226425013467,
                        '<img src=\'/app/static/113865-57-9.png \' alt="113865-57-9" scale="0.2">',
                    ],
                    [
                        -0.11433123854297694,
                        0.2577997331590461,
                        '<img src=\'/app/static/118628-68-5.png \' alt="118628-68-5" scale="0.2">',
                    ],
                    [
                        -0.7558883405055014,
                        0.27886743048613977,
                        '<img src=\'/app/static/1192113-21-5.png \' alt="1192113-21-5" scale="0.2">',
                    ],
                    [
                        -0.4584400084129053,
                        0.16725024460952742,
                        '<img src=\'/app/static/119237-64-8.png \' alt="119237-64-8" scale="0.2">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
            {
                type: "scatter",
                name: "class-1",
                symbolSize: 10,
                data: [
                    [
                        1.62158536404709,
                        -1.4527780603394673,
                        '<img src=\'/app/static/1011465-19-2.png \' alt="1011465-19-2" scale="0.2">',
                    ],
                    [
                        1.531029051850034,
                        -1.8758917534359538,
                        '<img src=\'/app/static/1011465-21-6.png \' alt="1011465-21-6" scale="0.2">',
                    ],
                    [
                        1.8708152975278474,
                        -1.758466861458859,
                        '<img src=\'/app/static/1058734-56-7.png \' alt="1058734-56-7" scale="0.2">',
                    ],
                    [
                        1.7812118034001547,
                        -1.1653536536852014,
                        '<img src=\'/app/static/1092064-02-2.png \' alt="1092064-02-2" scale="0.2">',
                    ],
                    [
                        2.155670455034782,
                        -1.3551933148843953,
                        '<img src=\'/app/static/111822-69-6.png \' alt="111822-69-6" scale="0.2">',
                    ],
                    [
                        1.726616645898635,
                        -1.570243480502558,
                        '<img src=\'/app/static/1121764-48-4.png \' alt="1121764-48-4" scale="0.2">',
                    ],
                    [
                        2.3464155122240724,
                        -1.6263476794993579,
                        '<img src=\'/app/static/1170736-59-0.png \' alt="1170736-59-0" scale="0.2">',
                    ],
                    [
                        1.6146480798694902,
                        -1.288998598771559,
                        '<img src=\'/app/static/1187629-43-1.png \' alt="1187629-43-1" scale="0.2">',
                    ],
                    [
                        1.8683676364426283,
                        -2.1949024775466937,
                        '<img src=\'/app/static/1191451-23-6.png \' alt="1191451-23-6" scale="0.2">',
                    ],
                    [
                        2.23402241737073,
                        -2.24815522017868,
                        '<img src=\'/app/static/1191451-24-7.png \' alt="1191451-24-7" scale="0.2">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
            {
                type: "scatter",
                name: "class-2",
                symbolSize: 10,
                data: [
                    [
                        2.4701775770073224,
                        2.449257368515346,
                        '<img src=\'/app/static/1005003-43-9.png \' alt="1005003-43-9" scale="0.2">',
                    ],
                    [
                        1.5072234006084808,
                        1.9014448654292102,
                        '<img src=\'/app/static/1020665-67-1.png \' alt="1020665-67-1" scale="0.2">',
                    ],
                    [
                        1.8462613309135327,
                        4.208133867128987,
                        '<img src=\'/app/static/1020665-73-9.png \' alt="1020665-73-9" scale="0.2">',
                    ],
                    [
                        1.069392527845832,
                        3.092848007608359,
                        '<img src=\'/app/static/1027476-96-5.png \' alt="1027476-96-5" scale="0.2">',
                    ],
                    [
                        1.3048180961356697,
                        3.0838102185771423,
                        '<img src=\'/app/static/1048692-60-9.png \' alt="1048692-60-9" scale="0.2">',
                    ],
                    [
                        1.0333794410500041,
                        3.1157519890643854,
                        '<img src=\'/app/static/1061307-56-9.png \' alt="1061307-56-9" scale="0.2">',
                    ],
                    [
                        1.6493657468407346,
                        3.159598594882263,
                        '<img src=\'/app/static/1088705-53-6.png \' alt="1088705-53-6" scale="0.2">',
                    ],
                    [
                        1.157649883266372,
                        3.4181167673868362,
                        '<img src=\'/app/static/1140969-69-2.png \' alt="1140969-69-2" scale="0.2">',
                    ],
                    [
                        1.0652447315706286,
                        2.6954635360921464,
                        '<img src=\'/app/static/1146629-74-4.png \' alt="1146629-74-4" scale="0.2">',
                    ],
                    [
                        2.087357950898177,
                        3.4591006911828877,
                        '<img src=\'/app/static/1186602-28-7.png \' alt="1186602-28-7" scale="0.2">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
            {
                type: "scatter",
                name: "class-3",
                symbolSize: 10,
                data: [
                    [
                        -1.833727913059707,
                        -0.2913786015234676,
                        '<img src=\'/app/static/1003886-03-0.png \' alt="1003886-03-0" scale="0.2">',
                    ],
                    [
                        -1.6236236720482178,
                        0.052730120113193425,
                        '<img src=\'/app/static/1003886-05-2.png \' alt="1003886-05-2" scale="0.2">',
                    ],
                    [
                        -1.414582112134927,
                        -0.38724436075048174,
                        '<img src=\'/app/static/1003886-09-6.png \' alt="1003886-09-6" scale="0.2">',
                    ],
                    [
                        -2.0990430990240383,
                        -0.004358302974684402,
                        '<img src=\'/app/static/1027754-31-9.png \' alt="1027754-31-9" scale="0.2">',
                    ],
                    [
                        -1.4578043956129587,
                        -0.38757527216947274,
                        '<img src=\'/app/static/1045894-43-6.png \' alt="1045894-43-6" scale="0.2">',
                    ],
                    [
                        -1.3789770243286872,
                        -0.25441085078713543,
                        '<img src=\'/app/static/1080596-47-9.png \' alt="1080596-47-9" scale="0.2">',
                    ],
                    [
                        -1.8567482297207332,
                        0.24908736876843104,
                        '<img src=\'/app/static/1085431-16-8.png \' alt="1085431-16-8" scale="0.2">',
                    ],
                    [
                        -1.6104633387475884,
                        -0.3614838432316419,
                        '<img src=\'/app/static/1086138-48-8.png \' alt="1086138-48-8" scale="0.2">',
                    ],
                    [
                        -1.0535474329758436,
                        -0.19685329783220337,
                        '<img src=\'/app/static/1091605-95-6.png \' alt="1091605-95-6" scale="0.2">',
                    ],
                    [
                        -1.7204489523439785,
                        -0.39660800615735176,
                        '<img src=\'/app/static/109660-12-0.png \' alt="109660-12-0" scale="0.2">',
                    ],
                    [
                        -1.345733257998208,
                        0.08114079123017216,
                        '<img src=\'/app/static/1101906-42-6.png \' alt="1101906-42-6" scale="0.2">',
                    ],
                    [
                        -1.8855152544600289,
                        -0.3097444144697324,
                        '<img src=\'/app/static/1108603-34-4.png \' alt="1108603-34-4" scale="0.2">',
                    ],
                    [
                        -1.459693794921799,
                        -0.7990509083382492,
                        '<img src=\'/app/static/1108603-37-7.png \' alt="1108603-37-7" scale="0.2">',
                    ],
                    [
                        -1.2731282118627496,
                        -0.17533513904548798,
                        '<img src=\'/app/static/1152313-76-2.png \' alt="1152313-76-2" scale="0.2">',
                    ],
                    [
                        -2.043542118411534,
                        -0.4731790952354022,
                        '<img src=\'/app/static/118949-61-4.png \' alt="118949-61-4" scale="0.2">',
                    ],
                    [
                        -1.9971997744650498,
                        -0.24427478541724962,
                        '<img src=\'/app/static/118949-63-6.png \' alt="118949-63-6" scale="0.2">',
                    ],
                    [
                        -1.5839711576972233,
                        -0.40393727143221164,
                        '<img src=\'/app/static/119165-69-4.png \' alt="119165-69-4" scale="0.2">',
                    ],
                    [
                        -1.6315796224042005,
                        0.4191325349240276,
                        '<img src=\'/app/static/1192345-90-6.png \' alt="1192345-90-6" scale="0.2">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
            {
                type: "scatter",
                name: "class-4",
                symbolSize: 10,
                data: [
                    [
                        -2.2189623939773733,
                        -0.19057781301380308,
                        '<img src=\'/app/static/1027754-32-0.png \' alt="1027754-32-0" scale="0.2">',
                    ],
                    [
                        -2.770700084143298,
                        -0.4348742936789188,
                        '<img src=\'/app/static/108915-03-3.png \' alt="108915-03-3" scale="0.2">',
                    ],
                    [
                        -2.744399979454387,
                        -0.390689223225394,
                        '<img src=\'/app/static/108915-04-4.png \' alt="108915-04-4" scale="0.2">',
                    ],
                    [
                        -2.789328756548531,
                        -0.3519350662221904,
                        '<img src=\'/app/static/108915-07-7.png \' alt="108915-07-7" scale="0.2">',
                    ],
                    [
                        -2.8292923027162935,
                        -0.36555857150921756,
                        '<img src=\'/app/static/108915-08-8.png \' alt="108915-08-8" scale="0.2">',
                    ],
                    [
                        -2.7322257955608387,
                        -0.25981105518550274,
                        '<img src=\'/app/static/1108603-35-5.png \' alt="1108603-35-5" scale="0.2">',
                    ],
                    [
                        -2.7220637226192057,
                        -0.19848408107527918,
                        '<img src=\'/app/static/117408-98-7.png \' alt="117408-98-7" scale="0.2">',
                    ],
                    [
                        -2.820253848693542,
                        -0.39804846746187716,
                        '<img src=\'/app/static/117408-99-8.png \' alt="117408-99-8" scale="0.2">',
                    ],
                    [
                        -2.588725800704359,
                        -0.6572665693277964,
                        '<img src=\'/app/static/117409-00-4.png \' alt="117409-00-4" scale="0.2">',
                    ],
                    [
                        -2.119511659421697,
                        -0.46743351144588485,
                        '<img src=\'/app/static/118949-62-5.png \' alt="118949-62-5" scale="0.2">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
            {
                type: "scatter",
                name: "class-5",
                symbolSize: 10,
                data: [
                    [
                        0.007558274920740469,
                        1.729127757993091,
                        '<img src=\'/app/static/1003922-03-9.png \' alt="1003922-03-9" scale="0.2">',
                    ],
                    [
                        -0.8067024945696504,
                        1.4772344999070495,
                        '<img src=\'/app/static/1006708-91-3.png \' alt="1006708-91-3" scale="0.2">',
                    ],
                    [
                        1.0728889199651497,
                        1.1265611310029737,
                        '<img src=\'/app/static/1052184-48-1.png \' alt="1052184-48-1" scale="0.2">',
                    ],
                    [
                        -0.571488161936825,
                        1.725814555644547,
                        '<img src=\'/app/static/1092491-37-6.png \' alt="1092491-37-6" scale="0.2">',
                    ],
                    [
                        -0.039614486394782586,
                        1.2209755299080367,
                        '<img src=\'/app/static/1100289-57-3.png \' alt="1100289-57-3" scale="0.2">',
                    ],
                    [
                        0.7660155388007316,
                        1.1214388637787251,
                        '<img src=\'/app/static/1105576-13-3.png \' alt="1105576-13-3" scale="0.2">',
                    ],
                    [
                        0.2207444804131215,
                        1.3166714929389334,
                        '<img src=\'/app/static/1186049-30-8.png \' alt="1186049-30-8" scale="0.2">',
                    ],
                    [
                        -0.10863769381691225,
                        0.7975695571560432,
                        '<img src=\'/app/static/118971-03-2.png \' alt="118971-03-2" scale="0.2">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
            {
                type: "scatter",
                name: "class-6",
                symbolSize: 10,
                data: [
                    [
                        4.218729420231945,
                        2.1688016206915695,
                        '<img src=\'/app/static/1069114-12-0.png \' alt="1069114-12-0" scale="0.2">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
            {
                type: "scatter",
                name: "class-7",
                symbolSize: 10,
                data: [
                    [
                        2.2780444214058213,
                        -2.658171449027348,
                        '<img src=\'/app/static/1011465-22-7.png \' alt="1011465-22-7" scale="0.2">',
                    ],
                    [
                        2.2780444214058213,
                        -2.658171449027348,
                        '<img src=\'/app/static/1028416-48-9.png \' alt="1028416-48-9" scale="0.2">',
                    ],
                    [
                        3.539238323529766,
                        -3.139885362598405,
                        '<img src=\'/app/static/1043567-32-3.png \' alt="1043567-32-3" scale="0.2">',
                    ],
                    [
                        2.9578943889217717,
                        -3.058913089883741,
                        '<img src=\'/app/static/1087345-30-9.png \' alt="1087345-30-9" scale="0.2">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
            {
                type: "scatter",
                name: "class-8",
                symbolSize: 10,
                data: [
                    [
                        0.2440763920515597,
                        -0.18327108265958125,
                        '<img src=\'/app/static/108998-83-0.png \' alt="108998-83-0" scale="0.2">',
                    ],
                    [
                        0.23500920230599415,
                        -0.09366210321464716,
                        '<img src=\'/app/static/1091606-67-5.png \' alt="1091606-67-5" scale="0.2">',
                    ],
                    [
                        0.10736987655391916,
                        -0.300711712268941,
                        '<img src=\'/app/static/1091606-68-6.png \' alt="1091606-68-6" scale="0.2">',
                    ],
                    [
                        -0.06070971767332176,
                        -0.3436881636737289,
                        '<img src=\'/app/static/1091606-70-0.png \' alt="1091606-70-0" scale="0.2">',
                    ],
                    [
                        0.5541173942472811,
                        0.12837993331955103,
                        '<img src=\'/app/static/1092695-14-1.png \' alt="1092695-14-1" scale="0.2">',
                    ],
                    [
                        1.0614087632411395,
                        0.02989141667310188,
                        '<img src=\'/app/static/1095419-61-6.png \' alt="1095419-61-6" scale="0.2">',
                    ],
                    [
                        0.7014331300849537,
                        0.21274365686278232,
                        '<img src=\'/app/static/113162-02-0.png \' alt="113162-02-0" scale="0.2">',
                    ],
                    [
                        0.27127474531441126,
                        0.1532568835224202,
                        '<img src=\'/app/static/114026-76-5.png \' alt="114026-76-5" scale="0.2">',
                    ],
                    [
                        0.74119453484615,
                        0.4429789198951307,
                        '<img src=\'/app/static/1150113-65-7.png \' alt="1150113-65-7" scale="0.2">',
                    ],
                    [
                        0.9085168271726379,
                        -0.11368487539738839,
                        '<img src=\'/app/static/1150113-66-8.png \' alt="1150113-66-8" scale="0.2">',
                    ],
                    [
                        0.4901414976321548,
                        -0.5714626421125906,
                        '<img src=\'/app/static/117745-41-2.png \' alt="117745-41-2" scale="0.2">',
                    ],
                    [
                        0.15698650218149132,
                        -0.680190827318961,
                        '<img src=\'/app/static/118-10-5.png \' alt="118-10-5" scale="0.2">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
            {
                type: "scatter",
                name: "class-9",
                symbolSize: 10,
                data: [
                    [
                        1.3002210055576213,
                        -0.5981152888360299,
                        '<img src=\'/app/static/100165-88-6.png \' alt="100165-88-6" scale="0.2">',
                    ],
                    [
                        1.469645160882472,
                        -0.7491489254679288,
                        '<img src=\'/app/static/1011465-24-9.png \' alt="1011465-24-9" scale="0.2">',
                    ],
                    [
                        1.2489927474072489,
                        -1.3983977829339358,
                        '<img src=\'/app/static/102490-05-1.png \' alt="102490-05-1" scale="0.2">',
                    ],
                    [
                        0.641875696250537,
                        -1.1360297957861922,
                        '<img src=\'/app/static/110480-82-5.png \' alt="110480-82-5" scale="0.2">',
                    ],
                    [
                        0.5969392875771182,
                        -1.1740281430957977,
                        '<img src=\'/app/static/110480-83-6.png \' alt="110480-83-6" scale="0.2">',
                    ],
                    [
                        1.1761559503165953,
                        -1.5651232913490933,
                        '<img src=\'/app/static/111795-43-8.png \' alt="111795-43-8" scale="0.2">',
                    ],
                    [
                        0.6856173769425002,
                        -1.5371437829292578,
                        '<img src=\'/app/static/116204-39-8.png \' alt="116204-39-8" scale="0.2">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
        ],

        legend: [
            {
                data: [
                    "class-0",
                    "class-1",
                    "class-2",
                    "class-3",
                    "class-4",
                    "class-5",
                    "class-6",
                    "class-7",
                    "class-8",
                    "class-9",
                ],
                selected: {
                    "class-0": true,
                    "class-1": true,
                    "class-2": true,
                    "class-3": true,
                    "class-4": true,
                    "class-5": true,
                    "class-6": true,
                    "class-7": true,
                    "class-8": true,
                    "class-9": true,
                },
                show: true,
                padding: 5,
                itemGap: 10,
                itemWidth: 25,
                itemHeight: 14,
                backgroundColor: "transparent",
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 0,
                pageButtonItemGap: 5,
                pageButtonPosition: "end",
                pageFormatter: "{current}/{total}",
                pageIconColor: "#2f4554",
                pageIconInactiveColor: "#aaa",
                pageIconSize: 15,
                animationDurationUpdate: 800,
                selector: false,
                selectorPosition: "auto",
                selectorItemGap: 7,
                selectorButtonGap: 10,
            },
        ],

        tooltip: {
            show: true,
            trigger: "item",
            triggerOn: "mousemove|click",
            axisPointer: {
                type: "line",
            },
            showContent: true,
            alwaysShowContent: false,
            showDelay: 0,
            hideDelay: 100,
            enterable: false,
            confine: false,
            appendToBody: false,
            transitionDuration: 0.4,
            // formatter: function (params) {
            //     return params.value[2];
            // },
            textStyle: {
                fontSize: 14,
            },
            borderWidth: 0,
            padding: 5,
            order: "seriesAsc",
        },

        xAxis: [
            {
                type: "value",
                show: true,
                scale: false,
                nameLocation: "end",
                nameGap: 15,
                gridIndex: 0,
                inverse: false,
                offset: 0,
                splitNumber: 5,
                minInterval: 0,
                splitLine: {
                    show: true,
                    lineStyle: {
                        show: true,
                        width: 1,
                        opacity: 1,
                        curveness: 0,
                        type: "solid",
                    },
                },
                data: null,
            },
        ],
        yAxis: [
            {
                type: "value",
                show: true,
                scale: false,
                nameLocation: "end",
                nameGap: 15,
                gridIndex: 0,
                axisTick: {
                    show: true,
                    alignWithLabel: false,
                    inside: false,
                },
                inverse: false,
                offset: 0,
                splitNumber: 5,
                minInterval: 0,
                splitLine: {
                    show: true,
                    lineStyle: {
                        show: true,
                        width: 1,
                        opacity: 1,
                        curveness: 0,
                        type: "solid",
                    },
                },
            },
        ],
        title: [
            {
                show: true,
                target: "blank",
                subtarget: "blank",
                padding: 5,
                itemGap: 10,
                textAlign: "auto",
                textVerticalAlign: "auto",
                triggerEvent: false,
            },
        ],
    };
    return <ReactEcharts option={option} style={{ height: 300 }} />;
};

export default ClusterDemoChart;
