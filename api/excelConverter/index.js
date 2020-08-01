const parser = require("convert-excel-to-json");
const path = require("path");

const result = parser({
  sourceFile: path.join(__dirname, "../data/Dipchart.xlsx"),
  header: {
    rows: 1
  },
  columnToKey: {
    "*": "{{columnHeader}}"
  }
});
const convertedData = {
  "MS": [
    {
      "DIP": 1,
      "VOLUME": 10.37,
      "DIFFERENCE": 1.04
    },
    {
      "DIP": 2,
      "VOLUME": 29.28,
      "DIFFERENCE": 1.89
    },
    {
      "DIP": 3,
      "VOLUME": 53.7,
      "DIFFERENCE": 2.44
    },
    {
      "DIP": 4,
      "VOLUME": 82.54,
      "DIFFERENCE": 2.88
    },
    {
      "DIP": 5,
      "VOLUME": 115.16,
      "DIFFERENCE": 3.26
    },
    {
      "DIP": 6,
      "VOLUME": 151.14,
      "DIFFERENCE": 3.6
    },
    {
      "DIP": 7,
      "VOLUME": 190.15,
      "DIFFERENCE": 3.9
    },
    {
      "DIP": 8,
      "VOLUME": 231.93,
      "DIFFERENCE": 4.18
    },
    {
      "DIP": 9,
      "VOLUME": 276.3,
      "DIFFERENCE": 4.44
    },
    {
      "DIP": 10,
      "VOLUME": 323.07,
      "DIFFERENCE": 4.68
    },
    {
      "DIP": 11,
      "VOLUME": 372.11,
      "DIFFERENCE": 4.9
    },
    {
      "DIP": 12,
      "VOLUME": 423.28,
      "DIFFERENCE": 5.12
    },
    {
      "DIP": 13,
      "VOLUME": 476.48,
      "DIFFERENCE": 5.32
    },
    {
      "DIP": 14,
      "VOLUME": 531.62,
      "DIFFERENCE": 5.51
    },
    {
      "DIP": 15,
      "VOLUME": 588.59,
      "DIFFERENCE": 5.7
    },
    {
      "DIP": 16,
      "VOLUME": 647.33,
      "DIFFERENCE": 5.87
    },
    {
      "DIP": 17,
      "VOLUME": 707.75,
      "DIFFERENCE": 6.04
    },
    {
      "DIP": 18,
      "VOLUME": 769.8,
      "DIFFERENCE": 6.2
    },
    {
      "DIP": 19,
      "VOLUME": 833.41,
      "DIFFERENCE": 6.36
    },
    {
      "DIP": 20,
      "VOLUME": 898.52,
      "DIFFERENCE": 6.51
    },
    {
      "DIP": 21,
      "VOLUME": 965.08,
      "DIFFERENCE": 6.66
    },
    {
      "DIP": 22,
      "VOLUME": 1033.05,
      "DIFFERENCE": 6.8
    },
    {
      "DIP": 23,
      "VOLUME": 1102.37,
      "DIFFERENCE": 6.93
    },
    {
      "DIP": 24,
      "VOLUME": 1172.99,
      "DIFFERENCE": 7.06
    },
    {
      "DIP": 25,
      "VOLUME": 1244.89,
      "DIFFERENCE": 7.19
    },
    {
      "DIP": 26,
      "VOLUME": 1318.01,
      "DIFFERENCE": 7.31
    },
    {
      "DIP": 27,
      "VOLUME": 1392.33,
      "DIFFERENCE": 7.43
    },
    {
      "DIP": 28,
      "VOLUME": 1467.79,
      "DIFFERENCE": 7.55
    },
    {
      "DIP": 29,
      "VOLUME": 1544.38,
      "DIFFERENCE": 7.66
    },
    {
      "DIP": 30,
      "VOLUME": 1622.06,
      "DIFFERENCE": 7.77
    },
    {
      "DIP": 31,
      "VOLUME": 1700.79,
      "DIFFERENCE": 7.87
    },
    {
      "DIP": 32,
      "VOLUME": 1780.55,
      "DIFFERENCE": 7.98
    },
    {
      "DIP": 33,
      "VOLUME": 1861.3,
      "DIFFERENCE": 8.08
    },
    {
      "DIP": 34,
      "VOLUME": 1943.02,
      "DIFFERENCE": 8.17
    },
    {
      "DIP": 35,
      "VOLUME": 2025.69,
      "DIFFERENCE": 8.27
    },
    {
      "DIP": 36,
      "VOLUME": 2109.27,
      "DIFFERENCE": 8.36
    },
    {
      "DIP": 37,
      "VOLUME": 2193.74,
      "DIFFERENCE": 8.45
    },
    {
      "DIP": 38,
      "VOLUME": 2279.08,
      "DIFFERENCE": 8.53
    },
    {
      "DIP": 39,
      "VOLUME": 2365.26,
      "DIFFERENCE": 8.62
    },
    {
      "DIP": 40,
      "VOLUME": 2452.26,
      "DIFFERENCE": 8.7
    },
    {
      "DIP": 41,
      "VOLUME": 2540.06,
      "DIFFERENCE": 8.78
    },
    {
      "DIP": 42,
      "VOLUME": 2628.64,
      "DIFFERENCE": 8.86
    },
    {
      "DIP": 43,
      "VOLUME": 2717.96,
      "DIFFERENCE": 8.93
    },
    {
      "DIP": 44,
      "VOLUME": 2808.03,
      "DIFFERENCE": 9.01
    },
    {
      "DIP": 45,
      "VOLUME": 2898.8,
      "DIFFERENCE": 9.08
    },
    {
      "DIP": 46,
      "VOLUME": 2990.27,
      "DIFFERENCE": 9.15
    },
    {
      "DIP": 47,
      "VOLUME": 3082.41,
      "DIFFERENCE": 9.21
    },
    {
      "DIP": 48,
      "VOLUME": 3175.21,
      "DIFFERENCE": 9.28
    },
    {
      "DIP": 49,
      "VOLUME": 3268.65,
      "DIFFERENCE": 9.34
    },
    {
      "DIP": 50,
      "VOLUME": 3362.71,
      "DIFFERENCE": 9.41
    },
    {
      "DIP": 51,
      "VOLUME": 3457.37,
      "DIFFERENCE": 9.47
    },
    {
      "DIP": 52,
      "VOLUME": 3552.61,
      "DIFFERENCE": 9.52
    },
    {
      "DIP": 53,
      "VOLUME": 3648.42,
      "DIFFERENCE": 9.58
    },
    {
      "DIP": 54,
      "VOLUME": 3744.78,
      "DIFFERENCE": 9.64
    },
    {
      "DIP": 55,
      "VOLUME": 3841.68,
      "DIFFERENCE": 9.69
    },
    {
      "DIP": 56,
      "VOLUME": 3939.09,
      "DIFFERENCE": 9.74
    },
    {
      "DIP": 57,
      "VOLUME": 4037,
      "DIFFERENCE": 9.79
    },
    {
      "DIP": 58,
      "VOLUME": 4135.41,
      "DIFFERENCE": 9.84
    },
    {
      "DIP": 59,
      "VOLUME": 4234.28,
      "DIFFERENCE": 9.89
    },
    {
      "DIP": 60,
      "VOLUME": 4333.61,
      "DIFFERENCE": 9.93
    },
    {
      "DIP": 61,
      "VOLUME": 4433.38,
      "DIFFERENCE": 9.98
    },
    {
      "DIP": 62,
      "VOLUME": 4533.57,
      "DIFFERENCE": 10.02
    },
    {
      "DIP": 63,
      "VOLUME": 4634.18,
      "DIFFERENCE": 10.06
    },
    {
      "DIP": 64,
      "VOLUME": 4735.18,
      "DIFFERENCE": 10.1
    },
    {
      "DIP": 65,
      "VOLUME": 4836.57,
      "DIFFERENCE": 10.14
    },
    {
      "DIP": 66,
      "VOLUME": 4938.32,
      "DIFFERENCE": 10.18
    },
    {
      "DIP": 67,
      "VOLUME": 5040.43,
      "DIFFERENCE": 10.21
    },
    {
      "DIP": 68,
      "VOLUME": 5142.88,
      "DIFFERENCE": 10.24
    },
    {
      "DIP": 69,
      "VOLUME": 5245.66,
      "DIFFERENCE": 10.28
    },
    {
      "DIP": 70,
      "VOLUME": 5348.75,
      "DIFFERENCE": 10.31
    },
    {
      "DIP": 71,
      "VOLUME": 5452.13,
      "DIFFERENCE": 10.34
    },
    {
      "DIP": 72,
      "VOLUME": 5555.81,
      "DIFFERENCE": 10.37
    },
    {
      "DIP": 73,
      "VOLUME": 5659.76,
      "DIFFERENCE": 10.39
    },
    {
      "DIP": 74,
      "VOLUME": 5763.97,
      "DIFFERENCE": 10.42
    },
    {
      "DIP": 75,
      "VOLUME": 5868.43,
      "DIFFERENCE": 10.45
    },
    {
      "DIP": 76,
      "VOLUME": 5973.12,
      "DIFFERENCE": 10.47
    },
    {
      "DIP": 77,
      "VOLUME": 6078.03,
      "DIFFERENCE": 10.49
    },
    {
      "DIP": 78,
      "VOLUME": 6183.16,
      "DIFFERENCE": 10.51
    },
    {
      "DIP": 79,
      "VOLUME": 6288.48,
      "DIFFERENCE": 10.53
    },
    {
      "DIP": 80,
      "VOLUME": 6393.98,
      "DIFFERENCE": 10.55
    },
    {
      "DIP": 81,
      "VOLUME": 6499.65,
      "DIFFERENCE": 10.57
    },
    {
      "DIP": 82,
      "VOLUME": 6605.48,
      "DIFFERENCE": 10.58
    },
    {
      "DIP": 83,
      "VOLUME": 6711.46,
      "DIFFERENCE": 10.6
    },
    {
      "DIP": 84,
      "VOLUME": 6817.57,
      "DIFFERENCE": 10.61
    },
    {
      "DIP": 85,
      "VOLUME": 6923.81,
      "DIFFERENCE": 10.62
    },
    {
      "DIP": 86,
      "VOLUME": 7030.15,
      "DIFFERENCE": 10.63
    },
    {
      "DIP": 87,
      "VOLUME": 7136.59,
      "DIFFERENCE": 10.64
    },
    {
      "DIP": 88,
      "VOLUME": 7243.12,
      "DIFFERENCE": 10.65
    },
    {
      "DIP": 89,
      "VOLUME": 7349.71,
      "DIFFERENCE": 10.66
    },
    {
      "DIP": 90,
      "VOLUME": 7456.37,
      "DIFFERENCE": 10.67
    },
    {
      "DIP": 91,
      "VOLUME": 7563.08,
      "DIFFERENCE": 10.67
    },
    {
      "DIP": 92,
      "VOLUME": 7669.82,
      "DIFFERENCE": 10.67
    },
    {
      "DIP": 93,
      "VOLUME": 7776.59,
      "DIFFERENCE": 10.68
    },
    {
      "DIP": 94,
      "VOLUME": 7883.37,
      "DIFFERENCE": 10.68
    },
    {
      "DIP": 95,
      "VOLUME": 7990.15,
      "DIFFERENCE": 10.68
    },
    {
      "DIP": 96,
      "VOLUME": 8096.91,
      "DIFFERENCE": 10.68
    },
    {
      "DIP": 97,
      "VOLUME": 8203.66,
      "DIFFERENCE": 10.67
    },
    {
      "DIP": 98,
      "VOLUME": 8310.36,
      "DIFFERENCE": 10.67
    },
    {
      "DIP": 99,
      "VOLUME": 8417.02,
      "DIFFERENCE": 10.67
    },
    {
      "DIP": 100,
      "VOLUME": 8523.62,
      "DIFFERENCE": 10.66
    },
    {
      "DIP": 101,
      "VOLUME": 8630.14,
      "DIFFERENCE": 10.65
    },
    {
      "DIP": 102,
      "VOLUME": 8736.58,
      "DIFFERENCE": 10.64
    },
    {
      "DIP": 103,
      "VOLUME": 8842.93,
      "DIFFERENCE": 10.63
    },
    {
      "DIP": 104,
      "VOLUME": 8949.16,
      "DIFFERENCE": 10.62
    },
    {
      "DIP": 105,
      "VOLUME": 9055.27,
      "DIFFERENCE": 10.61
    },
    {
      "DIP": 106,
      "VOLUME": 9161.25,
      "DIFFERENCE": 10.6
    },
    {
      "DIP": 107,
      "VOLUME": 9267.08,
      "DIFFERENCE": 10.58
    },
    {
      "DIP": 108,
      "VOLUME": 9372.76,
      "DIFFERENCE": 10.57
    },
    {
      "DIP": 109,
      "VOLUME": 9478.26,
      "DIFFERENCE": 10.55
    },
    {
      "DIP": 110,
      "VOLUME": 9583.58,
      "DIFFERENCE": 10.53
    },
    {
      "DIP": 111,
      "VOLUME": 9688.7,
      "DIFFERENCE": 10.51
    },
    {
      "DIP": 112,
      "VOLUME": 9793.61,
      "DIFFERENCE": 10.49
    },
    {
      "DIP": 113,
      "VOLUME": 9898.31,
      "DIFFERENCE": 10.47
    },
    {
      "DIP": 114,
      "VOLUME": 10002.76,
      "DIFFERENCE": 10.45
    },
    {
      "DIP": 115,
      "VOLUME": 10106.97,
      "DIFFERENCE": 10.42
    },
    {
      "DIP": 116,
      "VOLUME": 10210.92,
      "DIFFERENCE": 10.39
    },
    {
      "DIP": 117,
      "VOLUME": 10314.6,
      "DIFFERENCE": 10.37
    },
    {
      "DIP": 118,
      "VOLUME": 10417.99,
      "DIFFERENCE": 10.34
    },
    {
      "DIP": 119,
      "VOLUME": 10521.08,
      "DIFFERENCE": 10.31
    },
    {
      "DIP": 120,
      "VOLUME": 10623.86,
      "DIFFERENCE": 10.28
    },
    {
      "DIP": 121,
      "VOLUME": 10726.3,
      "DIFFERENCE": 10.24
    },
    {
      "DIP": 122,
      "VOLUME": 10828.41,
      "DIFFERENCE": 10.21
    },
    {
      "DIP": 123,
      "VOLUME": 10930.17,
      "DIFFERENCE": 10.18
    },
    {
      "DIP": 124,
      "VOLUME": 11031.55,
      "DIFFERENCE": 10.14
    },
    {
      "DIP": 125,
      "VOLUME": 11132.56,
      "DIFFERENCE": 10.1
    },
    {
      "DIP": 126,
      "VOLUME": 11233.16,
      "DIFFERENCE": 10.06
    },
    {
      "DIP": 127,
      "VOLUME": 11333.36,
      "DIFFERENCE": 10.02
    },
    {
      "DIP": 128,
      "VOLUME": 11433.13,
      "DIFFERENCE": 9.98
    },
    {
      "DIP": 129,
      "VOLUME": 11532.46,
      "DIFFERENCE": 9.93
    },
    {
      "DIP": 130,
      "VOLUME": 11631.33,
      "DIFFERENCE": 9.89
    },
    {
      "DIP": 131,
      "VOLUME": 11729.73,
      "DIFFERENCE": 9.84
    },
    {
      "DIP": 132,
      "VOLUME": 11827.65,
      "DIFFERENCE": 9.79
    },
    {
      "DIP": 133,
      "VOLUME": 11925.06,
      "DIFFERENCE": 9.74
    },
    {
      "DIP": 134,
      "VOLUME": 12021.95,
      "DIFFERENCE": 9.69
    },
    {
      "DIP": 135,
      "VOLUME": 12118.31,
      "DIFFERENCE": 9.64
    },
    {
      "DIP": 136,
      "VOLUME": 12214.12,
      "DIFFERENCE": 9.58
    },
    {
      "DIP": 137,
      "VOLUME": 12309.37,
      "DIFFERENCE": 9.52
    },
    {
      "DIP": 138,
      "VOLUME": 12404.03,
      "DIFFERENCE": 9.47
    },
    {
      "DIP": 139,
      "VOLUME": 12498.08,
      "DIFFERENCE": 9.41
    },
    {
      "DIP": 140,
      "VOLUME": 12591.52,
      "DIFFERENCE": 9.34
    },
    {
      "DIP": 141,
      "VOLUME": 12684.32,
      "DIFFERENCE": 9.28
    },
    {
      "DIP": 142,
      "VOLUME": 12776.46,
      "DIFFERENCE": 9.21
    },
    {
      "DIP": 143,
      "VOLUME": 12867.93,
      "DIFFERENCE": 9.15
    },
    {
      "DIP": 144,
      "VOLUME": 12958.71,
      "DIFFERENCE": 9.08
    },
    {
      "DIP": 145,
      "VOLUME": 13048.77,
      "DIFFERENCE": 9.01
    },
    {
      "DIP": 146,
      "VOLUME": 13138.1,
      "DIFFERENCE": 8.93
    },
    {
      "DIP": 147,
      "VOLUME": 13226.67,
      "DIFFERENCE": 8.86
    },
    {
      "DIP": 148,
      "VOLUME": 13314.47,
      "DIFFERENCE": 8.78
    },
    {
      "DIP": 149,
      "VOLUME": 13401.47,
      "DIFFERENCE": 8.7
    },
    {
      "DIP": 150,
      "VOLUME": 13487.65,
      "DIFFERENCE": 8.62
    },
    {
      "DIP": 151,
      "VOLUME": 13572.99,
      "DIFFERENCE": 8.53
    },
    {
      "DIP": 152,
      "VOLUME": 13657.46,
      "DIFFERENCE": 8.45
    },
    {
      "DIP": 153,
      "VOLUME": 13741.04,
      "DIFFERENCE": 8.36
    },
    {
      "DIP": 154,
      "VOLUME": 13823.71,
      "DIFFERENCE": 8.27
    },
    {
      "DIP": 155,
      "VOLUME": 13905.43,
      "DIFFERENCE": 8.17
    },
    {
      "DIP": 156,
      "VOLUME": 13986.19,
      "DIFFERENCE": 8.08
    },
    {
      "DIP": 157,
      "VOLUME": 14065.95,
      "DIFFERENCE": 7.98
    },
    {
      "DIP": 158,
      "VOLUME": 14144.68,
      "DIFFERENCE": 7.87
    },
    {
      "DIP": 159,
      "VOLUME": 14222.35,
      "DIFFERENCE": 7.77
    },
    {
      "DIP": 160,
      "VOLUME": 14298.94,
      "DIFFERENCE": 7.66
    },
    {
      "DIP": 161,
      "VOLUME": 14374.41,
      "DIFFERENCE": 7.55
    },
    {
      "DIP": 162,
      "VOLUME": 14448.72,
      "DIFFERENCE": 7.43
    },
    {
      "DIP": 163,
      "VOLUME": 14521.85,
      "DIFFERENCE": 7.31
    },
    {
      "DIP": 164,
      "VOLUME": 14593.74,
      "DIFFERENCE": 7.19
    },
    {
      "DIP": 165,
      "VOLUME": 14664.37,
      "DIFFERENCE": 7.06
    },
    {
      "DIP": 166,
      "VOLUME": 14733.69,
      "DIFFERENCE": 6.93
    },
    {
      "DIP": 167,
      "VOLUME": 14801.65,
      "DIFFERENCE": 6.8
    },
    {
      "DIP": 168,
      "VOLUME": 14868.21,
      "DIFFERENCE": 6.66
    },
    {
      "DIP": 169,
      "VOLUME": 14933.33,
      "DIFFERENCE": 6.51
    },
    {
      "DIP": 170,
      "VOLUME": 14996.94,
      "DIFFERENCE": 6.36
    },
    {
      "DIP": 171,
      "VOLUME": 15058.98,
      "DIFFERENCE": 6.2
    },
    {
      "DIP": 172,
      "VOLUME": 15119.41,
      "DIFFERENCE": 6.04
    },
    {
      "DIP": 173,
      "VOLUME": 15178.15,
      "DIFFERENCE": 5.87
    },
    {
      "DIP": 174,
      "VOLUME": 15235.12,
      "DIFFERENCE": 5.7
    },
    {
      "DIP": 175,
      "VOLUME": 15290.25,
      "DIFFERENCE": 5.51
    },
    {
      "DIP": 176,
      "VOLUME": 15343.45,
      "DIFFERENCE": 5.32
    },
    {
      "DIP": 177,
      "VOLUME": 15394.63,
      "DIFFERENCE": 5.12
    },
    {
      "DIP": 178,
      "VOLUME": 15443.66,
      "DIFFERENCE": 4.9
    },
    {
      "DIP": 179,
      "VOLUME": 15490.44,
      "DIFFERENCE": 4.68
    },
    {
      "DIP": 180,
      "VOLUME": 15534.8,
      "DIFFERENCE": 4.44
    },
    {
      "DIP": 181,
      "VOLUME": 15576.59,
      "DIFFERENCE": 4.18
    },
    {
      "DIP": 182,
      "VOLUME": 15615.59,
      "DIFFERENCE": 3.9
    },
    {
      "DIP": 183,
      "VOLUME": 15651.57,
      "DIFFERENCE": 3.9
    },
    {
      "DIP": 184,
      "VOLUME": 15684.2,
      "DIFFERENCE": 3.26
    },
    {
      "DIP": 185,
      "VOLUME": 15713.04,
      "DIFFERENCE": 2.88
    },
    {
      "DIP": 186,
      "VOLUME": 15737.46,
      "DIFFERENCE": 2.44
    },
    {
      "DIP": 187,
      "VOLUME": 15756.37,
      "DIFFERENCE": 1.89
    },
    {
      "DIP": 188,
      "VOLUME": 15766.73,
      "DIFFERENCE": 1.04
    }
  ],
  "HSD": [
    {
      "DIP": 1,
      "VOLUME": 14.1,
      "DIFFERENCE": 1.41
    },
    {
      "DIP": 2,
      "VOLUME": 39.84,
      "DIFFERENCE": 2.57
    },
    {
      "DIP": 3,
      "VOLUME": 73.1,
      "DIFFERENCE": 3.33
    },
    {
      "DIP": 4,
      "VOLUME": 112.41,
      "DIFFERENCE": 3.93
    },
    {
      "DIP": 5,
      "VOLUME": 156.9,
      "DIFFERENCE": 4.45
    },
    {
      "DIP": 6,
      "VOLUME": 205.99,
      "DIFFERENCE": 4.91
    },
    {
      "DIP": 7,
      "VOLUME": 259.25,
      "DIFFERENCE": 5.33
    },
    {
      "DIP": 8,
      "VOLUME": 316.35,
      "DIFFERENCE": 5.71
    },
    {
      "DIP": 9,
      "VOLUME": 377.01,
      "DIFFERENCE": 6.07
    },
    {
      "DIP": 10,
      "VOLUME": 441,
      "DIFFERENCE": 6.4
    },
    {
      "DIP": 11,
      "VOLUME": 508.13,
      "DIFFERENCE": 6.71
    },
    {
      "DIP": 12,
      "VOLUME": 578.24,
      "DIFFERENCE": 7.01
    },
    {
      "DIP": 13,
      "VOLUME": 651.18,
      "DIFFERENCE": 7.29
    },
    {
      "DIP": 14,
      "VOLUME": 726.81,
      "DIFFERENCE": 7.56
    },
    {
      "DIP": 15,
      "VOLUME": 805.03,
      "DIFFERENCE": 7.82
    },
    {
      "DIP": 16,
      "VOLUME": 885.72,
      "DIFFERENCE": 8.07
    },
    {
      "DIP": 17,
      "VOLUME": 968.8,
      "DIFFERENCE": 8.31
    },
    {
      "DIP": 18,
      "VOLUME": 1054.16,
      "DIFFERENCE": 8.54
    },
    {
      "DIP": 19,
      "VOLUME": 1141.74,
      "DIFFERENCE": 8.76
    },
    {
      "DIP": 20,
      "VOLUME": 1231.45,
      "DIFFERENCE": 8.97
    },
    {
      "DIP": 21,
      "VOLUME": 1323.23,
      "DIFFERENCE": 9.18
    },
    {
      "DIP": 22,
      "VOLUME": 1417.02,
      "DIFFERENCE": 9.38
    },
    {
      "DIP": 23,
      "VOLUME": 1512.74,
      "DIFFERENCE": 9.57
    },
    {
      "DIP": 24,
      "VOLUME": 1610.34,
      "DIFFERENCE": 9.76
    },
    {
      "DIP": 25,
      "VOLUME": 1709.78,
      "DIFFERENCE": 9.94
    },
    {
      "DIP": 26,
      "VOLUME": 1810.99,
      "DIFFERENCE": 10.12
    },
    {
      "DIP": 27,
      "VOLUME": 1913.93,
      "DIFFERENCE": 10.29
    },
    {
      "DIP": 28,
      "VOLUME": 2018.56,
      "DIFFERENCE": 10.46
    },
    {
      "DIP": 29,
      "VOLUME": 2124.82,
      "DIFFERENCE": 10.63
    },
    {
      "DIP": 30,
      "VOLUME": 2232.68,
      "DIFFERENCE": 10.79
    },
    {
      "DIP": 31,
      "VOLUME": 2342.1,
      "DIFFERENCE": 10.94
    },
    {
      "DIP": 32,
      "VOLUME": 2453.04,
      "DIFFERENCE": 11.09
    },
    {
      "DIP": 33,
      "VOLUME": 2565.46,
      "DIFFERENCE": 11.24
    },
    {
      "DIP": 34,
      "VOLUME": 2679.32,
      "DIFFERENCE": 11.39
    },
    {
      "DIP": 35,
      "VOLUME": 2794.6,
      "DIFFERENCE": 11.53
    },
    {
      "DIP": 36,
      "VOLUME": 2911.26,
      "DIFFERENCE": 11.67
    },
    {
      "DIP": 37,
      "VOLUME": 3029.26,
      "DIFFERENCE": 11.8
    },
    {
      "DIP": 38,
      "VOLUME": 3148.58,
      "DIFFERENCE": 11.93
    },
    {
      "DIP": 39,
      "VOLUME": 3269.19,
      "DIFFERENCE": 12.06
    },
    {
      "DIP": 40,
      "VOLUME": 3391.06,
      "DIFFERENCE": 12.19
    },
    {
      "DIP": 41,
      "VOLUME": 3514.16,
      "DIFFERENCE": 12.31
    },
    {
      "DIP": 42,
      "VOLUME": 3638.46,
      "DIFFERENCE": 12.43
    },
    {
      "DIP": 43,
      "VOLUME": 3763.94,
      "DIFFERENCE": 12.55
    },
    {
      "DIP": 44,
      "VOLUME": 3890.57,
      "DIFFERENCE": 12.66
    },
    {
      "DIP": 45,
      "VOLUME": 4018.33,
      "DIFFERENCE": 12.78
    },
    {
      "DIP": 46,
      "VOLUME": 4147.2,
      "DIFFERENCE": 12.89
    },
    {
      "DIP": 47,
      "VOLUME": 4277.14,
      "DIFFERENCE": 12.99
    },
    {
      "DIP": 48,
      "VOLUME": 4408.14,
      "DIFFERENCE": 13.1
    },
    {
      "DIP": 49,
      "VOLUME": 4540.18,
      "DIFFERENCE": 13.2
    },
    {
      "DIP": 50,
      "VOLUME": 4673.22,
      "DIFFERENCE": 13.3
    },
    {
      "DIP": 51,
      "VOLUME": 4807.26,
      "DIFFERENCE": 13.4
    },
    {
      "DIP": 52,
      "VOLUME": 4942.27,
      "DIFFERENCE": 13.5
    },
    {
      "DIP": 53,
      "VOLUME": 5078.23,
      "DIFFERENCE": 13.6
    },
    {
      "DIP": 54,
      "VOLUME": 5215.12,
      "DIFFERENCE": 13.69
    },
    {
      "DIP": 55,
      "VOLUME": 5352.92,
      "DIFFERENCE": 13.78
    },
    {
      "DIP": 56,
      "VOLUME": 5491.61,
      "DIFFERENCE": 13.87
    },
    {
      "DIP": 57,
      "VOLUME": 5631.17,
      "DIFFERENCE": 13.96
    },
    {
      "DIP": 58,
      "VOLUME": 5771.59,
      "DIFFERENCE": 14.04
    },
    {
      "DIP": 59,
      "VOLUME": 5912.84,
      "DIFFERENCE": 14.13
    },
    {
      "DIP": 60,
      "VOLUME": 6054.91,
      "DIFFERENCE": 14.21
    },
    {
      "DIP": 61,
      "VOLUME": 6197.78,
      "DIFFERENCE": 14.29
    },
    {
      "DIP": 62,
      "VOLUME": 6341.43,
      "DIFFERENCE": 14.37
    },
    {
      "DIP": 63,
      "VOLUME": 6485.85,
      "DIFFERENCE": 14.44
    },
    {
      "DIP": 64,
      "VOLUME": 6631.02,
      "DIFFERENCE": 14.52
    },
    {
      "DIP": 65,
      "VOLUME": 6776.92,
      "DIFFERENCE": 14.59
    },
    {
      "DIP": 66,
      "VOLUME": 6923.54,
      "DIFFERENCE": 14.66
    },
    {
      "DIP": 67,
      "VOLUME": 7070.86,
      "DIFFERENCE": 14.73
    },
    {
      "DIP": 68,
      "VOLUME": 7218.86,
      "DIFFERENCE": 14.8
    },
    {
      "DIP": 69,
      "VOLUME": 7367.53,
      "DIFFERENCE": 14.87
    },
    {
      "DIP": 70,
      "VOLUME": 7518.86,
      "DIFFERENCE": 14.93
    },
    {
      "DIP": 71,
      "VOLUME": 7666.82,
      "DIFFERENCE": 15
    },
    {
      "DIP": 72,
      "VOLUME": 7817.41,
      "DIFFERENCE": 15.06
    },
    {
      "DIP": 73,
      "VOLUME": 7968.61,
      "DIFFERENCE": 15.12
    },
    {
      "DIP": 74,
      "VOLUME": 8120.4,
      "DIFFERENCE": 15.18
    },
    {
      "DIP": 75,
      "VOLUME": 8272.78,
      "DIFFERENCE": 15.24
    },
    {
      "DIP": 76,
      "VOLUME": 8425.77,
      "DIFFERENCE": 15.29
    },
    {
      "DIP": 77,
      "VOLUME": 8579.21,
      "DIFFERENCE": 15.35
    },
    {
      "DIP": 78,
      "VOLUME": 8733.24,
      "DIFFERENCE": 15.4
    },
    {
      "DIP": 79,
      "VOLUME": 8887.79,
      "DIFFERENCE": 15.46
    },
    {
      "DIP": 80,
      "VOLUME": 9042.86,
      "DIFFERENCE": 15.51
    },
    {
      "DIP": 81,
      "VOLUME": 9198.42,
      "DIFFERENCE": 15.56
    },
    {
      "DIP": 82,
      "VOLUME": 9354.46,
      "DIFFERENCE": 15.6
    },
    {
      "DIP": 83,
      "VOLUME": 9510.98,
      "DIFFERENCE": 15.65
    },
    {
      "DIP": 84,
      "VOLUME": 9667.95,
      "DIFFERENCE": 15.7
    },
    {
      "DIP": 85,
      "VOLUME": 9825.37,
      "DIFFERENCE": 15.74
    },
    {
      "DIP": 86,
      "VOLUME": 9983.22,
      "DIFFERENCE": 15.78
    },
    {
      "DIP": 87,
      "VOLUME": 10141.49,
      "DIFFERENCE": 15.83
    },
    {
      "DIP": 88,
      "VOLUME": 10300.16,
      "DIFFERENCE": 15.87
    },
    {
      "DIP": 89,
      "VOLUME": 10459.23,
      "DIFFERENCE": 15.91
    },
    {
      "DIP": 90,
      "VOLUME": 10618.68,
      "DIFFERENCE": 15.94
    },
    {
      "DIP": 91,
      "VOLUME": 10778.5,
      "DIFFERENCE": 15.98
    },
    {
      "DIP": 92,
      "VOLUME": 10938.67,
      "DIFFERENCE": 16.02
    },
    {
      "DIP": 93,
      "VOLUME": 11099.19,
      "DIFFERENCE": 16.05
    },
    {
      "DIP": 94,
      "VOLUME": 11260.04,
      "DIFFERENCE": 16.08
    },
    {
      "DIP": 95,
      "VOLUME": 11421.21,
      "DIFFERENCE": 16.12
    },
    {
      "DIP": 96,
      "VOLUME": 11582.69,
      "DIFFERENCE": 16.15
    },
    {
      "DIP": 97,
      "VOLUME": 11744.46,
      "DIFFERENCE": 16.18
    },
    {
      "DIP": 98,
      "VOLUME": 11906.52,
      "DIFFERENCE": 16.21
    },
    {
      "DIP": 99,
      "VOLUME": 12068.85,
      "DIFFERENCE": 16.23
    },
    {
      "DIP": 100,
      "VOLUME": 12231.43,
      "DIFFERENCE": 16.26
    },
    {
      "DIP": 101,
      "VOLUME": 12394.27,
      "DIFFERENCE": 16.28
    },
    {
      "DIP": 102,
      "VOLUME": 12557.35,
      "DIFFERENCE": 16.31
    },
    {
      "DIP": 103,
      "VOLUME": 12720.65,
      "DIFFERENCE": 16.33
    },
    {
      "DIP": 104,
      "VOLUME": 12884.16,
      "DIFFERENCE": 16.35
    },
    {
      "DIP": 105,
      "VOLUME": 13047.88,
      "DIFFERENCE": 16.37
    },
    {
      "DIP": 106,
      "VOLUME": 13211.78,
      "DIFFERENCE": 16.39
    },
    {
      "DIP": 107,
      "VOLUME": 13375.87,
      "DIFFERENCE": 16.41
    },
    {
      "DIP": 108,
      "VOLUME": 13540.12,
      "DIFFERENCE": 16.43
    },
    {
      "DIP": 109,
      "VOLUME": 13704.54,
      "DIFFERENCE": 16.44
    },
    {
      "DIP": 110,
      "VOLUME": 13869.09,
      "DIFFERENCE": 16.46
    },
    {
      "DIP": 111,
      "VOLUME": 14033.78,
      "DIFFERENCE": 16.47
    },
    {
      "DIP": 112,
      "VOLUME": 14198.6,
      "DIFFERENCE": 16.48
    },
    {
      "DIP": 113,
      "VOLUME": 14363.52,
      "DIFFERENCE": 16.49
    },
    {
      "DIP": 114,
      "VOLUME": 14528.54,
      "DIFFERENCE": 16.5
    },
    {
      "DIP": 115,
      "VOLUME": 14693.66,
      "DIFFERENCE": 16.51
    },
    {
      "DIP": 116,
      "VOLUME": 14858.85,
      "DIFFERENCE": 16.52
    },
    {
      "DIP": 117,
      "VOLUME": 15024.11,
      "DIFFERENCE": 16.53
    },
    {
      "DIP": 118,
      "VOLUME": 15189.42,
      "DIFFERENCE": 16.53
    },
    {
      "DIP": 119,
      "VOLUME": 15354.78,
      "DIFFERENCE": 16.54
    },
    {
      "DIP": 120,
      "VOLUME": 15520.17,
      "DIFFERENCE": 16.54
    },
    {
      "DIP": 121,
      "VOLUME": 15685.59,
      "DIFFERENCE": 16.54
    },
    {
      "DIP": 122,
      "VOLUME": 15851.01,
      "DIFFERENCE": 16.54
    },
    {
      "DIP": 123,
      "VOLUME": 16016.44,
      "DIFFERENCE": 16.54
    },
    {
      "DIP": 124,
      "VOLUME": 16181.85,
      "DIFFERENCE": 16.54
    },
    {
      "DIP": 125,
      "VOLUME": 16347.25,
      "DIFFERENCE": 16.54
    },
    {
      "DIP": 126,
      "VOLUME": 16512.61,
      "DIFFERENCE": 16.54
    },
    {
      "DIP": 127,
      "VOLUME": 16677.92,
      "DIFFERENCE": 16.53
    },
    {
      "DIP": 128,
      "VOLUME": 16843.18,
      "DIFFERENCE": 16.53
    },
    {
      "DIP": 129,
      "VOLUME": 17008.37,
      "DIFFERENCE": 16.52
    },
    {
      "DIP": 130,
      "VOLUME": 17173.48,
      "DIFFERENCE": 16.51
    },
    {
      "DIP": 131,
      "VOLUME": 17338.51,
      "DIFFERENCE": 16.5
    },
    {
      "DIP": 132,
      "VOLUME": 17503.43,
      "DIFFERENCE": 16.49
    },
    {
      "DIP": 133,
      "VOLUME": 17668.25,
      "DIFFERENCE": 16.48
    },
    {
      "DIP": 134,
      "VOLUME": 17832.94,
      "DIFFERENCE": 16.47
    },
    {
      "DIP": 135,
      "VOLUME": 17997.49,
      "DIFFERENCE": 16.46
    },
    {
      "DIP": 136,
      "VOLUME": 18161.9,
      "DIFFERENCE": 16.44
    },
    {
      "DIP": 137,
      "VOLUME": 18326.16,
      "DIFFERENCE": 16.43
    },
    {
      "DIP": 138,
      "VOLUME": 18490.25,
      "DIFFERENCE": 16.41
    },
    {
      "DIP": 139,
      "VOLUME": 18654.15,
      "DIFFERENCE": 16.39
    },
    {
      "DIP": 140,
      "VOLUME": 18817.87,
      "DIFFERENCE": 16.37
    },
    {
      "DIP": 141,
      "VOLUME": 18981.38,
      "DIFFERENCE": 16.35
    },
    {
      "DIP": 142,
      "VOLUME": 19144.68,
      "DIFFERENCE": 16.33
    },
    {
      "DIP": 143,
      "VOLUME": 19307.76,
      "DIFFERENCE": 16.31
    },
    {
      "DIP": 144,
      "VOLUME": 19470.6,
      "DIFFERENCE": 16.28
    },
    {
      "DIP": 145,
      "VOLUME": 19633.18,
      "DIFFERENCE": 16.26
    },
    {
      "DIP": 146,
      "VOLUME": 19795.51,
      "DIFFERENCE": 16.23
    },
    {
      "DIP": 147,
      "VOLUME": 19957.57,
      "DIFFERENCE": 16.21
    },
    {
      "DIP": 148,
      "VOLUME": 20119.34,
      "DIFFERENCE": 16.18
    },
    {
      "DIP": 149,
      "VOLUME": 20280.82,
      "DIFFERENCE": 16.15
    },
    {
      "DIP": 150,
      "VOLUME": 20441.99,
      "DIFFERENCE": 16.12
    },
    {
      "DIP": 151,
      "VOLUME": 20602.84,
      "DIFFERENCE": 16.08
    },
    {
      "DIP": 152,
      "VOLUME": 20763.36,
      "DIFFERENCE": 16.05
    },
    {
      "DIP": 153,
      "VOLUME": 20923.53,
      "DIFFERENCE": 16.02
    },
    {
      "DIP": 154,
      "VOLUME": 21083.35,
      "DIFFERENCE": 15.98
    },
    {
      "DIP": 155,
      "VOLUME": 21242.8,
      "DIFFERENCE": 15.94
    },
    {
      "DIP": 156,
      "VOLUME": 21401.87,
      "DIFFERENCE": 15.91
    },
    {
      "DIP": 157,
      "VOLUME": 21560.54,
      "DIFFERENCE": 15.87
    },
    {
      "DIP": 158,
      "VOLUME": 21718.81,
      "DIFFERENCE": 15.83
    },
    {
      "DIP": 159,
      "VOLUME": 21876.66,
      "DIFFERENCE": 15.78
    },
    {
      "DIP": 160,
      "VOLUME": 22034.08,
      "DIFFERENCE": 15.74
    },
    {
      "DIP": 161,
      "VOLUME": 22191.05,
      "DIFFERENCE": 15.7
    },
    {
      "DIP": 162,
      "VOLUME": 22347.57,
      "DIFFERENCE": 15.65
    },
    {
      "DIP": 163,
      "VOLUME": 22503.61,
      "DIFFERENCE": 15.6
    },
    {
      "DIP": 164,
      "VOLUME": 22659.17,
      "DIFFERENCE": 15.56
    },
    {
      "DIP": 165,
      "VOLUME": 22814.24,
      "DIFFERENCE": 15.51
    },
    {
      "DIP": 166,
      "VOLUME": 22968.79,
      "DIFFERENCE": 15.46
    },
    {
      "DIP": 167,
      "VOLUME": 23122.82,
      "DIFFERENCE": 15.4
    },
    {
      "DIP": 168,
      "VOLUME": 23276.31,
      "DIFFERENCE": 15.35
    },
    {
      "DIP": 169,
      "VOLUME": 23429.25,
      "DIFFERENCE": 15.29
    },
    {
      "DIP": 170,
      "VOLUME": 23581.63,
      "DIFFERENCE": 15.24
    },
    {
      "DIP": 171,
      "VOLUME": 23733.42,
      "DIFFERENCE": 15.18
    },
    {
      "DIP": 172,
      "VOLUME": 23884.62,
      "DIFFERENCE": 15.12
    },
    {
      "DIP": 173,
      "VOLUME": 24035.21,
      "DIFFERENCE": 15.06
    },
    {
      "DIP": 174,
      "VOLUME": 24185.17,
      "DIFFERENCE": 15
    },
    {
      "DIP": 175,
      "VOLUME": 24334.5,
      "DIFFERENCE": 14.93
    },
    {
      "DIP": 176,
      "VOLUME": 24483.17,
      "DIFFERENCE": 14.87
    },
    {
      "DIP": 177,
      "VOLUME": 24631.17,
      "DIFFERENCE": 14.8
    },
    {
      "DIP": 178,
      "VOLUME": 24778.49,
      "DIFFERENCE": 14.73
    },
    {
      "DIP": 179,
      "VOLUME": 24925.11,
      "DIFFERENCE": 14.66
    },
    {
      "DIP": 180,
      "VOLUME": 25071.01,
      "DIFFERENCE": 14.59
    },
    {
      "DIP": 181,
      "VOLUME": 25216.18,
      "DIFFERENCE": 14.52
    },
    {
      "DIP": 182,
      "VOLUME": 25360.59,
      "DIFFERENCE": 14.44
    },
    {
      "DIP": 183,
      "VOLUME": 25504.25,
      "DIFFERENCE": 14.37
    },
    {
      "DIP": 184,
      "VOLUME": 25647.12,
      "DIFFERENCE": 14.29
    },
    {
      "DIP": 185,
      "VOLUME": 25789.19,
      "DIFFERENCE": 14.21
    },
    {
      "DIP": 186,
      "VOLUME": 25930.44,
      "DIFFERENCE": 14.13
    },
    {
      "DIP": 187,
      "VOLUME": 26070.86,
      "DIFFERENCE": 14.04
    },
    {
      "DIP": 188,
      "VOLUME": 26210.42,
      "DIFFERENCE": 13.96
    },
    {
      "DIP": 189,
      "VOLUME": 26349.11,
      "DIFFERENCE": 13.87
    },
    {
      "DIP": 190,
      "VOLUME": 26486.91,
      "DIFFERENCE": 13.78
    },
    {
      "DIP": 191,
      "VOLUME": 26623.8,
      "DIFFERENCE": 13.69
    },
    {
      "DIP": 192,
      "VOLUME": 26759.76,
      "DIFFERENCE": 13.6
    },
    {
      "DIP": 193,
      "VOLUME": 26894.77,
      "DIFFERENCE": 13.5
    },
    {
      "DIP": 194,
      "VOLUME": 27028.81,
      "DIFFERENCE": 13.4
    },
    {
      "DIP": 195,
      "VOLUME": 27161.85,
      "DIFFERENCE": 13.3
    },
    {
      "DIP": 196,
      "VOLUME": 27293.89,
      "DIFFERENCE": 13.2
    },
    {
      "DIP": 197,
      "VOLUME": 27424.89,
      "DIFFERENCE": 13.1
    },
    {
      "DIP": 198,
      "VOLUME": 27554.83,
      "DIFFERENCE": 12.99
    },
    {
      "DIP": 199,
      "VOLUME": 27683.7,
      "DIFFERENCE": 12.89
    },
    {
      "DIP": 200,
      "VOLUME": 27811.46,
      "DIFFERENCE": 12.78
    },
    {
      "DIP": 201,
      "VOLUME": 27938.09,
      "DIFFERENCE": 12.66
    },
    {
      "DIP": 202,
      "VOLUME": 28063.57,
      "DIFFERENCE": 12.55
    },
    {
      "DIP": 203,
      "VOLUME": 28187.87,
      "DIFFERENCE": 12.43
    },
    {
      "DIP": 204,
      "VOLUME": 28310.97,
      "DIFFERENCE": 12.31
    },
    {
      "DIP": 205,
      "VOLUME": 28432.84,
      "DIFFERENCE": 12.19
    },
    {
      "DIP": 206,
      "VOLUME": 28553.45,
      "DIFFERENCE": 12.06
    },
    {
      "DIP": 207,
      "VOLUME": 28672.77,
      "DIFFERENCE": 11.8
    },
    {
      "DIP": 208,
      "VOLUME": 28790.77,
      "DIFFERENCE": 11.8
    },
    {
      "DIP": 209,
      "VOLUME": 28907.43,
      "DIFFERENCE": 11.67
    },
    {
      "DIP": 210,
      "VOLUME": 29022.71,
      "DIFFERENCE": 11.53
    },
    {
      "DIP": 211,
      "VOLUME": 29136.57,
      "DIFFERENCE": 11.39
    },
    {
      "DIP": 212,
      "VOLUME": 29248.99,
      "DIFFERENCE": 11.24
    },
    {
      "DIP": 213,
      "VOLUME": 29359.93,
      "DIFFERENCE": 11.09
    },
    {
      "DIP": 214,
      "VOLUME": 29469.35,
      "DIFFERENCE": 10.94
    },
    {
      "DIP": 215,
      "VOLUME": 29577.21,
      "DIFFERENCE": 10.79
    },
    {
      "DIP": 216,
      "VOLUME": 29683.47,
      "DIFFERENCE": 10.63
    },
    {
      "DIP": 217,
      "VOLUME": 29788.1,
      "DIFFERENCE": 10.46
    },
    {
      "DIP": 218,
      "VOLUME": 29891.04,
      "DIFFERENCE": 10.29
    },
    {
      "DIP": 219,
      "VOLUME": 29992.25,
      "DIFFERENCE": 10.12
    },
    {
      "DIP": 220,
      "VOLUME": 30091.69,
      "DIFFERENCE": 9.94
    },
    {
      "DIP": 221,
      "VOLUME": 30189.29,
      "DIFFERENCE": 9.76
    },
    {
      "DIP": 222,
      "VOLUME": 30285.01,
      "DIFFERENCE": 9.57
    },
    {
      "DIP": 223,
      "VOLUME": 30378.8,
      "DIFFERENCE": 9.38
    },
    {
      "DIP": 224,
      "VOLUME": 30470.58,
      "DIFFERENCE": 9.18
    },
    {
      "DIP": 225,
      "VOLUME": 30560.29,
      "DIFFERENCE": 8.97
    },
    {
      "DIP": 226,
      "VOLUME": 30647.87,
      "DIFFERENCE": 8.76
    },
    {
      "DIP": 227,
      "VOLUME": 30733.23,
      "DIFFERENCE": 8.54
    },
    {
      "DIP": 228,
      "VOLUME": 30810.31,
      "DIFFERENCE": 8.31
    },
    {
      "DIP": 229,
      "VOLUME": 30897,
      "DIFFERENCE": 8.07
    },
    {
      "DIP": 230,
      "VOLUME": 30975.22,
      "DIFFERENCE": 7.82
    },
    {
      "DIP": 231,
      "VOLUME": 31050.85,
      "DIFFERENCE": 7.56
    },
    {
      "DIP": 232,
      "VOLUME": 31123.79,
      "DIFFERENCE": 7.29
    },
    {
      "DIP": 233,
      "VOLUME": 31193.9,
      "DIFFERENCE": 7.01
    },
    {
      "DIP": 234,
      "VOLUME": 31261.03,
      "DIFFERENCE": 6.71
    },
    {
      "DIP": 235,
      "VOLUME": 31325.02,
      "DIFFERENCE": 6.4
    },
    {
      "DIP": 236,
      "VOLUME": 31385.68,
      "DIFFERENCE": 6.07
    },
    {
      "DIP": 237,
      "VOLUME": 31442.78,
      "DIFFERENCE": 5.71
    },
    {
      "DIP": 238,
      "VOLUME": 31496.04,
      "DIFFERENCE": 5.33
    },
    {
      "DIP": 239,
      "VOLUME": 31545.13,
      "DIFFERENCE": 4.91
    },
    {
      "DIP": 240,
      "VOLUME": 31589.62,
      "DIFFERENCE": 4.45
    },
    {
      "DIP": 241,
      "VOLUME": 31628.93,
      "DIFFERENCE": 3.93
    },
    {
      "DIP": 242,
      "VOLUME": 31662.19,
      "DIFFERENCE": 3.33
    },
    {
      "DIP": 243,
      "VOLUME": 31687.93,
      "DIFFERENCE": 2.57
    },
    {
      "DIP": 244,
      "VOLUME": 31702.03,
      "DIFFERENCE": 1.41
    }
  ]
}
module.exports =  convertedData
